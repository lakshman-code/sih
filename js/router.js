import { renderAppShell } from "./components/AppShell.js";
import { renderLandingScreen, initLandingScreenEvents } from "./screens/LandingScreen.js";
import { renderProjectsScreen, initProjectsScreenEvents } from "./screens/ProjectsScreen.js";
import { renderProjectDetailScreen, initProjectDetailEvents } from "./screens/ProjectDetailScreen.js";
import { renderSuggestionsScreen, initSuggestionsEvents } from "./screens/SuggestionsScreen.js";
import { renderStatisticsScreen, initStatisticsEvents } from "./screens/StatisticsScreen.js";
import { renderSettingsScreen, initSettingsEvents } from "./screens/SettingsScreen.js";
import { renderAnalyticsScreen } from "./screens/AnalyticsScreen.js";
import { renderReportsScreen, initReportsEvents } from "./screens/ReportsScreen.js";
import { renderHighlightsScreen } from "./screens/HighlightsScreen.js";
import { renderTrustedByScreen } from "./screens/TrustedByScreen.js";
import { renderDataSourcesScreen } from "./screens/DataSourcesScreen.js";
import { renderProjectStatusScreen } from "./screens/ProjectStatusScreen.js";
import { renderCalendarScreen, initCalendarEvents } from "./screens/CalendarScreen.js";
import { renderFeedbackScreen } from "./screens/FeedbackScreen.js";

export class AppRouter {
  static init() {
    window.addEventListener("hashchange", () => this.handleRouteChange());
    this.handleRouteChange();
  }

  static getRoute() {
    let hash = window.location.hash.slice(1);
    if (!hash || hash === "") hash = "/";
    return hash;
  }

  static handleRouteChange() {
    const route = this.getRoute();
    const appRoot = document.getElementById("app-root");

    // Render Shell if not already created
    if (!document.getElementById("app-main-content")) {
      appRoot.innerHTML = renderAppShell(route);
    } else {
      // Update nav active states
      const navItems = document.querySelectorAll(".nav-item");
      navItems.forEach(item => {
        const href = item.getAttribute("href").slice(1);
        if ((href === "/" && (route === "/" || route === "")) || (href !== "/" && route.startsWith(href))) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    }

    const main = document.getElementById("app-main-content");
    main.scrollTop = 0;

    // Route matching
    if (route === "/" || route === "") {
      main.innerHTML = renderLandingScreen();
      initLandingScreenEvents();
    } else if (route === "/projects") {
      main.innerHTML = renderProjectsScreen();
      initProjectsScreenEvents();
    } else if (route.startsWith("/projects/")) {
      const projectId = route.replace("/projects/", "").trim();
      main.innerHTML = renderProjectDetailScreen(projectId);
      initProjectDetailEvents(projectId);
    } else if (route === "/suggestions") {
      main.innerHTML = renderSuggestionsScreen();
      initSuggestionsEvents();
    } else if (route === "/statistics") {
      main.innerHTML = renderStatisticsScreen();
      initStatisticsEvents();
    } else if (route === "/settings" || route === "/profile") {
      main.innerHTML = renderSettingsScreen();
      initSettingsEvents();
    } else if (route === "/analytics") {
      main.innerHTML = renderAnalyticsScreen();
    } else if (route === "/reports") {
      main.innerHTML = renderReportsScreen();
      initReportsEvents();
    } else if (route === "/highlights") {
      main.innerHTML = renderHighlightsScreen();
    } else if (route === "/trusted-by") {
      main.innerHTML = renderTrustedByScreen();
    } else if (route === "/data-sources") {
      main.innerHTML = renderDataSourcesScreen();
    } else if (route === "/status" || route === "/owner") {
      main.innerHTML = renderProjectStatusScreen();
    } else if (route === "/calendar") {
      main.innerHTML = renderCalendarScreen();
      initCalendarEvents();
    } else if (route === "/feedback") {
      main.innerHTML = renderFeedbackScreen();
    } else {
      // Fallback 404
      main.innerHTML = `
        <div class="card" style="text-align: center; padding: 40px 16px;">
          <h2 style="font-size: 18px; margin-bottom: 8px;">Page Not Found</h2>
          <p style="font-size: 13px; color: var(--muted); margin-bottom: 16px;">The requested screen could not be located.</p>
          <a href="#/" class="btn btn-primary">Return Home</a>
        </div>
      `;
    }
  }
}

window.renderCurrentRoute = function() {
  AppRouter.handleRouteChange();
};
