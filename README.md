# Blevon — Digital Studio Website

Official website and digital presence for **Blevon**, a creative digital engineering and design agency crafting high-performance websites and mobile applications.

---

## Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite 5](https://vitejs.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/) (with route-level code splitting via `React.lazy`)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/) with PostCSS & Autoprefixer
- **Animations**: [Framer Motion](https://www.framer.com/motion/) with `prefers-reduced-motion` compliance
- **Typography**: Google Fonts (Outfit, Plus Jakarta Sans, Space Grotesk)

---

## Project Structure

The project is organized using a feature-driven, scalable architecture:

```text
blevon/
├── public/
│   └── favicon.svg                  # SVG brand mark favicon
├── src/
│   ├── app/
│   │   ├── App.jsx                  # Root application wrapper & ScrollToTop
│   │   └── routes.jsx               # Route definitions & code-split lazy loaders
│   ├── assets/
│   │   └── images/
│   │       ├── about/               # About page and section assets
│   │       ├── approach/            # Process and methodology graphics
│   │       ├── clients/             # Client case study and proof assets
│   │       ├── logo/                # Official brand logos (blue & white)
│   │       └── services/            # Web & app development editorial visuals
│   ├── components/
│   │   ├── common/
│   │   │   ├── BlevonLogo.jsx       # SVG constellation brand mark
│   │   │   └── ScrollToTop.jsx      # Route-change scroll restoration
│   │   └── layout/
│   │       ├── Navbar.jsx           # Master responsive navigation header
│   │       ├── Footer.jsx           # 5-column responsive brand footer
│   │       └── LegalLayout.jsx      # Shared layout for legal compliance pages
│   ├── data/
│   │   └── projects.js              # Centralized client projects & case study data
│   ├── features/
│   │   ├── home/                    # Homepage feature
│   │   │   ├── components/          # Canvas animations (NetworkSphere, Constellation)
│   │   │   ├── sections/            # Hero, Services, Portfolio, Process, TechStack, etc.
│   │   │   └── HomePage.jsx         # Homepage view container
│   │   ├── about/
│   │   │   └── AboutPage.jsx        # Company profile, philosophy, and workflow
│   │   ├── services/
│   │   │   ├── WebDevelopmentPage.jsx
│   │   │   └── AppDevelopmentPage.jsx
│   │   ├── portfolio/
│   │   │   └── WorkPage.jsx         # Selected client showcase
│   │   ├── case-studies/
│   │   │   └── CaseStudyPage.jsx    # In-depth case study documentation
│   │   ├── contact/
│   │   │   └── ContactPage.jsx      # Inquiry forms and communication channels
│   │   └── legal/
│   │       ├── PrivacyPolicyPage.jsx
│   │       ├── TermsAndConditionsPage.jsx
│   │       └── RefundPolicyPage.jsx
│   ├── index.css                    # Tailwind directives, custom scrollbars, global container
│   └── main.jsx                     # Application entry point with BrowserRouter
├── .env.example                     # Documented environment variables
├── .gitignore                       # Clean Git exclusion rules
├── index.html                       # HTML5 entry with meta tags & fonts
├── package.json                     # Production dependencies & scripts
├── tailwind.config.cjs              # Tailwind configuration & typography
├── vercel.json                      # Production SPA rewrite routing configuration
└── vite.config.js                   # Vite config with '@' path alias
```

---

## Routes

| Route | Page Component | Description |
|---|---|---|
| `/` | `HomePage` | Studio landing page with interactive canvas animations |
| `/work` | `WorkPage` | Selected client projects |
| `/case-study` | `CaseStudyPage` | Kavuturu Dental Clinic full case study |
| `/about` | `AboutPage` | Company background, philosophy & workflow |
| `/contact` | `ContactPage` | Direct email, telephone, WhatsApp contact methods |
| `/services/web-development` | `WebDevelopmentPage` | Bespoke web engineering services |
| `/services/app-development` | `AppDevelopmentPage` | Native & cross-platform app engineering |
| `/privacy-policy` (`/privacy`) | `PrivacyPolicyPage` | Privacy Policy and compliance |
| `/terms-and-conditions` (`/terms`)| `TermsAndConditionsPage` | Terms & Conditions |
| `/refund-policy` (`/refund`) | `RefundPolicyPage` | Project refund and cancellation terms |

---

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Runs the application locally at `http://localhost:5173`.

### Production Build

```bash
npm run build
```

Generates optimized, minified, code-split production bundles in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## Environment Variables

Copy `.env.example` to create your local `.env.local` configuration:

```bash
VITE_CONTACT_EMAIL="contact@blevon.in"
VITE_CONTACT_PHONE="+91 9491229471"
VITE_WHATSAPP_NUMBER="919491229471"
```

---

## License

Private repository. © 2026 Blevon. All rights reserved.
