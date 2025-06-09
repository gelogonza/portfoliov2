# Portfolio V2

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features an animated gradient background, smooth scrolling navigation, and elegant animations powered by GSAP.

## Features

- **Responsive Design**: Optimized for all device sizes from mobile to desktop
- **Animated Gradient Background**: Beautiful black-to-red gradient with smooth animation
- **Smooth Scrolling Navigation**: Sticky navbar with smooth scroll to sections
- **Modern UI/UX**: Clean, minimalist design with elegant transitions
- **GSAP Animations**: Smooth entrance animations and interactive elements
- **TypeScript**: Full type safety and better developer experience
- **Performance Optimized**: Fast loading and smooth animations

## Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: GSAP (GreenSock Animation Platform)
- **Build Tool**: Vite
- **Deployment**: Vercel
- **Font**: Satoshi 

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/portfolio-v2.git
   cd portfolio-v2
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**

   Navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Customization

### Gradient Colors

The background gradient uses these colors:

- `#000000` - Pure black
- `#8B0000` - Dark red
- `#b90f0a` - Custom red (center)

To modify, edit the `.gradient-bg` class in `src/index.css`:

```css
.gradient-bg {
  background: linear-gradient(270deg, 
    #000000 0%, 
    #8B0000 25%,
    #b90f0a 50%, 
    #8B0000 75%,
    #000000 100%);
}
```

### Content Updates

- **Personal Info**: Update `src/components/Hero.tsx` and `src/components/About.tsx`
- **Experience**: Modify `src/components/Experience.tsx`
- **Skills**: Edit `src/components/Skills.tsx`
- **Projects**: Update `src/components/Projects.tsx`

## Project Structure

```text
portfolio-v2/
├── public/
│   ├── angelo.jpeg          # Profile image
│   └── resume.pdf          # Resume file
├── src/
│   ├── components/
│   │   ├── Hero.tsx        # Hero section
│   │   ├── About.tsx       # About section
│   │   ├── Experience.tsx  # Experience & certifications
│   │   ├── Skills.tsx      # Skills showcase
│   │   ├── Projects.tsx    # Projects portfolio
│   │   ├── Navbar.tsx      # Navigation component
│   │   └── Footer.tsx      # Footer component
│   ├── App.tsx             # Main app component
│   ├── index.css           # Global styles & animations
│   └── main.tsx            # App entry point
├── tailwind.config.js      # Tailwind configuration
├── vite.config.ts          # Vite configuration
└── vercel.json             # Vercel deployment config
```

## Deployment

### Vercel (Recommended)

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Connect your GitHub repository to Vercel
   - Configure build settings (auto-detected)
   - Deploy

### Manual Build

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Sections Overview

### Hero Section

- Profile image with hover effects
- Name and title
- Social media links (GitHub, LinkedIn)
- Call-to-action button

### About Section

- Personal introduction
- Technology stack
- Beyond coding interests
- Professional aspirations

### Experience Section

- Certifications and achievements
- Skills associated with each certification
- Professional timeline

### Skills Section

- Interactive skill cards
- Technology icons and names
- Hover animations

### Projects Section

- Project showcases
- Technology stacks used
- Links to live demos and repositories

## Design Features

- **Animated Gradient**: Smooth left-to-right gradient animation (15s cycle)
- **Glass Morphism**: Subtle backdrop blur effects
- **Smooth Transitions**: 300ms duration transitions throughout
- **Responsive Typography**: Scales from mobile to desktop
- **Interactive Elements**: Hover states and micro-animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
