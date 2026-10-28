import type { ReferenceId } from "./references";

export type CapabilityMaturity = "CURRENT PROTOTYPE" | "PROPOSED PILOT" | "FUTURE VISION";
export type EvidenceBasis = "company-brief" | "industry-source" | "proposal" | "illustrative";
export type SupportingPoint = {
  title: string;
  detail: string;
  basis: EvidenceBasis;
  maturity?: CapabilityMaturity;
  referenceIds?: readonly ReferenceId[];
};
export type PresentationSection = {
  id: string;
  title: string;
  headline: string;
  subtitle: string;
  businessArgument: string;
  points: readonly [SupportingPoint, SupportingPoint, SupportingPoint, ...SupportingPoint[]];
  visual: { type: string; description: string };
  keyTakeaway: string;
  transition: string;
  speakerNotes: string;
  referenceIds: readonly ReferenceId[];
  maturityLabels: readonly CapabilityMaturity[];
};

export const presentation = {
  "title": "AI-Powered Commissioning Intelligence Platform",
  "version": "Executive owner-review edition 1.0",
  "status": "COMPANY OWNER REVIEW / BUSINESS OPPORTUNITY",
  "format": "Ten concise sections for independent owner review",
  "audience": [
    "Company owner"
  ],
  "companyEvidence": "Company experience and prototype status are supplied by the business brief; internal records and demonstrations have not been independently audited.",
  "terminology": "AI training means training engineers with AI-assisted learning; it does not imply model training or rights to fine-tune on third-party documents.",
  "productBoundary": "Decision support and simulated practice. No live control, established PLC/sensor connection, production Digital Twin, or demonstrated financial return."
} as const;

export const executiveContent = {
  "evidence": {
    "statistics": [
      {
        "value": "~40%",
        "label": "Organizations reporting a major human-error-related outage within the previous three years.",
        "scope": "Organizations in the research cited by Uptime’s 2025 release."
      },
      {
        "value": "85%",
        "label": "Of those human-error-related incidents, the share involving procedural noncompliance or flawed procedures.",
        "scope": "The human-error-related incident subset, not all outages."
      }
    ],
    "referenceIds": [
      "uptime-outage-analysis-2025"
    ],
    "scopeNote": "Publisher-reported scope; detailed response counts are not provided in the release. These are not product-preventable outage rates."
  },
  "valueDrivers": [
    "Lower training effort",
    "Faster troubleshooting",
    "Fewer avoidable commissioning delays",
    "Reduced dependency on senior engineering support"
  ],
  "commercialization": [
    {
      "title": "Initial commercialization",
      "detail": "Paid enterprise pilot for training and troubleshooting."
    },
    {
      "title": "Potential expansion",
      "detail": "Recurring software licensing for engineering teams, equipment manufacturers, or sites, subject to customer validation."
    }
  ],
  "commercialNote": "Possible business models and benefits to validate — no signed contracts or measured improvements.",
  "discussionTopics": [
    "Define one authorized equipment and troubleshooting use case.",
    "Evaluate suitable AI, search, agent, and data architecture.",
    "Agree on pilot responsibilities and success metrics.",
    "Explore available technical support and partnership pathways."
  ],
  "decision": "Approve a focused pilot scope and explore technical alignment with Google Cloud.",
  "counts": [
    {
      "section": "06",
      "value": "4",
      "label": "Core platform capabilities"
    },
    {
      "section": "08",
      "value": "10–20",
      "label": "Proposed verified troubleshooting scenarios"
    },
    {
      "section": "09",
      "value": "3",
      "label": "Development maturity stages"
    }
  ],
  "capabilityNote": "Proposed pilot products: engineer-reviewed support, not deployed systems or authorization to operate equipment."
} as const;

export const presentationSections = [
  {
    "id": "01",
    "title": "From Field Experience to Intelligent Infrastructure",
    "headline": "Turn field knowledge into repeatable AI products.",
    "subtitle": "Build training and troubleshooting products from our power and liquid-cooling commissioning experience.",
    "businessArgument": "The opportunity is to extend engineering services with software that reuses our knowledge across teams and projects.",
    "points": [
      {
        "title": "Engineering experience is already in place",
        "detail": "Our commissioning work brings equipment context, practical troubleshooting experience, and engineers who understand how evidence supports a diagnosis.",
        "basis": "company-brief"
      },
      {
        "title": "Convert project knowledge into reusable assets",
        "detail": "Structure permitted issue records, test evidence, and diagnostic reasoning into reviewed cases that can support learning and assistance across engagements.",
        "basis": "proposal",
        "maturity": "PROPOSED PILOT"
      },
      {
        "title": "Begin with a measurable commercial use case",
        "detail": "Target training and troubleshooting for one equipment family. Test user benefit, delivery cost, and willingness to pay before expanding the offer.",
        "basis": "proposal",
        "maturity": "PROPOSED PILOT"
      }
    ],
    "visual": {
      "type": "business-evolution",
      "description": "A left-to-right progression: Field services → Reviewed engineering knowledge → Proposed software offering. Label demonstrations separately from commercial readiness; use no customer logos or revenue chart."
    },
    "keyTakeaway": "Start with the expertise we already have, then validate one product opportunity.",
    "transition": "The next question is why commissioning teams need this support now.",
    "speakerNotes": "We are proposing an extension of our engineering business, grounded in the power and liquid-cooling commissioning experience described in the company brief. Today, much of that value is delivered through people and project documents. The opportunity is to package selected, permitted knowledge into software that supports preparation, training, and problem solving across engagements. Our initial buyer hypothesis is the commissioning or training manager, with manufacturers and infrastructure operators as potential subsequent audiences. Existing demonstrations provide a starting point, not proof of commercial readiness. The business decision is whether a focused pilot can establish a repeatable user benefit that customers would value and pay for.",
    "referenceIds": [],
    "maturityLabels": [
      "CURRENT PROTOTYPE",
      "PROPOSED PILOT"
    ]
  },
  {
    "id": "02",
    "title": "The Industry Challenge",
    "headline": "A documented human and procedural risk creates an industry opportunity.",
    "subtitle": "Uptime’s 2025 findings support investment in training, procedures, and timely engineering assistance.",
    "businessArgument": "These findings describe an industry problem; they do not predict how many outages our product could prevent.",
    "points": [
      {
        "title": "Human-error-related exposure",
        "detail": "Uptime’s release describes organizations reporting major human-error-related outages over three years; the percentages below retain its stated scope.",
        "basis": "industry-source",
        "referenceIds": [
          "uptime-outage-analysis-2025"
        ]
      },
      {
        "title": "Procedures are an actionable focus",
        "detail": "The procedural finding concerns the human-error-related incident subset, not all outages. Training and support are opportunities to evaluate, not demonstrated remedies.",
        "basis": "industry-source",
        "referenceIds": [
          "uptime-outage-analysis-2025"
        ]
      },
      {
        "title": "Commissioning connects the interfaces",
        "detail": "ASHRAE highlights coordination and feedback demands across rapidly deployed power and cooling systems; our pilot focuses on the engineer’s decision workflow.",
        "basis": "industry-source",
        "referenceIds": [
          "ashrae-performance-validation"
        ]
      }
    ],
    "visual": {
      "type": "risk-chain",
      "description": "Show system interdependencies → interpretation/procedure gaps → repeat testing, delayed handover, and operational exposure. Attach source labels to industry context and an illustrative label to the workflow; do not size risks with unsupported percentages."
    },
    "keyTakeaway": "Better training, stronger procedures, and faster engineering support represent a measurable industry opportunity.",
    "transition": "Documentation is necessary, but it cannot provide experience with every failure combination.",
    "speakerNotes": "The industry evidence supports a specific problem rather than a blanket claim that reliability is getting worse. Uptime's 2025 release describes improving overall outage trends alongside procedural weaknesses and growing complexity. We deliberately avoid percentages here because the public release does not expose every underlying survey denominator and filter. ASHRAE separately highlights commissioning coordination and feedback pressures in rapidly deployed infrastructure. For us, the practical entry point is narrower: help engineers prepare for exceptions, use the correct evidence, and close documentation gaps. We will measure those workflows in a pilot, rather than convert industry outage statistics into an assumed company savings figure.",
    "referenceIds": [
      "uptime-outage-analysis-2025",
      "ashrae-performance-validation"
    ],
    "maturityLabels": []
  },
  {
    "id": "03",
    "title": "Why Traditional Training Falls Short",
    "headline": "Give engineers practice with the exceptions, not just the checklist.",
    "subtitle": "Scenario-based learning complements manuals and supervised fieldwork with repeatable diagnostic practice.",
    "businessArgument": "Engineers can investigate difficult failure conditions in software without deliberately faulting operating equipment.",
    "points": [
      {
        "title": "Move beyond expected sequences",
        "detail": "Manuals describe intended behavior; realistic cases teach engineers to reconcile conflicting indications and incomplete evidence when actual conditions differ.",
        "basis": "illustrative"
      },
      {
        "title": "Expose the diagnostic alternatives",
        "detail": "Use reviewed examples of stale communications, unusual sensor readings, control-permissive mismatches, and cooling anomalies to practice competing explanations rather than memorized answers.",
        "basis": "proposal",
        "maturity": "PROPOSED PILOT"
      },
      {
        "title": "Assess the reasoning",
        "detail": "Review evidence selection, procedure use, and justified escalation on unseen cases. Training results guide development rather than replace supervised field competence assessment.",
        "basis": "proposal",
        "maturity": "PROPOSED PILOT"
      }
    ],
    "visual": {
      "type": "learning-comparison",
      "description": "Three complementary learning modes: Documents for reference; Field practice for supervised execution; Proposed simulator for repeatable exceptions. Under the simulator, branch a single alarm into sensor, communications, and process hypotheses."
    },
    "keyTakeaway": "Practice how to investigate uncertainty before encountering it on site.",
    "transition": "Useful scenarios require the engineering judgment that makes our company relevant.",
    "speakerNotes": "This is not an argument for replacing manuals, checklists, or supervised commissioning. It is an argument for adding practice that normal project schedules may not provide. A learner may see a low-flow indication, but the useful skill is deciding whether it reflects a process fault, a measurement problem, or stale communications. An isolated simulator can present those alternatives repeatedly without creating a physical fault in operating equipment. The proposed evaluation should reward justified reasoning, procedural discipline, and appropriate escalation, rather than speed alone. We must still test whether these exercises improve performance on new cases; a simulator score is not a field authorization or competency certification.",
    "referenceIds": [],
    "maturityLabels": [
      "PROPOSED PILOT"
    ]
  },
  {
    "id": "04",
    "title": "Our Competitive Advantage",
    "headline": "Our competitive advantage is not the AI model itself. It is the real engineering experience behind it.",
    "subtitle": "Combine real cases, diagnostic reasoning, and expert validation into knowledge a generic document chatbot cannot supply alone.",
    "businessArgument": "The value lies in reviewed engineering context: what happened, why a check mattered, and how the resolution was verified.",
    "points": [
      {
        "title": "Real troubleshooting records",
        "detail": "Use authorized issue logs, checklists, and test reports to connect symptoms with equipment context, resolution, and retest evidence.",
        "basis": "company-brief"
      },
      {
        "title": "Tacit diagnostic knowledge",
        "detail": "Capture how experienced engineers distinguish plausible causes, identify missing evidence, and decide when a problem needs escalation.",
        "basis": "proposal",
        "maturity": "PROPOSED PILOT"
      },
      {
        "title": "Expert-reviewed structured cases",
        "detail": "Named reviewers approve applicability, technical quality, source revisions, and reuse permissions before a case becomes part of the released library.",
        "basis": "proposal",
        "maturity": "PROPOSED PILOT"
      }
    ],
    "visual": {
      "type": "evidence-stack",
      "description": "Stack field experience, permitted source records, structured failure cases, and expert sign-off beneath a proposed software layer. Put permission and revision checks at the entry gate rather than depicting an unrestricted data lake."
    },
    "keyTakeaway": "Turn field knowledge into a reusable engineering asset, not just a searchable document collection.",
    "transition": "That foundation enables a concrete first product: guided troubleshooting practice.",
    "speakerNotes": "Our strongest claim is not that we have access to a better language model. It is that the company brief describes engineers and project experience able to distinguish a plausible answer from a sound commissioning conclusion. That advantage must be made tangible. We need permitted records, equipment context, documented outcomes, and reviewers who can explain the diagnostic reasoning. Some lessons will remain specific to a model, revision, or site and should not be generalized. We also must confirm reuse rights before commercializing records. A reviewed failure library and its approval process are the proposed product assets; the availability and quality of those assets still require internal confirmation.",
    "referenceIds": [],
    "maturityLabels": [
      "PROPOSED PILOT"
    ]
  },
  {
    "id": "05",
    "title": "AI-Powered Training & Failure Simulation",
    "headline": "A realistic exercise makes diagnostic judgment visible.",
    "subtitle": "Compare local readings and timestamps before assuming that a low-flow indication is a hydraulic fault.",
    "businessArgument": "A rules-based scenario supplies the equipment state; the AI Instructor helps the learner reason through approved evidence.",
    "points": [
      {
        "title": "Present conflicting evidence",
        "detail": "The fictional CDU exercise shows a low supervisory flow indication alongside normal local evidence. A stale signal is one possible explanation to investigate.",
        "basis": "illustrative",
        "maturity": "PROPOSED PILOT"
      },
      {
        "title": "Keep the simulation technically controlled",
        "detail": "Expert-authored rules fix observations and responses to simulated checks. Retrieved references guide explanations; the AI does not invent physics or change the case.",
        "basis": "proposal",
        "maturity": "PROPOSED PILOT"
      },
      {
        "title": "Evaluate the diagnostic choices",
        "detail": "Score evidence selection, sequencing, procedural discipline, and justified escalation against an approved rubric. The exercise remains isolated from live equipment.",
        "basis": "proposal",
        "maturity": "PROPOSED PILOT"
      }
    ],
    "visual": {
      "type": "training-interaction",
      "description": "Engineer ↔ AI Instructor ↔ Authorized reference retrieval, alongside Engineer ↔ Rules-based equipment simulator. A separate expert-approved case definition feeds the simulator and assessment rubric. Mark the stale flow-value case as illustrative and show no live telemetry."
    },
    "keyTakeaway": "Train the investigation, not just recognition of an alarm.",
    "transition": "The same reviewed knowledge can support commissioning tasks beyond training.",
    "speakerNotes": "Consider a software-only coolant distribution unit exercise. The learner sees a low-flow value, but must establish whether the evidence indicates a real hydraulic issue or stale communication. An approved state table supplies consistent observations, including timestamps and local-versus-supervisory indications. The engineer chooses diagnostic checks; the AI Instructor explains references and offers staged hints. Crucially, the model does not calculate equipment behavior or decide that a fault has been resolved. Rules and an expert-approved case define those outcomes. Assessment considers reasoning and procedural discipline, not only time. This is an illustrative proposed pilot scenario, not a customer incident, an operational simulator, or guidance for intervening on live equipment.",
    "referenceIds": [],
    "maturityLabels": [
      "PROPOSED PILOT"
    ]
  },
  {
    "id": "06",
    "title": "Commissioning Intelligence Platform",
    "headline": "Four connected products built on one engineering knowledge foundation.",
    "subtitle": "Use reviewed field knowledge across learning, readiness, troubleshooting, and digital handover.",
    "businessArgument": "One shared knowledge engine supports complementary products rather than four disconnected document collections.",
    "points": [
      {
        "title": "AI Training & Failure Simulation",
        "detail": "Train engineers on realistic failure scenarios built from verified field experience.",
        "basis": "proposal",
        "maturity": "PROPOSED PILOT"
      },
      {
        "title": "Pre-Commissioning Validation",
        "detail": "Identify missing prerequisites, unresolved exceptions, and documentation inconsistencies before on-site testing.",
        "basis": "proposal",
        "maturity": "PROPOSED PILOT"
      },
      {
        "title": "AI Troubleshooting Assistance",
        "detail": "Connect equipment documentation, historical cases, and expert knowledge to accelerate troubleshooting.",
        "basis": "proposal",
        "maturity": "PROPOSED PILOT"
      },
      {
        "title": "Digital Equipment Passport",
        "detail": "Preserve equipment history and commissioning knowledge for future operations and maintenance.",
        "basis": "proposal",
        "maturity": "PROPOSED PILOT"
      },
      {
        "title": "Shared Engineering Knowledge Engine",
        "detail": "Combine equipment references, reviewed cases, revision context, and expert validation. Permissions and source traceability govern reuse across every proposed product.",
        "basis": "proposal",
        "maturity": "PROPOSED PILOT"
      }
    ],
    "visual": {
      "type": "platform-layers",
      "description": "Place the four named capabilities above one Engineering Knowledge Engine. Below it show authorized documents, approved historical cases, metadata, and expert review. Use separate CURRENT PROTOTYPE and PROPOSED PILOT boundaries; place cross-site intelligence outside the pilot boundary as FUTURE VISION."
    },
    "keyTakeaway": "Build the knowledge foundation once, then validate its value in focused engineering workflows.",
    "transition": "A common foundation becomes more valuable when verified lessons return to the engineering process.",
    "speakerNotes": "The platform has four proposed workflows: training, pre-commissioning validation, troubleshooting assistance, and an equipment passport for handover. They share an Engineering Knowledge Engine rather than four separate document collections. Existing RAG and Agent demonstrations are starting components; permissions, source revisions, case quality, and review still need product-level implementation. Validation means identifying document or prerequisite gaps, not authorizing energization. Troubleshooting means presenting relevant evidence, not declaring a diagnosis. The passport packages reviewed records, not live equipment behavior. A future cross-site capability could build on the same structure, but only after rights and comparability are established. The pilot should evaluate a bounded slice rather than assume all four products are ready.",
    "referenceIds": [],
    "maturityLabels": ["PROPOSED PILOT"]
  },
  {
    "id": "07",
    "title": "Continuous Engineering Intelligence Loop",
    "headline": "Make verified field knowledge improve the next engineering decision.",
    "subtitle": "A controlled learning loop connects field experience, reusable knowledge, and engineering feedback.",
    "businessArgument": "Each reviewed resolution can strengthen future training, assistance, and commissioning practice without silently spreading unverified conclusions.",
    "points": [
      {
        "title": "Validate before reuse",
        "detail": "Capture the evidence and applicability limits, then require expert approval and data permission before releasing a case.",
        "basis": "proposal",
        "maturity": "PROPOSED PILOT"
      },
      {
        "title": "Feed lessons back into practice",
        "detail": "Use reviewed cases in training and assistance; route disputed answers and new evidence through a traceable correction process.",
        "basis": "proposal",
        "maturity": "PROPOSED PILOT"
      },
      {
        "title": "Extend only with comparable evidence",
        "detail": "Future checklist, design, and manufacturer reliability insights depend on authorized reuse and comparable asset context. Issue counts alone are not failure rates.",
        "basis": "proposal",
        "maturity": "FUTURE VISION"
      }
    ],
    "visual": {
      "type": "review-loop",
      "description": "Field Experience → Expert Validation → Structured Knowledge → AI Training & Assistance → Engineering Feedback → Continuous Improvement → Field Experience. Add permission and quality gates before publication; place manufacturer/cross-site analysis on a future branch."
    },
    "keyTakeaway": "Every verified resolution can improve the next engineering decision.",
    "transition": "The pilot must establish whether this learning loop produces useful and affordable outcomes.",
    "speakerNotes": "The proposed loop begins with a resolved field issue, not with an AI-generated answer. An expert checks the evidence and the limits of applicability before the case enters a versioned library. That case can then support training or retrieval, and feedback can identify missing context or errors. Corrections should be reviewed and traceable rather than automatically absorbed into a model. Internally, this may help refine checklists and retain engineering knowledge. Manufacturer feedback and cross-site reliability analysis are later possibilities, requiring permissions and comparable populations. Counting issue reports alone cannot establish failure rates. The immediate business question is whether the reviewed loop is useful enough to justify its operating effort.",
    "referenceIds": [],
    "maturityLabels": [
      "PROPOSED PILOT",
      "FUTURE VISION"
    ]
  },
  {
    "id": "08",
    "title": "Business Value & Pilot Validation",
    "headline": "Test the business potential with one paid enterprise pilot.",
    "subtitle": "Measure training effort, troubleshooting quality, and delivery cost across 10–20 proposed verified scenarios.",
    "businessArgument": "The first commercial decision is whether a bounded training and troubleshooting offer creates useful value at a sustainable delivery cost.",
    "points": [
      {
        "title": "Choose one equipment scope",
        "detail": "Select authorized historical cases with reviewed resolutions. Keep evaluation cases separate from retrieval and practice material to prevent answer leakage.",
        "basis": "proposal",
        "maturity": "PROPOSED PILOT"
      },
      {
        "title": "Compare quality as well as effort",
        "detail": "Use matched baseline and assisted tasks, balance experience and difficulty, and apply pre-agreed expert rubrics. Record failed attempts, hints, and escalation needs.",
        "basis": "proposal",
        "maturity": "PROPOSED PILOT"
      },
      {
        "title": "Build an economic case",
        "detail": "Include authoring, review, learner time, software/cloud, and support in delivery cost. A small selected pilot informs feasibility rather than proves avoided outages or generalizable ROI.",
        "basis": "proposal",
        "maturity": "PROPOSED PILOT"
      }
    ],
    "visual": {
      "type": "pilot-scorecard",
      "description": "Show authorized 10–20-case library → separated development/evaluation sets → balanced baseline and AI-assisted tasks → quality/effort/cost scorecard → stop, revise, or propose a paid next phase. All scorecard cells describe measures, not invented result values."
    },
    "keyTakeaway": "A measurable pilot should establish customer value, quality, and willingness to pay before software expansion.",
    "transition": "Pilot evidence should control the roadmap rather than follow a promise of unproven capabilities.",
    "speakerNotes": "We propose a bounded pilot using ten to twenty verified historical scenarios. Start with one equipment scope and confirm data permissions before selecting cases. Compare the same approved sources with and without AI assistance, while balancing engineer experience and case difficulty. Evaluation cases and their solutions must stay out of the retrieval library and practice sessions. Experts should score reasoning and procedural quality, with condition-blinded review where practical. We will also track time, escalation, training effort, and all delivery costs. This small pilot can support a decision about further investment and buyer interest; it cannot demonstrate avoided outages, fleet-level reliability improvements, or a guaranteed return on investment.",
    "referenceIds": [],
    "maturityLabels": [
      "PROPOSED PILOT"
    ]
  },
  {
    "id": "09",
    "title": "Technology Roadmap",
    "headline": "Three maturity stages keep the investment focused.",
    "subtitle": "Use the prototypes we have to validate the next product step before investing in operational integration.",
    "businessArgument": "Progress from demonstrated elements to a measurable pilot, then expand only when data rights and evidence support it.",
    "points": [
      {
        "title": "NOW — Current Prototypes",
        "detail": "Document RAG\nAI Agent workflows\nEngineering knowledge retrieval\nDemonstrated Digital Twin elements",
        "basis": "company-brief",
        "maturity": "CURRENT PROTOTYPE"
      },
      {
        "title": "NEXT — Proposed Pilot",
        "detail": "Verified failure library\nTraining simulation & troubleshooting\nReadiness validation\nPerformance measurement",
        "basis": "proposal",
        "maturity": "PROPOSED PILOT"
      },
      {
        "title": "LATER — Future Vision",
        "detail": "Authorized sensor integration\nAdvanced Digital Twin\nCross-site reliability intelligence\nPredictive maintenance",
        "basis": "proposal",
        "maturity": "FUTURE VISION"
      }
    ],
    "visual": {
      "type": "gated-roadmap",
      "description": "Three columns labeled exactly CURRENT PROTOTYPES, PROPOSED PILOT, and FUTURE VISION. Gate 1: authorized cases and repeatable demonstration; Gate 2: pilot quality and economics; Gate 3: operational-data permissions and model validation. Show dependencies, not dates or completion percentages."
    },
    "keyTakeaway": "Advance through customer evidence, not a promise of autonomous infrastructure.",
    "transition": "A potential Google Cloud discussion should focus on the infrastructure needed for that next evidence gate.",
    "speakerNotes": "The roadmap separates what the company reports demonstrating from what we propose building and what depends on future conditions. Document retrieval, RAG, Agent workflows, and Digital Twin prototype elements are current experiments. They are not equivalent to a production operational twin or an integrated customer deployment. The next stage is a bounded, reviewed pilot. Sensor connectivity, advanced physical simulation, cross-site analysis, predictive maintenance, and supervised optimization require additional permissions, data, and validation. Access discussions with equipment manufacturers are exploratory and do not establish authorization. We should advance when the evidence supports the next stage, without promising dates, autonomous control, or a capability that the current prototypes have not shown.",
    "referenceIds": [],
    "maturityLabels": [
      "CURRENT PROTOTYPE",
      "PROPOSED PILOT",
      "FUTURE VISION"
    ]
  },
  {
    "id": "10",
    "title": "Google Cloud Partnership Opportunity",
    "headline": "Proposed Next Step: Joint Technical Scoping for an AI Commissioning Pilot",
    "subtitle": "Define one commercial pilot and explore whether Google Cloud capabilities fit its technical and business needs.",
    "businessArgument": "We contribute engineering experience, historical knowledge, and validation; potential Google Cloud contributions remain topics for discussion, not commitments.",
    "points": [
      {
        "title": "Bring the engineering use case",
        "detail": "Nominate an internal sponsor and reviewers, then confirm one equipment scope and permitted troubleshooting records before proposing a technical discussion.",
        "basis": "proposal",
        "maturity": "PROPOSED PILOT"
      },
      {
        "title": "Assess complementary capabilities",
        "detail": "Google Cloud publishes manufacturing-oriented cloud, AI, search, and agent capabilities. Evaluate architecture, access controls, data terms, availability, and costs against the pilot needs.",
        "basis": "industry-source",
        "maturity": "PROPOSED PILOT",
        "referenceIds": [
          "google-cloud-manufacturing",
          "google-cloud-storage",
          "google-enterprise-search-access",
          "google-agent-platform"
        ]
      },
      {
        "title": "Agree responsibilities before proceeding",
        "detail": "Technical support, ecosystem opportunities, funding, resources, and partnership pathways require separate agreement. No Google commitment or confirmed partnership is implied.",
        "basis": "proposal",
        "maturity": "PROPOSED PILOT"
      }
    ],
    "visual": {
      "type": "complementary-strengths",
      "description": "Two columns: Our proposed contribution — permitted cases, domain experts, validation, user workflow; Google Cloud capabilities to assess — cloud infrastructure, AI/search/agents, governance and evaluation. Connect them to a proposed scoping workshop, with an explicit 'No existing partnership or commitment' caption."
    },
    "keyTakeaway": "We already have the engineering experience. The opportunity is to turn that knowledge into repeatable, scalable AI products — starting with one measurable pilot.",
    "transition": "Decision requested: nominate an internal sponsor and reviewers, confirm permitted cases, and decide whether to seek a Google Cloud scoping discussion.",
    "speakerNotes": "The proposed discussion has three parts. Why now: there is a defined commissioning workflow to test, not an open-ended AI transformation claim. Why us: the company brings field context and engineers who can validate cases, subject to confirming usable records and reviewer capacity. Why Google Cloud: its published manufacturing materials describe infrastructure, enterprise AI, search, and agent capabilities that may fit this pilot. That fit is our hypothesis, not a vendor recommendation. We would ask whether a technical scoping conversation is appropriate and review governance, evaluation, and costs. No partnership, funding, credits, resources, customer introductions, or deployment commitments are assumed. Leadership's immediate decision is sponsorship and a permitted evidence base.",
    "referenceIds": [
      "google-cloud-manufacturing",
      "google-cloud-storage",
      "google-enterprise-search-access",
      "google-agent-platform"
    ],
    "maturityLabels": [
      "PROPOSED PILOT"
    ]
  }
] as const satisfies readonly PresentationSection[];
