# Sanath Suram - Portfolio

A modern, responsive portfolio website built with React showcasing UI/UX design work and experience.

## Features

- **Modern Dark Theme**: Inspired by contemporary design trends with smooth gradients and animations
- **Responsive Design**: Optimized for all screen sizes from mobile to desktop
- **Interactive Animations**: Smooth transitions and hover effects using Framer Motion
- **Project Showcase**: Detailed case studies and project demonstrations
- **Contact Form**: Functional contact form for potential clients and collaborators
- **Resume Download**: Direct download link for resume/CV

## Tech Stack

- **React 18**: Modern React with hooks and functional components
- **Framer Motion**: Animation library for smooth interactions
- **React Icons**: Comprehensive icon library
- **CSS3**: Custom CSS with CSS Grid and Flexbox
- **React Intersection Observer**: Scroll-triggered animations

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header with scroll effects
│   ├── Hero.js            # Hero section with profile and introduction
│   ├── About.js           # About section with skills and values
│   ├── Projects.js        # Portfolio projects with filtering
│   ├── Experience.js      # Work experience and education timeline
│   ├── Contact.js         # Contact form and social links
│   └── Footer.js          # Footer with links and credits
├── App.js                 # Main app component
├── App.css                # Global styles and utilities
└── index.js               # React app entry point
```

## Design Features

### Dark Theme
- Background: Deep black (#0a0a0a) with layered grays
- Accent: Blue-purple gradient (#3b82f6 to #8b5cf6)
- Typography: Inter font family for modern readability
- Contrast: High contrast ratios for accessibility

### Responsive Breakpoints
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: 480px - 767px
- Small Mobile: < 480px

### Animations
- Scroll-triggered animations using Intersection Observer
- Hover effects on interactive elements
- Smooth page transitions
- Loading states for form submissions

## Content Sections

1. **Hero**: Personal introduction with profile image and key statistics
2. **About**: Skills, expertise, and design philosophy
3. **Projects**: Portfolio showcase with filtering capabilities
4. **Experience**: Professional timeline and achievements
5. **Contact**: Contact form and social media links

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view in browser

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Customization

### Colors
Edit the CSS variables in `src/index.css` to change the color scheme:

```css
:root {
  --bg-primary: #0a0a0a;
  --accent-primary: #3b82f6;
  --accent-secondary: #8b5cf6;
  /* ... other variables */
}
```

### Content
Update the content in each component file:
- Personal information in `Hero.js`
- Skills and experience in `About.js` and `Experience.js`
- Projects in `Projects.js`
- Contact details in `Contact.js`

### Styling
Each component has its own CSS file for easy customization. The design uses:
- CSS Grid and Flexbox for layouts
- CSS custom properties for theming
- Mobile-first responsive design

## Performance Optimizations

- Lazy loading of images
- Optimized bundle size with React 18
- Efficient re-rendering with proper React patterns
- Compressed and minified production build

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Sanath Suram - [sanathsuram@email.com](mailto:sanathsuram@email.com)

Portfolio: [https://sanathsuram.com](https://sanathsuram.com)
