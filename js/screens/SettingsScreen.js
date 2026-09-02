const SETTINGS_STORAGE_KEY = "govtrack_user_settings_v1";

const defaultSettings = {
  firstName: "Christina",
  lastName: "Paul",
  country: "India",
  weeklyReports: true,
  monthlyDigest: true,
  deploymentTriggers: false,
  securityCheck: true
};

export function getSavedSettings() {
  try {
    const saved = localStorage.getItem(SETTINGS_STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch (e) {
    console.warn("Failed to load settings", e);
  }
  return { ...defaultSettings };
}

export function saveSettings(settings) {
  try {
    localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
  } catch (e) {
    console.warn("Failed to save settings", e);
  }
}

export function renderSettingsScreen() {
  const s = getSavedSettings();

  return `
    <div class="settings-container">
      <div style="margin-bottom: var(--space-lg);">
        <h1 style="font-size: 20px; font-weight: 800;">User settings</h1>
        <p class="subheadline">Manage profile information, alert subscriptions, and security</p>
      </div>

      <form id="user-settings-form" onsubmit="event.preventDefault(); window.handleSaveSettings();">
        <!-- Personal Information Card -->
        <div class="card" style="margin-bottom: var(--space-md);">
          <div style="font-size: 14px; font-weight: 700; margin-bottom: 12px; border-bottom: 1px solid var(--border-light); padding-bottom: 6px;">
            Personal information
          </div>

          <div class="form-group">
            <label class="form-label">First Name</label>
            <input type="text" id="set-firstname" class="form-input" value="${s.firstName}" required />
          </div>

          <div class="form-group">
            <label class="form-label">Last Name</label>
            <input type="text" id="set-lastname" class="form-input" value="${s.lastName}" required />
          </div>

          <div class="form-group">
            <label class="form-label">Country</label>
            <select id="set-country" class="form-select">
              <option value="India" ${s.country === 'India' ? 'selected' : ''}>India</option>
              <option value="United States" ${s.country === 'United States' ? 'selected' : ''}>United States</option>
              <option value="United Kingdom" ${s.country === 'United Kingdom' ? 'selected' : ''}>United Kingdom</option>
              <option value="Singapore" ${s.country === 'Singapore' ? 'selected' : ''}>Singapore</option>
              <option value="Germany" ${s.country === 'Germany' ? 'selected' : ''}>Germany</option>
            </select>
          </div>
        </div>

        <!-- Notifications Card -->
        <div class="card" style="margin-bottom: var(--space-md);">
          <div style="font-size: 14px; font-weight: 700; margin-bottom: 8px; border-bottom: 1px solid var(--border-light); padding-bottom: 6px;">
            Notifications
          </div>

          <div class="switch-group">
            <div>
              <div style="font-weight: 600; font-size: 13px;">Weekly reports</div>
              <div style="font-size: 11px; color: var(--muted);">Digest of active site milestone changes</div>
            </div>
            <label class="switch">
              <input type="checkbox" id="set-weekly" ${s.weeklyReports ? 'checked' : ''} />
              <span class="switch-slider"></span>
            </label>
          </div>

          <div class="switch-group">
            <div>
              <div style="font-weight: 600; font-size: 13px;">Monthly digest</div>
              <div style="font-size: 11px; color: var(--muted);">Comprehensive executive capex audits</div>
            </div>
            <label class="switch">
              <input type="checkbox" id="set-monthly" ${s.monthlyDigest ? 'checked' : ''} />
              <span class="switch-slider"></span>
            </label>
          </div>

          <div class="switch-group">
            <div>
              <div style="font-weight: 600; font-size: 13px;">Deployment triggers</div>
              <div style="font-size: 11px; color: var(--muted);">Alerts when concrete pours / girders are launched</div>
            </div>
            <label class="switch">
              <input type="checkbox" id="set-triggers" ${s.deploymentTriggers ? 'checked' : ''} />
              <span class="switch-slider"></span>
            </label>
          </div>
        </div>

        <!-- Security Card -->
        <div class="card" style="margin-bottom: var(--space-lg);">
          <div style="font-size: 14px; font-weight: 700; margin-bottom: 8px; border-bottom: 1px solid var(--border-light); padding-bottom: 6px;">
            Security
          </div>

          <div class="switch-group" style="border-bottom: none;">
            <div>
              <div style="font-weight: 600; font-size: 13px;">Run security check upon login</div>
              <div style="font-size: 11px; color: var(--muted);">Validate Aadhaar/OTP cryptographic tokens</div>
            </div>
            <label class="switch">
              <input type="checkbox" id="set-security" ${s.securityCheck ? 'checked' : ''} />
              <span class="switch-slider"></span>
            </label>
          </div>
        </div>

        <!-- Action Buttons -->
        <div style="display: flex; gap: 10px;">
          <button type="button" class="btn btn-secondary" style="flex: 1;" onclick="window.handleCancelSettings()">
            Cancel
          </button>
          <button type="submit" class="btn btn-primary" style="flex: 1;">
            Save
          </button>
        </div>
      </form>
    </div>
  `;
}

export function initSettingsEvents() {
  window.handleSaveSettings = function() {
    const newSettings = {
      firstName: document.getElementById("set-firstname").value,
      lastName: document.getElementById("set-lastname").value,
      country: document.getElementById("set-country").value,
      weeklyReports: document.getElementById("set-weekly").checked,
      monthlyDigest: document.getElementById("set-monthly").checked,
      deploymentTriggers: document.getElementById("set-triggers").checked,
      securityCheck: document.getElementById("set-security").checked
    };
    saveSettings(newSettings);
    window.ToastManager.show("Settings saved successfully!");
  };

  window.handleCancelSettings = function() {
    window.ToastManager.show("Changes reverted to saved settings");
    window.renderCurrentRoute();
  };
}
