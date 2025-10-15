# 🚀 Ranjan's Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. This portfolio showcases professional skills, projects, and provides a platform for potential clients to get in touch.

## ✨ Features

- **Modern Design**: Clean, professional, and responsive design
- **Interactive Components**: Smooth animations and hover effects
- **Mobile-First**: Fully responsive design that works on all devices
- **SEO Optimized**: Proper meta tags and Open Graph support
- **Fast Performance**: Built with Next.js 15 for optimal performance
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Geist Sans & Geist Mono
- **Icons**: Custom SVG icons
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
my-portfolio/
├── app/
│   ├── components/          # Reusable React components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Hero.tsx        # Hero section with animated text
│   │   ├── About.tsx       # About section
│   │   ├── Skills.tsx      # Skills and technologies
│   │   ├── Projects.tsx    # Projects showcase
│   │   ├── Contact.tsx     # Contact form and info
│   │   └── Footer.tsx      # Footer with links
│   ├── data/               # Data files
│   │   ├── projects.ts     # Project data
│   │   └── skills.ts       # Skills data
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── public/                 # Static assets
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information

1. **Update your details in components:**
   - `app/components/Hero.tsx` - Change name and title
   - `app/components/About.tsx` - Update bio and stats
   - `app/components/Contact.tsx` - Update contact information

2. **Update metadata in `app/layout.tsx`:**
   ```typescript
   export const metadata: Metadata = {
     title: "Your Name - Full Stack Developer Portfolio",
     description: "Your portfolio description",
     // ... other meta tags
   };
   ```

### Projects

Edit `app/data/projects.ts` to add your projects:

```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: 'Your Project',
    description: 'Project description',
    technologies: ['React', 'Node.js'],
    category: 'fullstack',
    liveUrl: 'https://your-project.com',
    githubUrl: 'https://github.com/your-username/project',
    featured: true
  }
];
```

### Skills

Update `app/data/skills.ts` with your skills:

```typescript
export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', level: 95, category: 'frontend' },
      // Add more skills...
    ]
  }
];
```

### Styling

- **Colors**: Update Tailwind classes throughout components
- **Fonts**: Modify font imports in `app/layout.tsx`
- **Custom CSS**: Add custom styles in `app/globals.css`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

- **Netlify**: Connect your GitHub repository
- **AWS Amplify**: Deploy with AWS
- **Railway**: Simple deployment platform

## 📄 Sections

### 🏠 Hero Section
- Animated typing effect
- Call-to-action buttons
- Professional introduction

### 👨‍💻 About Section
- Personal bio
- Professional statistics
- Skills overview

### 🛠️ Skills Section
- Categorized skills with progress bars
- Technology badges
- Additional skills list

### 🚀 Projects Section
- Filterable project grid
- Project details with technologies
- Live demo and GitHub links

### 📞 Contact Section
- Contact form with validation
- Contact information
- Social media links

### 🔗 Footer
- Quick navigation links
- Social media icons
- Copyright information

## 🎯 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for best user experience
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for faster loads

## 🔧 Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Code Quality

- **ESLint**: Code linting and formatting
- **TypeScript**: Type safety and better development experience
- **Prettier**: Code formatting (recommended)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📧 Contact

- **Email**: ranjan@example.com
- **LinkedIn**: [Your LinkedIn Profile]
- **GitHub**: [Your GitHub Profile]

---

⭐ Star this repository if you found it helpful!
