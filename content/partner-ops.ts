export const partnerOpsPortfolio = {
  profile: {
    name: "Miriam Gonzalez",
    subtitle: "Prepared for the Partner Operations Manager role at Lovable · Miriam Gonzalez",
    headline: "Partner operations, built to scale",
    email: "mir_864@hotmail.com",
    linkedIn: "https://www.linkedin.com/in/mirgonzalez1/",
    location: "Woking, Surrey (London)",
  },
  proof: [
    "Partner portal: leads, cases and partner dashboards",
    "AI agents in production",
    "HubSpot and Salesforce, hands-on",
  ],
  portal: {
    context: [
      "Ascertia is a digital trust software company that sells mostly through resellers and distributors to customers in 40+ countries, moving towards ~80% of revenue through partners.",
      "Partners had no access to our CRM, so updates on deals, renewals and commissions came by email and manual reports.",
    ],
    buildIntro: "With a three-person Channel & Alliances team, we built the portal on Salesforce Experience Cloud.",
    capabilities: [
      {
        title: "Lead registration",
        body: "Partners register leads that land directly in Salesforce with the partner attributed and routed to the right owner.",
      },
      {
        title: "Support",
        body: "Partners open cases from the portal instead of emailing.",
      },
      {
        title: "Partner dashboard",
        body: "Each partner sees their own revenue, open deals, upcoming renewals and registered-lead status — and only their own data.",
      },
    ],
    result:
      "Manual reporting removed; partners act on renewals before they lapse; the channel team spends its time growing partners instead of answering status emails.",
  },
  partnerOperations: [
    "Attribution and tiered partner structures — distributor, reseller and end customer",
    "Revenue share and channel commission controls",
    "Partner onboarding and certification through Ascertia Academy — courses and certifications assigned according to the products each partner sells",
    "Partner contribution in quota planning and partner reporting to the CRO",
  ],
  agents: [
    {
      title: "Sales Operations agent",
      detail: "Agentforce, with actions in Apex. Weekly checks of Salesforce against the finance system.",
      metric: "1.5–2 hours → ~15 minutes",
      metricDetail: "around 90–100 hours a year",
    },
    {
      title: "RFP agent",
      detail: "Runs in Microsoft Teams and creates first drafts from approved content.",
      metric: "1–2 days → 1–2 hours",
      metricDetail: "4–5 RFPs a month",
    },
    {
      title: "Qualification agent",
      detail:
        "Drafts missing qualification fields from call notes for sellers to confirm. Built after a Gong proof of concept couldn't handle our partner-deal model, at a fraction of the cost.",
      metric: "Seller-confirmed",
      metricDetail: "qualification fields",
    },
    {
      title: "Renewals & account management",
      detail: "Specialised agents supporting renewals and account management in Salesforce.",
      metric: "Salesforce",
      metricDetail: "embedded workflows",
    },
  ],
  hubspot: [
    "Consolidated two HubSpot environments into one — ~7,000 contacts, licences cut by more than 50%",
    "Consent and subscription preferences synced both ways with Salesforce",
    "Engagement score with a 50% decay every three months",
    "Apollo integrated with Salesforce and HubSpot, with GDPR suppression for customers and partners",
  ],
  reporting: [
    {
      metric: "Coverage ratio",
      definition: "Inquiries ÷ certified partners, by country and project type",
      use: "Shows where to recruit partners",
    },
    {
      metric: "Time to first reply",
      definition: "Median hours from inquiry to first partner reply",
      use: "Drives SLA and reassignment",
    },
    {
      metric: "Inquiry → won",
      definition: "Won ÷ inquiries created in the period",
      use: "Matching and partner quality",
    },
    {
      metric: "Time to first deal",
      definition: "Days from application to first closed deal",
      use: "The leading indicator for sourced ARR",
    },
    {
      metric: "Activation",
      definition: "% of certified partners with a deal within 90 days",
      use: "Certification and onboarding quality",
    },
    {
      metric: "Sourced vs influenced ARR",
      definition: "Never added together",
      use: "Commissions, tiers and program value",
    },
    {
      metric: "Tier proximity",
      definition: "$ of sold ARR to the next tier",
      use: "Who to push this quarter",
    },
    {
      metric: "Agent deflection",
      definition: "% of tickets the agent closes without a human, by category",
      use: "Where to add rules or tools",
    },
  ],
  firstNinetyDays: [
    {
      period: "30 days",
      body: "Learn the PRM, the support agent and the co-sell flow end to end; shadow partner support; agree metric definitions.",
    },
    {
      period: "60 days",
      body: "Ship the first fixes from support escalations; program dashboard by motion; map one hyperscaler co-sell deal end to end and automate the double entry.",
    },
    {
      period: "90 days",
      body: "Targets tied to the GTM plan; recruitment priorities from coverage gaps; first-deal playbook for newly certified partners.",
    },
  ],
} as const;
