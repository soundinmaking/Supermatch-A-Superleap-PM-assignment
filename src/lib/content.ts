export const funnelStages = [
  {
    n: "01",
    stage: "Lead Intake & Distribution",
    volume: 420,
    what: "Portal + ad leads deduped & auto-assigned; SLA clock starts (5–15 min)",
    metric: "Leads assigned · SLA compliance %",
  },
  {
    n: "02",
    stage: "Telecalling & Qualification",
    volume: 270,
    what: "BANT check + disposition tagged; hot/warm sent to site visits",
    metric: "Connect rate · Qualification rate",
  },
  {
    n: "03",
    stage: "Site Visit Management",
    volume: 95,
    what: "Confirmed · RM checks in · tour done · feedback logged same day",
    metric: "Visit-to-lead ratio · No-show rate",
  },
  {
    n: "04",
    stage: "Follow-up & Negotiation",
    volume: 46,
    what: "Day 1/3/7 cadence · price approvals · token tracked",
    metric: "Follow-up adherence · Negotiation-to-booking rate",
  },
  {
    n: "05",
    stage: "Booking to Agreement",
    volume: 9,
    what: "KYC · loan coordination · agreement & RERA compliance",
    metric: "Booking-to-agreement TAT",
  },
  {
    n: "06",
    stage: "Post-Sales, MIS & Review",
    volume: 9,
    what: "Possession updates · referral ask · MIS & evening huddle",
    metric: "Daily conversion funnel · Rep-wise productivity",
  },
] as const;

export const personas = [
  {
    title: "Field sales agents / property consultants",
    tag: "Core users",
    body: "Portal leads (99acres, MagicBricks, Housing), call and qualify buyers, run site visits, follow-ups.",
  },
  {
    title: "Pre-sales / tele-callers (larger firms)",
    body: "First call within 5–10 min, qualify budget/config/timeline, book site visit, pass to field agent.",
  },
  {
    title: "Team leads / area sales managers",
    body: "Assign leads, check follow-up discipline and site-visit counts, coach reps.",
  },
  {
    title: "Sales heads / RevOps / CRM admins",
    body: "Set up pipelines, stages, routing rules, reports; watch speed-to-lead and visit-to-booking conversion.",
  },
  {
    title: "Brokerage owners / founders",
    body: "The buyers of the CRM.",
  },
] as const;

export type WorkflowNode = {
  id: string;
  kind: "start" | "process" | "decision" | "end";
  label: string;
  branches?: { label: string; to: string }[];
};

export const workflowNodes: WorkflowNode[] = [
  {
    id: "entry",
    kind: "start",
    label:
      "Entry points: Portal Leads (99acres, MagicBricks) · Paid Ads (Meta/Google) · Website / Referral Form · Channel Partner (CP) Submission",
  },
  { id: "created", kind: "process", label: "CRM Lead Created & Logged" },
  {
    id: "dup",
    kind: "decision",
    label: "Duplicate Lead?",
    branches: [
      { label: "Yes", to: "Merge into existing record — resumes at its current CRM stage" },
      { label: "No", to: "Continue" },
    ],
  },
  { id: "assign", kind: "process", label: "Auto-Assign to Telecaller (project/location rules)" },
  { id: "firstcall", kind: "process", label: "First Call Attempt (SLA: 5–15 min)" },
  {
    id: "connected",
    kind: "decision",
    label: "Connected?",
    branches: [
      {
        label: "No",
        to: "RNR, retry up to 3× same day → still unreachable → Cold / RNR Nurture Drip (WhatsApp/SMS)",
      },
      { label: "Yes", to: "Continue" },
    ],
  },
  {
    id: "qual",
    kind: "process",
    label: "Qualification Call (BANT: budget, location, timeline, end-use)",
  },
  {
    id: "fit",
    kind: "decision",
    label: "Budget / Location / Timeline fit?",
    branches: [
      { label: "Interested, not ready (3–6 mo)", to: "Add to nurture" },
      { label: "Invalid / Not Interested", to: "Mark Dead (archived)" },
      { label: "Fits", to: "Continue" },
    ],
  },
  { id: "visit", kind: "process", label: "Schedule Site Visit" },
  {
    id: "visitexec",
    kind: "process",
    label: "Site Visit Execution (tour, pricing walkthrough)",
  },
  {
    id: "showed",
    kind: "decision",
    label: "Showed Up?",
    branches: [
      {
        label: "No",
        to: "No-show, reschedule attempt (up to 2×) → still unreachable after 2 attempts → Cold Nurture",
      },
      { label: "Yes", to: "Continue" },
    ],
  },
  {
    id: "interested",
    kind: "decision",
    label: "Interested After Visit?",
    branches: [
      {
        label: "No",
        to: "Log lost reason (price / location / product fit) → feedback loop to Marketing & Product",
      },
      { label: "Yes", to: "Continue to Follow-up & Negotiation" },
    ],
  },
  { id: "followup", kind: "process", label: "Follow-up & Negotiation" },
  {
    id: "agreed",
    kind: "decision",
    label: "Terms Agreed?",
    branches: [
      { label: "Budget mismatch / objections", to: "Escalate to Sales Manager" },
      { label: "Not approved", to: "Offer alternate unit/project" },
      {
        label: "No response",
        to: "Cadence continues (Day 1/3/7/14) → Mark Lost after 14 days silence",
      },
      { label: "Agreed", to: "Continue" },
    ],
  },
  { id: "token", kind: "process", label: "Token Collection" },
  {
    id: "tokenreal",
    kind: "decision",
    label: "Token Realized?",
    branches: [
      { label: "No", to: "Bounced/Cancelled → back to Negotiation or Mark Lost" },
      { label: "Yes", to: "Continue" },
    ],
  },
  {
    id: "booking",
    kind: "process",
    label: "Booking to Agreement (KYC, Home Loan, RERA disclosure)",
  },
  { id: "registration", kind: "process", label: "Registration & Handover" },
  {
    id: "postsales",
    kind: "process",
    label: "Post-Sales Engagement (possession updates, CS)",
  },
  {
    id: "referral",
    kind: "end",
    label: "Referral Ask (loops back into lead sources)",
  },
];

export const marketQuotes = {
  Zoho: [
    {
      quote: "Time taking in capturing the real time lead",
      reviewer: "Abhishek K., Senior Account Manager, Real Estate",
      source: "Capterra",
    },
    {
      quote: "our trial period was useless to test integrations",
      reviewer: "Devon P., Marketing Coordinator, Real Estate (Zoho CRM Plus)",
      source: "Capterra",
    },
    {
      quote: "customer support doesn't know a lot about their own product",
      reviewer: "Verified Reviewer, Acquisition Manager, Real Estate",
      source: "Capterra",
    },
    {
      quote: "I wish that it had templates specifically for Commercial Real Estate",
      reviewer: "Bigin by Zoho CRM user",
      source: "Capterra",
    },
    {
      quote:
        "The email editor also has some limitations and occasionally feels buggy when designing templates",
      reviewer: "Mandie K., Director of Marketing, Real Estate (Zoho Campaigns)",
      source: "Capterra",
    },
  ],
  Freshsales: [
    {
      quote: "We reported a Freshsales defect in 2025, and it remains unresolved",
      reviewer: "Alvin Y., Real Estate Sales Manager & Revenue Manager",
      source: "G2",
    },
    {
      quote: "My only initial complaint was a feature I required within one of the systems",
      reviewer: 'Real Estate reviewer, "The Only Way to Scale 10X"',
      source: "G2",
    },
    {
      quote: "I need to be able to send more emails for certain campaigns",
      reviewer: 'Real Estate reviewer, "Better than Salesforce"',
      source: "G2",
    },
    {
      quote:
        "in app email notifications, website visitor analytics and segmentation (missing features)",
      reviewer: 'Real Estate reviewer, "FreshSales with Fresh sales"',
      source: "G2",
    },
    {
      quote: "there is no predictive dialer, and there is no email templates",
      reviewer: "Rudy V., Business Development Manager, Real Estate",
      source: "Capterra",
    },
  ],
  Salesforce: [
    {
      quote: "Salesforce has so many features that some of them seem a little harder",
      reviewer: "William K., Sales Associate, Real Estate",
      source: "Capterra",
    },
    {
      quote: "having so much data and so many functions can make it a little clunky",
      reviewer: "Kyle R., Transaction Coordinator, Real Estate",
      source: "Capterra",
    },
    {
      quote: "the system runs slow with large datasets, and it can take a while",
      reviewer: "Ryan C., Analytics Manager, Real Estate",
      source: "Capterra",
    },
    {
      quote: "It does not have round robin assignment feature",
      reviewer: 'Real Estate reviewer, "Great Lead Management, But Missing Round Robin Assignment"',
      source: "G2",
    },
  ],
} as const;

export const keyInsight =
  "People cancel after month of booking and then inventory starts to send left right and centre - selling it at older prices and asking the remembered customers to please invest";

export const insights = [
  "Reporting is the #1 gap: Zoho, Freshsales, Salesforce, and LeadSquared reviewers all separately flagged rigid or shallow reporting.",
  "Real estate is not built in: none of the four general CRMs models a property deal (site visit → booking → registration) natively.",
  "Field usability lags desk usability: mobile/dialer gaps hit agents doing site visits and calls hardest, not desk-bound admins.",
  "Support and data trust: unresolved-defect and “opportunity marked won that wasn't” complaints point to reliability gaps in workflows carrying real money.",
  "Even purpose-built tools (Sell.do, LeadSquared) draw complaints on customization and reporting — this is a genuine open problem, not one anyone has already solved.",
] as const;

export const gtmPhases = [
  {
    phase: "Phase 1",
    name: "Foundation",
    days: "Days 1–14",
    items: [
      "One-click “show me my matches” entry point, no new setup",
      "Free preview of matches before any commitment",
      "Launch assets: explainer video, blog post, SEO landing page",
      "In-app triggers (banners, empty states, tooltips)",
      "Turn on for existing user base quietly, as an early listening post",
    ],
  },
  {
    phase: "Phase 2",
    name: "Awareness",
    days: "Days 15–30",
    items: [
      "Public launch: launch post, founder post, community/launch-platform seeding",
      "Open webinar on how matching works, no gated sales call",
      "Self-serve activation prompt to full existing user base",
      "Broad content-led paid promotion, not narrow account targeting",
      "Light in-product virality: share a match, loop in a teammate",
    ],
  },
  {
    phase: "Phase 3",
    name: "Compounding",
    days: "Days 31–45",
    items: [
      "Educational lifecycle emails to non-activators — tips and nudges only",
      "Running content series featuring real matches as they occur",
      "Expand SEO with use-case and comparison pages",
      "Community spotlights from users sharing their own match moments",
      "Retarget based on in-product behavior (viewed the feature without activating)",
    ],
  },
  {
    phase: "Phase 4",
    name: "Sustain",
    days: "Days 46–60+",
    items: [
      "Review the funnel discovery → activation → repeat use; fix the largest drop-off",
      "Double down on whichever channel drives activation organically",
      "Keep a running log of matches as they happen, including the slow ones",
      "Maintain steady content and nudges rather than a sales surge",
    ],
  },
] as const;

export const metricsToTrack = [
  "Discovery → activation → repeat-use funnel",
  "Time to first match",
  "Organic traffic, social engagement, webinar signups, community mentions",
  "A running log of real matches as they surface",
  "Retention and win-back revenue, tracked over 2–12 months",
] as const;

export const taglines = [
  "The match was already there.",
  "Some matches will strike today. Some wait a year for the right moment.",
  "Matching, not guessing.",
  "SUPERLEAP already knows who to reach, and when.",
  "Built to keep watching.",
] as const;

export const messagingPillars = [
  "The signal was already there",
  "Matching, not guessing",
  "Built to keep watching",
  "SUPERLEAP understands people, not just data points",
] as const;

export const mechanismStopBadVisit = [
  "Unit status changes",
  "Check if a visit is booked against it",
  "If yes, freeze it, pull the buyer's preferences, find similar available units",
  "Tell the rep with the alternative already attached",
  "Nothing similar available → send to a human instead of forcing a bad match",
] as const;

export const mechanismWakeDeadLead = [
  "Unit becomes available",
  "Check every lead, active and lost, for a match",
  "Rank by how serious the original interest sounded — not recency",
  "Message the top few, naming the actual unit",
  "Cap how many people get messaged for one unit; respect opt-outs",
  "Only a real reply creates work for a human",
] as const;

export const candidate = {
  name: "Divyansh Verma",
  program: "PGP in Startup Leadership, Mesa School of Business (Product Management & AI), 2026",
  email: "divyansh_verma@pg26.mesaschool.co",
  phone: "+91-7706962293",
  linkedin: "#",
  github: "#",
} as const;
