import { getReminders, addReminder, deleteReminder } from "../data/reminders.js";
import { projectsData } from "../data/projects.js";

let currentYear = 2026;
let currentMonth = 8; // 8 = September (0-indexed)
let selectedDay = 8; // Selected 8th by default

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export function renderCalendarScreen() {
  const reminders = getReminders();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();

  const formattedMonthYear = `${monthNames[currentMonth]} ${currentYear}`;
  const selectedDateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(selectedDay).padStart(2, '0')}`;

  const dayReminders = reminders.filter(r => r.date === selectedDateStr);

  let cellsHtml = "";
  // Empty leading days
  for (let i = 0; i < firstDayIndex; i++) {
    cellsHtml += `<div class="calendar-day-cell empty"></div>`;
  }

  // Days of month
  for (let day = 1; day <= daysInMonth; day++) {
    const dStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const hasReminder = reminders.some(r => r.date === dStr);
    const isSelected = day === selectedDay;

    cellsHtml += `
      <div class="calendar-day-cell ${isSelected ? 'selected' : ''} ${hasReminder ? 'has-reminder' : ''}" onclick="window.handleSelectCalendarDay(${day})">
        ${day}
      </div>
    `;
  }

  return `
    <div class="calendar-screen-container">
      <div style="margin-bottom: var(--space-md);">
        <h1 style="font-size: 20px; font-weight: 800;">Reminder & Calendar</h1>
        <p class="subheadline">Schedule site audits, concrete pours, and milestone inspections</p>
      </div>

      <!-- Calendar Widget Card -->
      <div class="calendar-widget-card">
        <div class="calendar-header-nav">
          <button class="header-btn" onclick="window.handleCalendarMonthChange(-1)">&larr;</button>
          <div style="font-size: 15px; font-weight: 800; color: var(--text);">${formattedMonthYear}</div>
          <button class="header-btn" onclick="window.handleCalendarMonthChange(1)">&rarr;</button>
        </div>

        <div class="calendar-grid" style="margin-bottom: 6px;">
          <div class="calendar-weekday">S</div>
          <div class="calendar-weekday">M</div>
          <div class="calendar-weekday">T</div>
          <div class="calendar-weekday">W</div>
          <div class="calendar-weekday">T</div>
          <div class="calendar-weekday">F</div>
          <div class="calendar-weekday">S</div>
        </div>

        <div class="calendar-grid">
          ${cellsHtml}
        </div>
      </div>

      <!-- Add Reminder for Selected Date Form -->
      <div class="card" style="margin-bottom: var(--space-lg);">
        <div style="font-size: 13px; font-weight: 700; margin-bottom: 8px; display: flex; justify-content: space-between; align-items: center;">
          <span>Add Reminder for ${monthNames[currentMonth]} ${selectedDay}</span>
          <span class="badge badge-info">${dayReminders.length} scheduled</span>
        </div>

        <form id="add-reminder-form" onsubmit="event.preventDefault(); window.handleAddReminderSubmit();">
          <div class="form-group">
            <input type="text" id="rem-title-input" class="form-input" placeholder="e.g. Concrete Quality Test / Pier Inspection" required />
          </div>

          <div style="display: flex; gap: 8px; margin-bottom: var(--space-md);">
            <input type="time" id="rem-time-input" class="form-input" value="10:00" style="flex: 1;" required />
            <select id="rem-project-select" class="form-select" style="flex: 2;">
              <option value="all">General / All Projects</option>
              ${projectsData.map(p => `<option value="${p.id}">${p.shortName}</option>`).join("")}
            </select>
          </div>

          <button type="submit" class="btn btn-block btn-primary">
            + Add Reminder
          </button>
        </form>
      </div>

      <!-- Reminders List -->
      <div>
        <div style="font-size: 14px; font-weight: 700; margin-bottom: 8px;">Scheduled Reminders (${reminders.length})</div>

        ${reminders.length > 0 ? reminders.map(r => `
          <div class="reminder-list-item">
            <div>
              <div style="font-weight: 700; font-size: 13px;">${r.title}</div>
              <div style="font-size: 11px; color: var(--muted); margin-top: 2px;">
                📅 ${r.date} &bull; ⏰ ${r.time} &bull; <span style="color: var(--accent); font-weight: 600;">${r.projectName}</span>
              </div>
            </div>
            <button class="reminder-delete-btn" title="Delete Reminder" onclick="window.handleDeleteReminder('${r.id}')">
              🗑️
            </button>
          </div>
        `).join("") : `<div class="card" style="text-align: center; color: var(--muted);">No reminders scheduled yet.</div>`}
      </div>
    </div>
  `;
}

export function initCalendarEvents() {
  window.handleCalendarMonthChange = function(delta) {
    currentMonth += delta;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear -= 1;
    } else if (currentMonth > 11) {
      currentMonth = 0;
      currentYear += 1;
    }
    window.renderCurrentRoute();
  };

  window.handleSelectCalendarDay = function(day) {
    selectedDay = day;
    window.renderCurrentRoute();
  };

  window.handleAddReminderSubmit = function() {
    const titleInput = document.getElementById("rem-title-input");
    const timeInput = document.getElementById("rem-time-input");
    const projSelect = document.getElementById("rem-project-select");

    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(selectedDay).padStart(2, '0')}`;
    const selectedProj = projectsData.find(p => p.id === projSelect.value);

    addReminder({
      date: dateStr,
      title: titleInput.value,
      time: timeInput.value,
      projectId: projSelect.value,
      projectName: selectedProj ? selectedProj.name : "All Active Projects",
      type: "Site Task"
    });

    window.ToastManager.show("Reminder scheduled successfully!");
    window.renderCurrentRoute();
  };

  window.handleDeleteReminder = function(id) {
    deleteReminder(id);
    window.ToastManager.show("Reminder removed");
    window.renderCurrentRoute();
  };
}
