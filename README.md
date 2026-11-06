# DIGITAL DIMENSION — Premium 3D Developer Portfolio

Personal developer portfolio for **Mzamo Magudulela** — Final-year Diploma in ICT (Applications Development) student specializing in software development, backend engineering, and robust technology solutions.

Designed with the **DIGITAL DIMENSION** visual concept: a cinematic, immersive 3D digital environment featuring deep navy backgrounds, electric blue and subtle cyan lighting, floating glass elements, and sophisticated micro-interactions.

---

## 🌐 Live Production URL

- **GitHub Pages:** [https://mzamomagudulela.github.io/Portfolio/](https://mzamomagudulela.github.io/Portfolio/)
- **Repository:** [https://github.com/MzamoMagudulela/Portfolio](https://github.com/MzamoMagudulela/Portfolio)

---

## 🛠️ Technology Stack

- **Framework:** [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/)
- **3D Graphics & Engine:** [Three.js](https://threejs.org/) + [@react-three/fiber](https://r3f.docs.pmnd.rs/) + [@react-three/drei](https://github.com/pmndrs/drei)
- **Styling & Design System:** [Tailwind CSS](https://tailwindcss.com/) + Custom Glassmorphism & Atmospheric Gradients
- **Animations & Micro-interactions:** [Framer Motion](https://www.framer.com/motion/)
- **Iconography:** [Lucide React](https://lucide.dev/)
- **Typography:** Plus Jakarta Sans, Space Grotesk, JetBrains Mono

---

## 📂 Project Architecture

```
Website_Porfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── assets/
│   │   ├── mzamo-portrait.jpg    # Drop your real professional photo here
│   │   └── mzamo-portrait-placeholder.svg # Dynamic fallback vector placeholder
│   └── favicon.svg               # High-tech glowing monogram favicon
├── src/
│   ├── components/
│   │   ├── About.jsx             # Editorial biography & engineering ethos
│   │   ├── Contact.jsx           # Direct contact channels, 1-click copy & mail form
│   │   ├── CVModal.jsx           # Printable/downloadable CV summary modal
│   │   ├── Education.jsx         # Diploma in ICT credential & milestone timeline
│   │   ├── Footer.jsx            # System status, links & back-to-top
│   │   ├── Hero.jsx              # Landing viewport with CTA & headline
│   │   ├── Navbar.jsx            # Glassmorphic header with section spy & mobile drawer
│   │   ├── PortraitFrame3D.jsx   # 3D mouse-tilt portrait frame with illuminated edges
│   │   ├── ProjectModal.jsx      # Deep-dive architecture & specs modal
│   │   ├── Projects.jsx          # Interactive stage & floating glass project showcase
│   │   ├── Skills.jsx            # Grouped technical expertise (no fake progress bars)
│   │   └── ThreeBackground.jsx   # Interactive R3F floating polyhedra & particle field
│   ├── data/
│   │   ├── education.js          # Academic curriculum & verified milestones
│   │   ├── projects.js           # Single source of truth for projects & links
│   │   └── skills.js             # Categorized skills & focus areas
│   ├── App.jsx                   # Main layout container
│   ├── index.css                 # Custom glassmorphism, glow utilities & scrollbars
│   └── main.jsx                  # React DOM entrypoint
├── index.html                    # SEO, OpenGraph metadata & Google Fonts
├── package.json
├── tailwind.config.js
└── vite.config.js                # Optimized rollup chunking & base path config
```

---

## 🚀 Quickstart Guide

### Prerequisites
- Node.js `v18+` or `v20+`
- npm `v9+` or `v10+`

### 1. Clone & Install
```bash
git clone https://github.com/MzamoMagudulela/Portfolio.git
cd Portfolio
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` to inspect live hot-reloading.

### 3. Build for Production
```bash
npm run build
```
Generates an optimized, chunked production bundle in the `dist/` directory.

---

## 📸 Updating Your Professional Photograph

The 3D portrait presentation in the Hero section is pre-configured to detect your photograph automatically:

1. Save your professional photo as **`mzamo-portrait.jpg`** (or `.png`).
2. Place it in the `public/assets/` folder:
   ```
   public/assets/mzamo-portrait.jpg
   ```
3. The component will instantly display your real photo inside the 3D illuminated floating frame with zero distortion or facial alteration.
4. If the file is not yet present, it gracefully displays the high-resolution vector silhouette placeholder.

---

## 📝 Customizing Projects & Content

All content is cleanly separated from UI components:

- **Add or Edit Projects:** Modify `src/data/projects.js`. Each project contains fields for title, category, description, full architectural overview, key highlights, tech stack, and GitHub / Live links.
- **Update Skills & Tools:** Modify `src/data/skills.js`. Categorized strictly into Programming, Frontend, Backend, Databases, and Tools.
- **Academic Qualifications:** Modify `src/data/education.js` to update graduation details, modules, or new certifications.

---

## 🚢 GitHub Pages Automated Deployment

This repository includes a ready-to-run GitHub Actions workflow (`.github/workflows/deploy.yml`).

### Option A: User Root Page (Recommended: `MzamoMagudulela.github.io`)
1. Create a public repository on GitHub named:
   ```
   MzamoMagudulela.github.io
   ```
2. Push your project code to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "feat: complete Digital Dimension developer portfolio"
   git branch -M main
   git remote add origin https://github.com/MzamoMagudulela/MzamoMagudulela.github.io.git
   git push -u origin main
   ```
3. In your GitHub repository:
   - Navigate to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. The workflow will automatically trigger, build the bundle, and publish your site to:
   **`https://MzamoMagudulela.github.io/`**

### Option B: Sub-Repository Deployment (e.g., `portfolio`)
If you push to a non-root repository (e.g. `https://github.com/MzamoMagudulela/portfolio`), Vite is already configured with `base: './'`, meaning all scripts, CSS, and assets use relative paths and will load without 404 errors!

---

## ♿ Performance & Accessibility

- **Reduced Motion Support:** Respects `prefers-reduced-motion` to smoothly disable 3D camera animations and high-frequency motion for users with vestibular sensitivities.
- **Contrast & Semantic HTML:** WCAG AA compliant contrast ratios across dark navy and cyan accents.
- **No Heavy Asset Overhead:** Pure procedural geometries in Three.js and vector glyphs to ensure sub-second first contentful paint (FCP).

---

## 📬 Contact & Identity

- **Developer:** Mzamo Magudulela
- **Location:** South Africa (SAST, UTC+2)
- **Role:** ICT Student | Application Developer
- **Email:** `mzamo.magudulela.dev@gmail.com`
- **GitHub:** [https://github.com/MzamoMagudulela](https://github.com/MzamoMagudulela)
- **LinkedIn:** [https://www.linkedin.com/in/mzamomagudulela](https://www.linkedin.com/in/mzamomagudulela)
