import { projectsData } from "../data/projects.js";

let currentFilter = "All";
let currentSearch = "";
let currentSection = "projects"; // 'projects' | 'issues'

export function renderProjectsScreen() {
  const filteredProjects = projectsData.filter(p => {
    const matchesFilter = currentFilter === "All" || p.status.toLowerCase() === currentFilter.toLowerCase();
    const matchesSearch = p.name.toLowerCase().includes(currentSearch.toLowerCase()) || 
                          p.location.toLowerCase().includes(currentSearch.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const cardsHtml = currentSection === "projects" 
    ? (filteredProjects.length > 0 
        ? filteredProjects.map(p => renderProjectCard(p)).join("")
        : `<div class="card" style="text-align: center; color: var(--muted); padding: 32px 16px;">No projects found matching current filter.</div>`
      )
    : renderIssuesList();

  return `
    <div class="projects-container">
      <!-- Section Toggle (Projects / Issues) -->
      <div class="tabs-nav" style="margin-bottom: 12px;">
        <button class="tab-btn ${currentSection === 'projects' ? 'active' : ''}" onclick="window.switchProjectSection('projects')">
          Projects (${projectsData.length})
        </button>
        <button class="tab-btn ${currentSection === 'issues' ? 'active' : ''}" onclick="window.switchProjectSection('issues')">
          Issues & Risks (10)
        </button>
      </div>

      <!-- Search & Filters -->
      <div class="projects-header-controls">
        <div class="search-filter-bar">
          <div class="search-input-wrapper">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input type="text" id="project-search-input" class="search-input" placeholder="Search project name or city..." value="${currentSearch}" />
          </div>
          <button class="header-btn" title="Open Filter Options" onclick="window.ModalManager.showGlobalSettings()">
            ⚙️
          </button>
        </div>

        <div class="filter-pills">
          ${["All", "On Track", "Delayed", "At Risk", "Completed"].map(pill => `
            <button class="filter-pill ${currentFilter === pill ? 'active' : ''}" onclick="window.setProjectFilter('${pill}')">
              ${pill}
            </button>
          `).join("")}
        </div>
      </div>

      <!-- Project Cards List -->
      <div class="project-cards-list">
        ${cardsHtml}
      </div>
    </div>
  `;
}

function getBadgeClass(status) {
  switch (status) {
    case "On Track": return "badge-success";
    case "Delayed": return "badge-danger";
    case "At Risk": return "badge-warning";
    case "Completed": return "badge-info";
    default: return "badge-info";
  }
}

function renderProjectCard(p) {
  const badgeClass = getBadgeClass(p.status);

  return `
    <div class="project-card-item">
      <div class="project-card-image-wrap">
        <img src="${p.image}" alt="${p.name}" class="project-card-img" loading="lazy" />
        <div class="project-card-badge-top">
          <span class="badge ${badgeClass}">${p.status}</span>
        </div>
      </div>

      <div class="project-card-body">
        <div>
          <h3 class="project-card-title">${p.name}</h3>
          <div class="project-card-location">
            <span>📍</span> ${p.location}
          </div>
        </div>

        <div class="project-meta-row">
          <div>
            <span class="text-xs text-muted">Budget</span>
            <div style="font-weight: 700;">${p.spentFormatted} / ${p.budgetFormatted}</div>
          </div>
          <div style="text-align: right;">
            <span class="text-xs text-muted">Progress</span>
            <div style="font-weight: 700;">${p.progress}%</div>
          </div>
        </div>

        <div class="progress-bar-container">
          <div class="progress-bar-fill ${p.status === 'Delayed' ? 'danger' : p.status === 'At Risk' ? 'warning' : 'success'}" style="width: ${p.progress}%;"></div>
        </div>

        <p style="font-size: 12px; color: var(--text-secondary); line-height: 1.35;">
          ${p.description}
        </p>

        <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 2px;">
          <span style="font-size: 11px; color: var(--muted); font-weight: 600;">
            ⚠️ ${p.issues.length} flagged risk items
          </span>
          <a href="#/projects/${p.id}" class="project-view-link">
            View details &rarr;
          </a>
        </div>
      </div>
    </div>
  `;
}

function renderIssuesList() {
  const allIssues = projectsData.flatMap(p => p.issues.map(iss => ({ ...iss, projectName: p.name, projectId: p.id })));

  return `
    <div style="display: flex; flex-direction: column; gap: 10px;">
      ${allIssues.map(iss => `
        <div class="card" style="padding: 14px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
            <span class="badge ${iss.severity === 'Urgent' ? 'badge-danger' : iss.severity === 'Warning' ? 'badge-warning' : 'badge-info'}">${iss.severity}</span>
            <span style="font-size: 11px; color: var(--muted);">${iss.date}</span>
          </div>
          <div style="font-weight: 700; font-size: 13px; margin-bottom: 4px;">${iss.title}</div>
          <div style="font-size: 11px; color: var(--muted);">Project: <a href="#/projects/${iss.projectId}" style="color: var(--accent); font-weight: 600;">${iss.projectName}</a></div>
          <div style="margin-top: 8px; display: flex; justify-content: flex-end;">
            <button class="btn btn-sm btn-secondary" onclick="window.ToastManager.show('Issue #${iss.id} assigned to field engineering team');">
              Acknowledge & Assign
            </button>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

export function initProjectsScreenEvents() {
  window.setProjectFilter = function(filter) {
    currentFilter = filter;
    window.renderCurrentRoute();
  };

  window.switchProjectSection = function(section) {
    currentSection = section;
    window.renderCurrentRoute();
  };

  const searchInput = document.getElementById("project-search-input");
  if (searchInput) {
    searchInput.oninput = (e) => {
      currentSearch = e.target.value;
      const list = document.querySelector(".project-cards-list");
      if (list && currentSection === "projects") {
        const filteredProjects = projectsData.filter(p => {
          const matchesFilter = currentFilter === "All" || p.status.toLowerCase() === currentFilter.toLowerCase();
          const matchesSearch = p.name.toLowerCase().includes(currentSearch.toLowerCase()) || 
                                p.location.toLowerCase().includes(currentSearch.toLowerCase());
          return matchesFilter && matchesSearch;
        });
        list.innerHTML = filteredProjects.length > 0 
          ? filteredProjects.map(p => renderProjectCard(p)).join("")
          : `<div class="card" style="text-align: center; color: var(--muted); padding: 32px 16px;">No projects found.</div>`;
      }
    };
  }
}
