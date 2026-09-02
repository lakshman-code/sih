export function renderProjectStatusScreen() {
  return `
    <div class="project-status-screen-container">
      <!-- Status Card -->
      <div class="status-card-container">
        <!-- Blue Status Area -->
        <div class="status-blue-banner">
          <div class="status-owner-profile">
            <img src="assets/images/christina_paul.jpg" alt="Christina Paul" class="status-owner-avatar" />
            <div>
              <div class="status-owner-name">Christina Paul</div>
              <div class="status-owner-role">Civil Engineer &bull; Project Lead</div>
            </div>
          </div>

          <div class="status-budget-box">
            <div class="text-xs text-muted" style="color: #0f5466;">Budget Utilized</div>
            <div class="status-budget-num">₹84 Cr / ₹100 Cr</div>
            <div style="font-size: 11px; font-weight: 600; color: #073540; margin-top: 2px;">
              84% of the allocated budget used
            </div>
          </div>
        </div>

        <!-- Schedule Warning Banner -->
        <div class="status-warning-banner">
          <span>⚠️</span>
          <span>4 months behind schedule</span>
        </div>

        <!-- Body Details -->
        <div class="status-body-content">
          <div>
            <span class="badge badge-danger" style="margin-bottom: 6px;">Delayed</span>
            <h2 style="font-size: 18px; font-weight: 800; color: var(--text);">Stormwater Canal Repair</h2>
            <div style="font-size: 13px; color: var(--muted); margin-top: 2px;">
              📍 Chennai, Tamil Nadu
            </div>
          </div>

          <div style="background: var(--bg-subtle); border-radius: var(--radius-md); padding: 12px; font-size: 12px; display: flex; flex-direction: column; gap: 6px;">
            <div style="display: flex; justify-content: space-between;">
              <span class="text-muted">Started:</span>
              <strong>Jan 2025</strong>
            </div>
            <div style="display: flex; justify-content: space-between;">
              <span class="text-muted">Planned:</span>
              <strong>Aug 2026</strong>
            </div>
            <div style="display: flex; justify-content: space-between;">
              <span class="text-muted">Expected:</span>
              <strong style="color: var(--danger);">Dec 2026</strong>
            </div>
          </div>

          <div>
            <div style="display: flex; justify-content: space-between; font-size: 12px; font-weight: 700; margin-bottom: 4px;">
              <span>Progress</span>
              <span>68% Complete</span>
            </div>
            <div class="progress-bar-container">
              <div class="progress-bar-fill danger" style="width: 68%;"></div>
            </div>
          </div>

          <!-- 3 Circular Action Icons (Map, Analytics, AI/Robot) -->
          <div style="display: flex; justify-content: space-around; margin: 6px 0;">
            <button class="action-circle" title="Map View" onclick="window.location.hash='#/analytics'">
              🗺️
            </button>
            <button class="action-circle" title="Analytics View" onclick="window.location.hash='#/statistics'">
              📊
            </button>
            <button class="action-circle" title="GovTrack AI Chat" onclick="window.location.hash='#/suggestions'">
              🤖
            </button>
          </div>

          <!-- Start & Contact Buttons -->
          <div style="display: flex; gap: 10px; margin-top: 6px;">
            <button class="btn btn-primary" style="flex: 1;" onclick="window.location.hash='#/projects/stormwater-canal'">
              Start Workspace
            </button>
            <button class="btn btn-secondary" style="flex: 1;" onclick="window.ModalManager.showContactModal('Christina Paul', 'Civil Engineer', '+91 800 555 1234', 'christina.paul@govtrack.ai')">
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}
