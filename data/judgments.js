// AI-related judgments from Indian courts. Two filter dimensions —
// court and topic — plus a status field shown on every card (not a
// filter, since you only asked for court/topic, but useful context
// regardless of what's selected).
//
// Some entries have `date: '9999'` — this is a deliberate placeholder
// for cases where the source document didn't give an exact date.
// It sorts them to the END of the timeline view rather than guessing
// a date that might be wrong. Replace '9999' and dateLabel once you
// have the real date.
export const judgments = [
  {
    id: "keshan-infotech-v-oliver-brandt",
    caseName: "Keshan Infotech v. Oliver Brandt",
    court: "Madras High Court",
    topic: "Copyright",
    practiceArea: "AI",
    status: "Injunction Granted",
    date: "9999",
    dateLabel: "Date pending confirmation",
    summary:
      "Keshan Infotech alleged an Italian editor was scraping its travel content (travelandtourworld.com) for social media use while retaining its logo. The Court granted all four injunctions sought, framed specifically around AI-assisted scraping and content generation.",
    keyPoints: [
      'Restrained reproduction, translation, adaptation, summarising or paraphrasing of the plaintiff\'s content, "whether by human authorship or through any AI-assisted or algorithmic process."',
      "Restrained use of the content as input, training data, or a prompt for any AI model, LLM, automated content generation tool, or web scraper.",
      "Restrained use of the plaintiff's website for any automated scraping tool, AI system, or algorithmic content-generation mechanism.",
      "Restrained reproduction in any AI-transformed, paraphrased, or derivative form.",
      "All four injunctions granted on a prima facie basis, based on the plaint and the respondent's own social media activity.",
    ],
    source: null,
  },
  {
    id: "pooja-ramesh-singh-v-jk-bank",
    caseName: "Pooja Ramesh Singh v. Jammu and Kashmir Bank Ltd & Anr.",
    court: "Supreme Court",
    practiceArea: "AI",
    topic: "AI in Judiciary",
    status: "Decided",
    date: "2025",
    dateLabel: "2025 (Civil Appeal No. 11950 of 2025)",
    summary:
      'The Supreme Court set aside an NCLT judgment for relying on AI-"hallucinated" case citations that did not exist in any recognised legal repository — an error that had gone unnoticed even at the NCLAT stage. The Court independently verified the citations and found six were fabricated.',
    keyPoints: [
      'The Court described the introduction of AI-hallucinated judgments into the legal system as akin to "the release of methyl isocyanate in the province of law and justice: invisible, insidious, and catastrophic by the time anyone notices."',
      "Held that the hallucinated judgments did not need to be material to the outcome — their mere introduction was sufficient to set aside the decision.",
      'Adopted a "zero-tolerance" approach, holding both Bar and Bench responsible for verifying the authenticity of authorities relied upon.',
      'Clarified it was not opposed to AI use in the legal system — AI is a valuable tool, but a "human in the loop" must remain at every stage of adjudication.',
      "Directed the Bar Council of India to constitute a committee, formulate guiding principles on AI-generated legal material, and prescribe disciplinary consequences for violations.",
      "Effectively overturned the approach in Gummadi Usha Rani v. Sure Mallikarjuna Rao, where hallucinated citations were treated as possible misconduct rather than grounds to set aside a decision.",
    ],
    source: null,
  },
  {
    id: "ani-v-openai",
    caseName: "ANI v. OpenAI",
    court: "Delhi High Court",
    practiceArea: "AI",
    topic: "Copyright",
    status: "Reserved / Pending",
    date: "9999",
    dateLabel: "Date pending confirmation — judgment reserved",
    summary:
      "ANI sued OpenAI alleging ChatGPT was trained on its news content without permission or payment — a case with wider implications for unauthorised AI training across creative industries. Judgment has been reserved.",
    keyPoints: [
      "Raises four core questions: whether storing copyrighted content to train AI is itself infringement; whether AI-generated responses are reproduction or communication of a copyrighted work; whether training qualifies as fair dealing under Section 52 of the Copyright Act; and whether Indian courts have jurisdiction where AI servers are based abroad.",
      "One line of argument holds that infringement occurs at the training stage itself, since training involves copying large volumes of copyrighted material without permission.",
      "The opposing view holds that training is a technical learning process, and copyright is only implicated at the output stage, where generated content is substantially similar to and competitive with a protected work.",
      "Section 52's fair dealing exemption is confined to research, criticism, review, and reporting of current events — unlike jurisdictions that recognise a broader transformative-use doctrine, raising a live question about whether AI outputs can fit within it.",
      "Judgment reserved.",
    ],
    source: null,
  },
  {
    id: "neela-film-productions-v-tmkoc-site",
    caseName:
      "Neela Film Productions (P) Ltd. v. TaarakMehtakaooltahchashmah.com",
    court: "Delhi High Court",
    practiceArea: "AI",
    topic: "Deepfake",
    status: "Interim Injunction Granted",
    date: "9999",
    dateLabel: "Date pending confirmation",
    summary:
      "The producers of Taarak Mehta Ka Ooltah Chashmah sought relief against defendants using AI tools to generate and circulate manipulated content exploiting the show's registered characters and brand identity.",
    keyPoints: [
      "Court recognised that unauthorised creation and dissemination of AI-generated deepfake content featuring fictional characters can infringe both copyright and trademark rights held by the production house.",
      "Granted an ex parte ad interim injunction restraining the defendants from creating, hosting, publishing, or monetising the infringing content.",
      'Passed a "John Doe" (Ashok Kumar) order, extending the injunction to unknown and unidentified parties — including websites, e-commerce platforms, and YouTube channels not yet named.',
    ],
    source: null,
  },
  {
    id: "arijit-singh-v-codible-ventures",
    caseName: "Arijit Singh v. Codible Ventures LLP",
    court: "Bombay High Court",
    practiceArea: "AI",
    topic: "Deepfake",
    status: "Interim Injunction Granted",
    date: "9999",
    dateLabel: "Date pending confirmation",
    summary:
      "Singer Arijit Singh sued AI companies over unauthorised commercial use of his voice and personality through AI tools. The Court granted an ex parte ad-interim injunction, and the reasoning was subsequently extended to protect several other public figures.",
    keyPoints: [
      "Court recognised Arijit Singh as a well-known singer with significant goodwill and celebrity status, whose personality traits are entitled to legal protection against third-party exploitation.",
      "Held that AI tools allowing users to convert any voice into a celebrity's voice without consent violate that celebrity's personality rights — voice is a core part of identity and public image.",
      "Found that unauthorised commercial use of AI-generated audio/video in a person's name, voice, image, or likeness could seriously harm their career and livelihood, and create risks of deceptive or harmful misuse.",
      "Following this case, the Delhi and Bombay High Courts granted similar interim injunctions protecting Aishwarya Rai Bachchan, Abhishek Bachchan, Karan Johar, Akkineni Nagarjuna, Hrithik Roshan, Suniel Shetty, and Jaya Bachchan from unauthorised AI-generated content, impersonation, and fake merchandise.",
    ],
    source: null,
  },
  {
    id: "kamya-buch-v-jix5a",
    caseName: "Kamya Buch v. JIX5A & Ors.",
    court: "Delhi High Court",
    practiceArea: "AI",
    topic: "Deepfake",
    status: "Interim Injunction Granted",
    date: "9999",
    dateLabel: "Date pending confirmation",
    summary:
      "A case involving explicit AI-generated deepfake imagery. The Court treated the content as an infringement of privacy, dignity, and reputation, and ordered major platforms to take it down immediately.",
    keyPoints: [
      "Court ordered social media platforms, websites, and search engines to immediately remove the objectionable, explicit AI-generated deepfake material.",
      "Major intermediaries — including Google LLC, Meta Platforms, and X Corp — were named as parties to prevent ongoing dissemination.",
      "Restrained defendants 1–27 (social media accounts and pornographic websites) from uploading or disseminating non-consensual explicit images of the plaintiff.",
      "Ordered immediate takedown of the specific URLs identified in the plaint by all concerned intermediaries.",
      "Google confirmed it had de-indexed the identified URLs and agreed to act on future offending links via its takedown webform.",
      "The Union of India was directed to block access to the listed pornographic websites and ensure the relevant URLs were also blocked at the ISP level.",
      "Meta and X Corp were directed to disclose, within 15 days, subscriber information for the defendants allegedly responsible for originating and circulating the content.",
    ],
    source: null,
  },
  {
    id: "chaitanya-rohilla-rajat-sharma-v-uoi",
    caseName:
      "Chaitanya Rohilla v. Union of India & Rajat Sharma v. Union of India",
    court: "Delhi High Court",
    practiceArea: "AI",
    topic: "Deepfake",
    status: "Pending / Directions Issued",
    date: "2024-11",
    dateLabel: "Nov 2024 (ongoing)",
    summary:
      "Petitioners sought directions requiring MeitY to identify and block platforms/apps that facilitate deepfake creation. The Court has been supervising the Government's response, including a dedicated Committee on deepfakes.",
    keyPoints: [
      "In October 2024, the Court directed the Government to file a status report on its efforts to tackle deepfakes and any committees formed to address the issue.",
      "MeitY's status report (21 November 2024) disclosed a 2023 'Advisory Group on AI for India-Specific Regulator AI Framework,' a subcommittee on AI governance guidelines, and a newly constituted 'Committee on matters related to the issue of deepfakes' (20 November 2024).",
      "Petitioners argued that each day's delay in detecting and removing deepfakes causes significant public hardship, and asked that their suggestions be considered by the Committee.",
      "Court directed the Government to nominate Committee members within a week, examine the petitioners' suggestions alongside comparative regulatory frameworks, and consult intermediaries, telecom providers, deepfake victims, and platforms deploying deepfake technology.",
      "MeitY was directed to submit its report as expeditiously as possible, preferably by February 2025.",
    ],
    source: null,
  },
  {
    id: "tv-today-v-google",
    caseName: "TV Today v. Google",
    court: "Delhi High Court",
    practiceArea: "AI",
    topic: "Deepfake",
    status: "Decided",
    date: "2025-11",
    dateLabel: "Nov 2025 (Permanent Injunction)",
    summary:
      "A rogue YouTube channel used deepfake technology to impersonate Anjana Om Kashyap, managing editor of TV Today (Aaj Tak's parent company), fabricating news videos for commercial gain. The case progressed from an interim order to a permanent injunction.",
    keyPoints: [
      "Initial Interim Order (June 2025): Google LLC directed to disable the infringing channel within 48 hours, and to disclose Basic Subscriber Information and monetisation/revenue details for the channel owner.",
      "Permanent Injunction (November 2025): Court issued a permanent injunction blocking the channel entirely.",
      "Establishes a significant precedent against digital impersonation, defamation, and misuse of AI-generated deepfakes targeting journalists and media figures.",
    ],
    source: null,
  },
  {
    id: "bhavna-sharma-v-uoi",
    caseName: "Bhavna Sharma v. Union of India (PIL)",
    court: "Delhi High Court",
    practiceArea: "AI",
    topic: "AI Governance & National Security",
    status: "Pending",
    date: "9999",
    dateLabel: "Date pending confirmation",
    summary:
      "A PIL contending that certain AI platforms — with specific focus on the Chinese AI model DeepSeek — pose risks to individual privacy and could be detrimental to India's sovereignty and security.",
    keyPoints: [
      "Court asked Central Government Standing Counsel to seek instructions from the concerned ministry.",
      "Petitioner's counsel pointed to an internal Ministry of Finance advisory cautioning government departments against using AI tools like DeepSeek and ChatGPT on official devices, citing risk of sensitive data breaches.",
    ],
    source: null,
  },
];
