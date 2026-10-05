export const profile = {
  name: "Miriam Gonzalez",
  title: "Senior Revenue Operations · GTM Systems · AI-enabled Operations",
  headline: "I turn operational friction into systems people can use.",
  introduction:
    "I design the processes, systems and controls that help commercial teams operate with better data, less manual work and clearer decisions — across Salesforce, HubSpot, automation and the wider GTM stack.",
  location: "Woking, UK",
  context: "B2B Technology",
  credential: "Salesforce Certified",
  email: "mir_864@hotmail.com",
  linkedin: "https://www.linkedin.com/in/mirgonzalez1/",
  aboutHeadline: "I sit between commercial teams and the systems they depend on.",
  about: [
    "I'm a Senior Sales Operations Manager working across Revenue Operations, GTM systems, analytics and automation in B2B technology.",
    "My background is in Industrial & Systems Engineering, which still shapes how I approach Revenue Operations: understand the system, identify the constraint, design the process and measure whether it actually improved.",
    "Today I work across Sales, Marketing, Customer Success, Finance and Systems, combining commercial understanding with hands-on experience in Salesforce, HubSpot and AI-enabled automation.",
    "I'm particularly interested in environments where Revenue Operations is expected to do more than administer tools — where it helps design how the business operates."
  ],
  finalHeadline: "A global GTM operation where clarity creates speed.",
  finalCopy:
    "I'm interested in Revenue Operations environments where commercial thinking, systems and automation come together to solve meaningful operating problems."
} as const;

export const operatingRange = [
  { title: "Process Design", description: "Turning ambiguous commercial problems into clear, scalable operating processes." },
  { title: "GTM Systems", description: "Connecting business requirements with Salesforce, HubSpot and the wider revenue technology stack." },
  { title: "Data & Governance", description: "Creating reliable data structures, controls and ownership rules that teams can trust." },
  { title: "AI & Automation", description: "Using automation and AI to remove repetitive work while keeping appropriate human oversight." },
  { title: "Commercial Insight", description: "Supporting forecasting, pipeline visibility, performance reporting and decision-making." },
  { title: "Customer Lifecycle", description: "Connecting Sales, Customer Success and Finance across hand-offs, renewals and recurring commercial processes." }
] as const;

export const workingMethod = [
  { number: "01", title: "Business Friction", question: "What is actually broken?", description: "Start with the commercial problem, not the tool. Understand the users, decisions, exceptions and cost of the current process." },
  { number: "02", title: "Operating Design", question: "What should happen instead?", description: "Define the process, ownership, data, controls and system behaviour before automating it." },
  { number: "03", title: "Adopted System", question: "Will people actually use it?", description: "Build, test, document and iterate until the process works in real operating conditions." }
] as const;

export const systems = [
  { name: "Salesforce", detail: "Sales Cloud · Flow · Agentforce" },
  { name: "HubSpot" },
  { name: "Apollo.io" },
  { name: "Xero" },
  { name: "Power BI" },
  { name: "Excel" },
  { name: "Jira" },
  { name: "SharePoint" }
] as const;

export const certifications = [
  "Salesforce Certified Administrator",
  "Salesforce Certified Sales Cloud Consultant"
] as const;
