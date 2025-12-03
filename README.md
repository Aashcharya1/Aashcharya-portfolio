# 💼 Aashcharya Gorakh - Portfolio Website

<div align="center">

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.3.4-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.4-38B2AC?logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/Framer_Motion-12.17.1-0055FF?logo=framer&logoColor=white)

A modern, responsive portfolio website showcasing my work as a Software Developer & Competitive Programmer. Built with React, Vite, and TailwindCSS, featuring smooth animations, dark mode support, and real-time LeetCode submission tracking.

[🌐 Live Demo](https://your-portfolio-url.vercel.app) • [📧 Contact](mailto:aashcharyagorakh@gmail.com) • [💼 LinkedIn](https://www.linkedin.com/in/aashcharya-gorakh-a764a2287/)

</div>

---

## ✨ Features

### 🎨 **Design & User Experience**
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Dark Mode Support**: Automatic theme detection with manual toggle
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion for engaging interactions
- **Star Field Background**: Animated starfield for visual appeal

### 📊 **Portfolio Sections**
- **Hero Section**: Dynamic code snippet animation with competitive programming stats
- **About Me**: Multi-tab interface showcasing personal, professional, and approach perspectives
- **Experience**: Detailed work experience with technologies and achievements
- **Skills**: Categorized skill showcase with proficiency levels and icons
- **Projects**: Featured projects with categories, tech stacks, and live demos
- **Achievements**: Competitive programming highlights and certificates
- **LeetCode Heatmap**: Real-time submission activity tracking with instant refresh
- **Coding Profiles**: Links to LeetCode, Codeforces, and GeeksforGeeks
- **Contact Form**: Functional contact form with EmailJS integration

### 🚀 **Technical Features**
- **Real-time Updates**: LeetCode submission heatmap updates instantly
- **Email Integration**: Contact form sends notifications via EmailJS
- **SEO Optimized**: Comprehensive meta tags and structured data
- **Fast Loading**: Optimized bundle size and lazy loading
- **Accessible**: WCAG compliant with semantic HTML

---

## 🛠️ Tech Stack

### **Core Technologies**
- **React 18.3.1** - UI library
- **Vite 5.3.4** - Build tool and dev server
- **React Router DOM 7.5.1** - Client-side routing
- **TailwindCSS 4.1.4** - Utility-first CSS framework

### **UI & Animation**
- **Framer Motion 12.17.1** - Animation library
- **Lucide React** - Icon library
- **Radix UI** - Accessible component primitives
- **React Icons 5.5.0** - Additional icons

### **Utilities**
- **EmailJS** - Email service integration
- **next-themes** - Theme management
- **clsx & tailwind-merge** - Conditional class utilities
- **class-variance-authority** - Component variants

### **Development Tools**
- **ESLint** - Code linting
- **Vercel Analytics** - Analytics integration

---

## 📁 Project Structure

```
React-Portfolio/
├── client/
│   ├── public/
│   │   ├── Aashcharya.png              # Profile image
│   │   ├── logo.png                    # Favicon
│   │   ├── Resume.pdf                  # Resume file
│   │   ├── projects/                   # Project images
│   │   └── [certificates]              # Achievement certificates
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── AboutSection.jsx        # About me section
│   │   │   ├── AchievementsSection.jsx # Competitive programming achievements
│   │   │   ├── ContactSection.jsx      # Contact form
│   │   │   ├── ExperienceSection.jsx   # Work experience
│   │   │   ├── Footer.jsx              # Footer component
│   │   │   ├── HeroSection.jsx         # Hero section with stats
│   │   │   ├── LeetCodeHeatmap.jsx     # LeetCode submission heatmap
│   │   │   ├── Navbar.jsx              # Navigation bar
│   │   │   ├── ProfilesSection.jsx     # Coding profiles links
│   │   │   ├── ProjectsSection.jsx     # Projects showcase
│   │   │   ├── SkillsSection.jsx       # Skills with categories
│   │   │   ├── StarBackground.jsx      # Animated background
│   │   │   ├── WelcomeScreen.jsx       # Loading screen
│   │   │   └── ui/                     # Reusable UI components
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx                # Main home page
│   │   │   └── NotFound.jsx            # 404 page
│   │   │
│   │   ├── hooks/
│   │   │   └── use-toast.js            # Toast notification hook
│   │   │
│   │   ├── lib/
│   │   │   └── utils.js                # Utility functions
│   │   │
│   │   ├── App.jsx                     # Root component
│   │   ├── main.jsx                    # Entry point
│   │   └── index.css                   # Global styles
│   │
│   ├── index.html                      # HTML template
│   ├── package.json                    # Dependencies
│   ├── vite.config.js                  # Vite configuration
│   └── vercel.json                     # Vercel deployment config
│
└── README.md                           # This file
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Aashcharya1/React-Portfolio.git
   cd React-Portfolio/client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment variables**
   ```bash
   # Create .env file in the client directory
   touch .env
   ```
   
   Add the following variables (optional - defaults are provided):
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:5173
   ```

---

## ⚙️ Configuration

### EmailJS Setup (Contact Form)

The contact form uses EmailJS to send email notifications. To set up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a service (Gmail, Outlook, etc.)
3. Create an email template with variables:
   - `{{user_name}}`
   - `{{user_email}}`
   - `{{message}}`
4. Add your credentials to `.env` file:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

**Note**: Default values are provided in the code, but it's recommended to use your own EmailJS account.

### Customization

#### Update Personal Information

1. **Hero Section** (`src/components/HeroSection.jsx`):
   - Update name, title, and stats
   - Modify code snippets
   - Adjust achievement numbers

2. **About Section** (`src/components/AboutSection.jsx`):
   - Update bio and personal information
   - Modify achievements and tech stack
   - Update social links

3. **Experience** (`src/components/ExperienceSection.jsx`):
   - Update work experience details
   - Modify achievements and technologies

4. **Projects** (`src/components/ProjectsSection.jsx`):
   - Update project details
   - Add/remove projects
   - Update GitHub and demo URLs

5. **Skills** (`src/components/SkillsSection.jsx`):
   - Update skills and proficiency levels
   - Modify skill categories
   - Update icon URLs

6. **Achievements** (`src/components/AchievementsSection.jsx`):
   - Update competitive programming achievements
   - Add/remove certificates
   - Update certificate file paths

7. **Contact** (`src/components/ContactSection.jsx`):
   - Update contact information
   - Modify EmailJS configuration

#### Update Images

1. Replace `public/Aashcharya.png` with your profile picture
2. Replace `public/logo.png` with your logo
3. Update project images in `public/projects/`
4. Add certificates to `public/` folder

#### Update Resume

1. Replace `public/Resume.pdf` with your resume
2. Update resume filename in `HeroSection.jsx` and `AboutSection.jsx`

#### LeetCode Heatmap

The LeetCode submission heatmap is automatically fetched from:
```
https://leetcard.jacoblin.cool/aashcharya?ext=heatmap
```

To change the username, update `leetcodeUsername` in `src/components/LeetCodeHeatmap.jsx`.

---

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server on `http://localhost:5173` |
| `npm run build` | Build production-ready optimized bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Deploy portfolio"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Set root directory to `client`
   - Add environment variables (if using EmailJS)
   - Click "Deploy"

3. **Configure Custom Domain** (Optional)
   - Go to project settings
   - Add your custom domain
   - Update DNS records as instructed

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder
   - Or connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`

### Other Deployment Options

- **GitHub Pages**: Use GitHub Actions for automated deployment
- **AWS Amplify**: Connect repository for CI/CD deployment
- **Cloudflare Pages**: Fast deployment with global CDN

---

## 🎨 Customization Guide

### Color Scheme

The portfolio uses TailwindCSS with custom theme colors. To modify colors:

1. Update `src/index.css` for custom CSS variables
2. Modify TailwindCSS config for theme colors
3. Update component-level color classes

### Animations

Animations are powered by Framer Motion. To customize:

1. Modify animation variants in component files
2. Adjust transition durations and delays
3. Update motion component props

### Sections Order

To reorder sections, update `src/pages/Home.jsx`:

```jsx
<main>
  <HeroSection />
  <AboutSection />
  <ExperienceSection />
  <ProfilesSection />
  <SkillsSection />
  <ProjectsSection />
  <AchievementsSection />
  <ContactSection />
</main>
```

---

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All components use TailwindCSS responsive utilities (`sm:`, `md:`, `lg:`) for optimal viewing on all devices.

---

## 🔍 SEO Features

- **Meta Tags**: Comprehensive Open Graph and Twitter Card tags
- **Structured Data**: JSON-LD schema for rich snippets
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Alt Text**: Descriptive alt text for all images
- **Sitemap**: Ready for sitemap.xml integration
- **Robots.txt**: Configured for search engine crawling

---

## 🐛 Troubleshooting

### Contact Form Not Working

- Check EmailJS credentials in `.env` file
- Verify EmailJS template variables match code
- Check browser console for error messages
- Ensure EmailJS service is active

### LeetCode Heatmap Not Loading

- Verify LeetCode username is correct
- Ensure LeetCode profile is public
- Check browser console for CORS errors
- Try refreshing the page

### Build Errors

- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf node_modules/.vite`
- Check Node.js version compatibility
- Update dependencies: `npm update`

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Aashcharya Gorakh**

- 🌐 Website: [Portfolio](https://your-portfolio-url.vercel.app)
- 💼 LinkedIn: [aashcharya-gorakh-a764a2287](https://www.linkedin.com/in/aashcharya-gorakh-a764a2287/)
- 💻 GitHub: [@Aashcharya1](https://github.com/Aashcharya1)
- 📧 Email: aashcharyagorakh@gmail.com
- 🏆 LeetCode: [@aashcharya](https://leetcode.com/u/aashcharya/)
- 🎯 Codeforces: [@aashcharyagorakh](https://codeforces.com/profile/aashcharyagorakh)

---

## 🙏 Acknowledgments

- **LeetCode Stats Card** by [Jacob Lin](https://github.com/JacobLinCool) for the submission heatmap
- **Lucide Icons** for beautiful icons
- **Framer Motion** for smooth animations
- **TailwindCSS** for utility-first styling
- **Vite** for blazing-fast development experience

---

## ⭐ Show Your Support

If you like this portfolio, give it a ⭐ on GitHub!

---

<div align="center">

**Made with ❤️ by Aashcharya Gorakh**

*B.Tech CSE @ IIT Jodhpur | Software Developer & Competitive Programmer*

</div>

