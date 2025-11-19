// DNV Healthcare Device Mockup Generator (Node.js)
// This script creates a professional mockup showing the dashboard on laptop and phone

const fs = require('fs');
const path = require('path');

// Create SVG mockup (can be converted to PNG using online tools or Sharp library)
function createSVGMockup() {
    const width = 1920;
    const height = 1080;

    // Define gradients and colors
    const gradient = `
        <defs>
            <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
            </linearGradient>

            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="15"/>
                <feOffset dx="0" dy="12" result="offsetblur"/>
                <feComponentTransfer>
                    <feFuncA type="linear" slope="0.5"/>
                </feComponentTransfer>
                <feMerge>
                    <feMergeNode/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>

            <clipPath id="laptopScreen">
                <rect x="120" y="220" width="1060" height="590" rx="8"/>
            </clipPath>

            <clipPath id="phoneScreen">
                <rect x="1362" y="287" width="376" height="701" rx="18"/>
            </clipPath>
        </defs>
    `;

    // Laptop frame
    const laptop = `
        <g filter="url(#shadow)">
            <!-- Laptop screen bezel -->
            <rect x="100" y="200" width="1100" height="630" rx="12" fill="#1a1a1a"/>

            <!-- Laptop screen (placeholder) -->
            <rect x="120" y="220" width="1060" height="590" rx="8" fill="#ffffff"/>

            <!-- Screen image placeholder -->
            <image href="./public/images/medlaunch/analysis.png"
                   x="120" y="220" width="1060" height="590"
                   clip-path="url(#laptopScreen)"
                   preserveAspectRatio="xMidYMid slice"/>

            <!-- Laptop base -->
            <polygon points="70,820 1230,820 1220,920 80,920" fill="#2a2a2a"/>

            <!-- Keyboard area -->
            <rect x="140" y="835" width="1020" height="70" rx="4" fill="#1a1a1a"/>

            <!-- Trackpad -->
            <rect x="580" y="845" width="120" height="50" rx="6" fill="#333333"/>
        </g>
    `;

    // Phone frame
    const phone = `
        <g filter="url(#shadow)">
            <!-- Phone body -->
            <rect x="1350" y="250" width="400" height="750" rx="30" fill="#1a1a1a"/>

            <!-- Phone screen -->
            <rect x="1362" y="287" width="376" height="701" rx="18" fill="#ffffff"/>

            <!-- Screen image placeholder -->
            <image href="./public/images/medlaunch/Login-Hospital Login.png"
                   x="1362" y="287" width="376" height="701"
                   clip-path="url(#phoneScreen)"
                   preserveAspectRatio="xMidYMid slice"/>

            <!-- Notch -->
            <rect x="1500" y="258" width="100" height="20" rx="10" fill="#1a1a1a"/>

            <!-- Camera -->
            <circle cx="1525" cy="268" r="4" fill="#333333"/>
        </g>
    `;

    // Text overlay
    const text = `
        <text x="100" y="150" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="rgba(255,255,255,0.95)">
            DNV Healthcare
        </text>
        <text x="100" y="190" font-family="Arial, sans-serif" font-size="28" fill="rgba(255,255,255,0.8)">
            Accreditation Management System
        </text>
    `;

    // Complete SVG
    const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Background gradient -->
    <rect width="${width}" height="${height}" fill="url(#bgGradient)"/>

    ${gradient}
    ${laptop}
    ${phone}
    ${text}
</svg>`;

    return svg;
}

// Main execution
console.log('🎨 Creating DNV Healthcare device mockup...\n');

const svg = createSVGMockup();
const outputPath = path.join(__dirname, 'public', 'images', 'medlaunch', 'dnv-mockup.svg');

// Ensure directory exists
const dir = path.dirname(outputPath);
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

// Write SVG file
fs.writeFileSync(outputPath, svg);

console.log('✅ SVG mockup created successfully!');
console.log(`📁 Output: ${outputPath}\n`);
console.log('📝 To convert to PNG:');
console.log('   1. Open the SVG file in a browser');
console.log('   2. Take a screenshot or use browser dev tools');
console.log('   3. Or use an online converter like: https://cloudconvert.com/svg-to-png');
console.log('   4. Or install Sharp: npm install sharp');
console.log('\n💡 Alternative: Open create-mockup.html in your browser for an interactive mockup generator!');
