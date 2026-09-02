import { statisticsData } from "../data/statistics.js";

export function renderTrustedByScreen() {
  const { agenciesTrust } = statisticsData;

  return `
    <div class="trusted-by-container">
      <div style="margin-bottom: var(--space-lg);">
        <h1 style="font-size: 20px; font-weight: 800;">Trusted by agencies and communities</h1>
        <p class="subheadline">Powering multi-departmental infrastructure transparency</p>
      </div>

      <div class="trusted-by-grid">
        ${agenciesTrust.map(item => `
          <div class="trusted-item-card">
            <div style="font-size: 26px; margin-bottom: 6px;">${item.icon}</div>
            <div style="font-size: 14px; font-weight: 700; color: var(--text);">${item.name}</div>
            <div style="font-size: 11px; color: var(--muted); margin-top: 2px;">${item.projects} Monitored Projects</div>
          </div>
        `).join("")}
      </div>

      <div class="card" style="margin-top: var(--space-xl); text-align: center; background: var(--primary-light);">
        <h3 style="font-size: 15px; font-weight: 800; color: #072e38; margin-bottom: 4px;">
          Join 140+ Municipal Wards
        </h3>
        <p style="font-size: 12px; color: #0d5a6d; margin-bottom: 12px;">
          Get your department setup on GovTrack AI in less than 24 hours with existing GIS and ERP systems.
        </p>
        <a href="#/data-sources" class="btn btn-primary">
          Connect Your Agency &rarr;
        </a>
      </div>
    </div>
  `;
}
