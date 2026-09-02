import { statisticsData } from "../data/statistics.js";

export function renderStatisticsScreen() {
  const { kpis, highlights } = statisticsData;

  return `
    <div class="statistics-container">
      <!-- Profile / Header area -->
      <div class="stats-profile-header">
        <div style="display: flex; align-items: center; gap: 10px;">
          <img src="assets/images/christina_paul.jpg" alt="User Profile" style="width: 44px; height: 44px; border-radius: 50%; object-fit: cover; border: 2px solid var(--border);" />
          <div>
            <div style="font-size: 15px; font-weight: 700;">Christina Paul</div>
            <div style="font-size: 11px; color: var(--muted);">Civil Engineer &bull; GovTrack AI</div>
          </div>
        </div>
        <span class="badge badge-success">Verified Active</span>
      </div>

      <div style="margin-bottom: var(--space-md);">
        <h1 style="font-size: 20px; font-weight: 800;">Statistics</h1>
        <p class="subheadline">State infrastructure performance and capital audits</p>
      </div>

      <!-- KPI Grid -->
      <div class="kpi-grid">
        <div class="kpi-card">
          <div class="kpi-number">128</div>
          <div class="kpi-label">Projects</div>
        </div>

        <div class="kpi-card">
          <div class="kpi-number" style="color: var(--danger);">10</div>
          <div class="kpi-label">Issues flagged</div>
        </div>

        <div class="kpi-card kpi-card-wide">
          <div class="kpi-number" style="color: #0b4959;">₹250,00,000</div>
          <div class="kpi-label" style="color: #0d6880;">Budget Sanctioned (State Capex)</div>
        </div>
      </div>

      <!-- Highlights Section -->
      <div style="margin-bottom: var(--space-lg);">
        <div style="font-size: 15px; font-weight: 700; margin-bottom: 8px;">Highlights</div>
        
        <div class="highlights-list">
          ${highlights.map(h => `
            <div class="highlight-item-card">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-weight: 700; font-size: 13px;">${h.title}</span>
                <span class="badge badge-info">${h.badge}</span>
              </div>
              <p style="font-size: 11px; color: var(--muted); line-height: 1.35;">
                ${h.subtitle}
              </p>
              <div class="progress-bar-container" style="margin-top: 4px;">
                <div class="progress-bar-fill" style="width: ${h.progress}%; background: ${h.color};"></div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Newsletter / Telemetry Subscription -->
      <div class="newsletter-subscribe-box">
        <h4>Stay Updated with Weekly Audits</h4>
        <p style="font-size: 12px; opacity: 0.85; margin-bottom: 12px;">
          Receive AI risk alerts, budget milestones, and contractor compliance summaries directly to your inbox.
        </p>
        <form id="stats-newsletter-form" style="display: flex; gap: 6px;" onsubmit="event.preventDefault(); window.handleNewsletterSubmit();">
          <input type="email" id="stats-newsletter-email" class="form-input" placeholder="Enter your email" style="background: rgba(255,255,255,0.15); color: #fff; border-color: rgba(255,255,255,0.25);" required />
          <button type="submit" class="btn btn-cyan">
            Subscribe
          </button>
        </form>
      </div>

      <!-- Full Footer Section -->
      <footer class="app-footer-section">
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <div class="brand-wrapper">
            <div class="brand-icon-mark">GT</div>
            <span class="brand-title">GovTrack AI</span>
          </div>
          <div style="font-size: 11px; color: var(--muted);">v2.4 &bull; Open Governance</div>
        </div>

        <div class="footer-links-grid">
          <a href="#/help" onclick="event.preventDefault(); window.ModalManager.showHelpModal();">Help Center</a>
          <a href="#/faq" onclick="event.preventDefault(); window.ModalManager.showHelpModal();">FAQ</a>
          <a href="#/contact" onclick="event.preventDefault(); window.ModalManager.showContactModal();">Support</a>
          <a href="#/reports">Guides & Reports</a>
          <a href="#/feedback">Feedback & Contact</a>
          <a href="#/settings">Privacy Policy</a>
          <a href="#/projects">Sitemap</a>
          <a href="#/statistics">Subscriptions</a>
        </div>

        <div style="display: flex; gap: 10px; justify-content: center; padding-top: 10px; font-size: 18px; color: var(--muted);">
          <span>🌐</span>
          <span>🐦</span>
          <span>💼</span>
          <span>🏛️</span>
        </div>

        <div style="text-align: center; font-size: 11px; color: var(--muted); margin-top: 4px;">
          &copy; 2026 GovTrack AI. All rights reserved.
        </div>
      </footer>
    </div>
  `;
}

export function initStatisticsEvents() {
  window.handleNewsletterSubmit = function() {
    const email = document.getElementById("stats-newsletter-email").value;
    window.ToastManager.show(`Subscribed ${email} to weekly project audits!`);
    document.getElementById("stats-newsletter-email").value = "";
  };
}
