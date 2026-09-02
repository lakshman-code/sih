const STORAGE_KEY = "govtrack_integrations_v1";

const defaultIntegrations = [
  {
    id: "gis-arcgis",
    name: "ArcGIS Online / Portal",
    category: "GIS & Spatial Data",
    desc: "Geospatial layers, land boundaries, satellite orthomosaics",
    icon: "🗺️",
    status: "Connected",
    lastSync: "10 mins ago"
  },
  {
    id: "gis-qgis",
    name: "QGIS Cloud Server",
    category: "GIS & Spatial Data",
    desc: "Open GIS vector parcels and terrain slope modeling",
    icon: "🌐",
    status: "Connected",
    lastSync: "1 hour ago"
  },
  {
    id: "fin-sap",
    name: "SAP S/4HANA ERP",
    category: "Finance & Accounts",
    desc: "Procurement vouchers, vendor invoices, capital commitments",
    icon: "💳",
    status: "Connected",
    lastSync: "Just now"
  },
  {
    id: "fin-pfms",
    name: "PFMS / Treasury Gateway",
    category: "Finance & Accounts",
    desc: "Central & state public financial management treasury sync",
    icon: "🏛️",
    status: "Not connected",
    lastSync: "Never"
  },
  {
    id: "rep-powerbi",
    name: "Microsoft Power BI",
    category: "Reporting & Dashboards",
    desc: "Automated executive dashboard feeds and export pipelines",
    icon: "📊",
    status: "Connected",
    lastSync: "35 mins ago"
  },
  {
    id: "rep-tableau",
    name: "Tableau Server",
    category: "Reporting & Dashboards",
    desc: "Visual trend analytics and citizen portal exports",
    icon: "📈",
    status: "Not connected",
    lastSync: "Never"
  },
  {
    id: "pm-primavera",
    name: "Oracle Primavera P6",
    category: "Project Management",
    desc: "Critical path method (CPM) schedule & baseline tracking",
    icon: "⏱️",
    status: "Connected",
    lastSync: "4 hours ago"
  },
  {
    id: "pm-jira",
    name: "Jira Enterprise",
    category: "Project Management",
    desc: "Defect punch-lists and site engineering task tickets",
    icon: "📋",
    status: "Not connected",
    lastSync: "Never"
  }
];

export function getIntegrations() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch (e) {
    console.warn("Error loading integrations", e);
  }
  return defaultIntegrations;
}

export function saveIntegrations(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.warn("Error saving integrations", e);
  }
}

export function toggleIntegrationStatus(id) {
  const list = getIntegrations();
  const item = list.find(x => x.id === id);
  if (item) {
    if (item.status === "Connected") {
      item.status = "Not connected";
      item.lastSync = "Never";
    } else {
      item.status = "Connected";
      item.lastSync = "Just now";
    }
    saveIntegrations(list);
  }
  return list;
}
