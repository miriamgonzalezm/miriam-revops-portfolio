export type Project = {
  number: string;
  title: string;
  tags: string[];
  challenge: string;
  solution?: string;
  sections?: { heading: string; body: string }[];
  highlights?: string[];
  impact?: { value: string; label: string }[];
  closing: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "AI-powered Sales Operations Reconciliation",
    tags: ["Salesforce Agentforce", "Xero", "AI Automation", "Revenue Operations"],
    featured: true,
    challenge: "Recurring Sales Operations controls required information to be reviewed across Salesforce and Xero, combining commercial records, invoices, renewals and other operational data. The process was manual, repetitive and dependent on someone knowing what to look for.",
    solution: "I designed and deployed a production AI Sales Operations Agent in Salesforce Agentforce that performs recurring weekly and monthly operational checks and allows users to investigate exceptions conversationally.",
    highlights: [
      "Invoice values and commercial records",
      "Account-code and product consistency",
      "Contract and opportunity dates",
      "Renewal continuity",
      "Licences and deployments",
      "Outstanding debt",
      "Data completeness",
      "Invoice documentation and approval",
      "Revenue-recognition controls"
    ],
    sections: [
      { heading: "Operating design", body: "This was not simply an AI prompt. The solution required translating operational knowledge into explicit business rules, determining which checks could be automated, defining matching and tolerance logic, and designing how exceptions should be surfaced." },
      { heading: "Governance", body: "Read-only by design. The Agent identifies and explains exceptions but does not autonomously modify commercial records. Ambiguous cases remain subject to human review." }
    ],
    impact: [{ value: "125+ hours", label: "estimated manual review eliminated annually" }],
    closing: "A recurring manual control became a repeatable, explainable operational system."
  },
  {
    number: "02",
    title: "One HubSpot, Cleaner GTM Data",
    tags: ["HubSpot", "CRM Governance", "Data Migration", "Process Design"],
    challenge: "Two separate HubSpot environments created duplicated administration, fragmented customer and prospect data, and unnecessary licensing requirements.",
    sections: [{ heading: "Approach", body: "Led the business-side consolidation into a single environment, covering approximately 7,000 contacts and rationalising data, workflows, forms and governance. Worked through what should migrate, what should be retired and how the consolidated environment should operate going forward." }],
    impact: [
      { value: "~7,000", label: "contacts consolidated" },
      { value: ">50%", label: "reduction in licence requirements" }
    ],
    closing: "Consolidation wasn't just a migration exercise — it was an opportunity to simplify the operating model."
  },
  {
    number: "03",
    title: "Building Governed Outbound Infrastructure",
    tags: ["Apollo.io", "Salesforce", "HubSpot", "Data Governance", "GDPR"],
    challenge: "Introducing outbound prospecting technology required more than purchasing a platform. Existing customers, partners and active opportunities needed to be protected while ownership, segmentation and data flows remained clear.",
    sections: [{ heading: "My role", body: "Participated in the technology evaluation and implementation of Apollo.io and designed the business rules governing how it interacts with the existing GTM ecosystem." }],
    highlights: [
      "Salesforce-centred data flows",
      "Customer and partner exclusions",
      "Active-opportunity protection",
      "Segmentation and ownership rules",
      "Outbound account-status controls",
      "Governance supporting GDPR requirements"
    ],
    closing: "The project established a controlled operating framework for outbound activity and clarified where prospecting technology should — and should not — interact with core CRM data."
  },
  {
    number: "04",
    title: "Taking AI from Feature to Workflow",
    tags: ["Salesforce Agentforce", "Sales", "Process Automation", "Adoption"],
    challenge: "Partnering with Systems & Integrations to identify practical Agentforce use cases across Sales and translate commercial workflows into AI-enabled processes.",
    sections: [
      { heading: "Identify", body: "Find repetitive or information-heavy workflows where AI can genuinely remove friction." },
      { heading: "Test", body: "Validate outputs against real commercial scenarios and refine business rules." },
      { heading: "Adopt", body: "Help users understand where AI fits into their existing workflow rather than introducing technology for its own sake." }
    ],
    closing: "AI adoption works when the technology disappears into a better process."
  }
];

export const operatingAreas = [
  { title: "Forecasting & Pipeline", description: "Pipeline visibility, forecasting and performance reporting for senior commercial leadership." },
  { title: "Sales Compensation", description: "Quarterly compensation processes spanning Sales, Channel and Pre-Sales." },
  { title: "Customer Lifecycle", description: "Cross-functional processes connecting Sales, Customer Success and Finance across renewals, invoicing and commercial controls." },
  { title: "CRM Governance", description: "Salesforce process design, automation, validation, reporting and data-quality controls." },
  { title: "Systems Integration", description: "Business-side ownership of requirements and data flows across Salesforce, HubSpot, Apollo.io, Xero and related systems." }
] as const;
