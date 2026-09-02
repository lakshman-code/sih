# 🏛️ GovTrack AI — Municipal Infrastructure Telemetry & Risk Intelligence

> **Track Infrastructure Projects. Telemeter Risks. Optimize Budgets.**

GovTrack AI is a modern, high-performance, lightweight web application designed for municipal project tracking, infrastructure risk monitoring, AI-assisted recommendations, and budget telemetry. Built with pure static web technologies (Vanilla HTML5, CSS3, ES6 JavaScript), GovTrack AI requires zero build step or server dependencies, making it instantly hostable on **GitHub Pages**, **Vercel**, **Netlify**, or any static web host.

---

## 🚀 Live Demo & Host on GitHub Pages

### How to Host GovTrack AI on GitHub Pages (Step-by-Step)

Since GovTrack AI is a pure static web application, hosting it on GitHub Pages takes less than 2 minutes:

1. **Create a GitHub Repository**:
   - Go to [GitHub New Repository](https://github.com/new).
   - Name your repository (e.g., `govtrack-ai` or `harini_sih`).
   - Choose **Public** (or **Private** with GitHub Pro/Enterprise).
   - Click **Create repository**.

2. **Push Code to GitHub**:
   Open your terminal in the project root directory and execute:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: GovTrack AI application"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - In your GitHub Repository, navigate to **Settings** > **Pages** (under Code and automation).
   - Under **Build and deployment** -> **Source**, select **Deploy from a branch**.
   - Under **Branch**, select `main` and `/ (root)` folder.
   - Click **Save**.

4. **Access your Live Site**:
   - GitHub Pages will automatically build and publish your site at:
     `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

---

## ✨ Key Features

- 📊 **Real-time Project Dashboard**: Track high-priority infrastructure projects (Highways, Bridges, Solar Microgrids, Stormwater Canals) with progress bars, risk badges, and financial metrics.
- 🎯 **Risk & Delay Telemetry**: Early indicator alerts for monsoon delays, soil compaction issues, material bottlenecks, and permit holds.
- 🏗️ **Interactive 3D Site Telemetry**: Integrated canvas-based 3D digital twin visualizer for project site monitoring and structural phase tracking.
- 💡 **AI Smart Recommendations Engine**: Data-driven suggestions for budget optimization, contingency allocations, and timeline acceleration.
- 📈 **Budget & Financial Analytics**: Comprehensive breakdown of allocated vs. spent capital, variance analysis, and multi-sector expenditure distribution.
- 📅 **Site Audit & Milestone Calendar**: Track upcoming trial runs, load tests, sluice gate installations, and regulatory inspections.
- 📄 **Automated Audit Report Generator**: Produce downloadable and printable audit reports for monthly progress, budget variances, and safety logs.
- 🔗 **Data Integrations Telemetry**: Pre-configured status views for GIS Satellite feeds, IoT Structural Sensors, Drone LiDAR Surveys, and ERP/SAP accounting pipelines.
- 📱 **Universal Mobile View & Touch Optimization**: Flawless responsive layout optimized for all smartphones (iOS & Android 320px–480px), phablets, and tablets with dynamic viewport height (`100dvh`), iOS auto-zoom prevention, touch target ergonomics, mobile bottom sheets, and sticky bottom navigation.


---

## 🛠️ Technology Stack

GovTrack AI is built with modern, standard web technologies for maximum performance and zero dependency overhead:

| Layer | Technology Used |
| :--- | :--- |
| **Frontend Core** | Semantic HTML5 & Modern ES6 JavaScript Modules |
| **Styling & Theme** | Vanilla CSS3 (Custom Properties, Flexbox, CSS Grid, Glassmorphism) |
| **Routing** | Client-side Hash Router (`#/...`) — zero server reload |
| **Graphics / 3D** | HTML5 Canvas 3D Engine for structural site digital twin visualization |
| **Typography** | Google Fonts (*Inter* & *Instrument Serif*) |
| **Local Preview Server** | Lightweight Python 3 HTTP Server (`server.py`) |

---

## 💻 Local Development & Setup

No `npm install`, Node.js, or complex build toolchains required!

### Option 1: Using Python (Recommended)
GovTrack AI includes a simple zero-config Python development server with disabled cache for rapid iteration:

```bash
# Run the local server
python server.py
```
Open your browser and visit: **`http://localhost:3000`**

### Option 2: Using VS Code Live Server
1. Install the **Live Server** extension in VS Code.
2. Right-click `index.html` and select **Open with Live Server**.

### Option 3: Using Node `npx serve`
```bash
npx serve .
```

---

## 📁 Repository Structure

```
govtrack-ai/
├── index.html              # Main HTML entry point & font/CSS imports
├── server.py               # Lightweight Python 3 local development server
├── README.md               # Documentation & deployment guide
├── assets/                 # Application assets
│   ├── css/
│   │   ├── variables.css   # Color palette, dark mode variables & design tokens
│   │   ├── main.css        # Base reset, typography, and utility classes
│   │   ├── components.css  # Buttons, cards, modals, navigation & badges
│   │   └── screens.css     # Screen layouts & responsive breakpoints
│   └── images/             # Project screenshots, avatars & imagery
└── js/                     # Application JavaScript source code
    ├── app.js              # Application entry point & global setup
    ├── router.js           # Single Page App (SPA) hash router
    ├── components/
    │   ├── AppShell.js     # Top navigation bar, mobile menu & layout wrapper
    │   ├── Modals.js       # AI Assistant modal & Project edit modals
    │   ├── Simulation3D.js # Canvas 3D interactive site digital twin
    │   └── Toast.js        # Notification toast manager
    ├── data/
    │   ├── projects.js     # Mock infrastructure project datasets
    │   ├── integrations.js # Telemetry integration source statuses
    │   ├── reminders.js    # Calendar events & milestone reminders
    │   ├── statistics.js   # Analytics & metric datasets
    │   └── suggestions.js  # AI recommendation datasets
    └── screens/            # Application views / pages
        ├── LandingScreen.js        # Executive Overview Dashboard
        ├── ProjectsScreen.js       # Project Filter & Search Directory
        ├── ProjectDetailScreen.js  # Deep-dive Project Inspection View
        ├── SuggestionsScreen.js    # AI Recommendations & Action Items
        ├── StatisticsScreen.js     # Financial & Progress Telemetry
        ├── AnalyticsScreen.js      # Advanced Metric Visualizations
        ├── DataSourcesScreen.js    # IoT, GIS & Drone Feed Status
        ├── CalendarScreen.js       # Site Audits & Milestone Calendar
        ├── ReportsScreen.js        # Custom Audit Report Generator
        ├── HighlightsScreen.js     # Public Impact & Achievements
        ├── SettingsScreen.js       # App Settings & User Profile
        └── ProjectStatusScreen.js  # Contractor & Owner Contacts
```

---

## 🗺️ Application Routes

| Hash Route | Description |
| :--- | :--- |
| `#/` | **Executive Overview**: High-level KPI cards, recent risk alerts, top projects. |
| `#/projects` | **Projects Directory**: Filterable list by status (On Track, At Risk, Delayed, Completed). |
| `#/projects/:id` | **Project Details**: 3D site viewer, budget breakdown, issue tracker, milestones. |
| `#/suggestions` | **AI Recommendations**: Actionable insights for cost reduction & timeline risk mitigation. |
| `#/statistics` | **Statistics Telemetry**: Multi-sector budget allocations and completion metrics. |
| `#/analytics` | **Advanced Analytics**: Interactive charts and performance indicators. |
| `#/data-sources` | **Data Feeds**: Live status of IoT sensors, GIS mapping, and ERP financial pipelines. |
| `#/calendar` | **Site Calendar**: Schedule of inspections, load tests, and regulatory milestones. |
| `#/reports` | **Reports**: Generate and print formatted project audit summaries. |
| `#/settings` | **User Preferences**: Notification controls, dark mode, and profile settings. |

---

## ⚙️ Customization Guide

- **Adding / Editing Projects**: Update `js/data/projects.js` to modify or add new municipal projects, milestones, timeline events, and budget amounts.
- **Customizing Color Theme**: Edit `assets/css/variables.css` to tweak primary accent colors, gradients, font family stacks, or background values.
- **Modifying Routing**: Add new routes in `js/router.js` and matching view components under `js/screens/`.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

Distributed under the **MIT License**.
