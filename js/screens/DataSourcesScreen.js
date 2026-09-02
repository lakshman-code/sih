import { getIntegrations } from "../data/integrations.js";

export function renderDataSourcesScreen() {
  const integrations = getIntegrations();
  const connectedCount = integrations.filter(i => i.status === "Connected").length;

  return `
    <div class="data-sources-container">
      <div style="margin-bottom: var(--space-md);">
        <h1 style="font-size: 20px; font-weight: 800; line-height: 1.25;">
          Connect your tools<br/>and data sources
        </h1>
        <p style="font-size: 13px; color: var(--text-secondary); margin-top: 4px;">
          Link GIS, finance, and reporting tools instantly.
        </p>
      </div>

      <!-- Hero Card Banner -->
      <div class="card" style="padding: 0; overflow: hidden; margin-bottom: var(--space-lg);">
        <div style="height: 160px; position: relative;">
          <img src="assets/images/gis_map.jpg" alt="Data sources sync" style="width: 100%; height: 100%; object-fit: cover;" />
          <div style="position: absolute; top: 10px; right: 10px;">
            <span class="badge badge-success">${connectedCount} Active Feeds</span>
          </div>
        </div>

        <div style="padding: var(--space-lg); display: flex; justify-content: space-between; align-items: center;">
          <div>
            <div style="font-weight: 700; font-size: 14px;">Unified Data Fabric</div>
            <div style="font-size: 11px; color: var(--muted);">Real-time bidirectional API sync</div>
          </div>
          <button class="btn btn-primary" onclick="window.ModalManager.showIntegrationsModal()">
            Connect Tools
          </button>
        </div>
      </div>

      <!-- Active Tools List -->
      <div style="display: flex; flex-direction: column; gap: var(--space-md);">
        <div style="font-size: 14px; font-weight: 700;">Supported Integrations</div>

        ${integrations.map(tool => `
          <div class="card" style="padding: 12px 14px; display: flex; align-items: center; justify-content: space-between;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <span style="font-size: 24px;">${tool.icon}</span>
              <div>
                <div style="font-weight: 700; font-size: 13px;">${tool.name}</div>
                <div style="font-size: 11px; color: var(--muted);">${tool.desc}</div>
              </div>
            </div>
            <span class="badge ${tool.status === 'Connected' ? 'badge-success' : 'badge-warning'}">
              ${tool.status}
            </span>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}
