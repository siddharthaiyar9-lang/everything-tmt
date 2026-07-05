// India AI Regulation Tracker entries. Each entry is tagged along three
// independent dimensions — regulator, status, policyArea — so the page
// can filter by any combination of the three. `date` is a sortable
// ISO-ish string (YYYY-MM or YYYY-MM-DD) used for the timeline view;
// `dateLabel` is what's actually displayed.
export const trackerEntries = [
  {
    id: "sebi-ai-responsibility",
    title: "Proposed Amendments Assigning Responsibility for AI Tool Use",
    regulator: "SEBI",
    status: "Consultation / Draft",
    policyArea: "Finance & Securities",
    date: "2024-11",
    dateLabel: "Nov 2024",
    summary:
      "Proposes new provisions across three SEBI regulatory frameworks placing full responsibility on regulated intermediaries for AI tools they use, whether built in-house or sourced from third parties.",
    keyPoints: [
      "New Chapter IIIB (Reg. 16C) under the SEBI (Intermediaries) Regulations, 2008 covers data privacy/security, AI-output consequences, and legal compliance obligations.",
      "New Regulation 39B extends identical obligations to recognised stock exchanges and clearing corporations.",
      "New Regulation 82B applies the same standard to depositories, completing coverage across all major market infrastructure institutions.",
      "Core principle: regulated entities remain fully accountable for AI-driven outcomes regardless of whether the tool is built in-house or procured from a vendor.",
      "Aims to close a potential accountability gap where entities might otherwise disclaim responsibility for vendor-supplied AI tools.",
      "Part of a broader SEBI pattern — seen again in its 2025 consultation paper — of extending existing regulatory categories to cover AI rather than writing standalone AI rules.",
    ],
    source:
      "https://www.sebi.gov.in/reports-and-statistics/reports/nov-2024/proposed-amendments-with-respect-to-assigning-responsibility-for-the-use-of-artificial-intelligence-tools-by-market-infrastructure-institutions-registered-intermediaries-and-other-persons-regulated-b-_88470.html",
  },
  {
    id: "sebi-consultation-aiml",
    title:
      "Consultation Paper on Responsible Usage of AI/ML in Securities Markets",
    regulator: "SEBI",
    status: "Consultation / Draft",
    policyArea: "Finance & Securities",
    date: "2025-06",
    dateLabel: "Jun 2025",
    summary:
      "A SEBI Working Group recommends guardrails for responsible AI/ML use in securities markets, centred on governance, investor protection, fairness, testing, and data protection.",
    keyPoints: [
      "Model governance: requires skilled internal teams, senior management accountability, and periodic independent audits of AI/ML models.",
      "Investor protection: mandates clear disclosure of AI/ML use, model risks and limitations, plus grievance mechanisms aligned with SEBI's existing framework.",
      'Testing requirements: continuous monitoring including "shadow testing" (running new models in parallel before full deployment); documentation retained for at least 5 years.',
      "Fairness: requires bias mitigation processes and staff training on AI-specific risks.",
      "Proposes a tiered, risk-based regulatory approach — lighter-touch for non-customer-facing use, stricter where investor impact is direct.",
      "Product of a dedicated SEBI Working Group, suggesting this may evolve into binding regulation once the consultation period closes.",
    ],
    source:
      "https://www.sebi.gov.in/reports-and-statistics/reports/jun-2025/consultation-paper-on-guidelines-for-responsible-usage-of-ai-ml-in-indian-securities-markets_94687.html",
  },
  {
    id: "rbi-free-ai",
    title: "FREE-AI Committee Report",
    regulator: "RBI",
    status: "Recommendation / Report",
    policyArea: "Finance & Securities",
    date: "2025-08",
    dateLabel: "Aug 2025",
    summary:
      "RBI's committee treats AI risk as largely already captured by existing financial regulation, recommending a technology-neutral, principles-based governance framework rather than standalone AI rules.",
    keyPoints: [
      "Treats most AI risk as already captured by existing financial regulation rather than requiring an entirely new regime.",
      "Recommends a technology-neutral, principles-based governance framework layered onto existing RBI rules.",
      "Key safeguards: governance, board oversight, risk management, transparency, human oversight, cybersecurity, and vendor due diligence.",
      "Recommends classifying AI systems by risk level, with correspondingly stricter oversight for higher-risk applications.",
      "Encourages regulatory sandboxes so institutions can test AI use cases before full-scale deployment.",
      "Recommends phased implementation and proportional compliance burdens for institutions still early in AI adoption.",
    ],
    source:
      "https://rbidocs.rbi.org.in/rdocs/PublicationReport/Pdfs/FREEAIR130820250A24FF2D4578453F824C72ED9F5D5851.PDF",
  },
  {
    id: "rbi-model-risk",
    title: "Regulatory Principles for Model Risk Management",
    regulator: "RBI",
    status: "In Force",
    policyArea: "Finance & Securities",
    date: "2026-01",
    dateLabel: "2026",
    summary:
      "Requires every Regulated Entity to maintain a Model Risk Management Framework governing the full model lifecycle, with enhanced governance specifically for AI/ML models.",
    keyPoints: [
      "Requires every Regulated Entity to maintain a Model Risk Management Framework (MRMF) covering the model's full lifecycle.",
      "The Regulated Entity remains accountable for model outcomes regardless of whether the model is built in-house or procured from a vendor.",
      "MRMF must cover governance structure, classification, approval, validation, monitoring, documentation, change management, and decommissioning.",
      "Oversight sits specifically with the Board, Risk Management Committee, and Senior Management.",
      "AI/ML models require enhanced governance addressing explainability, autonomy, bias, hallucination, overfitting, and data drift.",
      "Mandates meaningful human oversight: mechanisms for review, intervention, override, suspension and deactivation of AI systems.",
    ],
    source: "https://www.rbi.org.in/Scripts/bs_viewcontent.aspx?Id=5089",
  },
  {
    id: "trai-ucc-direction",
    title: "Direction on AI/ML-based UCC Detection",
    regulator: "TRAI",
    status: "In Force",
    policyArea: "Telecom",
    date: "2026-02-27",
    dateLabel: "27 Feb 2026",
    summary:
      "Operationalises TRAI's spam-detection framework by turning AI-generated network intelligence into a coordinated, industry-wide enforcement mechanism against unregistered telemarketers.",
    keyPoints: [
      "Terminating access providers must flag suspected spam numbers via AI/ML-based UCC_Detect systems.",
      "Flagged numbers must be shared with originating providers over the DLT platform within a strict 2-hour window.",
      "Originating providers must then notify the subscriber and identify the sender via KYC records.",
      "Identifiers must be shared across telecom operators to enable coordinated, industry-wide investigation.",
      "Explicitly protects providers from having to disclose proprietary AI models, algorithms, or risk-scoring methods.",
      "Regulates outcomes — detection and response speed — rather than mandating any specific underlying technology.",
    ],
    source:
      "https://www.trai.gov.in/sites/default/files/2026-02/Direction_27022026.pdf",
  },
  {
    id: "trai-ai-bigdata",
    title: "Recommendations on Leveraging AI and Big Data in Telecom",
    regulator: "TRAI",
    status: "Recommendation / Report",
    policyArea: "Telecom",
    date: "2023-07-20",
    dateLabel: "20 Jul 2023",
    summary:
      "A comprehensive roadmap for adopting AI, ML and Big Data across telecom, concluding India should pursue a common cross-sectoral AI governance framework rather than telecom-specific rules.",
    keyPoints: [
      "Reviews global regulatory developments on AI/Big Data in telecom, informed by extensive stakeholder consultation.",
      "Issued under a Department of Telecommunications reference tied to the National Digital Communications Policy, 2018.",
      "Recommends AI-specific digital infrastructure investment and improved access to quality datasets.",
      "Calls for skilling initiatives and industry-academia collaboration to build AI capacity in the telecom sector.",
      "Recommends privacy-enhancing technologies be built into AI/Big Data telecom applications.",
      "Concludes India should pursue a common, cross-sectoral AI governance framework rather than telecom-specific AI rules.",
    ],
    source:
      "https://www.trai.gov.in/sites/default/files/2024-09/Recommendation_20072023.pdf",
  },
  {
    id: "indiaai-governance-guidelines",
    title: "IndiaAI Governance Guidelines",
    regulator: "MeitY",
    status: "Advisory / Guidance",
    policyArea: "Cross-Sector AI Governance",
    date: "2026-01",
    dateLabel: "2026",
    summary:
      "India's overarching, principles-based approach to AI governance — built around seven core principles rather than a single AI statute.",
    keyPoints: [
      "Built around seven core principles: trust, people-first development, innovation, fairness, accountability, explainability, and resilience.",
      "Proposes an AI Governance Group to coordinate AI policy across ministries and sectors.",
      "Proposes an AI Safety Institute responsible for technical evaluation of AI systems and safety research.",
      "Combines existing law, voluntary standards, technical safeguards, and India's Digital Public Infrastructure into a single 'techno-legal' governance model.",
      "Deliberately favours self-regulation and innovation over prescriptive, pre-emptive statutory guardrails.",
      "As a framework document rather than binding law, its real-world effect depends heavily on how sectoral regulators implement its principles.",
    ],
    source:
      "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc2025115685601.pdf",
  },
  {
    id: "meity-religious-content",
    title: "Advisory on AI-Generated Religious or Unlawful Content",
    regulator: "MeitY",
    status: "Advisory / Guidance",
    policyArea: "Content Moderation & Deepfakes",
    date: "2026-02-09",
    dateLabel: "9 Feb 2026",
    summary:
      "Reminds intermediaries that existing obligations under the IT Act and IT Rules apply equally to AI-generated content, issued after concerns over distorted AI depictions of religious scripture and beliefs.",
    keyPoints: [
      "Clarifies that AI-generated content is treated no differently from other digital content under existing Indian law.",
      "Issued specifically in response to concerns over distorted AI depictions of religious scripture and beliefs.",
      "Expects platforms to apply proactive safeguards: content moderation, algorithmic controls, human oversight, and functioning grievance mechanisms.",
      "Encourages review of training data and model outputs specifically for accuracy on religious topics.",
      "Warns that failing to exercise due diligence risks loss of Section 79 safe harbour protection.",
      "Functions as an advisory reminder of existing obligations rather than a new binding rule.",
    ],
    source:
      "https://www.meity.gov.in/static/uploads/2026/02/c19f3a28a6aa2128e51b0fd22d82626a.pdf",
  },
  {
    id: "psa-democratising-access",
    title: "Democratising Access to AI Infrastructure",
    regulator: "Office of the Principal Scientific Adviser",
    status: "Recommendation / Report",
    policyArea: "Infrastructure & Access",
    date: "2025-12",
    dateLabel: "Dec 2025",
    summary:
      "Argues that compute, datasets and models are becoming as essential as electricity, and proposes treating AI infrastructure as a shared national resource.",
    keyPoints: [
      "Frames compute, datasets, and trained models as becoming as essential to innovation as electricity or roads.",
      "Proposes public AI infrastructure be treated as a shared national resource under India's Digital Public Infrastructure model.",
      "Recommends publicly accessible compute resources for researchers and smaller organisations that cannot afford large-scale AI infrastructure.",
      "Calls for improved access to high-quality datasets, including government-held data where appropriate safeguards allow.",
      "Aims to let startups, researchers, and universities participate meaningfully in AI innovation, not only large technology firms.",
      "Positions democratised access as central to closing India's broader AI resource gap relative to better-resourced economies.",
    ],
    source:
      "https://psa.gov.in/CMS/web/sites/default/files/publication/WP_Democratising%20Access_V3.0_29122025A.pdf",
  },
  {
    id: "tn-safe-ethical-ai",
    title: "Tamil Nadu Safe & Ethical Artificial Intelligence Policy",
    regulator: "Tamil Nadu Government",
    status: "State Policy",
    policyArea: "State AI Policy",
    date: "2020-01",
    dateLabel: "2020",
    summary:
      "A framework for responsible government use of AI in Tamil Nadu, built around the DEEP-MAX assessment criteria for evaluating AI systems before deployment in public services.",
    keyPoints: [
      "Built around the DEEP-MAX assessment framework for evaluating AI systems before deployment in public services.",
      "DEEP-MAX evaluates systems on transparency, accountability, misuse protection, ethics, fairness, and inclusion.",
      "Recommends ethical procurement standards specifically for government purchase of AI systems and tools.",
      "Calls for structured capacity building and training for public officials involved in deploying or overseeing AI.",
    ],
    source:
      "https://it.tn.gov.in/sites/default/files/2021-06/TN_Safe_Ethical_AI_policy_2020.pdf",
  },
  {
    id: "tn-ai-mission",
    title: "Tamil Nadu Artificial Intelligence Mission (TNAIM)",
    regulator: "Tamil Nadu Government",
    status: "State Policy",
    policyArea: "State AI Policy",
    date: "2024-10-09",
    dateLabel: "9 Oct 2024",
    summary:
      "Tamil Nadu's implementation strategy for accelerating AI adoption across government, industry, academia and startups, backed by an initial ₹13.93 crore budget.",
    keyPoints: [
      "Implementation strategy translating the 2020 policy's principles into concrete funding and institutional support.",
      "Backed by an initial ₹13.93 crore budget for early-stage implementation.",
      "Led by the Tamil Nadu e-Governance Agency (TNeGA), with support from iTNT and ELCOT.",
      "Focused on building compute infrastructure and opening access to government datasets for AI use cases.",
    ],
    source:
      "https://tnega.tn.gov.in/assets/pdf/1.G.O.(Ms).No.25%20IT&DS(C1)%20Dated%2009.10.2024.pdf",
  },
  {
    id: "gujarat-ai-plan",
    title: "Gujarat AI Action Plan 2025–2030",
    regulator: "Gujarat Government",
    status: "State Policy",
    policyArea: "State AI Policy",
    date: "2025-06",
    dateLabel: "2025",
    summary:
      "A time-bound blueprint integrating AI into healthcare, education, agriculture and fintech, aimed at data-driven digital governance.",
    keyPoints: [
      "Time-bound blueprint (2025–2030) integrating AI across healthcare, education, agriculture, and fintech.",
      'Organised around six strategic pillars, including data governance and regional "AI factory" digital infrastructure.',
      "Targets capacity building for over 2.5 lakh individuals under the plan.",
      "Includes deep-tech startup facilitation through the i-Hub innovation campus.",
      "Guided by a ten-member expert taskforce overseeing rollout.",
      "Initial rollout phase focuses on building AI data repositories and running governance pilots before wider sectoral deployment.",
    ],
    source: "https://www.aicerts.ai/news/gujarat-ai-action-plan-2025-2030/",
  },
  {
    id: "sc-ai-courts",
    title: "Supreme Court Draft Regulations for the Use of AI in Courts, 2026",
    regulator: "Supreme Court of India",
    status: "Consultation / Draft",
    policyArea: "Judiciary",
    date: "2026-06",
    dateLabel: "Jun 2026",
    summary:
      "Proposes a framework for using AI within the judiciary to assist — not replace — judges, with human oversight remaining central to all judicial decision-making.",
    keyPoints: [
      "Permits AI for legal research, citation verification, translation, transcription, document summarisation, and case management support.",
      "Explicitly prohibits AI use for adjudication, sentencing, or any function requiring genuine judicial discretion.",
      "Requires impact assessments and pre-deployment testing before any high-risk AI system is used in the judiciary.",
      "Mandates periodic audits and incident recordkeeping for AI tools once deployed.",
      "Lawyers must disclose AI use when preparing pleadings submitted to court.",
      "Places ultimate responsibility on users to verify the accuracy of AI-generated content before relying on it.",
    ],
    source:
      "https://cdnbbsr.s3waas.gov.in/s3ec0490f1f4972d133619a60c30f3559e/uploads/2026/06/2026060342.pdf",
  },
  {
    id: "psa-techno-legal",
    title: "Strengthening AI Governance through a Techno-Legal Framework",
    regulator: "Office of the Principal Scientific Adviser",
    status: "Recommendation / Report",
    policyArea: "Cross-Sector AI Governance",
    date: "2026-02",
    dateLabel: "2026",
    summary:
      "Argues traditional law alone cannot keep pace with AI, proposing that legal rules be combined with technical safeguards — audits, testing, standards, monitoring.",
    keyPoints: [
      "Argues traditional law alone cannot keep pace with the speed of AI development and deployment.",
      "Proposes combining legal rules with technical safeguards — audits, testing, standards, and ongoing monitoring — across an AI system's lifecycle.",
      "Recommends new institutions: an AI Governance Group (AIGG) and a Technology and Policy Expert Committee (TPEC).",
      "Also proposes an AI Safety Institute (AISI) and a national AI incident database to track failures and harms.",
      "Encourages voluntary industry commitments and standards to operate alongside existing laws like the IT Act and DPDP Act.",
      "One of the drafters, Vibhav Mithal, discussed this framework directly on the Everything TMT Podcast.",
    ],
    source:
      "https://psa.gov.in/CMS/web/sites/default/files/publication/AI-WP_TechnoLegal.pdf",
  },
  {
    id: "certin-bom-guidelines",
    title: "Technical Guidelines on SBOM, QBOM, CBOM, AIBOM & HBOM",
    regulator: "CERT-In",
    status: "Advisory / Guidance",
    policyArea: "Cybersecurity",
    date: "2025-01",
    dateLabel: "2025",
    summary:
      "Introduces the 'Bill of Materials' concept for digital products — an ingredients list of the software, hardware, AI models and cryptographic components a system depends on.",
    keyPoints: [
      "Introduces the 'Bill of Materials' concept — essentially an ingredients list of everything a digital system depends on.",
      "Covers software (SBOM), AI systems (AIBOM), hardware (HBOM), cryptography (CBOM), and quantum-resistant technology (QBOM).",
      "Aims to make it faster to identify vulnerable or compromised components once a security flaw is discovered.",
      "Provides practical guidance on how organisations should create, maintain, and share these component inventories.",
    ],
    source:
      "https://www.cert-in.org.in/PDF/TechnicalGuidelines-on-SBOM,QBOM&CBOM,AIBOM_and_HBOM_ver2.0.pdf",
  },
  {
    id: "certin-ai-vuln-blueprint",
    title: "Blueprint for Reducing Exposure to AI-Assisted Vulnerabilities",
    regulator: "CERT-In",
    status: "Advisory / Guidance",
    policyArea: "Cybersecurity",
    date: "2026-02",
    dateLabel: "2026",
    summary:
      "Addresses cybersecurity risks from attackers using AI to automate reconnaissance, discover vulnerabilities, generate malware, and craft convincing phishing attacks.",
    keyPoints: [
      "Addresses attackers using AI to automate reconnaissance and vulnerability discovery against target systems.",
      "Flags AI's role in generating malware and crafting more convincing, personalised phishing attacks.",
      "Recommends stronger cybersecurity governance and continuous, AI-aware monitoring of systems.",
      "Calls for improved supply-chain security given AI's role in automating attacks across interconnected systems.",
      "Recommends regular testing of existing security controls specifically against AI-assisted attack techniques.",
    ],
    source:
      "https://www.cert-in.org.in/s2cMainServlet?pageid=GUIDLNVIEW02&refcode=CISG-2026-02",
  },
  {
    id: "cci-market-study",
    title: "Market Study on Artificial Intelligence and Competition",
    regulator: "Competition Commission of India",
    status: "Recommendation / Report",
    policyArea: "Competition",
    date: "2025-10",
    dateLabel: "2025",
    summary:
      "Examines whether AI will make markets more competitive or concentrate power, mapping the AI stack from data and compute to foundation models and applications.",
    keyPoints: [
      "Maps the full AI stack — from data and compute through to foundation models and consumer-facing applications.",
      "Finds large technology companies may gain durable advantages through control over data, compute, and foundation models.",
      "Flags algorithmic collusion as a specific competition risk where firms' pricing algorithms could coordinate without an explicit agreement.",
      "Also flags personalised pricing, where AI could be used to charge different consumers different prices based on inferred willingness to pay.",
      "Identifies high barriers to entry for smaller players lacking access to large-scale compute or proprietary datasets.",
      "Recommends transparency and regulatory coordination rather than new AI-specific competition law at this stage.",
    ],
    source:
      "https://www.cci.gov.in/images/marketstudie/en/market-study-on-artificial-intelligence-and-competition1759752172.pdf",
  },
  {
    id: "meity-subcommittee-report",
    title: "Report on AI Governance Guidelines Development",
    regulator: "MeitY",
    status: "Recommendation / Report",
    policyArea: "Cross-Sector AI Governance",
    date: "2025-12",
    dateLabel: "2025",
    summary:
      "The MeitY Subcommittee's recommendations for an India-specific AI governance framework, which later informed the IndiaAI Governance Guidelines.",
    keyPoints: [
      "Recommends a whole-of-government approach that balances AI innovation with public-interest safeguards.",
      "Sets out governance principles: transparency, accountability, safety, privacy, fairness, explainability, and human oversight.",
      "Favours strengthening existing legal frameworks and voluntary codes over introducing an immediate standalone AI law.",
      "Its recommendations directly informed the subsequent IndiaAI Governance Guidelines.",
    ],
    source:
      "https://indiaai.s3.ap-south-1.amazonaws.com/docs/subcommittee-report-dec26.pdf",
  },
  {
    id: "it-rules-amendment-2026",
    title:
      "IT (Intermediary Guidelines and Digital Media Ethics Code) Amendment Rules, 2026",
    regulator: "MeitY",
    status: "In Force",
    policyArea: "Content Moderation & Deepfakes",
    date: "2026-02-20",
    dateLabel: "20 Feb 2026",
    summary:
      "India's first dedicated regulation targeting AI-generated content and deepfakes — introducing a legal definition of synthetic media, mandatory labelling, and sharply compressed takedown timelines.",
    keyPoints: [
      "Defines 'synthetically generated information,' specifically excluding routine AI editing, translation, and accessibility uses.",
      "Requires visible labelling and embedded metadata for AI-generated content permitted on a platform.",
      "Significant Social Media Intermediaries (SSMIs) must verify user declarations of AI-generated content using automated tools, not just accept them at face value.",
      "Cuts the takedown timeline for court/government orders from 36 hours to 3 hours.",
      "Cuts the takedown timeline for non-consensual intimate deepfakes from 24 hours to 2 hours upon complaint.",
      "Non-compliance risks loss of Section 79 safe harbour — covered in full on the Knowledge Base IT Act explainer.",
    ],
    source:
      "https://www.meity.gov.in/static/uploads/2026/02/f55fe52418b03f58b0669f6a8bc03b6d.pdf",
    internalLink: "it-act",
  },
  {
    id: "ai-ethics-accountability-bill",
    title: "Artificial Intelligence (Ethics and Accountability) Bill",
    regulator: "Parliament of India",
    status: "Consultation / Draft",
    policyArea: "Cross-Sector AI Governance",
    date: "2025-12-05",
    dateLabel: "5 Dec 2025",
    summary:
      "Proposes a nationwide ethics and accountability framework for AI used in decision-making, surveillance, and algorithmic systems, with a central AI Ethics Committee.",
    keyPoints: [
      "Creates a central AI Ethics Committee comprising academia, industry, civil society, and government representatives.",
      "The Committee is empowered to issue guidelines and investigate allegations of algorithmic bias.",
      "Applies broadly to developers, deployers, and users of AI systems across India, not just large platforms.",
      "Introduced in the House of the People (Lok Sabha) on 5 December 2025.",
      "Penalties include fines of up to ₹5 crore for violations.",
      "Also provides for licence suspension or revocation, and criminal liability for repeat violations.",
    ],
    source: "https://digitalpolicyalert.org/event/36251",
  },
  {
    id: "deepfake-bill-193",
    title: "Regulation of Deepfake Bill (No. 193 of 2024)",
    regulator: "Parliament of India",
    status: "Consultation / Draft",
    policyArea: "Content Moderation & Deepfakes",
    date: "2025-12-05",
    dateLabel: "5 Dec 2025",
    summary:
      "Establishes a dedicated legal framework for the creation, distribution and detection of deepfakes, including a national Deepfake Task Force.",
    keyPoints: [
      "Establishes a national Deepfake Task Force to assess the societal impact and prevalence of deepfakes.",
      "Task Force is empowered to fund and coordinate research into deepfake detection technology.",
      "Applies to intermediaries and social media platforms hosting or transmitting user-generated content.",
      "Task Force may recommend case-by-case penalties rather than applying a single fixed penalty scheme.",
      "Introduced in the House of the People (Lok Sabha) on 5 December 2025.",
      "Sits alongside the already-in-force IT Rules Amendment, 2026 as part of a broader statutory response to deepfakes.",
    ],
    source: "https://digitalpolicyalert.org/event/36598",
  },
  {
    id: "machine-created-ip-bill",
    title: "Machine Created Intellectual Asset Bill, 2025 (No. 43 of 2025)",
    regulator: "Parliament of India",
    status: "Consultation / Draft",
    policyArea: "Cross-Sector AI Governance",
    date: "2025-12-05",
    dateLabel: "5 Dec 2025",
    summary:
      "Regulates intellectual and creative outputs generated by AI, including a conditional safe-harbour regime for AI intermediaries.",
    keyPoints: [
      "Regulates intellectual and creative outputs generated by AI, addressing an emerging gap in Indian IP law.",
      "Introduces a conditional safe-harbour regime specifically for AI intermediaries.",
      "Safe harbour applies only where the intermediary doesn't initiate or control content generation and exercises due diligence.",
      "Requires technical safeguards to detect hate speech, CSAM, non-consensual deepfakes, and copyright infringement in AI outputs.",
      "Mandates periodic transparency reporting on takedowns and regulatory requests.",
      "Safe harbour is withdrawn where the intermediary abets or profits from unlawful AI-generated outputs.",
    ],
    source: "https://digitalpolicyalert.org/event/36699",
  },
  {
    id: "dpiit-genai-copyright-part1",
    title:
      "Working Paper on Generative AI and Copyright – Part 1: One Nation, One License, One Payment",
    regulator: "DPIIT",
    status: "Recommendation / Report",
    policyArea: "Cross-Sector AI Governance",
    date: "2025-12",
    dateLabel: "Dec 2025",
    summary:
      "The Department for Promotion of Industry and Internal Trade examines how India's copyright framework should respond to generative AI, focusing on whether AI developers should be allowed to use copyrighted works for training and, if so, under what conditions.",
    keyPoints: [
      "Rejects both unrestricted text and data mining (TDM) exceptions and purely voluntary licensing as inadequate for India's legal and economic context.",
      "Proposes a hybrid licensing model built around a mandatory blanket licence for AI training on lawfully accessed copyrighted works.",
      "AI developers would not need to negotiate individual licences, but would pay statutory royalties through a government-designated collective management body.",
      "Argues the model reduces transaction costs for developers while providing fair, guaranteed compensation to creators.",
      "Frames broad access to diverse, high-quality training data as a way to mitigate AI bias and hallucination, not just a commercial concern.",
      "Presented as Part I of a broader consultation — Part II (expected) will address copyrightability, authorship, and liability for AI-generated outputs.",
    ],
    source:
      "https://www.dpiit.gov.in/static/uploads/2025/12/ff266bbeed10c48e3479c941484f3525.pdf",
  },
];
