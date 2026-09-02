export function renderFeedbackScreen() {
  return `
    <div class="feedback-screen-container">
      <div style="margin-bottom: var(--space-lg);">
        <div style="font-size: 13px; font-weight: 700; color: var(--brand-blue); text-transform: uppercase; letter-spacing: 0.06em;">
          GovTrack AI
        </div>
        <h1 style="font-size: 22px; font-weight: 800; margin-top: 2px;">
          Feedback & Report
        </h1>
        <p style="font-size: 13px; color: var(--text-secondary); margin-top: 4px;">
          Direct citizen and contractor escalation channel for municipal public works.
        </p>
      </div>

      <!-- Problem Reporting Card -->
      <div class="card card-primary" style="margin-bottom: var(--space-lg); padding: var(--space-xl);">
        <h3 style="font-size: 16px; font-weight: 800; color: #08343f; margin-bottom: 6px;">
          There is a problem addressed in
        </h3>
        <p style="font-size: 12px; color: #0d5a6d; line-height: 1.4; margin-bottom: 16px;">
          Report contractor delays, drainage blockages, road defects, or public safety issues with geotagged municipal logging.
        </p>

        <button class="btn btn-primary btn-block" style="padding: 12px 18px; font-size: 14px;" onclick="window.ModalManager.showReportProblemModal()">
          Report Problem Now &rarr;
        </button>
      </div>

      <!-- Official Contact Details Card -->
      <div class="card" style="display: flex; flex-direction: column; gap: 14px; margin-bottom: var(--space-lg);">
        <div style="font-size: 14px; font-weight: 700; border-bottom: 1px solid var(--border-light); padding-bottom: 8px;">
          Municipal Liaison Office
        </div>

        <div style="display: flex; align-items: center; gap: 12px;">
          <div style="width: 36px; height: 36px; border-radius: var(--radius-sm); background: var(--bg-subtle); display: flex; align-items: center; justify-content: center; font-size: 18px;">
            ✉️
          </div>
          <div>
            <div class="text-xs text-muted">Official Email</div>
            <a href="mailto:support@govtrack.ai" style="font-weight: 700; color: var(--accent); text-decoration: none; font-size: 13px;">
              support@govtrack.ai
            </a>
          </div>
        </div>

        <div style="display: flex; align-items: center; gap: 12px;">
          <div style="width: 36px; height: 36px; border-radius: var(--radius-sm); background: var(--bg-subtle); display: flex; align-items: center; justify-content: center; font-size: 18px;">
            📞
          </div>
          <div>
            <div class="text-xs text-muted">24/7 Helpline</div>
            <a href="tel:+918005551234" style="font-weight: 700; color: var(--text); text-decoration: none; font-size: 13px;">
              +91 800 555 1234
            </a>
          </div>
        </div>

        <div style="display: flex; align-items: center; gap: 12px;">
          <div style="width: 36px; height: 36px; border-radius: var(--radius-sm); background: var(--bg-subtle); display: flex; align-items: center; justify-content: center; font-size: 18px;">
            📍
          </div>
          <div>
            <div class="text-xs text-muted">Headquarters</div>
            <div style="font-weight: 700; font-size: 13px;">
              Chennai, Tamil Nadu
            </div>
          </div>
        </div>
      </div>

      <!-- Social & Escalation -->
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 0 8px;">
        <span style="font-size: 12px; color: var(--muted);">Follow official updates:</span>
        <div style="display: flex; gap: 12px; font-size: 18px;">
          <a href="https://x.com" target="_blank" style="text-decoration: none; color: var(--text);">𝕏</a>
          <a href="https://linkedin.com" target="_blank" style="text-decoration: none; color: var(--text);">💼</a>
          <a href="https://gov.in" target="_blank" style="text-decoration: none; color: var(--text);">🏛️</a>
        </div>
      </div>
    </div>
  `;
}
