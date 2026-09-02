import { getProjectById, projectsData } from "../data/projects.js";
import { Simulation3D } from "../components/Simulation3D.js";

let currentTab = "overview"; // 'overview' | 'timeline' | 'simulation'
let selectedMilestoneIndex = 1;
let activeSimInstance = null;

export function renderProjectDetailScreen(projectId) {
  const project = getProjectById(projectId);
  const related = projectsData.filter(p => p.id !== project.id);

  return `
    <div class="project-detail-container">
      <!-- Breadcrumb -->
      <div class="breadcrumb-bar">
        <a href="#/statistics">Summary</a>
        <span>&gt;</span>
        <a href="#/projects">Projects</a>
        <span>&gt;</span>
        <span style="color: var(--text); font-weight: 600;">${project.shortName}</span>
      </div>

      <!-- Hero Banner Image -->
      <div class="project-hero-banner">
        <img src="${project.image}" alt="${project.name}" />
        <div style="position: absolute; bottom: 10px; left: 10px;">
          <span class="badge ${project.status === 'Delayed' ? 'badge-danger' : project.status === 'At Risk' ? 'badge-warning' : 'badge-success'}">
            ${project.status}
          </span>
        </div>
      </div>

      <!-- Detail Card Header -->
      <div class="project-detail-header-card">
        <h1 style="font-size: 18px; font-weight: 800; margin-bottom: 4px;">${project.name}</h1>
        <div style="font-size: 12px; color: var(--muted); margin-bottom: 8px;">
          📍 ${project.location} &bull; ${project.contractor}
        </div>
        
        <div style="font-size: 13px; font-weight: 600; color: ${project.status === 'Delayed' ? 'var(--danger)' : 'var(--brand-blue)'};">
          ${project.statusDetail} &bull; ${project.updatesCount} updates
        </div>

        <!-- Action Icons Row -->
        <div class="project-actions-row">
          <button class="action-circle" title="View GIS Map" onclick="window.location.hash='#/analytics'">
            🗺️
          </button>
          <button class="action-circle" title="View Statistics" onclick="window.location.hash='#/statistics'">
            📊
          </button>
          <button class="action-circle" title="Owner Status View" onclick="window.location.hash='#/status'">
            👷‍♀️
          </button>
          <button class="action-circle" title="Report Issue" onclick="window.ModalManager.showReportProblemModal('${project.id}')">
            ⚠️
          </button>
        </div>

        <!-- Tabs Navigation -->
        <div class="tabs-nav">
          <button class="tab-btn ${currentTab === 'overview' ? 'active' : ''}" onclick="window.switchDetailTab('overview', '${project.id}')">
            Overview
          </button>
          <button class="tab-btn ${currentTab === 'timeline' ? 'active' : ''}" onclick="window.switchDetailTab('timeline', '${project.id}')">
            Timeline
          </button>
          <button class="tab-btn ${currentTab === 'simulation' ? 'active' : ''}" onclick="window.switchDetailTab('simulation', '${project.id}')">
            3D Simulation
          </button>
        </div>

        <!-- Tab Content -->
        <div class="tab-content-area">
          ${renderTabContent(project)}
        </div>
      </div>

      <!-- Quantity / Milestone Phase Controller -->
      <div class="card" style="margin-bottom: var(--space-lg);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <span style="font-size: 12px; font-weight: 700; color: var(--text);">Milestone Phase Inspector</span>
          <span class="badge badge-info">Phase ${selectedMilestoneIndex} of ${project.milestones.length}</span>
        </div>
        
        <div class="quantity-control-panel">
          <button class="qty-btn" onclick="window.changeMilestoneStep(-1, '${project.id}')">&minus;</button>
          <span class="qty-number">Phase ${selectedMilestoneIndex}</span>
          <button class="qty-btn" onclick="window.changeMilestoneStep(1, '${project.id}')">+</button>
        </div>

        ${renderSelectedMilestoneBox(project)}
      </div>

      <!-- Related Projects Carousel -->
      <div style="margin-bottom: var(--space-lg);">
        <div style="font-size: 14px; font-weight: 700; margin-bottom: 4px;">Related projects</div>
        <div class="related-projects-scroll">
          ${related.map(rel => `
            <a href="#/projects/${rel.id}" class="related-project-mini">
              <img src="${rel.image}" alt="${rel.name}" loading="lazy" />
              <div class="related-project-mini-title">${rel.name}</div>
            </a>
          `).join("")}
        </div>
      </div>

      <!-- Bottom Quick Action Cards -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-md);">
        <button class="btn btn-secondary" style="font-size: 12px;" onclick="window.ModalManager.showContactModal('${project.owner.name}', '${project.owner.role}', '${project.owner.phone}', '${project.owner.email}')">
          📞 Contact Lead
        </button>
        <button class="btn btn-secondary" style="font-size: 12px;" onclick="window.location.hash='#/calendar'">
          📅 Set Reminder
        </button>
        <button class="btn btn-secondary" style="font-size: 12px;" onclick="window.location.hash='#/suggestions'">
          💬 Public Chat
        </button>
        <button class="btn btn-primary" style="font-size: 12px;" onclick="window.ModalManager.showReportProblemModal('${project.id}')">
          📝 Report Problem
        </button>
      </div>
    </div>
  `;
}

function renderTabContent(project) {
  if (currentTab === "overview") {
    return `
      <div style="display: flex; flex-direction: column; gap: 12px; font-size: 13px;">
        <p style="color: var(--text-secondary); line-height: 1.4;">
          ${project.description}
        </p>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; background: var(--bg-subtle); padding: 12px; border-radius: var(--radius-md);">
          <div>
            <div class="text-xs text-muted">Budget Spent</div>
            <div style="font-weight: 800; font-size: 14px;">${project.spentFormatted}</div>
          </div>
          <div>
            <div class="text-xs text-muted">Total Sanctioned</div>
            <div style="font-weight: 800; font-size: 14px;">${project.budgetFormatted}</div>
          </div>
          <div>
            <div class="text-xs text-muted">Start Date</div>
            <div style="font-weight: 700;">${project.startDate}</div>
          </div>
          <div>
            <div class="text-xs text-muted">Target Completion</div>
            <div style="font-weight: 700;">${project.expectedDate}</div>
          </div>
        </div>
      </div>
    `;
  }

  if (currentTab === "timeline") {
    return `
      <div style="display: flex; flex-direction: column; gap: 10px; padding: 4px 0;">
        ${project.timeline.map((item, i) => `
          <div style="display: flex; gap: 10px; align-items: flex-start;">
            <div style="width: 12px; height: 12px; border-radius: 50%; background: ${item.status === 'Done' ? 'var(--success)' : item.status === 'Delayed' ? 'var(--danger)' : 'var(--accent)'}; margin-top: 4px; flex-shrink: 0;"></div>
            <div>
              <div style="font-weight: 700; font-size: 12px;">${item.event}</div>
              <div style="font-size: 11px; color: var(--muted);">${item.date} &bull; <span style="font-weight: 600;">${item.status}</span></div>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  }

  if (currentTab === "simulation") {
    return `
      <div>
        <div class="simulation-canvas-container">
          <canvas id="detail-sim-canvas" class="simulation-canvas"></canvas>
          <div class="simulation-overlay-badge">
            🌐 Live 3D BIM Telemetry
          </div>
        </div>
        <div style="font-size: 11px; color: var(--muted); text-align: center;">
          Drag mouse / touch on 3D canvas to rotate structural mesh in real-time
        </div>
      </div>
    `;
  }
}

function renderSelectedMilestoneBox(project) {
  const milestone = project.milestones[selectedMilestoneIndex - 1] || project.milestones[0];
  return `
    <div style="background: var(--bg-subtle); border-radius: var(--radius-md); padding: 10px 14px; font-size: 12px;">
      <div style="font-weight: 700; margin-bottom: 2px;">${milestone.title}</div>
      <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
        <span class="text-muted">Status: <strong>${milestone.status}</strong></span>
        <span style="font-weight: 700;">${milestone.progress}%</span>
      </div>
      <div class="progress-bar-container">
        <div class="progress-bar-fill success" style="width: ${milestone.progress}%;"></div>
      </div>
    </div>
  `;
}

export function initProjectDetailEvents(projectId) {
  window.switchDetailTab = function(tab, id) {
    currentTab = tab;
    if (activeSimInstance) {
      activeSimInstance.destroy();
      activeSimInstance = null;
    }
    window.renderCurrentRoute();

    if (tab === "simulation") {
      setTimeout(() => {
        const canvas = document.getElementById("detail-sim-canvas");
        if (canvas) {
          activeSimInstance = new Simulation3D(canvas, "highway");
        }
      }, 50);
    }
  };

  window.changeMilestoneStep = function(delta, id) {
    const project = getProjectById(id);
    selectedMilestoneIndex = Math.max(1, Math.min(project.milestones.length, selectedMilestoneIndex + delta));
    window.renderCurrentRoute();
  };

  if (currentTab === "simulation") {
    setTimeout(() => {
      const canvas = document.getElementById("detail-sim-canvas");
      if (canvas) {
        activeSimInstance = new Simulation3D(canvas, "highway");
      }
    }, 50);
  }
}
