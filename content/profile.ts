export const profile = {
  name: "Miriam Gonzalez",
  title: "Revenue Operations · GTM Systems · Commercial Intelligence · AI Automation",
  headline: "I turn commercial complexity into operating systems people can trust.",
  introduction:
    "I connect Marketing, Sales and Finance through the processes, systems and insight behind reliable growth - from lifecycle and pipeline design to forecasting, commercial controls and practical AI automation.",
  location: "Woking, UK",
  context: "B2B Software",
  credential: "Salesforce Certified",
  email: "mir_864@hotmail.com",
  linkedin: "https://www.linkedin.com/in/mirgonzalez1/",
  aboutHeadline: "I sit between commercial teams and the systems they depend on.",
  about: [
    "I'm a Senior Sales Operations Manager working across full-funnel Revenue Operations, commercial planning, GTM systems, governance and automation in B2B software.",
    "My background in Industrial & Systems Engineering shapes how I work: understand the commercial problem, design the operating process, translate it into systems and data requirements, then test whether it holds up in real conditions.",
    "At Ascertia, I work across Marketing, Sales, Channel, Customer Success, Finance and Systems. My scope spans lifecycle and lead management, marketing performance, forecasting and QBRs, commercial planning, Salesforce and HubSpot governance, financial controls and AI-enabled automation.",
    "I have continued building and improving these commercial processes through Ascertia's acquisition and integration into InfoCert/Tinexta, adapting governance and cross-functional ways of working as the organisation evolves."
  ],
  finalHeadline: "Commercial operations built for clarity, change and scale.",
  finalCopy:
    "I bring together commercial judgement, operating discipline and hands-on GTM systems experience to turn fragmented work into processes teams can trust."
} as const;

export const operatingRange = [
  { title: "Market & Revenue Intelligence", description: "Connecting audience, engagement and campaign activity to lead quality, pipeline and commercial outcomes." },
  { title: "Revenue Operating Cadence", description: "Owning forecast reviews and business reviews that turn pipeline, revenue and KPI performance into a consistent leadership view." },
  { title: "Lifecycle & GTM Process", description: "Designing the stages, ownership, routing and hand-offs that connect Marketing, Sales and Customer Success." },
  { title: "Commercial Systems & Governance", description: "Translating business requirements into Salesforce, HubSpot and finance-system workflows, controls and trusted data." },
  { title: "AI & Automation", description: "Designing practical automation and Agentforce workflows with explicit rules, tested edge cases and human oversight." },
  { title: "Cross-functional Leadership", description: "Connecting commercial teams, Finance and Systems so decisions become workable processes rather than isolated requests." }
] as const;

export const workingMethod = [
  { number: "01", title: "Understand the friction", question: "What is actually getting in the way?", description: "Start with the commercial problem. Understand the users, decisions, exceptions and cost of the current process before selecting a tool." },
  { number: "02", title: "Design and translate", question: "What should happen instead?", description: "Define the process, ownership, data and controls, then translate them into clear system and workflow requirements." },
  { number: "03", title: "Build, test and improve", question: "Does it hold up in practice?", description: "Test real scenarios and edge cases, keep judgement where it matters, support adoption and refine the process using what the business learns." }
] as const;

export const systems: { name: string; detail?: string }[] = [
  { name: "Salesforce Sales Cloud", detail: "Process, reporting & governance" },
  { name: "Salesforce Agentforce", detail: "Specialised revenue workflows" },
  { name: "Salesforce Flow", detail: "Automation & approvals" },
  { name: "SOQL" },
  { name: "HubSpot", detail: "Lifecycle, scoring & reporting" },
  { name: "Apollo.io", detail: "Enrichment & outbound" },
  { name: "Xero", detail: "Commercial reconciliation" },
  { name: "Advanced Excel" },
  { name: "Jira" },
  { name: "SharePoint" }
];

export const certifications = [
  "Salesforce Certified Administrator",
  "Salesforce Certified Sales Cloud Consultant"
] as const;
