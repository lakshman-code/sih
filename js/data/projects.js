export const projectsData = [
  {
    id: "patna-purnea",
    name: "Patna to Purnea (NE-9)",
    shortName: "NE-9 Expressway",
    category: "Highway & Expressways",
    location: "Bihar, India",
    image: "assets/images/patna_purnea.jpg",
    budget: 1000000000,
    budgetFormatted: "₹1,000 Cr",
    spent: 840000000,
    spentFormatted: "₹840 Cr",
    progress: 84,
    status: "On Track",
    statusDetail: "On track with risk alerts",
    riskLevel: "Medium",
    updatesCount: 14,
    startDate: "Jan 2025",
    plannedDate: "Aug 2026",
    expectedDate: "Dec 2026",
    delayMonths: 4,
    contractor: "National Highways Infra Ltd",
    owner: {
      name: "Christina Paul",
      role: "Civil Engineer & Project Director",
      avatar: "assets/images/christina_paul.jpg",
      phone: "+91 98402 11982",
      email: "christina.paul@govtrack.ai"
    },
    description: "Construction of a 4-lane greenfield access-controlled expressway connecting Patna to Purnea via Darbhanga, boosting regional economic corridor connectivity.",
    issues: [
      { id: "iss-1", title: "Monsoon soil compaction delay at KM 142", severity: "Warning", date: "2 days ago", resolved: false },
      { id: "iss-2", title: "Flyover precast girder fabrication pending inspection", severity: "Notice", date: "5 days ago", resolved: true }
    ],
    milestones: [
      { phase: 1, title: "Land Acquisition & Utility Relocation", progress: 100, status: "Completed" },
      { phase: 2, title: "Earthwork & Sub-base Formation", progress: 95, status: "In Progress" },
      { phase: 3, title: "Major Bridges & Flyover Piers", progress: 78, status: "In Progress" },
      { phase: 4, title: "Pavement & Bituminous Layer", progress: 54, status: "In Progress" },
      { phase: 5, title: "Signage, Lighting & Toll Plazas", progress: 15, status: "Scheduled" }
    ],
    timeline: [
      { date: "Aug 2026", event: "Section 1 (Km 0-60) Trial Run", status: "Upcoming" },
      { date: "May 2026", event: "Ganga River Tributary Bridge Span Closure", status: "On Track" },
      { date: "Jan 2026", event: "Major Interchange Paving Completed", status: "Done" },
      { date: "Jan 2025", event: "Project Foundation & Groundbreaking", status: "Done" }
    ]
  },
  {
    id: "coastal-bridge",
    name: "Coastal Bridge Rehab",
    shortName: "Coastal Bridge",
    category: "Bridges & Marine Structures",
    location: "Mumbai Coast, Maharashtra",
    image: "assets/images/coastal_bridge.jpg",
    budget: 450000000,
    budgetFormatted: "₹450 Cr",
    spent: 315000000,
    spentFormatted: "₹315 Cr",
    progress: 70,
    status: "At Risk",
    statusDetail: "Inspection scheduled for high-tide zones",
    riskLevel: "High",
    updatesCount: 9,
    startDate: "Mar 2024",
    plannedDate: "Nov 2025",
    expectedDate: "Feb 2026",
    delayMonths: 3,
    contractor: "Coastal Marine Engineering Works",
    owner: {
      name: "Ramesh Narayanan",
      role: "Marine Structural Lead",
      avatar: "assets/images/christina_paul.jpg",
      phone: "+91 98200 44321",
      email: "r.narayanan@govtrack.ai"
    },
    description: "Deep structural retrofitting, anti-corrosion cathodic shielding, and seismic reinforcement of the 3.2 km marine vehicular transit bridge.",
    issues: [
      { id: "iss-3", title: "Cathodic protection cable severed during dredging", severity: "Urgent", date: "1 day ago", resolved: false },
      { id: "iss-4", title: "Weather advisory delay for offshore crane vessel", severity: "Warning", date: "4 days ago", resolved: false }
    ],
    milestones: [
      { phase: 1, title: "Underwater Pier Sonar Inspection", progress: 100, status: "Completed" },
      { phase: 2, title: "Steel Truss Sandblasting & Coating", progress: 85, status: "In Progress" },
      { phase: 3, title: "Deck Slab Hydro-demolition & Re-pour", progress: 62, status: "In Progress" },
      { phase: 4, title: "Expansion Joint Replacement", progress: 30, status: "Scheduled" }
    ],
    timeline: [
      { date: "Feb 2026", event: "Final Load Testing & Commissioning", status: "Upcoming" },
      { date: "Oct 2025", event: "Pier 14-22 Structural Jacketing Complete", status: "On Track" },
      { date: "Mar 2024", event: "Offshore Mobilization", status: "Done" }
    ]
  },
  {
    id: "solar-rooftop",
    name: "Solar Rooftop Upgrade",
    shortName: "Solar Rooftop",
    category: "Renewable Energy",
    location: "Bengaluru, Karnataka",
    image: "assets/images/solar_rooftop.jpg",
    budget: 180000000,
    budgetFormatted: "₹180 Cr",
    spent: 165000000,
    spentFormatted: "₹165 Cr",
    progress: 92,
    status: "Completed",
    statusDetail: "Commissioning & Grid Synchronizing",
    riskLevel: "Low",
    updatesCount: 22,
    startDate: "Jul 2024",
    plannedDate: "Oct 2025",
    expectedDate: "Sep 2025",
    delayMonths: 0,
    contractor: "SunGrid Clean Energy Systems",
    owner: {
      name: "Ananya Sharma",
      role: "Renewables Integration Lead",
      avatar: "assets/images/christina_paul.jpg",
      phone: "+91 97410 88231",
      email: "ananya.sharma@govtrack.ai"
    },
    description: "Installation of 45 MW distributed rooftop photovoltaic solar arrays across 140 state municipal buildings, integrating smart microgrid meters.",
    issues: [
      { id: "iss-5", title: "Substation net-metering tariff verification", severity: "Notice", date: "1 week ago", resolved: true }
    ],
    milestones: [
      { phase: 1, title: "Structural Load Feasibility Audits", progress: 100, status: "Completed" },
      { phase: 2, title: "PV Panel & Inverter Mounting", progress: 98, status: "In Progress" },
      { phase: 3, title: "Grid Interconnection & Smart Meters", progress: 88, status: "In Progress" },
      { phase: 4, title: "SCADA Remote Monitoring Setup", progress: 82, status: "In Progress" }
    ],
    timeline: [
      { date: "Oct 2025", event: "Full Power Grid Handover", status: "Upcoming" },
      { date: "Jul 2025", event: "Phase 3 30MW Grid Synced", status: "Done" },
      { date: "Jul 2024", event: "First Municipal Cluster Mount", status: "Done" }
    ]
  },
  {
    id: "stormwater-canal",
    name: "Stormwater Canal Repair",
    shortName: "Stormwater Canal",
    category: "Urban Drainage & Flood Relief",
    location: "Chennai, Tamil Nadu",
    image: "assets/images/stormwater_canal.jpg",
    budget: 100000000,
    budgetFormatted: "₹100 Cr",
    spent: 84000000,
    spentFormatted: "₹84 Cr",
    progress: 68,
    status: "Delayed",
    statusDetail: "4 months behind schedule",
    riskLevel: "High",
    updatesCount: 18,
    startDate: "Jan 2025",
    plannedDate: "Aug 2026",
    expectedDate: "Dec 2026",
    delayMonths: 4,
    contractor: "Metropolitan Flood Works JV",
    owner: {
      name: "Christina Paul",
      role: "Civil Engineer",
      avatar: "assets/images/christina_paul.jpg",
      phone: "+91 800 555 1234",
      email: "christina.paul@govtrack.ai"
    },
    description: "Reconstruction and desilting of 12.8 km primary stormwater arterial canal with reinforced concrete retaining walls and automated tidal storm gates.",
    issues: [
      { id: "iss-6", title: "Heavy water table seepage near sector 4 crossing", severity: "Urgent", date: "3 hours ago", resolved: false },
      { id: "iss-7", title: "Underground telecom fiber conduit rerouting delay", severity: "Warning", date: "2 days ago", resolved: false },
      { id: "iss-8", title: "Excavation permits delayed by civic ward 88", severity: "Warning", date: "6 days ago", resolved: false }
    ],
    milestones: [
      { phase: 1, title: "Canal Sludge Dredging & Survey", progress: 100, status: "Completed" },
      { phase: 2, title: "Reinforced Concrete Retaining Walls", progress: 72, status: "In Progress" },
      { phase: 3, title: "Culvert Crossings & Road Bridges", progress: 55, status: "In Progress" },
      { phase: 4, title: "Automated Sluice Gates & IoT Sensors", progress: 28, status: "Scheduled" }
    ],
    timeline: [
      { date: "Dec 2026", event: "Revised Commissioning & Flood Drill", status: "Upcoming" },
      { date: "Aug 2026", event: "Original Target Completion Date", status: "Delayed" },
      { date: "Jun 2025", event: "Central Canal Wall Pouring", status: "Done" },
      { date: "Jan 2025", event: "Work Order Issued & Site Prep", status: "Done" }
    ]
  }
];

export function getProjectById(id) {
  return projectsData.find(p => p.id === id) || projectsData[0];
}
