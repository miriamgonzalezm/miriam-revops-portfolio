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
    { number: "01", title: "Understand the commercial problem", body: "Define the outcome, users and constraints." },
    { number: "02", title: "Define what good looks like", body: "Set ownership, data, rules and hand-offs." },
    { number: "03", title: "Build the simplest workable solution", body: "Use the existing stack; avoid unnecessary complexity." },
    { number: "04", title: "Test real behaviour and exceptions", body: "Validate with users and real exceptions." },
    { number: "05", title: "Measure, govern and improve", body: "Track outcomes, refine and retain human judgement where risk matters." },
  ],
  salesMotions: {
    title: "Different motions need different operating models",
    body: "My starting assumption would be that Enterprise and high-volume field motions should not automatically share the same workflow. Enterprise may require more account prioritisation, deal progression and governance; higher-volume motions may depend more on coverage, routing and conversion. I would validate that with the teams and data, then design around the actual selling behaviour.",
  },
  commercialFlow: {
    steps: ["Addressable market", "Prioritisation", "Engagement", "CRM progression", "Commercial governance", "Close / hand-off", "Measure & improve"],
    note: "My strongest direct experience sits across segmentation, outbound targeting, CRM design, commercial governance and automation.",
  },
  flagshipCases: [
    {
      number: "01",
      eyebrow: "BUILD FROM SCRATCH · GTM PROCESS DESIGN",
      title: "Building an outbound operating model from scratch",
      relevance: ["Lead prioritisation", "Segmentation", "CRM governance", "Outbound operating model"],
      challenge:
        "No structured outbound process existed. The business needed a repeatable way to qualify and work prospects without compromising customers, partners or active opportunities.",
      actions: [
        "Evaluated outbound tooling and selected Apollo.io.",
        "Designed lifecycle, qualification, routing and ownership.",
        "Defined segmentation, exclusion, GDPR and suppression controls to protect customers, partners and active opportunities.",
        "Kept Salesforce as the source of truth and documented the operating model and governance.",
      ],
      impactTitle: "Created a governed outbound operating model where there had previously been no consistent process, while keeping Salesforce as the source of truth and reducing the risk of inappropriate outreach.",
      impacts: [
        "Clear qualification, routing and ownership",
        "Consistent segmentation, exclusions and suppression",
      ],
      closingNote: "When resourcing constraints and deliverability considerations later changed the business case, I supported the decision not to renew Apollo.io rather than defending the original investment.",
    },
    {
      number: "02",
      eyebrow: "AI-ENABLED SALES OPERATIONS",
      title: "Building AI agents for real Sales Operations work",
      relevance: ["Process automation", "Operational efficiency", "AI governance", "Exception handling"],
      challenge:
        "Recurring checks across Salesforce and finance data were repetitive, but many depended on commercial meaning rather than exact matching.",
      actions: [
        "Designed and built interconnected Agentforce agents for Sales Operations, RFP responses, account and renewal management, and sales leadership.",
        "Mapped checks and commercial decision logic; early exact matching produced false exceptions.",
        "Refined the logic to recognise commercial equivalence and escalate uncertainty.",
        "Kept the Sales Operations agent read-only, with human review for consequential decisions.",
      ],
      metric: "125+ hours",
      metricLabel: "estimated annual review time saved by the Sales Operations agent alone",
      impactTitle: "A safer, repeatable model for automating GTM work while retaining human judgement.",
      pullQuote: "The hardest part was not the AI — it was translating commercial judgement into reliable operating logic.",
      impacts: [],
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
      impacts: [],
    },
  ],
  additionalProof: [
    {
      title: "Commercial controls",
      subtitle: "Salesforce ↔ Xero governance",
      body: "Established recurring controls across CRM and Finance to identify discrepancies in invoices, account codes, opportunities, contract dates and revenue-recognition information before close.",
      relevance: ["Commercial governance", "Deal controls", "Exception handling", "Finance alignment"],
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
