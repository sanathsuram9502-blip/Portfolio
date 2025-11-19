# DNV Healthcare Device Mockup Generator

## Created Files

Three mockup generation tools have been created for you:

1. **`create-mockup.html`** - Interactive HTML-based mockup generator (RECOMMENDED)
2. **`create-mockup.js`** - Node.js script that generates SVG mockup
3. **`create_mockup.py`** - Python script (requires Pillow library)

## How to Use

### Option 1: Interactive HTML Generator (Easiest!) ✨

1. Open `create-mockup.html` in your web browser
2. Select images for laptop and phone screens from dropdowns:
   - **Laptop options**: Analytics Dashboard, Hospital Profile, Hospital Search Map, etc.
   - **Phone options**: Hospital Login, Quote Request, New or Existing, etc.
3. Choose a background gradient color
4. Click "Generate Mockup" to see preview
5. Click "💾 Download Mockup" to save as PNG

**Features:**
- Live preview
- Multiple image combinations
- Different background gradients
- Instant PNG download
- No installation required!

### Option 2: Use the Generated SVG

An SVG mockup has been created at:
```
public/images/medlaunch/dnv-mockup.svg
```

**To convert SVG to PNG:**

1. **Browser method** (Quick):
   - Open `dnv-mockup.svg` in Chrome/Firefox
   - Right-click → "Save image as" or take screenshot
   - Save as `dnv-mockup.png`

2. **Online converter**:
   - Visit https://cloudconvert.com/svg-to-png
   - Upload `dnv-mockup.svg`
   - Download the PNG

3. **Using Sharp** (if you have Node.js):
   ```bash
   npm install sharp
   node -e "const sharp = require('sharp'); sharp('public/images/medlaunch/dnv-mockup.svg').png().toFile('public/images/medlaunch/dnv-mockup.png')"
   ```

### Option 3: Python Script

If you have Python and Pillow installed:

```bash
# Install Pillow if needed
pip install Pillow

# Run the script
python create_mockup.py
```

This will create `public/images/medlaunch/dnv-mockup.png` directly.

## Customization

### Change Images

**HTML Generator:**
- Use the dropdown menus to select different combinations

**JavaScript/Python:**
- Edit the file paths in the respective scripts:
  ```javascript
  // create-mockup.js
  const laptopImage = './public/images/medlaunch/YOUR_IMAGE.png';
  const phoneImage = './public/images/medlaunch/YOUR_IMAGE.png';
  ```

### Change Colors

**HTML Generator:**
- Select from Purple, Blue, Teal, or Orange gradients

**JavaScript:**
- Modify the gradient definition in `create-mockup.js`:
  ```javascript
  <stop offset="0%" style="stop-color:#YOUR_COLOR"/>
  <stop offset="100%" style="stop-color:#YOUR_COLOR"/>
  ```

## Available Images

Current images in `public/images/medlaunch/`:
- `analysis.png` - Analytics Dashboard ⭐ (Current laptop screen)
- `Hospital Profile - Organization Information.png`
- `Hospital Search Result - Map View.png`
- `User Management.png`
- `Initial Page.png`
- `Login-Hospital Login.png` ⭐ (Current phone screen)
- `New DNV Quote Request.png`
- `New or Existing.png`

## Using the Mockup in Your Portfolio

Once you have the PNG mockup:

1. Save it as: `public/images/medlaunch/dnv-mockup.png`

2. Update `src/components/Projects.js`:
   ```javascript
   {
     id: 1,
     title: 'DNV & Medlaunch Accreditation',
     // ... other props ...
     image: baseImageUrl + '/medlaunch/dnv-mockup.png',  // ← Update this
   }
   ```

3. The mockup will now appear as the project card thumbnail!

## Tips

- Use the HTML generator for best results - it's the easiest!
- Choose contrasting images (e.g., dashboard on laptop, login on phone)
- The purple gradient works well with healthcare themes
- Mockup dimensions: 1920x1080px (Full HD)

## Troubleshooting

**Images not loading in HTML generator?**
- Make sure the HTML file can access the images folder
- Check browser console for errors
- Try different images from the dropdown

**SVG not displaying properly?**
- Open in Chrome or Firefox (best compatibility)
- Check that image paths are correct

**Need different dimensions?**
- Edit the `width` and `height` variables in the scripts
- Keep aspect ratio 16:9 for best results

---

Happy mockup creating! 🎨✨
