import { ToastManager } from "./Toast.js";
import { getIntegrations, toggleIntegrationStatus } from "../data/integrations.js";
import { projectsData } from "../data/projects.js";

export class ModalManager {
  static openModal(htmlContent) {
    let overlay = document.getElementById("global-modal-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "global-modal-overlay";
      overlay.className = "modal-overlay";
      overlay.innerHTML = `<div class="modal-card" id="global-modal-content"></div>`;
      document.body.appendChild(overlay);

      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
          ModalManager.closeModal();
        }
      });
    }

    const contentBox = document.getElementById("global-modal-content");
    contentBox.innerHTML = htmlContent;

    // Attach close button listener if present
    const closeBtn = contentBox.querySelector(".modal-close-btn");
    if (closeBtn) {
      closeBtn.onclick = () => ModalManager.closeModal();
    }

    overlay.classList.add("open");
  }

  static closeModal() {
    const overlay = document.getElementById("global-modal-overlay");
    if (overlay) {
      overlay.classList.remove("open");
    }
  }

  // 1. Global Settings Modal
  static showGlobalSettings() {
    const content = `
      <div class="modal-header">
        <h3 style="font-size: 16px; font-weight: 700;">Global Settings</h3>
        <button class="modal-close-btn">&times;</button>
      </div>
      <div style="display: flex; flex-direction: column; gap: 12px; font-size: 13px;">
        <div style="display: flex; align-items: center; gap: 12px; padding: 8px 0; border-bottom: 1px solid var(--border-light);">
          <div style="width: 40px; height: 40px; border-radius: 50%; background: #101820; color: #fff; display: flex; align-items: center; justify-content: center; font-weight: bold;">GP</div>
          <div>
            <div style="font-weight: 700;">GovTrack Admin</div>
            <div style="font-size: 11px; color: var(--muted);">admin@govtrack.ai</div>
          </div>
        </div>

        <a href="#/settings" class="btn btn-secondary" style="justify-content: flex-start;" onclick="window.ModalManager.closeModal()">
          ⚙️ User Profile & Notifications
        </a>
        <a href="#/data-sources" class="btn btn-secondary" style="justify-content: flex-start;" onclick="window.ModalManager.closeModal()">
          🔗 Connected Tools & Data Sources
        </a>
        <a href="#/feedback" class="btn btn-secondary" style="justify-content: flex-start;" onclick="window.ModalManager.closeModal()">
          📝 Submit Problem Report
        </a>
        <a href="#/statistics" class="btn btn-secondary" style="justify-content: flex-start;" onclick="window.ModalManager.closeModal()">
          📊 System Metrics & Streak
        </a>

        <div style="padding-top: 10px; border-top: 1px solid var(--border-light);">
          <button class="btn btn-block btn-primary" onclick="window.ToastManager.show('Logged out successfully'); window.ModalManager.closeModal(); window.location.hash='#/';">
            Log Out
          </button>
        </div>
      </div>
    `;
    this.openModal(content);
  }

  // 2. Report Problem Modal
  static showReportProblemModal(defaultProjectId = "") {
    const projectOptions = projectsData.map(p => `
      <option value="${p.id}" ${p.id === defaultProjectId ? 'selected' : ''}>${p.name}</option>
    `).join("");

    const content = `
      <div class="modal-header">
        <h3 style="font-size: 16px; font-weight: 700;">Feedback & Report Problem</h3>
        <button class="modal-close-btn">&times;</button>
      </div>
      <form id="report-problem-form" style="display: flex; flex-direction: column; gap: 12px;" onsubmit="event.preventDefault(); window.ModalManager.handleReportSubmit();">
        <div class="form-group">
          <label class="form-label">Related Project</label>
          <select id="report-project-select" class="form-select">
            <option value="general">General Infrastructure Issue</option>
            ${projectOptions}
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">Problem Category</label>
          <select id="report-category-select" class="form-select">
            <option value="Schedule Delay">Schedule Delay / Inactivity</option>
            <option value="Quality Defect">Structural Quality / Defect</option>
            <option value="Safety Hazard">Public Safety Hazard</option>
            <option value="Budget Risk">Budget / Material Escalation</option>
            <option value="Environmental">Drainage / Environmental</option>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">Issue Description</label>
          <textarea id="report-desc-input" class="form-textarea" rows="3" placeholder="Describe the problem, location landmarks, and observed risks..." required></textarea>
        </div>

        <div class="form-group">
          <label class="form-label">Optional Attachment</label>
          <input type="file" class="form-input" style="padding: 6px;" />
        </div>

        <div style="display: flex; gap: 8px; margin-top: 6px;">
          <button type="button" class="btn btn-secondary" style="flex: 1;" onclick="window.ModalManager.closeModal()">Cancel</button>
          <button type="submit" class="btn btn-primary" style="flex: 1;">Submit Report</button>
        </div>
      </form>
    `;
    this.openModal(content);
  }

  static handleReportSubmit() {
    this.closeModal();
    ToastManager.show("Problem report submitted to municipal oversight queue!", "info");
  }

  // 3. Contact Modal
  static showContactModal(name = "Christina Paul", role = "Civil Engineer", phone = "+91 800 555 1234", email = "support@govtrack.ai") {
    const content = `
      <div class="modal-header">
        <h3 style="font-size: 16px; font-weight: 700;">Project Contact</h3>
        <button class="modal-close-btn">&times;</button>
      </div>
      <div style="display: flex; flex-direction: column; gap: 14px; text-align: center; padding: 10px 0;">
        <div style="width: 64px; height: 64px; border-radius: 50%; background: var(--primary-light); margin: 0 auto; display: flex; align-items: center; justify-content: center; font-size: 28px;">
          👷‍♀️
        </div>
        <div>
          <div style="font-size: 17px; font-weight: 700; color: var(--text);">${name}</div>
          <div style="font-size: 12px; color: var(--muted); font-weight: 600;">${role}</div>
        </div>
        
        <div style="background: var(--bg-subtle); border-radius: var(--radius-md); padding: 12px; text-align: left; font-size: 13px; display: flex; flex-direction: column; gap: 8px;">
          <div><strong>📞 Phone:</strong> <a href="tel:${phone}" style="color: var(--accent); text-decoration: none;">${phone}</a></div>
          <div><strong>✉️ Email:</strong> <a href="mailto:${email}" style="color: var(--accent); text-decoration: none;">${email}</a></div>
          <div><strong>📍 Office:</strong> Municipal Engineering Directorate, Chennai</div>
        </div>

        <button class="btn btn-accent btn-block" onclick="window.ToastManager.show('Connecting call to project desk...'); window.ModalManager.closeModal();">
          Direct Call Now
        </button>
      </div>
    `;
    this.openModal(content);
  }

  // 4. Integrations Modal
  static showIntegrationsModal() {
    const items = getIntegrations();
    const listHtml = items.map(item => `
      <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid var(--border-light);">
        <div style="display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 20px;">${item.icon}</span>
          <div>
            <div style="font-size: 13px; font-weight: 700;">${item.name}</div>
            <div style="font-size: 11px; color: var(--muted);">${item.category}</div>
          </div>
        </div>
        <button class="btn btn-sm ${item.status === 'Connected' ? 'btn-secondary' : 'btn-cyan'}" onclick="window.ModalManager.handleToggleIntegration('${item.id}')">
          ${item.status === 'Connected' ? 'Disconnect' : 'Connect'}
        </button>
      </div>
    `).join("");

    const content = `
      <div class="modal-header">
        <h3 style="font-size: 16px; font-weight: 700;">Connect Tools & Data Sources</h3>
        <button class="modal-close-btn">&times;</button>
      </div>
      <div style="display: flex; flex-direction: column; gap: 8px; max-height: 50vh; overflow-y: auto;">
        ${listHtml}
      </div>
      <div style="margin-top: 14px;">
        <button class="btn btn-block btn-primary" onclick="window.ModalManager.closeModal()">Done</button>
      </div>
    `;
    this.openModal(content);
  }

  static handleToggleIntegration(id) {
    toggleIntegrationStatus(id);
    ToastManager.show("Data source connection status updated", "info");
    this.showIntegrationsModal();
  }

  // 5. Help Modal
  static showHelpModal() {
    const content = `
      <div class="modal-header">
        <h3 style="font-size: 16px; font-weight: 700;">Help & Knowledge Center</h3>
        <button class="modal-close-btn">&times;</button>
      </div>
      <div style="display: flex; flex-direction: column; gap: 12px; font-size: 13px;">
        <details style="background: var(--bg-subtle); padding: 10px; border-radius: var(--radius-sm); cursor: pointer;">
          <summary style="font-weight: 700;">How are project delay risks calculated?</summary>
          <p style="font-size: 12px; color: var(--text-secondary); margin-top: 6px;">
            GovTrack AI analyzes GIS spatial drone feeds, daily contractor telemetry, and PFMS financial vouchers against Oracle Primavera P6 critical path baselines.
          </p>
        </details>

        <details style="background: var(--bg-subtle); padding: 10px; border-radius: var(--radius-sm); cursor: pointer;">
          <summary style="font-weight: 700;">Can citizens submit suggestions or complaints?</summary>
          <p style="font-size: 12px; color: var(--text-secondary); margin-top: 6px;">
            Yes, visit the Public Suggestions tab or use the Feedback & Report Problem form. High-upvoted suggestions are escalated directly to project directors.
          </p>
        </details>

        <details style="background: var(--bg-subtle); padding: 10px; border-radius: var(--radius-sm); cursor: pointer;">
          <summary style="font-weight: 700;">How to connect city GIS mapping systems?</summary>
          <p style="font-size: 12px; color: var(--text-secondary); margin-top: 6px;">
            Navigate to 'Connect Tools' and enable ArcGIS Online or QGIS Cloud integration with your municipal API key.
          </p>
        </details>

        <div style="padding-top: 10px; border-top: 1px solid var(--border-light); text-align: center;">
          <div style="font-size: 12px; color: var(--muted); margin-bottom: 8px;">Need further assistance?</div>
          <a href="mailto:support@govtrack.ai" class="btn btn-block btn-accent" onclick="window.ModalManager.closeModal()">Contact 24/7 Support Desk</a>
        </div>
      </div>
    `;
    this.openModal(content);
  }
}

window.ModalManager = ModalManager;
window.ToastManager = ToastManager;
