const STORAGE_KEY = "govtrack_reminders_v1";

const defaultReminders = [
  {
    id: "rem-1",
    date: "2026-09-08",
    title: "Stormwater Canal Phase 3 Quality Audit",
    time: "10:00 AM",
    projectId: "stormwater-canal",
    projectName: "Stormwater Canal Repair",
    type: "Inspection"
  },
  {
    id: "rem-2",
    date: "2026-09-15",
    title: "Patna Purnea Flyover Girder Load Test",
    time: "02:30 PM",
    projectId: "patna-purnea",
    projectName: "Patna to Purnea (NE-9)",
    type: "Milestone"
  },
  {
    id: "rem-3",
    date: "2026-09-22",
    title: "Coastal Bridge Sonar Sensor Calibration",
    time: "11:15 AM",
    projectId: "coastal-bridge",
    projectName: "Coastal Bridge Rehab",
    type: "Maintenance"
  },
  {
    id: "rem-4",
    date: "2026-09-28",
    title: "Monthly Municipal Budget Reconciliation",
    time: "04:00 PM",
    projectId: "all",
    projectName: "All Active Projects",
    type: "Finance"
  }
];

export function getReminders() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.warn("Error reading reminders from localStorage", e);
  }
  return defaultReminders;
}

export function saveReminders(reminders) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reminders));
  } catch (e) {
    console.warn("Error saving reminders to localStorage", e);
  }
}

export function addReminder(item) {
  const current = getReminders();
  const newItem = {
    id: "rem-" + Date.now(),
    ...item
  };
  const updated = [newItem, ...current];
  saveReminders(updated);
  return updated;
}

export function deleteReminder(id) {
  const current = getReminders();
  const updated = current.filter(r => r.id !== id);
  saveReminders(updated);
  return updated;
}
