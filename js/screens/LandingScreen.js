export function renderLandingScreen() {
  return `
    <div class="landing-container">
      <!-- Hero Presentation Card -->
      <div class="landing-hero-card">
        <div class="landing-brand-mark">
          GT
        </div>
        <div class="landing-welcome-sub">Welcome to GovTrack AI</div>
        <h1 class="landing-title">
          Track Projects.<br/>
          Spot Risks.<br/>
          Take Action.
        </h1>
        <p style="font-size: 13px; color: var(--text-secondary); max-width: 320px; margin-bottom: 8px;">
          Next-generation infrastructure oversight and risk intelligence for government agencies and communities.
        </p>

        <!-- Feature chips -->
        <div class="landing-icons-row">
          <div class="landing-feature-chip">
            <span>🛡️</span> Risk AI
          </div>
          <div class="landing-feature-chip">
            <span>📊</span> GIS Sync
          </div>
          <div class="landing-feature-chip">
            <span>⚡</span> Telemetry
          </div>
        </div>

        <a href="#/projects" class="btn btn-primary" style="padding: 12px 32px; font-size: 14px;">
          Explore Projects &rarr;
        </a>
      </div>

      <!-- Authentication / Citizen Login Card -->
      <div class="landing-login-card">
        <div class="login-header-title">Login to GovTrack AI</div>
        <div style="font-size: 12px; color: var(--muted); margin-bottom: 16px;">
          Enter your citizen or municipal officer credentials
        </div>

        <form id="landing-login-form" onsubmit="event.preventDefault(); window.handleLandingLogin();">
          <div class="form-group">
            <label class="form-label" for="login-name">Name</label>
            <input id="login-name" type="text" class="form-input" placeholder="e.g. Christina Paul" value="Christina Paul" required />
          </div>

          <div class="form-group">
            <label class="form-label" for="login-contact">Phone / Email</label>
            <input id="login-contact" type="text" class="form-input" placeholder="e.g. christina@govtrack.ai" value="christina@govtrack.ai" required />
          </div>

          <div class="form-group">
            <label class="form-label" for="login-aadhaar">Aadhaar Number</label>
            <input id="login-aadhaar" type="password" class="form-input" placeholder="•••• •••• 9842" value="9842 1204 8831" required />
          </div>

          <button type="submit" class="btn btn-block btn-accent" style="margin-top: 8px;">
            Secure Login
          </button>
        </form>
      </div>
    </div>
  `;
}

export function initLandingScreenEvents() {
  window.handleLandingLogin = function() {
    const name = document.getElementById("login-name").value;
    window.ToastManager.show(`Welcome back, ${name}!`);
    window.location.hash = "#/projects";
  };
}
