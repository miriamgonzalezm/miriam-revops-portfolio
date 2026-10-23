export const profile = {
  name: "Miriam Gonzalez",
  title: "Revenue Operations · GTM Systems & Commercial Operations · AI Automation",
  headline: "I turn operational friction into systems people can use.",
  introduction:
    "I build the operating processes behind reliable forecasts, clearer commercial decisions and scalable GTM execution — translating business needs into systems, data governance and practical AI automation.",
  location: "Woking, UK",
  context: "B2B Software",
  credential: "Salesforce Certified",
  email: "mir_864@hotmail.com",
  linkedin: "https://www.linkedin.com/in/mirgonzalez1/",
  aboutHeadline: "I sit between commercial teams and the systems they depend on.",
  about: [
    "I'm a Senior Sales Operations Manager working across Revenue Operations, commercial planning, GTM systems, governance and automation in B2B software.",
    "My background in Industrial & Systems Engineering shapes how I work: understand the commercial problem, design the operating process, translate it into systems and data requirements, then test whether it holds up in real conditions.",
    "At Ascertia, I work across Sales, Channel, Finance, Marketing and Systems. My scope spans forecasting and QBRs, quota and KPI planning, sales compensation, partner operations, Salesforce governance and AI-enabled automation.",
    "I have continued building and improving these commercial processes through Ascertia's acquisition and integration into InfoCert/Tinexta, adapting governance and cross-functional ways of working as the organisation evolves."
  ],
  finalHeadline: "Commercial operations built for clarity, change and scale.",
  finalCopy:
    "I bring together commercial judgement, operating discipline and hands-on GTM systems experience to turn fragmented work into processes teams can trust."
} as const;

export const operatingRange = [
  { title: "Revenue Operating Cadence", description: "Owning forecast reviews and business reviews that turn pipeline, revenue and KPI performance into a consistent leadership view." },
  { title: "Commercial Planning", description: "Partnering on annual plans, quota allocation and KPI setting using recurring revenue, retention, pipeline, deal mix and seller performance." },
  { title: "GTM Process & Systems", description: "Starting with the commercial problem, then translating the process into Salesforce, HubSpot, Apollo.io and finance-system requirements." },
  { title: "Data & Governance", description: "Defining ownership, controls and data standards across direct, partner-led and customer lifecycle processes." },
  { title: "AI & Automation", description: "Designing practical automation and Agentforce workflows with explicit rules, tested edge cases and human oversight." },
  { title: "Cross-functional Operations", description: "Connecting Sales, Channel, Marketing, Finance and Systems as priorities, structures and ways of working evolve." }
] as const;

export const workingMethod = [
  { number: "01", title: "Understand the friction", question: "What is actually getting in the way?", description: "Start with the commercial problem. Understand the users, decisions, exceptions and cost of the current process before selecting a tool." },
  { number: "02", title: "Design and translate", question: "What should happen instead?", description: "Define the process, ownership, data and controls, then translate them into clear system and workflow requirements." },
  { number: "03", title: "Build, test and improve", question: "Does it hold up in practice?", description: "Test real scenarios and edge cases, keep judgement where it matters, support adoption and refine the process using what the business learns." }
] as const;

export const systems: { name: string; detail?: string }[] = [
  { name: "Salesforce Sales Cloud" },
  { name: "Salesforce Agentforce" },
  { name: "Salesforce Flow" },
  { name: "SOQL" },
  { name: "HubSpot" },
  { name: "Apollo.io" },
  { name: "Xero" },
  { name: "Advanced Excel" },
  { name: "Jira" },
  { name: "SharePoint" }
];

export const certifications = [
  "Salesforce Certified Administrator",
  "Salesforce Certified Sales Cloud Consultant"
] as const;
