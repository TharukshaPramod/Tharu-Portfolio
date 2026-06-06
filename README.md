<div align="center">

# ✦ Tharuksha Pramod — Portfolio

**AI/ML Engineer · Fullstack Developer · Data Science Undergraduate**

[![Next.js](https://img.shields.io/badge/Next.js_16-000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

<br/>

A high-performance, dark-mode-first portfolio built with **Next.js 16 App Router**, **Turbopack**, and **Framer Motion** — showcasing 13 real-world projects, 32 professional certifications, and a deep focus on AI/ML engineering.

<br/>

[**Live Site →**](https://tharuksha-portfolio.com) &nbsp;&nbsp;·&nbsp;&nbsp; [**View Projects →**](https://tharuksha-portfolio.com/projects) &nbsp;&nbsp;·&nbsp;&nbsp; [**Certifications →**](https://tharuksha-portfolio.com/certificates)

</div>

<br/>

---

## ⚡ Highlights

<table>
<tr>
<td width="50%">

### 🧠 What Makes This Special
- **13 Featured Projects** — From multi-agent AI systems to Android mobile apps
- **32 Verified Certifications** — AWS, Azure, AI/ML & Data Science
- **Glassmorphism UI** — Premium dark mode design with spotlight effects
- **Sub-100ms Page Loads** — Turbopack-optimized compilation
- **Fully Responsive** — Pixel-perfect from 320px to 4K

</td>
<td width="50%">

### 🛠️ Built With
- **Framework** — Next.js 16 (App Router + Turbopack)
- **Language** — TypeScript (strict mode)
- **Styling** — Tailwind CSS + shadcn/ui primitives
- **Animations** — Framer Motion + custom components
- **Fonts** — Inter via Google Fonts
- **Deployment** — Vercel / Self-hosted

</td>
</tr>
</table>

---

## 📁 Project Architecture

```
├── app/                          # Next.js App Router pages
│   ├── page.tsx                  # Homepage (Hero, Projects, Skills, Certificates)
│   ├── about/                    # About page with story & quick facts
│   ├── projects/                 # Projects listing page
│   │   └── [id]/                 # Dynamic project detail pages (SSG)
│   ├── certificates/             # Certificates dashboard with filtering
│   ├── services/                 # Professional services offered
│   └── contact/                  # Contact form
│
├── components/
│   ├── animations/               # Spotlight, FloatingCard, TextReveal
│   ├── sections/                 # Hero, Projects, Skills, Certificates, Experience
│   ├── layout/                   # Navbar, Footer
│   └── ui/                       # shadcn/ui primitives (Button, Card, Badge, etc.)
│
├── lib/
│   ├── constants.ts              # Project data with features, architecture, outcomes
│   └── certificates.ts           # 32 certificates across 4 categories
│
├── config/
│   ├── site.ts                   # Site metadata & social links
│   └── nav.ts                    # Navigation structure
│
├── public/
│   ├── MY certificates/          # 32 certificate images (AWS, Azure, SimpliLearn, GitHub)
│   ├── Project images/           # AI-generated project preview visuals
│   └── images/                   # Profile photo & assets
│
└── types/
    └── project.ts                # TypeScript interfaces
```

---

## 🏗️ Key Pages & Features

### 🏠 Homepage
Spotlight-powered hero section with animated text reveal, circular profile photo with floating badges, featured project cards, skill bars, and a certificates preview with a "View All" CTA.

### 📂 Projects (`/projects` → `/projects/[id]`)
13 real-world projects spanning AI/ML, Fullstack Web, and Android Mobile. Each detail page includes:
- **Key Features** — 2-column grid with check-mark badges
- **System Architecture** — Technical stack and design patterns
- **Challenges & Solutions** — Engineering problem-solving deep dives
- **Outcomes & Metrics** — Quantified project results

| Category | Projects |
|----------|----------|
| **AI/ML & Data** | CropSense (Multi-Agent AI), CrimeCast (Crime Prediction) |
| **Fullstack Web** | CampusFlow (Spring Boot), SiteMaster, Invexa, BlueWave Market |
| **Android Mobile** | BudgetLyst, CampusRide, CleanPlate, MediBook, Leaft v5 |
| **Legacy Web** | Golden Event (PHP), Safari-Lanka (PHP) |

### 🏅 Certificates (`/certificates`)
Interactive dashboard featuring all 32 certifications with:
- **Stats Overview** — Animated counters (14 AWS · 8 Azure · 6 AI/ML · 4 Dev)
- **Category Tabs** — Framer Motion sliding pill indicator
- **Real-time Search** — Filter by title, issuer, or skill
- **Image Lightbox** — Keyboard-navigable (←/→/ESC) full-screen viewer with certificate metadata

### 💼 Services (`/services`)
Professional services offered including AI/ML solutions, fullstack development, and cloud consulting.

### 📬 Contact (`/contact`)
Contact form for reaching out about collaboration opportunities.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x

### Installation

```bash
# Clone the repository
git clone https://github.com/TharukshaPramod/Tharu-Portfolio.git

# Navigate to the project
cd Tharu-Portfolio

# Install dependencies
npm install

# Create environment file
echo "NEXT_PUBLIC_SITE_URL=http://localhost:3000" > .env.local

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Turbopack dev server |
| `npm run build` | Create optimized production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint checks |
| `npm run format` | Format code with Prettier |

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| **Primary Font** | Inter (Google Fonts) |
| **Theme** | Dark-mode-first with light mode toggle |
| **UI Library** | shadcn/ui (Radix primitives) |
| **Glass Effect** | `backdrop-blur-md` + semi-transparent borders |
| **Animations** | Framer Motion `whileInView`, `AnimatePresence`, `layoutId` |
| **Hover States** | `FloatingCard` with `y: -10, scale: 1.02` transforms |

---

## 📊 Certifications Breakdown

```
AWS SimuLearn ████████████████████████████ 14
Azure        ████████████████             8
AI/ML & Data ████████████                 6
Dev & DB     ████                         4
─────────────────────────────────────────
Total                                    32
```

---

## 🧰 Tech Stack in Detail

<table>
<tr>
<td><strong>Frontend</strong></td>
<td>Next.js 16, React 18, TypeScript, Tailwind CSS, Framer Motion, shadcn/ui</td>
</tr>
<tr>
<td><strong>Build</strong></td>
<td>Turbopack, PostCSS, Autoprefixer</td>
</tr>
<tr>
<td><strong>Content</strong></td>
<td>MDX (remark-gfm, rehype-highlight, rehype-slug)</td>
</tr>
<tr>
<td><strong>Code Quality</strong></td>
<td>ESLint, Prettier, TypeScript strict mode</td>
</tr>
<tr>
<td><strong>Deployment</strong></td>
<td>Vercel / GitHub Pages / Self-hosted</td>
</tr>
</table>

---

## 📝 Adding New Content

### Add a New Certificate
1. Place the image in `public/MY certificates/<Category>/`
2. Add an entry to `lib/certificates.ts` with the correct `category` (`'AWS'` | `'Azure'` | `'AI/ML'` | `'Dev & DB'`)
3. Stats and filters update automatically

### Add a New Project
1. Place the preview image in `public/Project images/`
2. Add a project object to `lib/constants.ts` with `features`, `architecture`, `challenges`, and `outcome`
3. The route `/projects/<id>` is auto-generated via `generateStaticParams`

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Designed & Developed by Tharuksha Pramod**

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/TharukshaPramod)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/tharukshapramod)
[![Facebook](https://img.shields.io/badge/Facebook-1877F2?style=flat-square&logo=facebook&logoColor=white)](https://web.facebook.com/tharuksha.pramodsankalpa)

</div>
