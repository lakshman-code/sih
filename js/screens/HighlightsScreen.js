export function renderHighlightsScreen() {
  return `
    <div class="highlights-screen-container">
      <div style="margin-bottom: var(--space-lg);">
        <h1 style="font-size: 20px; font-weight: 800;">Project highlights</h1>
        <p class="subheadline">Verified municipal case studies and measurable civic impact</p>
      </div>

      <!-- Main Highlight / Case Study Card -->
      <div class="card card-primary" style="margin-bottom: var(--space-lg);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <span class="badge badge-success">Measured Impact</span>
          <span style="font-size: 11px; color: #0d6880; font-weight: 700;">FY 2025-26</span>
        </div>

        <h3 style="font-size: 16px; font-weight: 800; color: #09343e; margin-bottom: 6px;">
          How upgrades reduced delays and saved public funds
        </h3>
        
        <p style="font-size: 12px; color: #0f5466; line-height: 1.45; margin-bottom: 12px;">
          By connecting real-time spatial GIS feeds to automatic SAP procurement audits, the public works department eliminated 4 months of idle contractor downtime and prevented ₹18.4 Cr in duplicate material billing.
        </p>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; background: rgba(255,255,255,0.7); border-radius: var(--radius-md); padding: 10px;">
          <div>
            <div class="text-xs text-muted">Cost Avoidance</div>
            <div style="font-size: 15px; font-weight: 800; color: var(--success);">₹18.4 Cr</div>
          </div>
          <div>
            <div class="text-xs text-muted">Time Recovered</div>
            <div style="font-size: 15px; font-weight: 800; color: var(--accent);">42 Days</div>
          </div>
        </div>
      </div>

      <!-- Live reports with map integration Card -->
      <div class="card" style="margin-bottom: var(--space-lg); padding: 0; overflow: hidden;">
        <div style="height: 140px; position: relative;">
          <img src="assets/images/gis_map.jpg" alt="Map Integration" style="width: 100%; height: 100%; object-fit: cover;" />
          <div style="position: absolute; bottom: 8px; left: 8px;">
            <span class="badge badge-info" style="background: rgba(255,255,255,0.9); font-weight: 700;">
              Live reports with map integration
            </span>
          </div>
        </div>
        <div style="padding: var(--space-md); display: flex; justify-content: space-between; align-items: center;">
          <div style="font-size: 12px; color: var(--text-secondary);">
            Automated boundary and corridor drone surveying
          </div>
          <a href="#/analytics" class="btn btn-sm btn-cyan">Open Map</a>
        </div>
      </div>

      <!-- Action circles row -->
      <div style="display: flex; justify-content: space-around; padding: var(--space-md) 0;">
        <button class="action-circle" title="View Map" onclick="window.location.hash='#/analytics'">🗺️</button>
        <button class="action-circle" title="View Projects" onclick="window.location.hash='#/projects'">🏗️</button>
        <button class="action-circle" title="Connect Tools" onclick="window.location.hash='#/data-sources'">🔗</button>
        <button class="action-circle" title="Report" onclick="window.ModalManager.showReportProblemModal()">⚠️</button>
      </div>
    </div>
  `;
}
