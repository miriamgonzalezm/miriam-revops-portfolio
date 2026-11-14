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
    solution: "I designed and built a suite of specialised Salesforce Agentforce agents supporting Sales Operations, RFP responses, account and renewal management, and sales leadership. Each agent is shaped around a defined operational problem, the information required and the point at which uncertainty should return to a person.",
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
    title: "Simplifying HubSpot and making marketing data useful",
    tags: ["HubSpot", "Lifecycle Management", "Marketing Operations", "Data Governance"],
    challenge: "Two separate HubSpot environments fragmented lifecycle data, duplicated administration and made it harder to create one reliable view of customer and prospect engagement.",
    sections: [
      { heading: "Platform simplification", body: "Led the business-side consolidation into one environment, migrating approximately 7,000 contacts and rationalising lifecycle data, segmentation, workflows, forms, subscription preferences and governance." },
      { heading: "From activity to signal", body: "Built an engagement score across email, forms, website and paid-social interactions, including time decay, and connected campaign and event reporting to downstream pipeline rather than judging performance on lead volume alone." }
    ],
    impact: [
      { value: "~7,000", label: "contacts consolidated" },
      { value: ">50%", label: "reduction in licence requirements" }
    ],
    closing: "I didn't want to migrate complexity. I wanted cleaner data that Marketing and Sales could act on."
  },
  {
    number: "03",
    title: "Building an outbound sales motion from zero",
    tags: ["Market Segmentation", "Apollo.io", "Salesforce", "Lead Management"],
    challenge: "An historically inbound-led business needed a repeatable way to identify, enrich, prioritise and work target accounts without compromising existing commercial relationships.",
    sections: [{ heading: "Contribution", body: "Evaluated prospecting platforms and designed the operating process across Apollo.io, HubSpot and Salesforce: target-account segmentation, enrichment, qualification, routing, ownership, customer and partner exclusions, active-opportunity protection and GDPR controls." }],
    highlights: [
      "Actionable target-account universe",
      "Segmentation and prioritisation",
      "Qualification, routing and ownership",
      "Customer, partner and opportunity protection",
      "Salesforce retained as the source of truth"
    ],
    closing: "I wasn't implementing an outbound tool. I was creating an outbound capability."
  },
  {
    number: "04",
    title: "Turning commercial controls into visible workflows",
    tags: ["Salesforce", "Finance Alignment", "Approvals", "Lead-to-Cash"],
    challenge: "Complex opportunities, quote and invoice data, non-standard payment terms and revenue information needed to stay aligned across Sales and Finance without relying on manual memory or ad-hoc email chains.",
    sections: [{ heading: "Contribution", body: "Established recurring Salesforce-Xero reconciliation across opportunities, invoices, contract data and revenue reporting; built a structured approval Flow for non-standard payment terms; and created historical change tracking for Revenue Recognition records so exceptions could be found and resolved earlier." }],
    highlights: [
      "Opportunity, contract and invoice alignment",
      "Structured commercial exception approvals",
      "Finance visibility and audit trail",
      "Revenue Recognition change tracking",
      "Human review for consequential decisions"
    ],
    closing: "Commercial governance works best when the control is part of the workflow, not a check performed after the fact."
  }
];

export const operatingAreas = [
  { title: "Forecasting & Business Reviews", description: "Own the sales forecasting methodology and cadence, lead seller forecast reviews, and host commercial QBRs that bring pipeline, revenue, KPI and cross-functional reporting into a consistent senior leadership view." },
  { title: "Full-funnel Performance", description: "Connect marketing activity, engagement and lead quality to opportunity progression, pipeline and revenue so investment decisions use commercial outcomes rather than activity alone." },
  { title: "Planning, Quotas & Compensation", description: "Partner on annual planning and quota allocation, and manage recurring compensation controls across Sales, Channel and Pre-Sales." },
  { title: "Lifecycle, Pipeline & Partner Governance", description: "Set business-side requirements for lead and opportunity stages, attribution, account ownership, partner processes, hand-offs, reporting and data quality." },
  { title: "Commercial Controls & Approvals", description: "Build repeatable controls across Salesforce and Xero and structured approval paths for commercial exceptions, invoicing and financial reporting." }
] as const;
