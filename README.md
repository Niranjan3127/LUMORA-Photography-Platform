# LUMORA — Fine Art & Editorial Photography Platform

> A modern luxury platform where professional photographers can manage, showcase, organize, proof, and share their visual monographs.

---

## 🏛️ Project Structure

```
├── public/
│   ├── favicon.svg                # LUMORA Golden Monogram Favicon
│   └── icons.svg
├── src/
│   ├── assets/                    # Static brand assets
│   ├── components/                # Reusable modular UI components
│   │   ├── Footer.tsx             # Editorial minimalist atelier footer
│   │   ├── GlobalSearchModal.tsx  # Cmd+K Instant search palette
│   │   ├── Layout.tsx             # Root layout with modals & notifications
│   │   ├── Navbar.tsx             # Sticky header, search, upload & theme toggle
│   │   ├── PhotoInspectModal.tsx  # Lightroom-grade EXIF viewer & metadata editor
│   │   ├── PhotoUploadModal.tsx   # Drag & drop multi-photo ingestion
│   │   ├── ScrollToTop.tsx        # Automatic smooth scroll reset
│   │   └── ToastContainer.tsx     # Custom gold/amber toast alerts
│   ├── context/
│   │   └── LumoraContext.tsx      # Central store & LocalStorage persistence
│   ├── data/
│   │   └── mockData.ts            # Realistic photography archive, EXIF & CRM data
│   ├── pages/                     # Complete application routes
│   │   ├── AnalyticsPage.tsx      # Cinematic traffic & engagement charts
│   │   ├── AuthPage.tsx           # Split-screen luxury login/signup (with 1-click Demo)
│   │   ├── ClientGalleryPage.tsx  # Magazine-style private client proofing & download
│   │   ├── ClientsCRMPage.tsx     # Patron CRM & status pipeline
│   │   ├── CollectionDetailPage.tsx# Series view with cover banner & masonry
│   │   ├── CollectionsPage.tsx    # Monograph collections index & creator
│   │   ├── DashboardPage.tsx      # Photographer CMS, photo manager & storage
│   │   ├── JournalArticlePage.tsx # Editorial essay with gear specs & pull quotes
│   │   ├── JournalPage.tsx        # Atelier journal & articles index
│   │   ├── LandingPage.tsx        # Immersive landing page with editorial collage
│   │   ├── PortfolioBuilderPage.tsx# Live multi-device preview builder & settings
│   │   ├── PortfolioPage.tsx      # Master work archive with masonry & filters
│   │   ├── ProjectsPage.tsx       # Booking & logistics management with task lists
│   │   ├── StoriesIndexPage.tsx   # Digital exhibitions index & story creator
│   │   ├── StoryViewerPage.tsx    # Fullscreen story exhibition with ambient audio
│   │   └── VisualTimelinePage.tsx # Chronological journey (Year → Project → Location)
│   ├── types/
│   │   └── index.ts               # Complete TypeScript interfaces
│   ├── App.css
│   ├── App.tsx                    # React Router configuration
│   ├── index.css                  # Tailwind styles & film grain noise texture
│   └── main.tsx                   # React root entrypoint
├── index.html                     # HTML5 shell with Google Fonts & Dark Theme
├── package.json                   # Dependencies & scripts
├── postcss.config.js
├── tailwind.config.js             # LUMORA Dark Cinematic (#0B0B0D) theme config
└── tsconfig.app.json
```

---

## ⚡ Quick Start & Running Locally

### Frontend

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the local frontend server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

3. **Build for production**:
   ```bash
   npm run build
   ```

### Backend and MySQL

1. **Create a MySQL database**:
   ```bash
   mysql -u root -p
   CREATE DATABASE lumora_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
   exit;
   ```

2. **Configure environment variables**:
   ```bash
   cp .env.example .env
   ```
   Update `.env` with your MySQL credentials and secret:
   ```env
   PORT=5000
   NODE_ENV=development
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=root
   DB_PASSWORD=your_mysql_password
   DB_NAME=lumora_db
   JWT_SECRET=replace_with_a_long_random_secret
   JWT_EXPIRES_IN=7d
   CLIENT_URL=http://localhost:5173
   ```

3. **Initialize the database schema**:
   ```bash
   node backend/init-db.js
   ```
   This creates the `lumora_db` database and the required tables.

4. **Start the backend**:
   ```bash
   npm run dev:server
   ```
   The API will be available at [http://localhost:5000](http://localhost:5000).

5. **Verify the health endpoint**:
   ```bash
   curl http://localhost:5000/api/health
   ```

---

## 🎨 Visual Design Language

- **Primary Background**: `#0B0B0D` Dark Cinematic Canvas
- **Typography**: Playfair Display + DM Serif Display + Plus Jakarta Sans + JetBrains Mono
- **Accents**: Champagne Gold (`#D4AF37`) and Amber Bronze (`#C5A059`)
- **Atmosphere**: Subtle film grain texture overlay & glassmorphic navigation
- **Themes**: Instant toggle between Dark Cinematic and Gallery Light modes

---

## 🧭 Routes & Capabilities

| Route | Page | Purpose |
| :--- | :--- | :--- |
| `/` | Landing Page | Full-screen hero, headline *"Stories, captured in light."*, dynamic collage, horizontal showcase, and testimonials. |
| `/portfolio` | Master Work | Asymmetrical masonry grid, orientation & category filters, EXIF inspector. |
| `/collections` | Collections | Themed monographs (*Weddings, Portraits, Fashion, Travel, Nature, Commercial*). |
| `/collection/:id` | Collection Detail | Detailed view of a specific photographic body of work. |
| `/stories` | Stories Index | Digital exhibitions list and story creator. |
| `/stories/:id` | Story Mode | Full-screen exhibition with synthesized ambient audio, curatorial notes, and autoplay timer. |
| `/timeline` | Visual Timeline | Chronological retrospective (*Year → Project → Location → Collection → Exposures*). |
| `/dashboard` | Photographer CMS | Overview stats, view trends, storage breakdown, drag & drop upload, and photo management. |
| `/gallery/:id` | Client Gallery | Private PIN-protected portal (`PIN: 2025` or 1-click Demo), proof hearting, watermark toggle, and archive download. |
| `/clients` | Patron CRM | Client pipeline (*Inquiry → Booked → Shooting → Editing → Delivered → Completed*), contract values, and activity log. |
| `/projects` | Project Logistics | Commission tracking, payment statuses, deliverables, and interactive task checklist. |
| `/journal` | Atelier Journal | Photography editorial essays, travel journals, and case studies. |
| `/journal/:slug` | Journal Article | Magazine article layout with camera gear specs and pull quotes. |
| `/analytics` | View Analytics | Detailed engagement stats, top photographs, acquisition channels, and geographic distribution. |
| `/settings` | Portfolio Builder | Live multi-device viewport preview (*Desktop, Tablet, Mobile*), typography/color customization, and drag/order flow. |
| `/login`, `/signup` | Atelier Auth | Split-screen authentication with 1-click Demo login. |
