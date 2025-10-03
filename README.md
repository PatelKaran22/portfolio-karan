# Karan Patel - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, featuring a sci-fi/data-analytics themed design with neon accents and glassmorphism effects.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop
- **Smooth Scrolling**: Active section highlighting with smooth scroll navigation
- **Animated Grid Background**: Subtle animated grid pattern for sci-fi aesthetic
- **Glassmorphism Cards**: Semi-transparent cards with backdrop blur effects
- **Neon Glow Effects**: Cyan and violet neon glows on interactive elements
- **Theme Support**: Three built-in themes (NeoAnalyst, CoolSlate, CleanQuartz)

## 🎨 Customization

### Changing Theme

Open `/src/data/site.ts` and modify the `THEME` constant:

```typescript
export const THEME: Theme = "NeoAnalyst"; // Change to "CoolSlate" or "CleanQuartz"
```

**Available Themes:**
- `NeoAnalyst` (default): Dark neon theme with cyan/violet accents
- `CoolSlate`: Neutral dark theme with indigo accent
- `CleanQuartz`: Light mode with cyan/violet accents

### Editing Content

All content is centralized in `/src/data/site.ts`. Update the `siteConfig` object to modify:

- **Personal Info**: Name, role titles, summary, status
- **Links**: Email, GitHub, LinkedIn, resume URL
- **Skills**: Four skill categories with tags
- **Education**: Degree info, coursework, GPA
- **Experience**: Job roles, companies, dates, tech stacks, achievements
- **Projects**: Project details, features, tech stacks, links

### Updating Profile Image

Replace the image at `/src/assets/profile.jpg` with your own photo (recommended: 512x512px square format).

### Color Customization

To customize colors, edit `/src/index.css`:

```css
:root {
  --primary: 188 100% 60%;     /* Cyan accent */
  --secondary: 263 70% 65%;    /* Violet accent */
  --background: 222 47% 4%;    /* Dark background */
  /* ... other color tokens ... */
}
```

All colors use HSL format for consistency.

## 🛠️ Development

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:8080`

### Build for Production

```bash
npm run build
```

The production build will be in the `/dist` directory.

## 📁 Project Structure

```
├── src/
│   ├── assets/          # Images and static assets
│   ├── components/      # React components
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── data/
│   │   └── site.ts      # Content configuration
│   ├── pages/
│   │   └── Index.tsx    # Main page
│   ├── index.css        # Global styles & design system
│   └── App.tsx
├── tailwind.config.ts   # Tailwind configuration
└── public/
    └── KaranPatel_Resume.pdf
```

## 🎯 Key Technologies

- **React 18**: UI framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first styling
- **Vite**: Build tool and dev server
- **Lucide React**: Icon library
- **React Router**: Navigation

## 📱 Responsive Breakpoints

- Mobile: < 768px (single column)
- Tablet: 768px - 1024px (two columns where applicable)
- Desktop: > 1024px (full layout with three-column project grid)

## 🎨 Design System

### Typography
- **Headings**: Space Grotesk
- **Body**: Inter

### Effects
- **Glassmorphism**: 90% opacity with backdrop blur
- **Neon Glow**: Drop shadow effects on hover/focus
- **Animations**: Fade-in, slide-in, pulse-glow

### Border Radius
- Cards: `rounded-2xl` (1rem)
- Pills/Tags: `rounded-full`

## 📄 License

MIT License - feel free to use this template for your own portfolio.

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use!

---

Built with ❤️ using React & Tailwind CSS
