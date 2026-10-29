export const relayPortfolio = {
  profile: {
    name: "Miriam Gonzalez",
    role: "Senior Sales Operations Manager",
    location: "Woking, Surrey",
    positioning: "Sales Operations · GTM Systems · Commercial Automation",
    context: "Selected work relevant to Relay Technologies · Sales Operations Manager",
    headline: "I turn commercial friction into operating systems that scale.",
    introduction:
      "I design and build the processes, systems and automation behind reliable sales execution — from lead lifecycle and CRM governance to forecasting, commercial controls and AI-enabled workflows.",
    proofLine: "Salesforce-certified · B2B technology · International & partner-led sales · AI automation",
    linkedIn: "https://www.linkedin.com/in/mirgonzalez1/",
    email: "mir_864@hotmail.com",
  },
  proof: [
    { label: "Build", value: "Operating models", detail: "Outbound process · Salesforce automation · AI agents" },
    { label: "Lead", value: "Commercial change", detail: "CRM consolidation · cross-functional process design · forecasting cadence" },
    { label: "Impact", value: "Visible outcomes", detail: "125+ hours saved · >50% licence reduction · ~7,000 contacts consolidated" },
  ],
  method: [
    { number: "01", title: "Structure the system", body: "Create clear definitions, ownership, data and governance." },
    { number: "02", title: "Automate the repeatable", body: "Remove recurring manual work while retaining human judgement for exceptions." },
    { number: "03", title: "Design for the next motion", body: "Build processes that can extend to new segments through configuration rather than starting again." },
  ],
  salesMotions: {
    title: "Different motions need different operating models",
    body: "I already support sales motions with different complexity and velocity: long-cycle enterprise opportunities involving multiple stakeholders, Pre-Sales, partners and bespoke requirements, alongside smaller, faster SigningHub opportunities that need a lighter process. That has taught me to create a common data and governance foundation without forcing different selling behaviours into the same workflow.",
    pullQuote: "Standardisation doesn’t mean identical workflows.",
  },
  commercialFlow: {
    steps: ["Addressable market", "Prioritisation", "Engagement", "CRM progression", "Commercial governance", "Close / hand-off", "Measure & improve"],
    note: "My strongest direct experience sits across segmentation, outbound targeting, CRM design, commercial governance and automation.",
  },
  flagshipCases: [
    {
      number: "01",
      eyebrow: "BUILD FROM SCRATCH · GTM PROCESS DESIGN",
      title: "Building an outbound sales motion from zero",
      relevance: ["Target-account universe", "Lead prioritisation", "CRM operating design", "Governance"],
      challenge:
        "Ascertia had historically been inbound-led and had no outbound sales motion. Building one meant defining the target-account universe, prospect enrichment and prioritisation, qualification and routing — while protecting customers, partners and active opportunities.",
      actions: [
        "Evaluated prospecting platforms, selected Apollo.io, and used it to build and enrich the target-account universe.",
        "Designed segmentation, account prioritisation, qualification, ownership and routing.",
        "Created customer, partner and active-opportunity exclusions alongside GDPR and suppression controls.",
        "Defined how Apollo, HubSpot and Salesforce should interact, keeping Salesforce as the source of truth; designed the sequence and process architecture while Demand Generation owned content.",
      ],
      impactTitle: "Built Ascertia’s outbound sales motion from zero, creating a repeatable and governed process for prospecting, prioritisation and outreach while protecting existing commercial relationships.",
      pullQuote: "I wasn’t implementing an outbound tool. I was creating an outbound capability.",
      impacts: [],
    },
    {
      number: "02",
      eyebrow: "AI-ENABLED REVENUE OPERATIONS",
      title: "Building specialised AI agents across the revenue process",
      relevance: ["AI-enabled operations", "Process automation", "Commercial intelligence", "Governance"],
      challenge:
        "Recurring revenue workflows — Sales Operations checks, RFP support, account and renewal management, and leadership insight — required different context and decision logic. A single broad assistant would have been too generic and harder to govern.",
      actions: [
        "Designed specialised Agentforce agents for distinct revenue workflows, building the Sales Operations Agent first as the clearest measurable use case.",
        "Mapped documented commercial checks and rules, then tested real scenarios in Sandbox; exact code matching exposed false exceptions where products were commercially equivalent.",
        "Refined the logic around commercial equivalence and uncertainty, keeping consequential decisions read-only and subject to human review.",
        "Expanded the approach to RFP support, account and renewal management, and sales-leadership insight using shared Salesforce context with different boundaries.",
        "For RFPs, structured product knowledge, past response material and commercial information into an AI-assisted workflow with guardrails and human review.",
      ],
      metric: "125+ hours",
      metricLabel: "estimated annual review time saved by the Sales Operations agent alone",
      impactTitle: "Created a repeatable model for applying specialised AI safely across revenue workflows.",
      proofLine: "Specialised agents · Shared commercial context · Clear boundaries · Human escalation",
      pullQuote: "The hardest part wasn’t the AI. It was deciding what each agent should know, what it should do, and when the decision needed to go back to a person.",
      impacts: [
        "Weekly reviews reduced from 1.5–2 hours to roughly 15 minutes",
        "Strong first RFP responses produced in hours rather than days",
      ],
    },
    {
      number: "03",
      eyebrow: "CRM TRANSFORMATION · SIMPLIFICATION",
      title: "Consolidating two HubSpot environments",
      relevance: ["Systems simplification", "CRM transformation", "Cost optimisation", "Adoption"],
      challenge:
        "Two HubSpot instances fragmented lifecycle data and duplicated processes across approximately 7,000 contacts.",
      actions: [
        "Led the business-side consolidation into one platform.",
        "Rationalised lifecycle stages, segmentation, workflows and forms.",
        "Defined what to retain, redesign or remove and established governance for the consolidated environment.",
      ],
      metrics: [
        { value: "~7,000", label: "contacts" },
        { value: ">50%", label: "licence reduction" },
      ],
      impactTitle: "Reduced platform cost and operational complexity in a cleaner GTM environment.",
      pullQuote: "I didn’t want to migrate complexity. I wanted to remove it.",
      impacts: [],
    },
  ],
  additionalProof: [
    {
      title: "Commercial exception governance",
      subtitle: "Non-standard payment terms",
      body: "Designed and built a Salesforce Screen Flow that checks whether approval is required, identifies existing approvals and routes non-standard payment-term requests by status instead of relying on ad-hoc email.",
      relevance: ["Deal controls", "Finance visibility", "Approval governance"],
    },
    {
      title: "Diagnosing revenue leakage",
      subtitle: "Partner revenue analysis",
      body: "Rebuilt two years of partner reporting after identifying an unexplained revenue-share decline, isolated lost and declining end-customer accounts, and quantified the impact for the CRO and Account Manager. Revenue share subsequently returned to expected growth levels.",
      relevance: ["Commercial diagnosis", "Revenue insight", "Leadership action"],
    },
    {
      title: "Commercial control layer",
      subtitle: "Salesforce ↔ Xero governance",
      body: "Built a repeatable control layer between CRM and Finance that identifies discrepancies across opportunities, invoices, account codes, contract data and revenue recognition before month-end.",
      relevance: ["Data governance", "Deal controls", "Finance partnership"],
    },
    {
      title: "Salesforce automation",
      subtitle: "Revenue Recognition change tracking",
      body: "Designed scheduled Salesforce automation to compare current Revenue Recognition records with their state seven days earlier, including duplicate prevention and scalable processing across approximately 340 daily snapshots.",
      relevance: ["Automation", "Operational visibility", "Process reliability"],
    },
  ],
  commercialExperience: [
    { title: "Forecasting & Pipeline", body: "Own the seller forecasting cadence and lead forecast reviews covering expected close, deal movement, pipeline risk and changes in outlook." },
    { title: "Commercial Planning", body: "Partner with the Sales Director on quota planning using recurring revenue, retention, pipeline, expected deal mix and seller performance." },
    { title: "Commercial Governance", body: "Own recurring controls across direct and partner-led business, including opportunity governance, sales compensation and Finance alignment." },
    { title: "Channel & Partner Operations", body: "Support partner attribution, opportunity governance and commercial processes across partner-led business." },
    { title: "Cross-functional Delivery", body: "Translate commercial requirements into systems and process changes with Sales, Finance, Marketing, Customer Success and Systems stakeholders." },
  ],
  change: {
    title: "Operating through change",
    introduction:
      "In July 2026, Ascertia became fully owned by InfoCert, part of Tinexta Group. While stakeholders, priorities and ways of working changed, I continued running and improving forecasting, governance, reporting and commercial systems.",
    takeaway: "I am comfortable building before every variable is known.",
  },
  principles: [
    { number: "01", title: "Start with the commercial problem", body: "Do not start with the requested feature or tool." },
    { number: "02", title: "Build the simplest thing that solves it", body: "Avoid unnecessary platform and process complexity." },
    { number: "03", title: "Buy common capabilities; build differentiated logic", body: "Use mature tools where the market has already solved the problem." },
    { number: "04", title: "Automate repetition, not judgement", body: "Keep human review where ambiguity or commercial risk matters." },
    { number: "05", title: "Adoption is part of the build", body: "A technically correct process that people avoid is not a successful process." },
  ],
  systems: [
    "Salesforce Sales Cloud",
    "Salesforce Agentforce",
    "Salesforce Flow",
    "SOQL",
    "HubSpot",
    "Apollo.io",
    "Xero",
    "Advanced Excel",
    "Jira",
    "SharePoint",
  ],
  certifications: [
    "Salesforce Certified Administrator",
    "Salesforce Certified Sales Cloud Consultant",
  ],
} as const;
