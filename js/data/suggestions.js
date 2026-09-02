export const initialSuggestions = [
  {
    id: "sug-1",
    author: "Arun Kumar",
    avatar: "AK",
    role: "Local Resident & Commuter",
    timestamp: "2 hours ago",
    projectContext: "Patna to Purnea (NE-9)",
    projectId: "patna-purnea",
    message: "Can we get pedestrian overpasses near the rural school intersections around Km 48? Heavy truck movement is starting soon.",
    upvotes: 42,
    hasUpvoted: false,
    status: "Under Review",
    replies: [
      {
        author: "GovTrack AI Assistant",
        isOfficial: true,
        timestamp: "1 hour ago",
        text: "This suggestion has been logged as Safety Notice #104 and forwarded to NHAI Regional Planning cell for footbridge feasibility."
      }
    ]
  },
  {
    id: "sug-2",
    author: "Priya Sundaram",
    avatar: "PS",
    role: "Urban Hydrologist",
    timestamp: "5 hours ago",
    projectContext: "Stormwater Canal Repair",
    projectId: "stormwater-canal",
    message: "Please ensure the culvert opening at Sector 8 has sediment silt traps installed before the monsoon downpours intensify.",
    upvotes: 67,
    hasUpvoted: true,
    status: "Actioned",
    replies: [
      {
        author: "Christina Paul (Civil Engineer)",
        isOfficial: true,
        timestamp: "3 hours ago",
        text: "Thanks Priya. Dual-chamber silt traps have been added to Milestone 3 contractor deliverables."
      }
    ]
  },
  {
    id: "sug-3",
    author: "Deepak Mehta",
    avatar: "DM",
    role: "Clean Tech Advocate",
    timestamp: "Yesterday",
    projectContext: "Solar Rooftop Upgrade",
    projectId: "solar-rooftop",
    message: "Are the solar generation stats public? It would be great to show the real-time carbon offset on municipal display boards.",
    upvotes: 89,
    hasUpvoted: false,
    status: "Approved",
    replies: [
      {
        author: "GovTrack AI Assistant",
        isOfficial: true,
        timestamp: "Yesterday",
        text: "Public API endpoints for generation and avoided CO2 are planned for release in GovTrack v2.4 open data portal."
      }
    ]
  }
];

export const aiResponsesDatabase = [
  {
    keywords: ["why", "delayed", "delay", "behind"],
    reply: "The latest project data shows a schedule risk related to material delivery, underground utility relocations, and site coordination."
  },
  {
    keywords: ["budget", "cost", "money", "spent", "cr", "crore"],
    reply: "GovTrack AI tracks ₹250+ Cr in allocated capital expenditure. Real-time PFMS / SAP ledger sync flags anomalies before cost overruns occur."
  },
  {
    keywords: ["stormwater", "canal", "chennai", "flood"],
    reply: "The Stormwater Canal Repair in Chennai is at 68% progress with ₹84 Cr / ₹100 Cr budget utilized. Key focus is completing concrete retaining walls before monsoons."
  },
  {
    keywords: ["patna", "purnea", "highway", "ne-9", "expressway"],
    reply: "Patna to Purnea (NE-9) is at 84% completion. Current priority is completing the major river bridge span and asphalt bituminous layer."
  },
  {
    keywords: ["solar", "rooftop", "energy", "bengaluru"],
    reply: "The Solar Rooftop Upgrade is currently at 92% completion across 140 state buildings, generating clean power with net-metering tests underway."
  },
  {
    keywords: ["coastal", "bridge", "mumbai"],
    reply: "Coastal Bridge Rehab is at 70% progress. Marine structural retrofitting and anti-corrosion cathodic shielding are actively proceeding during low tide windows."
  },
  {
    keywords: ["help", "contact", "support", "report"],
    reply: "You can file a formal project issue using the 'Report' button or contact the municipal response desk at support@govtrack.ai or +91 800 555 1234."
  }
];

export function getMockAIResponse(userMessage) {
  const lower = userMessage.toLowerCase();
  for (const entry of aiResponsesDatabase) {
    if (entry.keywords.some(k => lower.includes(k))) {
      return entry.reply;
    }
  }
  return "GovTrack AI has analyzed your inquiry. Live project telemetry and municipal audit logs show ongoing quality compliance with automated milestone tracking.";
}
