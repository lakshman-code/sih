export function renderAnalyticsScreen() {
  return `
    <div class="analytics-container">
      <div style="margin-bottom: var(--space-md);">
        <h1 style="font-size: 19px; font-weight: 800; line-height: 1.25;">
          Solutions for municipalities and agencies
        </h1>
        <p style="font-size: 13px; color: var(--text-secondary); margin-top: 6px; line-height: 1.4;">
          Whether you're a planner, contractor, or resident, GovTrack AI surfaces clear project status, budget trends, and AI-flagged risks.
        </p>
      </div>

      <!-- Main GIS Satellite Visual Card -->
      <div class="card" style="padding: 0; overflow: hidden; margin-bottom: var(--space-lg);">
        <div style="position: relative; width: 100%; height: 210px;">
          <img src="assets/images/gis_map.jpg" alt="GIS Map Telemetry" style="width: 100%; height: 100%; object-fit: cover;" />
          <div style="position: absolute; bottom: 12px; left: 12px; right: 12px; display: flex; justify-content: space-between; align-items: center;">
            <span class="badge badge-info" style="backdrop-filter: blur(8px); background: rgba(255,255,255,0.9); font-weight: 700;">
              🛰️ Multi-Layer Spatial Telemetry
            </span>
            <a href="#/projects" class="btn btn-sm btn-cyan" style="box-shadow: 0 4px 10px rgba(0,0,0,0.2);">
              Try Simulator
            </a>
          </div>
        </div>

        <div style="padding: var(--space-lg); display: flex; flex-direction: column; gap: 12px;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div>
              <div style="font-size: 15px; font-weight: 700;">Urban Spatial Risk Index</div>
              <div style="font-size: 11px; color: var(--muted);">Real-time municipal telemetry stream</div>
            </div>
            <span class="badge badge-success">Live Sync: 99.8%</span>
          </div>

          <!-- Risk breakdown bars -->
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 11px; font-weight: 600; margin-bottom: 2px;">
                <span>Schedule Adherence Rate</span>
                <span>88.4%</span>
              </div>
              <div class="progress-bar-container">
                <div class="progress-bar-fill success" style="width: 88.4%;"></div>
              </div>
            </div>

            <div>
              <div style="display: flex; justify-content: space-between; font-size: 11px; font-weight: 600; margin-bottom: 2px;">
                <span>Budget Outlay Efficiency</span>
                <span>94.1%</span>
              </div>
              <div class="progress-bar-container">
                <div class="progress-bar-fill success" style="width: 94.1%;"></div>
              </div>
            </div>

            <div>
              <div style="display: flex; justify-content: space-between; font-size: 11px; font-weight: 600; margin-bottom: 2px;">
                <span>Monsoon Drainage Risk Exposure</span>
                <span class="text-warning">32.0%</span>
              </div>
              <div class="progress-bar-container">
                <div class="progress-bar-fill warning" style="width: 32%;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Action Cards Grid -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-md);">
        <div class="card" style="padding: 14px;">
          <div style="font-size: 20px; margin-bottom: 4px;">📈</div>
          <div style="font-weight: 700; font-size: 13px;">Predictive AI</div>
          <p style="font-size: 11px; color: var(--muted); margin-top: 2px;">Detect material supply chain bottlenecks before delays happen.</p>
        </div>

        <div class="card" style="padding: 14px;">
          <div style="font-size: 20px; margin-bottom: 4px;">📑</div>
          <div style="font-weight: 700; font-size: 13px;">Audit Reports</div>
          <p style="font-size: 11px; color: var(--muted); margin-top: 2px;">Instant automated CAG & state public expenditure compliance.</p>
        </div>
      </div>
    </div>
  `;
}
