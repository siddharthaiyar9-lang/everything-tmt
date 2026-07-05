// Groups of terms that should be treated as equivalent for search
// purposes. When a user's query matches (or is contained in) any term
// in a group, we also search for every OTHER term in that group.
// This is deliberately just a flat list you can keep extending —
// no need to touch search.js itself when you think of a new pairing.
export const SYNONYM_GROUPS = [
  ["privacy", "data privacy", "data protection", "personal data"],
  [
    "deepfake",
    "deepfakes",
    "synthetic media",
    "ai-generated content",
    "ai generated content",
  ],
  ["ai", "artificial intelligence"],
  ["cybersecurity", "cyber security", "infosec", "information security"],
  [
    "intermediary",
    "intermediaries",
    "platform",
    "platforms",
    "social media platform",
  ],
  ["safe harbour", "safe harbor", "section 79"],
  ["consent", "user consent", "informed consent"],
  ["breach", "data breach", "security breach"],
  ["takedown", "content removal", "content takedown"],
  ["surveillance", "monitoring", "interception", "wiretapping"],
  ["dpdpa", "dpdp act", "digital personal data protection act"],
  ["it act", "information technology act"],
  ["cross-border", "cross border", "data transfer", "international transfer"],
  ["child data", "children's data", "minor data", "child privacy"],
];
