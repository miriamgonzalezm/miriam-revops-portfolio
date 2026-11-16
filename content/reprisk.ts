export const repriskPortfolio = {
  profile: {
    name: "Miriam Gonzalez",
    role: "Senior Sales Operations Manager",
    location: "Woking, Surrey",
    positioning: "GTM & Revenue Operations · Salesforce CPQ · Hands-on Revenue Cloud",
    context: "Selected work relevant to RepRisk · GTM transformation",
    headline: "I turn complex commercial rules into Salesforce processes people can trust.",
    introduction:
      "I work hands-on across lead-to-opportunity, opportunity management, CPQ, approvals and quote-to-cash — translating complex products and sales processes into a clearer Salesforce operating model and preparing the move to Revenue Cloud.",
    proofLine: "Salesforce-certified · Enterprise B2B technology · Direct & partner sales · Hands-on build",
    linkedIn: "https://www.linkedin.com/in/mirgonzalez1/",
    email: "mir_864@hotmail.com",
  },
  proof: [
    {
      label: "Capture",
      value: "Lead-to-opportunity built from scratch",
      detail: "Segmentation · qualification · routing · GDPR controls",
    },
    {
      label: "Build",
      value: "CPQ that works in practice",
      detail: "Product catalogue · pricing · configuration rules · quote templates",
    },
    {
      label: "Govern",
      value: "Lead-to-cash control",
      detail: "Approvals · discount exceptions · contracts · licences · invoicing",
    },
    {
      label: "Prepare",
      value: "Revenue Cloud migration",
      detail: "Requirements · option comparison · catalogue redesign · hands-on org work",
    },
  ],
  priorities: [
    {
      number: "01",
      title: "Lead-to-opportunity",
      body: "Design lead management end to end: capture, qualification, routing, ownership and hand-off into Salesforce as the single source of truth.",
    },
    {
      number: "02",
      title: "Opportunity management & SPICED",
      body: "Make the sales methodology part of how opportunities are captured, progressed, reviewed and forecast in Sales Cloud.",
    },
    {
      number: "03",
      title: "CPQ to Revenue Cloud",
      body: "Redesign product configuration, pricing, quoting and approvals, and use the move to Revenue Cloud to simplify rather than reproduce legacy design.",
    },
  ],
  commercialModel: {
    title: "One connected commercial process",
    body:
      "At Ascertia, enterprise PKI and digital-signature opportunities can involve long sales cycles, technical products, partners, Pre-Sales and bespoke commercial requirements. My role is to make that complexity visible and governable from qualification through quoting, fulfilment and invoicing.",
    pullQuote: "Salesforce becomes a source of truth when the commercial rules behind the data are clear.",
  },
  leadToCashFlow: {
    groups: [
      {
        label: "Acquire · lead to contract",
        steps: [
          { number: "01", title: "Lead capture & qualification", chip: "Sales Cloud" },
          { number: "02", title: "Opportunity management & methodology", chip: "Sales Cloud" },
          { number: "03", title: "Configure & quote", chip: "CPQ → Revenue Cloud" },
          { number: "04", title: "Pricing & approvals", chip: "CPQ → Revenue Cloud" },
          { number: "05", title: "Contract & order", chip: "CPQ → Revenue Cloud" },
        ],
      },
      {
        label: "Retain & grow · contract to renewal",
        steps: [
          { number: "06", title: "Licences & activation", chip: "Salesforce" },
          { number: "07", title: "Invoicing & revenue", chip: "Xero" },
          { number: "08", title: "Amendments & upsell", chip: "CPQ → Revenue Cloud" },
          {
            number: "09",
            title: "Renewal",
            chip: "CPQ → Revenue Cloud",
            note: "↺ loops back as a new opportunity",
          },
        ],
      },
    ],
    foundation: [
      "Salesforce as single source of truth",
      "Forecasting & pipeline visibility",
      "Controls & reconciliation",
      "Methodology captured in the CRM",
    ],
    note: "My strongest direct experience sits where sales process, product complexity, commercial governance and Salesforce configuration meet.",
  },
  flagshipCases: [
    {
      number: "01",
      eyebrow: "LEAD-TO-OPPORTUNITY · HUBSPOT ↔ SALESFORCE",
      title: "Building the lead-to-opportunity process from scratch",
      relevance: ["Segmentation", "Qualification", "Routing", "Consent"],
      challenge:
        "Ascertia had no outbound process, two legacy HubSpot environments and no consistent route from marketing engagement to a qualified opportunity in Salesforce.",
      actions: [
        "Designed the outbound operating model from scratch: target-account segmentation, enrichment, qualification, routing, ownership, exclusions and GDPR/suppression controls.",
        "Selected Apollo after proofs of concept with Cognism and ZoomInfo, and integrated it with Salesforce as the source of truth.",
        "Built the business case that won CRO approval to consolidate two HubSpot environments into one, migrating approximately 7,000 contacts and reducing licences by more than 50%.",
        "Built a HubSpot engagement score across email, forms, website and paid social, with a 50% decay every three months so it reflects recent engagement.",
        "Implemented a subscription-preference model shared by HubSpot and Salesforce through a two-way-synced field.",
      ],
      impactTitle:
        "A single, governed route from first engagement to qualified opportunity, with consent and ownership clear at every step.",
      pullQuote: "Lead management works when every lead has a clear owner, a clear next step and a reason to be there.",
      impacts: [],
    },
    {
      number: "02",
      eyebrow: "SALES METHODOLOGY · OPPORTUNITY MANAGEMENT",
      title: "Sales methodology: MEDDIC today, SPICED at RepRisk",
      relevance: ["MEDDIC", "Qualification", "Opportunity quality", "Forecast discipline"],
      challenge:
        "A methodology only improves execution when qualification evidence is captured consistently and becomes part of opportunity reviews, forecasting and seller behaviour.",
      actions: [
        "Worked with the Sales Director to implement MEDDIC as part of a wider sales-process project.",
        "Translated qualification expectations into Salesforce fields, stage requirements and a field-completion dashboard used in pipeline reviews.",
        "Ran an extended Gong proof of concept, which struggled with our custom partner-deal model, so I built an AI agent that drafts missing MEDDIC fields from call notes for sellers to confirm: a better fit for how we sell, at a fraction of the cost.",
        "Standardised how Sales and Pre-Sales work an opportunity: requests sent from the opportunity, assigned automatically and pushed into the Pre-Sales Jira board, a Teams channel per deal and the opportunity updated as tasks close. Pre-Sales turnaround on POCs and requests fell by around 25%.",
      ],
      impactTitle:
        "The MEDDIC implementation is substantially complete; the current focus is adoption, consistent field completion and use in pipeline reviews.",
      proofLine: "Current focus · adoption, field completion and use in pipeline reviews",
      pullQuote: "Methodology creates value when it changes what sellers capture, discuss and decide.",
      impacts: [],
    },
    {
      number: "03",
      eyebrow: "SALESFORCE CPQ · LEAD-TO-CASH",
      title: "Making CPQ work for a complex product portfolio",
      relevance: ["Product catalogue", "Configuration", "Pricing", "Approvals"],
      challenge:
        "Ascertia sells complex PKI and digital-signature products across perpetual, annual and user licences, signature packs, support and add-ons. Long-cycle deals and product dependencies made accurate quoting difficult when the CPQ design did not reflect how the business actually sold.",
      actions: [
        "Structured and simplified the product catalogue with Product teams, including compatible products and bundle logic.",
        "Configured pricing, quote templates, quote stages and product rules in Salesforce CPQ.",
        "Established approval and discount-exception governance so non-standard decisions were justified and visible.",
        "Connected the approved quote to contracts, licences and invoicing in Xero through recurring lead-to-cash validation.",
      ],
      impactTitle:
        "Turned an underused CPQ environment into a more reliable operating process for creating quotes and governing commercial exceptions.",
      pullQuote: "The challenge was not adding more rules. It was expressing product complexity in a way Salesforce and sellers could both follow.",
      impacts: [],
    },
    {
      number: "04",
      eyebrow: "REVENUE CLOUD · MIGRATION READINESS",
      title: "Preparing a CPQ-to-Revenue Cloud migration",
      relevance: ["Requirements", "Solution comparison", "Catalogue redesign", "Migration planning"],
      challenge:
        "The existing CPQ environment needs a more scalable long-term architecture, but a migration should not reproduce catalogue and process complexity that no longer serves the business.",
      actions: [
        "Gathered commercial and system requirements across the current quote-to-cash process.",
        "Compared Salesforce Revenue Cloud with Conga against the business requirements.",
        "Identified Revenue Cloud as the preferred fit and began hands-on preparation in Revenue Cloud orgs while budget approval remains pending.",
        "Redesigned the product catalogue and migration approach around what should be retained, simplified or left behind.",
      ],
      migrationConsiderations: [
        "Revenue Cloud is a new data model, not a CPQ upgrade: the catalogue, configuration and pricing logic need redesigning, not copying.",
        "Moving products to attribute-based configuration to reduce SKU sprawl.",
        "Rebuilding pricing logic and discount approvals on the new pricing model.",
        "Planning how active contracts and assets migrate, so amendments and renewals keep working after go-live.",
        "Phased cut-over with clear ownership between the internal team and the implementation partner.",
      ],
      impactTitle:
        "Created a migration approach grounded in real product, pricing, approval and lead-to-cash requirements rather than a lift-and-shift of the current configuration.",
      proofLine: "Current focus · hands-on Revenue Cloud preparation, product catalogue redesign and migration planning",
      pullQuote: "A platform migration is an opportunity to remove complexity, not preserve it in a new data model.",
      impacts: [],
    },
    {
      number: "05",
      eyebrow: "REVENUE DEFINITIONS · DEAL GOVERNANCE",
      title: "One definition of ARR and NRR, before any dashboard",
      relevance: ["ARR", "Multi-year", "NRR", "Churn"],
      challenge:
        "Leadership wanted ARR and net retention reporting, but the answer depended on how multi-year deals, discounts, one-time fees and churn were treated.",
      actions: [
        "Defined the rules: ARR as recurring value net of discounts, one-time fees excluded, the current year's value on multi-year deals with ramps and uplifts as contracted future ARR, churn counted on the contract end date, and net retention measured on the same customer cohort, excluding new logos.",
        "Separated the numbers by purpose: ARR for growth and the board, new ARR for commissions, TCV for bookings and backlog.",
        "Built the ARR and NRR reporting in Salesforce on those definitions.",
        "Rebuilt the model in a working Revenue Cloud environment (fictional data): ARR read from subscription assets, one-time fees excluded, a three-year deal broken into list price, discount, ARR, ACV and TCV, the treatment of a ramp, and NRR and GRR.",
      ],
      impactTitle:
        "One set of definitions behind every ARR and NRR number, ready to carry into Revenue Cloud, where assets make ARR traceable to what was signed.",
      pullQuote: "Agree the definition first; the dashboard is the easy part.",
      impacts: [],
    },
  ],
  spiced: {
    introduction:
      "This is how I'd bring the same discipline to SPICED at RepRisk, as a starting point to refine with your SPICED consultant.",
    stages: [
      { stage: "Discovery", captured: "Situation, Pain", exitCriteria: "Pain confirmed by the customer" },
      { stage: "Qualified", captured: "Impact, Critical Event", exitCriteria: "Impact in euros, critical event dated" },
      { stage: "Proof of Concept", captured: "(refine all)", exitCriteria: "PoC success criteria agreed with the customer" },
      { stage: "Proposal", captured: "Decision", exitCriteria: "Decision process and economic buyer known; at least 4 of 6 elements captured" },
      { stage: "Negotiation / Procurement & Legal", captured: "All reviewed", exitCriteria: "Discount within authority or approved; procurement, security and DORA review on track" },
    ],
    legend: "S = Situation · P = Pain · I = Impact · C = Critical Event · D = Decision (incl. economic buyer) · 6 fields in Salesforce",
    operatingPoints: [
      "In Salesforce: SPICED fields on the opportunity, Path guidance per stage, and validation rules as exit criteria.",
      "Beyond new business: as a subscription business, the same Pain and Impact carry into renewals and expansion, so Client Growth knows why the customer bought.",
      "Linked to pricing: Impact and Critical Event become the justification for discount approvals, so pricing exceptions are tied to customer value.",
      "Adoption: a SPICED completion dashboard by stage and seller, reviewed in pipeline calls, plus an AI assist that drafts SPICED fields from call notes for the seller to confirm.",
      "Forecast credibility: the Critical Event date is checked against the close date in pipeline reviews, and deals without one are flagged as risk.",
    ],
  },
  additionalProof: [
    {
      title: "Commercial exception governance",
      subtitle: "Deal approvals and pricing governance",
      body: "Manage approval rules, discount exceptions and non-standard commercial requests so decisions are justified, visible and connected to the quote-to-cash process.",
      relevance: ["Pricing governance", "Approvals", "Commercial control"],
    },
    {
      title: "Lead-to-cash assurance",
      subtitle: "Salesforce ↔ Xero controls",
      body: "Recurring checks across quotes, invoices, contract dates and licences, plus monthly revenue-recognition support: I prepare and validate the Salesforce reports Finance uses for accrued and deferred revenue, then reconcile discrepancies with the Financial Controller against Xero mid-month.",
      relevance: ["Data integrity", "Finance alignment", "Exception handling"],
    },
    {
      title: "AI-enabled control",
      subtitle: "Sales Operations Agent",
      body: "Built a read-only Agentforce agent, including Apex actions and test classes, that reviews Salesforce against finance data and surfaces exceptions for human review.",
      relevance: ["Weekly checks from 1.5–2 hours to ~15 minutes", "around 90–100 hours a year including month-end checks"],
    },
    {
      title: "Revenue operating rhythm",
      subtitle: "Forecasting and pipeline",
      body: "Own fortnightly forecast reviews and leadership reporting, monitoring pipeline coverage against a 3x target; quarter-end forecasts have remained broadly within approximately 10% of actuals.",
      relevance: ["Forecast discipline", "Pipeline governance", "Leadership visibility"],
    },
    {
      title: "GTM KNOWLEDGE HUB",
      subtitle: "Process documentation people actually follow",
      body: "Wrote around half of the company's SOPs and organise the commercial SharePoint: each SOP has an owning department and its review date in the title, nothing older than 24 months. New processes are rolled out in recorded sessions. An RFP agent in Microsoft Teams searches the approved content, cites its sources and flags what needs Legal or Security, cutting an RFP from 1–2 days to 1–2 hours.",
      relevance: ["Process governance", "Enablement", "AI on curated content"],
    },
  ],
  principles: [
    {
      number: "01",
      title: "Simplify before migrating",
      body: "Do not reproduce obsolete catalogue and process complexity in a new platform.",
    },
    {
      number: "02",
      title: "Connect the full transaction",
      body: "A quote is only reliable when contract, licence, invoice and reporting data remain aligned.",
    },
    {
      number: "03",
      title: "Make methodology operational",
      body: "Qualification must shape CRM data and review behaviour, not live only in training materials.",
    },
    {
      number: "04",
      title: "Own the design, partner on delivery",
      body: "Own the design and requirements, work alongside the implementation partner, and build what doesn't need them, so knowledge stays in-house.",
    },
    {
      number: "05",
      title: "Design for the renewal on day one",
      body: "Structure products, contracts and assets so amendments, upsell and renewals work without manual rework.",
    },
  ],
  systems: [
    "Salesforce Sales Cloud · leads, opportunities & forecasting",
    "Salesforce CPQ · products, pricing, quotes & approvals",
    "Revenue Cloud · hands-on preparation & migration planning",
    "Salesforce Flow & SOQL · automation & data",
    "Salesforce Agentforce · AI-enabled commercial controls",
    "Apex · AI-assisted development",
    "HubSpot · marketing & lifecycle data",
    "Xero · invoicing & reconciliation",
    "Gong · proof of concept",
    "Advanced Excel · modelling & controls",
  ],
  certifications: [
    "Salesforce Certified Administrator",
    "Salesforce Certified Sales Cloud Consultant",
    "Salesforce Certified Revenue Management Consultant (formerly Revenue Cloud Consultant) · In progress",
  ],
} as const;
