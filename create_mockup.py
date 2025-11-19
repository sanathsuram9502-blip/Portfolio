#!/usr/bin/env python3
"""
DNV Healthcare Device Mockup Generator
Creates a professional mockup showing the dashboard on laptop and phone
"""

try:
    from PIL import Image, ImageDraw, ImageFont
    import os
except ImportError:
    print("PIL/Pillow is required. Install with: pip install Pillow")
    exit(1)

def create_gradient_background(width, height, color1=(102, 126, 234), color2=(118, 75, 162)):
    """Create a gradient background"""
    base = Image.new('RGB', (width, height), color1)
    draw = ImageDraw.Draw(base)

    for i in range(height):
        ratio = i / height
        r = int(color1[0] * (1 - ratio) + color2[0] * ratio)
        g = int(color1[1] * (1 - ratio) + color2[1] * ratio)
        b = int(color1[2] * (1 - ratio) + color2[2] * ratio)
        draw.line([(0, i), (width, i)], fill=(r, g, b))

    return base

def draw_rounded_rectangle(draw, xy, radius, fill, outline=None, width=1):
    """Draw a rounded rectangle"""
    x0, y0, x1, y1 = xy
    draw.rectangle([x0 + radius, y0, x1 - radius, y1], fill=fill, outline=outline, width=width)
    draw.rectangle([x0, y0 + radius, x1, y1 - radius], fill=fill, outline=outline, width=width)
    draw.pieslice([x0, y0, x0 + radius * 2, y0 + radius * 2], 180, 270, fill=fill, outline=outline)
    draw.pieslice([x1 - radius * 2, y0, x1, y0 + radius * 2], 270, 360, fill=fill, outline=outline)
    draw.pieslice([x0, y1 - radius * 2, x0 + radius * 2, y1], 90, 180, fill=fill, outline=outline)
    draw.pieslice([x1 - radius * 2, y1 - radius * 2, x1, y1], 0, 90, fill=fill, outline=outline)

def create_laptop_frame(width, height):
    """Create a laptop frame"""
    laptop = Image.new('RGBA', (width, height), (0, 0, 0, 0))
    draw = ImageDraw.Draw(laptop)

    screen_height = int(height * 0.7)
    base_height = int(height * 0.3)

    # Screen bezel (dark gray/black)
    draw_rounded_rectangle(draw, (0, 0, width, screen_height), 12, fill=(26, 26, 26))

    # Screen area (will be replaced with actual content)
    padding = 20
    draw_rounded_rectangle(draw,
        (padding, padding, width - padding, screen_height - padding),
        8,
        fill=(255, 255, 255, 0))  # Transparent for screen content

    # Laptop base
    base_points = [
        (0, screen_height - 10),
        (width, screen_height - 10),
        (width - 10, height),
        (10, height)
    ]
    draw.polygon(base_points, fill=(42, 42, 42))

    # Keyboard area
    draw_rounded_rectangle(draw,
        (40, screen_height + 5, width - 40, height - 20),
        4,
        fill=(26, 26, 26))

    return laptop, (padding, padding, width - padding, screen_height - padding)

def create_phone_frame(width, height):
    """Create a phone frame"""
    phone = Image.new('RGBA', (width, height), (0, 0, 0, 0))
    draw = ImageDraw.Draw(phone)

    # Phone body
    draw_rounded_rectangle(draw, (0, 0, width, height), 30, fill=(26, 26, 26))

    # Screen area
    padding = 12
    notch_height = 25
    screen_area = (padding, padding + notch_height, width - padding, height - padding)
    draw_rounded_rectangle(draw, screen_area, 18, fill=(255, 255, 255, 0))

    # Notch
    notch_width = 100
    notch_x = (width - notch_width) // 2
    draw_rounded_rectangle(draw,
        (notch_x, 8, notch_x + notch_width, 28),
        10,
        fill=(26, 26, 26))

    # Camera in notch
    camera_x = notch_x + 25
    camera_y = 18
    draw.ellipse([camera_x - 4, camera_y - 4, camera_x + 4, camera_y + 4], fill=(51, 51, 51))

    return phone, screen_area

def create_mockup(laptop_image_path, phone_image_path, output_path):
    """Create the complete mockup"""
    # Canvas size
    canvas_width = 1920
    canvas_height = 1080

    # Create gradient background
    mockup = create_gradient_background(canvas_width, canvas_height)

    # Load screen images
    try:
        laptop_screen = Image.open(laptop_image_path)
        phone_screen = Image.open(phone_image_path)
    except Exception as e:
        print(f"Error loading images: {e}")
        return False

    # Create device frames
    laptop_width, laptop_height = 1100, 650
    laptop_frame, laptop_screen_area = create_laptop_frame(laptop_width, laptop_height)

    phone_width, phone_height = 400, 750
    phone_frame, phone_screen_area = create_phone_frame(phone_width, phone_height)

    # Resize and paste laptop screen
    lx0, ly0, lx1, ly1 = laptop_screen_area
    screen_w, screen_h = lx1 - lx0, ly1 - ly0
    laptop_screen_resized = laptop_screen.resize((screen_w, screen_h), Image.Resampling.LANCZOS)
    laptop_composite = Image.new('RGBA', (laptop_width, laptop_height), (0, 0, 0, 0))
    laptop_composite.paste(laptop_screen_resized, (lx0, ly0))
    laptop_composite = Image.alpha_composite(laptop_composite, laptop_frame)

    # Resize and paste phone screen
    px0, py0, px1, py1 = phone_screen_area
    screen_w, screen_h = px1 - px0, py1 - py0
    phone_screen_resized = phone_screen.resize((screen_w, screen_h), Image.Resampling.LANCZOS)
    phone_composite = Image.new('RGBA', (phone_width, phone_height), (0, 0, 0, 0))
    phone_composite.paste(phone_screen_resized, (px0, py0))
    phone_composite = Image.alpha_composite(phone_composite, phone_frame)

    # Add shadow effect
    from PIL import ImageFilter
    laptop_shadow = Image.new('RGBA', laptop_composite.size, (0, 0, 0, 0))
    laptop_shadow_draw = ImageDraw.Draw(laptop_shadow)
    laptop_shadow_draw.rectangle([10, 10, laptop_width - 10, laptop_height - 10], fill=(0, 0, 0, 80))
    laptop_shadow = laptop_shadow.filter(ImageFilter.GaussianBlur(20))

    phone_shadow = Image.new('RGBA', phone_composite.size, (0, 0, 0, 0))
    phone_shadow_draw = ImageDraw.Draw(phone_shadow)
    phone_shadow_draw.rectangle([10, 10, phone_width - 10, phone_height - 10], fill=(0, 0, 0, 80))
    phone_shadow = phone_shadow.filter(ImageFilter.GaussianBlur(15))

    # Paste devices onto mockup
    laptop_x, laptop_y = 100, 200
    phone_x, phone_y = 1350, 250

    # Paste shadows first
    mockup.paste(laptop_shadow, (laptop_x + 5, laptop_y + 15), laptop_shadow)
    mockup.paste(phone_shadow, (phone_x + 5, phone_y + 12), phone_shadow)

    # Paste devices
    mockup.paste(laptop_composite, (laptop_x, laptop_y), laptop_composite)
    mockup.paste(phone_composite, (phone_x, phone_y), phone_composite)

    # Add text overlay
    draw = ImageDraw.Draw(mockup)

    try:
        title_font = ImageFont.truetype("arial.ttf", 48)
        subtitle_font = ImageFont.truetype("arial.ttf", 28)
    except:
        # Fallback to default font
        title_font = ImageFont.load_default()
        subtitle_font = ImageFont.load_default()

    # Title text
    draw.text((100, 100), "DNV Healthcare", font=title_font, fill=(255, 255, 255, 242))
    draw.text((100, 160), "Accreditation Management System", font=subtitle_font, fill=(255, 255, 255, 204))

    # Save mockup
    mockup.save(output_path, 'PNG', quality=95)
    print(f"✅ Mockup created successfully: {output_path}")
    return True

def main():
    # Configuration
    images_dir = "public/images/medlaunch/"

    # Default images
    laptop_image = os.path.join(images_dir, "analysis.png")
    phone_image = os.path.join(images_dir, "Login-Hospital Login.png")
    output_image = "public/images/medlaunch/dnv-mockup.png"

    # Check if images exist
    if not os.path.exists(laptop_image):
        print(f"❌ Laptop image not found: {laptop_image}")
        print("Available images in directory:")
        if os.path.exists(images_dir):
            for f in os.listdir(images_dir):
                if f.endswith(('.png', '.jpg', '.jpeg')):
                    print(f"  - {f}")
        return

    if not os.path.exists(phone_image):
        print(f"❌ Phone image not found: {phone_image}")
        return

    # Create mockup
    print("🎨 Creating DNV Healthcare device mockup...")
    success = create_mockup(laptop_image, phone_image, output_image)

    if success:
        print(f"\n📱 Laptop: {os.path.basename(laptop_image)}")
        print(f"💻 Phone: {os.path.basename(phone_image)}")
        print(f"💾 Output: {output_image}")

if __name__ == "__main__":
    main()
