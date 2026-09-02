import { Simulation3D } from "../components/Simulation3D.js";

let liveSimInstance = null;

export function renderReportsScreen() {
  return `
    <div class="reports-container">
      <div style="margin-bottom: var(--space-md);">
        <h1 style="font-size: 19px; font-weight: 800;">Live News Reports</h1>
        <p class="subheadline">See live demos and simulations</p>
      </div>

      <!-- 3D Interactive Simulation Card -->
      <div class="card" style="margin-bottom: var(--space-lg); padding: var(--space-md);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <div>
            <div style="font-size: 14px; font-weight: 700;">Infrastructure 3D Simulation</div>
            <div style="font-size: 11px; color: var(--muted);">Real-time parametric BIM model</div>
          </div>
          <span class="badge badge-success">Active Feed</span>
        </div>

        <div class="simulation-canvas-container" style="height: 220px;">
          <canvas id="live-reports-sim-canvas" class="simulation-canvas"></canvas>
          <div class="simulation-overlay-badge">
            3D simulation of the project
          </div>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
          <span style="font-size: 11px; color: var(--muted);">Drag on model to rotate viewpoint</span>
          <button class="btn btn-sm btn-cyan" onclick="window.ToastManager.show('Calibrating digital twin sensors...');">
            Recalibrate Mesh
          </button>
        </div>
      </div>

      <!-- Live News / Dispatch Cards -->
      <div style="display: flex; flex-direction: column; gap: var(--space-md);">
        <div class="card">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
            <span class="badge badge-info">Corridor Update</span>
            <span style="font-size: 11px; color: var(--muted);">35 mins ago</span>
          </div>
          <div style="font-weight: 700; font-size: 14px; margin-bottom: 4px;">Patna Purnea NE-9 River Bridge Span Cast</div>
          <p style="font-size: 12px; color: var(--text-secondary); line-height: 1.4;">
            Prestressed concrete girder installation completed on Pier 18 ahead of forecasted monsoon water rise.
          </p>
        </div>

        <div class="card">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
            <span class="badge badge-warning">Weather Advisory</span>
            <span style="font-size: 11px; color: var(--muted);">2 hours ago</span>
          </div>
          <div style="font-weight: 700; font-size: 14px; margin-bottom: 4px;">Coastal Bridge Offshore Wave Warning</div>
          <p style="font-size: 12px; color: var(--text-secondary); line-height: 1.4;">
            Marine safety team paused deck hydro-demolition due to 3.2m swells in Mumbai harbor. Resuming tomorrow morning.
          </p>
        </div>
      </div>
    </div>
  `;
}

export function initReportsEvents() {
  if (liveSimInstance) {
    liveSimInstance.destroy();
    liveSimInstance = null;
  }
  setTimeout(() => {
    const canvas = document.getElementById("live-reports-sim-canvas");
    if (canvas) {
      liveSimInstance = new Simulation3D(canvas, "bridge");
    }
  }, 50);
}
