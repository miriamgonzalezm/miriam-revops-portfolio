export type Project = {
  number: string;
  title: string;
  tags: string[];
  challenge: string;
  solution?: string;
  sections?: { heading: string; body: string }[];
  highlightsLabel?: string;
  highlights?: string[];
  impact?: { value: string; label: string }[];
  closing: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Building an AI-enabled GTM operating model",
    tags: ["Salesforce Agentforce", "AI Automation", "GTM Operations", "Human Oversight"],
    featured: true,
    challenge: "Different parts of the GTM organisation rely on recurring, information-heavy work: checking commercial records, navigating RFP content, managing accounts and renewals, and finding the pipeline or revenue information leadership needs. The opportunity was to turn that operational knowledge into focused AI workflows without removing judgement from commercial decisions.",
    solution: "I designed and built a suite of specialised, interconnected Salesforce Agentforce agents supporting Sales Operations, RFP responses, account and renewal management, and sales leadership. Each agent is shaped around a defined operational problem, the information required and the point at which uncertainty should return to a person.",
    highlightsLabel: "The agent suite supports",
    highlights: [
      "Sales Operations controls and exception review",
      "RFP information and response workflows",
      "Account and renewal management workflows",
      "Leadership access to pipeline and revenue insight"
    ],
    sections: [
      { heading: "Production example", body: "The production Sales Operations Agent performs recurring checks across Salesforce and finance data, covering invoice values and line items, account codes, contract and close dates, opportunity completeness, renewals, debt and revenue-recognition-related controls. It is estimated to eliminate more than 125 hours of manual review annually." },
      { heading: "Decision logic & quality", body: "An early exact-matching approach created false exceptions when different account-code numbers represented commercially equivalent products or services. I refined the logic to consider commercial meaning and to escalate uncertainty instead of making unsafe assumptions." },
      { heading: "Governance", body: "The Sales Operations Agent is read-only by design. It identifies and explains exceptions but does not autonomously modify commercial records, keeping human review at the centre of ambiguous or consequential decisions." }
    ],
    impact: [
      { value: "4", label: "specialised Agentforce agents designed and built" },
      { value: "125+ hours", label: "estimated annual review time saved by the Sales Operations Agent" }
    ],
    closing: "The operating model determines where AI acts, where it explains and where a person decides."
  },
  {
    number: "02",
    title: "One HubSpot, cleaner GTM data",
    tags: ["HubSpot", "CRM Governance", "Data Migration", "Process Design"],
    challenge: "Two separate HubSpot environments created duplicated administration, fragmented customer and prospect data, and unnecessary licence requirements.",
    sections: [{ heading: "Approach", body: "Led the business-side consolidation into a single environment, migrating approximately 7,000 contacts and rationalising lifecycle data, workflows, forms and governance. The work required deciding what should migrate, what should be retired and how the consolidated environment should operate going forward." }],
    impact: [
      { value: "~7,000", label: "contacts consolidated" },
      { value: ">50%", label: "reduction in licence requirements" }
    ],
    closing: "Consolidation became an opportunity to simplify the operating model, not just move data."
  },
  {
    number: "03",
    title: "Building outbound and redesigning lead management",
    tags: ["Apollo.io", "Salesforce", "Lead Lifecycle", "GTM Governance"],
    challenge: "There was no formal outbound sales process, while the existing lead management process needed clearer stages, routing, ownership and controls.",
    sections: [{ heading: "Contribution", body: "Designed and implemented a new outbound operating process with Apollo.io while revisiting the lead lifecycle across Salesforce and Apollo.io. I translated the commercial model into qualification, routing, ownership, segmentation, customer and partner exclusions, active-opportunity protection and governance rules." }],
    highlights: [
      "A structured outbound operating process",
      "Clearer lead stages and qualification",
      "Defined routing and ownership",
      "Segmentation and exclusion controls",
      "Salesforce-centred governance"
    ],
    closing: "The achievement was a governed commercial process, with Apollo.io serving the operating model rather than defining it."
  },
  {
    number: "04",
    title: "Operating through acquisition-driven change",
    tags: ["Post-acquisition", "Operating Model", "Commercial Governance", "Cross-functional GTM"],
    challenge: "Ascertia's acquisition by InfoCert, part of Tinexta Group, reached 100% ownership in July 2026, creating a fast-paced period in which priorities, structures and ways of working continued to evolve.",
    sections: [{ heading: "Contribution", body: "Continued owning and improving critical commercial operations through the acquisition and integration period. I adapted forecasting and review cadences, systems governance, data ownership, controls and cross-functional ways of working while maintaining the recurring processes leadership and commercial teams relied on." }],
    closing: "The experience strengthened my ability to create operating discipline while the organisation around the process is changing."
  }
];

export const operatingAreas = [
  { title: "Forecasting & Business Reviews", description: "Own the sales forecasting methodology and cadence, lead seller forecast reviews, and host commercial QBRs that bring pipeline, revenue, KPI and cross-functional reporting into a consistent senior leadership view." },
  { title: "Annual Planning, Quotas & KPIs", description: "Partner directly with the Sales Director on planning and individual quota allocation using recurring revenue, expected retention, partner contribution, pipeline, deal mix and seller performance." },
  { title: "Sales Compensation", description: "Manage quarterly compensation processes across Sales, Channel and Pre-Sales, including validation of direct and partner-led commission calculations." },
  { title: "Pipeline, Partner & CRM Governance", description: "Set business-side requirements for opportunity attribution, account ownership, partner processes, reporting, data quality and Salesforce workflows." },
  { title: "Commercial Controls", description: "Run recurring Salesforce and Xero reconciliation processes that improve alignment between CRM records, invoicing and financial reporting." }
] as const;
