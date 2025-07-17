# 🎓 Jharkhand Public School Website

![Jharkhand Public School](https://img.shields.io/badge/School-Website-blue?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15.4.1-000000?style=for-the-badge&logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)

A modern, responsive website for Jharkhand Public School - a leading primary school in Barharwa, Jharkhand, offering quality education from Nursery to Class 8 with a focus on values, creativity, and holistic development.

> **⚠️ PROPRIETARY SOFTWARE**: This is not open source software. It is licensed under a specific Software License Agreement. See [License](#-license) section for details.

## 🌟 Live Website

**🔗 [Visit Website](https://jpsbarharwa.in)**

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Installation](#-installation)
- [Development](#-development)
- [Project Structure](#-project-structure)
- [Components Overview](#-components-overview)
- [Scripts](#-scripts)
- [SEO & Performance](#-seo--performance)
- [Contact Information](#-contact-information)
- [License](#-license)
- [Contributing](#-contributing)

## 🏫 About

Jharkhand Public School is a premier educational institution established in **2009** in Barharwa, Jharkhand. The school provides:

- **Primary Education**: Nursery to Class 8
- **Board Affiliation**: JAC (Jharkhand Academic Council)
- **Medium of Instruction**: Hindi
- **Focus Areas**: Values-based education, creativity, and holistic development
- **Mission**: Nurturing young minds with quality education and strong moral values

## ✨ Features

### 🎨 Modern User Interface
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Dark/Light Mode**: Theme toggle with next-themes
- **Smooth Animations**: CSS animations and transitions
- **Modern Gradients**: Beautiful color schemes and visual elements

### 📱 Core Sections
- **Hero Section**: Compelling introduction with call-to-action buttons
- **About Us**: School history, mission, and values
- **Why Choose Us**: Key differentiators and benefits
- **Admission Information**: Current admission status and procedures
- **Notice Board**: Important announcements and updates
- **Image Gallery**: Visual showcase of school facilities and activities
- **Testimonials**: Parent and student feedback
- **Contact Information**: Complete contact details and location

### 🔧 Technical Features
- **SEO Optimized**: Comprehensive meta tags and Open Graph data
- **Performance Focused**: Optimized images and fast loading
- **Accessibility**: WCAG compliant design elements
- **Type Safety**: Full TypeScript implementation
- **Component-Based**: Modular React component architecture

## 🛠 Technology Stack

### **Frontend Framework**
- **[Next.js 15.4.1](https://nextjs.org/)** - React framework with App Router
- **[React 19.1.0](https://react.dev/)** - UI library
- **[TypeScript 5.0](https://www.typescriptlang.org/)** - Type safety

### **Styling & UI**
- **[Tailwind CSS 4.0](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Shadcn/ui](https://ui.shadcn.com/)** - Component library (New York style)
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management

### **Icons & Graphics**
- **[@tabler/icons-react](https://tabler-icons.io/)** - Icon library
- **[Lucide React](https://lucide.dev/)** - Additional icons
- **[Motion](https://motion.dev/)** - Animation library

### **Development Tools**
- **[ESLint](https://eslint.org/)** - Code linting
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[Turbopack](https://turbo.build/)** - Fast bundler for development

## 📦 Installation

### Prerequisites
- **Node.js** 18.0 or higher
- **npm**, **yarn**, or **pnpm** package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/dev-aditya-lab/Jharkhand-public-school.git
   cd Jharkhand-public-school
   ```

   **Note**: This is proprietary software. Access may be restricted based on licensing agreement.

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

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Development

### Available Scripts

```bash
# Development server with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Run ESLint with auto-fix
npm run lint
```

### Development Guidelines

1. **Component Structure**: Follow the established pattern in `components/MyComponents/`
2. **Styling**: Use Tailwind CSS classes with responsive design principles
3. **Type Safety**: Maintain TypeScript strict mode compliance
4. **Code Quality**: Run ESLint before committing changes

## 📁 Project Structure

```
jharkhand_public_school/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout with metadata
│   └── page.tsx                 # Homepage component
├── components/                   # React components
│   ├── MyComponents/            # Custom school components
│   │   ├── About.tsx           # About section
│   │   ├── AdmissionOpen.tsx   # Admission information
│   │   ├── CtaBtns.tsx         # Call-to-action buttons
│   │   ├── Hero.tsx            # Hero section
│   │   ├── ImageGallary.tsx    # Photo gallery
│   │   ├── MainFooter.tsx      # Footer component
│   │   ├── MainNavbar.tsx      # Navigation bar
│   │   ├── NoticeBoard.tsx     # Announcements
│   │   ├── Testimonials.tsx    # User testimonials
│   │   └── WhyChooseUs.tsx     # Key benefits
│   ├── theme-provider.tsx       # Theme context provider
│   └── ui/                      # Shadcn/ui components
│       └── resizable-navbar.tsx
├── lib/                         # Utility libraries
│   └── utils.ts                # Common utilities
├── public/                      # Static assets
│   ├── images/                 # Image files
│   └── icons/                  # Favicon and icons
├── utils/                       # Utility functions
│   └── navItems.ts             # Navigation configuration
├── components.json              # Shadcn/ui configuration
├── next.config.ts              # Next.js configuration
├── package.json                # Dependencies and scripts
├── tailwind.config.js          # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

## 🧩 Components Overview

### Core Components

| Component | Purpose | Features |
|-----------|---------|----------|
| `Hero` | Landing section | Gradient backgrounds, CTAs, responsive design |
| `About` | School information | Statistics, mission, visual elements |
| `WhyChooseUs` | Key differentiators | Feature cards, animations |
| `AdmissionOpen` | Admission details | Action buttons, contact information |
| `NoticeBoard` | Announcements | Important updates and news |
| `ImageGallery` | Visual showcase | School photos and facilities |
| `Testimonials` | Social proof | Parent and student feedback |
| `MainNavbar` | Navigation | Responsive menu, theme toggle |
| `MainFooter` | Site footer | Contact info, links, branding |

### Utility Components

- **`CtaBtns`**: Reusable call-to-action buttons
- **`theme-provider`**: Dark/light mode management
- **`resizable-navbar`**: Responsive navigation component

## 🔍 SEO & Performance

### SEO Features
- **Comprehensive Meta Tags**: Title, description, keywords
- **Open Graph Data**: Social media sharing optimization
- **Twitter Cards**: Enhanced Twitter sharing
- **Structured Data**: Schema markup for search engines
- **Canonical URLs**: Proper URL canonicalization

### Performance Optimizations
- **Next.js Image Optimization**: Automatic image optimization
- **Code Splitting**: Automatic bundle splitting
- **Static Generation**: Pre-rendered pages for faster loading
- **Font Optimization**: Efficient font loading strategies

### Key SEO Elements
```typescript
// Metadata configuration in app/layout.tsx
export const metadata: Metadata = {
  title: "Jharkhand Public School | Nurturing Young Minds",
  description: "Leading primary school in Jharkhand offering quality education...",
  keywords: ["Jharkhand Public School", "Best primary school", "Education"],
  // ... extensive SEO configuration
}
```

## 📞 Contact Information

### School Details
- **Name**: Jharkhand Public School
- **Location**: Barharwa, Jharkhand, India
- **Email**: [contact@jpsbarharwa.in](mailto:contact@jpsbarharwa.in)
- **Website**: [https://jpsbarharwa.in](https://jpsbarharwa.in)

### Developer Contact
- **Developer**: Aditya Gupta
- **Email**: [ad1123itya@gmail.com](mailto:ad1123itya@gmail.com)
- **GitHub**: [@dev-aditya-lab](https://github.com/dev-aditya-lab)

## 📄 License

This project is **NOT open source** and is governed by a **Software License Agreement** between the developer and client.

### 🔒 License Summary

This software is licensed under a **proprietary license agreement** dated **August 1, 2025**.

**Parties:**
- **Developer**: Aditya Kumar Gupta
- **Client**: Subham Anand (on behalf of Jharkhand Public School)

### ✅ Permitted Use
- ✅ Use on the client's own domain/server
- ✅ Modify code for internal use only
- ✅ Business use by Jharkhand Public School

### ❌ Restrictions
- ❌ **No redistribution** or reselling of the software/code
- ❌ **No sublicensing** to third parties
- ❌ **Cannot use** codebase for other client projects without written permission
- ❌ **Cannot claim** sole authorship without full ownership transfer agreement

### 🛡️ Ownership & Copyright
- **Developer retains** all rights, title, and interest in the original source code
- **Client owns** the final deployed version for their specific use
- Code may contain open-source components governed by their respective licenses

### 🔧 Support & Maintenance
- **Bug fixes** within the first **5 years** from delivery are covered free of charge
- Ongoing support or updates require a separate support contract

### ⚖️ Governing Law
This agreement is governed by and interpreted in accordance with the **laws of India**.

---

**⚠️ IMPORTANT**: This is proprietary software. Unauthorized use, distribution, or modification outside the terms of the license agreement is strictly prohibited.

## � Contributing

**This project does not accept external contributions** as it is proprietary software owned by Jharkhand Public School and developed under a specific license agreement.

For any modifications or enhancements:
- Contact the school administration at [contact@jpsbarharwa.in](mailto:contact@jpsbarharwa.in)
- Or reach out to the developer: [ad1123itya@gmail.com](mailto:ad1123itya@gmail.com)

## 🙏 Acknowledgments

- **Shadcn/ui** for the beautiful component library
- **Tabler Icons** for the comprehensive icon set
- **Next.js Team** for the excellent framework
- **Tailwind CSS** for the utility-first CSS framework

---

<div align="center">

**Made with ❤️ for Jharkhand Public School**

*Nurturing Young Minds Since 2009*

[🌐 Visit Website](https://jpsbarharwa.in) • [📧 Contact School](mailto:contact@jpsbarharwa.in) • [👨‍💻 Developer](https://github.com/dev-aditya-lab)

</div>