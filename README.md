# The10YEC Ventures - House of Wellness

> **Yoga and Entrepreneurship for Excellence**  
> A comprehensive wellness ecosystem integrating six ventures through our SOCH methodology

## 🌟 Project Overview

The10YEC Ventures is a House of Wellness that combines ancient wisdom with modern innovation to create transformative experiences for both personal and professional growth. Our integrated approach serves entrepreneurs, wellness enthusiasts, and community members seeking holistic development.

### Target Launch: August 15, 2025 (MVL - Minimum Viable Learning)

## 🏗️ Project Structure

```
src/
├── components/           # Shared components
│   ├── Header.tsx        # Main navigation
│   ├── Footer.tsx        # Site footer
│   └── VentureCard.tsx   # Reusable venture cards
├── pages/
│   ├── Home.tsx          # Landing page
│   ├── About.tsx         # SOCH methodology & mission
│   └── ventures/         # Individual venture pages
│       ├── Yoga.tsx
│       ├── WellnessSpa.tsx
│       ├── CafeNutrition.tsx
│       ├── DanceMusicArt.tsx
│       ├── SportsRecreation.tsx
│       └── Accelerator.tsx
└── assets/               # Images and static files
```

## 🎯 The Six Ventures

1. **Yoga & Meditation** - Mind-body practices for entrepreneurs
2. **Wellness Spa** - Holistic treatments and natural healing
3. **Café & Nutrition** - Organic foods and nutritional guidance
4. **Dance, Music & Art** - Creative expression for wellness
5. **Sports & Recreation** - Physical fitness and team building
6. **Startup Accelerator** - Business development with wellness integration

## 🔄 SOCH Methodology

Our core framework guides every venture:

- **S**eeking - Continuous exploration and learning
- **O**bserving - Mindful awareness and pattern recognition  
- **C**ontemplating - Deep reflection and analysis
- **H**arnessing - Applying wisdom for transformation

## 🚀 Development Setup

### Prerequisites
- Node.js 16+ and npm
- Git for version control

### Quick Start

```bash
# Clone the repository
git clone <repository-url>
cd yec-house-of-wellness

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:8080
```

## 🎨 Design System

### Color Palette
- **Primary**: Sage Green (#8DB08F) - Represents growth and wellness
- **Secondary**: Warm Beige (#E8DCC6) - Creates warmth and comfort
- **Accent**: Soft Lavender (#D4C5E8) - Adds tranquility and balance

### Typography
- **Headings**: Lora (serif) - Elegant and sophisticated
- **Body**: Inter (sans-serif) - Clean and readable

### Key Features
- Responsive design for all devices
- Semantic HTML for accessibility
- SEO optimized with proper meta tags
- Fast loading with optimized images

## 👥 Team Collaboration Guidelines

### Branch Strategy
```bash
main                    # Production-ready code
├── develop            # Integration branch
├── feature/yoga-page  # Feature branches
├── feature/spa-page   # Descriptive names
└── hotfix/nav-fix     # Bug fixes
```

### Contribution Workflow

1. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes**
   - Follow existing code patterns
   - Update components in `/components` for reusable elements
   - Add new pages in appropriate `/pages` directories

3. **Test Locally**
   ```bash
   npm run dev
   # Verify changes work correctly
   ```

4. **Commit & Push**
   ```bash
   git add .
   git commit -m "feat: add wellness spa booking component"
   git push origin feature/your-feature-name
   ```

5. **Create Pull Request**
   - Describe changes clearly
   - Reference any related issues
   - Request review from team members

### Code Standards

- **Components**: Use TypeScript and functional components
- **Styling**: Utilize the design system in `index.css` and `tailwind.config.ts`
- **File Naming**: PascalCase for components, kebab-case for assets
- **Commits**: Use conventional commits (feat:, fix:, docs:, style:)

## 📦 Technology Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui components
- **Routing**: React Router for SPA navigation
- **State**: React Query for server state management

## 🚀 Deployment

### Development
```bash
npm run dev          # Start local server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Production Deployment
- The project can be deployed to Vercel, Netlify, or any static hosting
- Build artifacts are generated in the `dist/` folder
- Ensure environment variables are configured in hosting platform

## 📋 Current Status & Roadmap

### ✅ Completed (Phase 1)
- [x] Core design system implementation
- [x] Responsive navigation and layout
- [x] Landing page with hero section
- [x] About page with SOCH methodology
- [x] All six venture pages with detailed content
- [x] SEO optimization and meta tags
- [x] Team collaboration documentation

### 🎯 Next Steps (Phase 2)
- [ ] Contact forms and booking systems
- [ ] Content management integration
- [ ] Payment processing for services
- [ ] User authentication system
- [ ] Blog/resources section
- [ ] Analytics and tracking implementation

### 🚀 Future Enhancements (Phase 3)
- [ ] Mobile app development
- [ ] Advanced booking calendar
- [ ] Community forum features
- [ ] Integration with wellness tracking apps
- [ ] Multi-language support

## 🤝 Contributing

We welcome contributions from all team members! Please:

1. Read through this README thoroughly
2. Follow the collaboration guidelines above
3. Ask questions in team channels when needed
4. Keep the wellness and entrepreneurship mission in mind
5. Test changes thoroughly before submitting PRs

## 📞 Support & Questions

- **Project Lead**: [Team Lead Name]
- **Technical Questions**: [Tech Lead Contact]
- **Design Questions**: [Design Lead Contact]
- **Content Questions**: [Content Lead Contact]

---

**Built with ❤️ by YEC Youth**  
*Integrating Yoga and Entrepreneurship for Excellence*
