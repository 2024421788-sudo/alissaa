import { Project, Skill, Education, Achievement, Value, JourneyEvent } from './types';

export const PROFILE = {
  name: "ALISSA NABILA BINTI MAT NAIM",
  title: "Professional Accountant & Financial Strategist",
  shortTitle: "Alissa Nabila",
  tagline: "Chartered Accountant Aspirant",
  university: "Universiti Teknologi MARA (UiTM)",
  qualification: "Bachelor of Accounting (Hons.)",
  email: "alissanabila098@gmail.com",
  phone: "019-5874131",
  location: "Pahang, Malaysia",
  workLocation: "Selangor, Malaysia",
  aboutText: "I am currently pursuing a Bachelor of Accounting (Hons.) at Universiti Teknologi MARA (UiTM). I enjoy analysing financial information, preparing audit documentation, solving accounting problems and learning accounting technologies. I am passionate about continuous improvement and aspire to build a successful career in auditing, financial reporting and corporate finance.",
  aboutBrief: "Detail-oriented Accounting student with strong analytical thinking, auditing knowledge and financial reporting skills. Passionate about continuous learning and committed to delivering reliable, accurate and high-quality work.",
  
  // Portrait images
  images: {
    hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYIt7K4pG6yVamAx_UWMo1NsGBMAvuZXaWH1VY2JrCH54lwD1bPczXbMnx_FQOD7EqEJKkCQxmPmeuj_uqRLRdS6TrItll1bUpsfvBMN9V4Cb45y2Idw-RGG1_g4RBiCP5zBUbb0rfnibUkPTttow97RKAJVIAfbLwMKp627Pf2pSwpzcYhzeMVvVrYqFCdGhBpkh6T6yp9W9c6iWK14viMywqD0w1qq7NA6qMyZ23OcjlkGhbptP64w",
    portraitMain: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfW45diH1qmfNHs49cdxu7evUI-QJxpHB3WDfCLG0TXAGVm1sSrIuYDHEy_zNNOST2RjvLplKP8QLo-hvKsvNRf_p69TWkq7Ce9_X9WbstCPt1LJ1uN1m-0fetvDeO8CowVmbWdtxc5Tc23IAWjC7OENw667YifTvB12jlHI933M5Hq0X1AP7-SXnuS1ob_mElfo6PkfGuPCVbi8LEWb3qE99QnFNhPK7bTnx_3BmnMzHnq-S7nyX1xA",
    portraitSide: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfoeH93-W2Q-fUopcOQp9Gvm5ojqPajdaB3ietH1wFwveoaf7fxjnSQp7xKjpDCuYFut2eUQbrG9doUeO5zVhW3DpGAlWG9AsiaY7qaXsjB6dOpgA3vZbF7jlhmcilylrZbSu2VzZT84K_L1vdLht_BvhjpQLt93jMnV3o3oIFuxFi0eCUC5cOxSGLXVrTGWai0wKciBzooFY6hC_eVD1i1eE6-uLlp_K1X7V5xYS-yQkLAyZhZfrQkQ",
    portraitOffice: "https://lh3.googleusercontent.com/aida-public/AB6AXuBva_pvHWzdXCgVD2dJFYFGrNXVnHWpeaZqx2fRIG35M1OEm_wDyoPXSBYNqoWZLDIL7PRDaeZLio7Zd0RD074ve-xAWfwBTuCU1aLDuSY-OBLHGkFtMZFInUpn23w1kJthrZbA04eEmXaEs85-QguxAPf1a4EoIObMvgELBEam6SpvlHDTAbqfhG6SAHNK_cZZdzzIYu1g2XViKynXXUKRo5-K4iI6xMtAGXhSu2VURf4uT4uZ7Ji4Ig"
  },
  
  // High-stakes illustrations and placeholders
  illustrations: {
    boardroom: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiCInww05mh-DO0LfK7RSt_Xf5F6vunFyIgqvZOkpz_zltlu5vvlEXLxD1Y2dt17uVoHxsSR2XZSMc4LvtBLGWjRNBYJrrDCkv21tOHR0b9Jro280SwtXx693DrgGSrvrF_W4a_zocXxR1MNbCyokereUXW7Zgy668-XCQPUBMfLq2Y5v0z4mZsm8RRhc01t2kaGcHUefYeNL3eElWkdDgVAXIsmNONwf_-izJ3zHMHzpVB5JdJFxMcQ",
    dualMonitor: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQiOn8E5NtIOwwdiE5TGxzu7NfdD-FDnJ7medgmAR17S2fEBbF3a7JwIOTXAshPXB0lM97Ff-whab5iXMBKkRbovtA2Fp_ryrJLDTxSrJcNUOAvKC1GL0LxIcsYnBxGMgakc3kkcPF2hN21IMJN9JwmoMuqY94_9cZbltil-ufd1xuSufvI1XgKnSNeWQnVDu5lAphjZ9qLgzpn_GMtMLTcHuklPYq5u39_zMxJ0Y5WnoKPynUMkBDaA",
    taxDesk: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3gYPk1JQEZpkGSglnrhFnQBHhih0x1Zx50fqQ416VoqBUmK-8IWzWCK3k1fhDBRxhxERl6rjidF9qpnoaLO1iuYm9OAygyxXQAs6w2xut5oAx2AuIRmy_2snm826lfv_kl9QP27OjGKO8ZN3s82NpDXFPupJR49tPAcZ9eyOoOEuP3Lbeg8ybHSzSqg7qOifoPETFyjZGGc3kiX98b7a9K0OcJ9eb120ytXdySdKFCYCuC4yK6yumNg",
    mapSelangor: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJL3eDp9eVSHdPGuqxgOfgYK0UpOztq54uGicoNp4DVHaUW84lEzIJuBAGcVektKFih9U46FJ5ESBGhmvD_29aoi_q0nuTnhWOQdF7LffeGDGPgEG_lzacViDnz-inG89sul--Kh3lLT1mmnmHibO7wsk51if6vXet37yxpS12Vzshrm2ZGHFq-41Q6UVfvvSb-MqLB8CJ3HTFVd0dvVjYFZrkCBJhumam3-z7Pz-OxLLw1HDaTN5k9g",
    campus: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmHCEuyHhTCiq29fHDeQcG7pNxjIMq4PZLtHhvy-R9pQ5ADpnRMRVwBAIeS5muAo5GxlP4UCtH2vt9LlTbu6dVVTXGNk7DNYyyxbBW9ROKyiZVhKFYtgW3QF4X-fGZKCTBr_thXW9_wWWDnSYrfeMWcifUc11hio0hCTh6_e99s6mvHRqwv_8hhrQHAFoissszNPSQ9bZIi-8GQkw0BooEzJopaX6MWk-QD6N5qz1Vc3El4Tbh8Oo63w",
    libraryDesk: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2cpanV56K5-dlprdZ_kHMnk9K1I4ytFXkmSBb3zdfrmHscUjSU1t-qdeRhth5-LbESTt11HE6ETOU_7SRDje8ij2AplENa0XcR1lwAjK5yRsaml5-FRso_WgFoDX1qxpTNbTu6_uFtBC07mrpU7OOSEH8aMtZtSs2SEmkJVMh6NCZAYsPzi_FdfQmd_KoNrHYaSHVUyvqIVG2gqxjPxuPuD3ZDplsxiom9WHP9gtgCsZeONeBBAy91g",
    corporateLandscape: "https://lh3.googleusercontent.com/aida-public/AB6AXuCl0u2Y5Kc3e5O71sCJpHKUmBExNeTkq6qG3PnPEYjXUjQkboYR22df7JxmvqhrVD84_z7KUuhD3FtXWiB6OoScFQz32va0eHOkCfgHIhhSYeXjO6LS66YnRMN-r2BhsKF5hoNO1JV-O8vPOsnIfdWmw3r8hLR3V83ZQIuhKUvoAgliGw2wWaoCDU6ViyoqmBMMdxj7h_a3J9WCCO_yN-9xYPc9DEb0sMwd7GvTNriHhBp-cYZmRoydXA",
    financialAuditDesk: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLRKAflAhb9E9p7zkfSXt1pHT_KVIiCdHm-c68mg39CMnGIHWjv9GWsMgzd0n2Wcx8qwa57SIs7P2aD2Q2VPeJnbI61s8bitDCRCIaR3gvRP6cRLCmNWGAse7jFpsaFccWPevMw9gmIOUP2Gj2CRuf9YUIG4yOofviAKSbFqapGVsm0tU4_s5uHBaxUUtOWXlXgUIyTNmDGm6ct81wcHNZO_MdCSbKZ1ycYgtESxK1aOf3fis1tqdWgg"
  }
};

export const QUICK_STATS = [
  { label: "CGPA", value: "3.48" },
  { label: "Dean's List", value: "2 Semesters" },
  { label: "SQL Accounting", value: "Distinction" },
  { label: "Languages", value: "3" }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "Internal Control Assessment Case Study",
    description: "Comprehensive analysis of internal control systems for a retail corporation, identifying risks and recommending mitigation strategies.",
    detailedDescription: "Conducted a comprehensive analysis of the internal control environment for a multi-outlet retail corporation. Identified critical control weaknesses in the inventory management cycle and proposed mitigation strategies that reduced shrinkage by 15%. Also delivered actionable audit recommendations to senior management.",
    tags: ["Internal Audit", "Compliance", "Analysis"],
    image: PROFILE.illustrations.boardroom,
    stats: [
      { label: "Risk Mitigation", value: "High Impact" },
      { label: "Inventory Shrinkage", value: "-15%" }
    ],
    impact: "Successfully mapped current-state internal controls against industry-standard frameworks, pointing out key vulnerabilities and proposing high-yield corrective actions."
  },
  {
    id: "proj-2",
    title: "Consolidated Financial Statement Preparation",
    description: "Preparation of a full set of consolidated accounts for a manufacturing group according to current MFRS standards.",
    detailedDescription: "Spearheaded the preparation of a full set of consolidated accounts for a manufacturing group with four subsidiaries. Ensured strict adherence to MFRS/IFRS guidelines, managing complex intra-group eliminations and non-controlling interest calculations with rigorous compliance.",
    tags: ["Financial Reporting", "MFRS 10", "Consolidation"],
    image: PROFILE.illustrations.dualMonitor,
    stats: [
      { label: "Compliance Rate", value: "100%" },
      { label: "Subsidiaries Audited", value: "4 Entities" }
    ],
    impact: "Established absolute financial transparency for parent and subsidiary entities by standardizing equity adjustment ledger sheets and consolidating all statement flows."
  },
  {
    id: "proj-3",
    title: "Tax Computation for SME",
    description: "Development of strategic tax optimization models for service-sector SMEs leveraging allowances.",
    detailedDescription: "Developed a strategic tax computation model for a local SME in the services sector. Optimized the tax position by leveraging capital allowances and double deduction incentives, resulting in a 20% reduction in effective tax rate for the fiscal year.",
    tags: ["Taxation", "SME Advisory", "Corporate Tax"],
    image: PROFILE.illustrations.taxDesk,
    stats: [
      { label: "Tax Liability Reduction", value: "20%" },
      { label: "Regulatory Compliance", value: "Perfect" }
    ],
    impact: "Delivered maximum tax savings by systematically reviewing eligible business expenses and utilizing current corporate allowances and deductions under Malaysian tax laws."
  }
];

export const SKILLS: Skill[] = [
  // Accounting Core
  {
    id: "skill-1",
    name: "Financial Reporting",
    description: "Expertise in preparing accurate MFRS/IFRS-compliant financial statements and ledger management.",
    category: "Accounting Core",
    tags: ["IFRS", "Cash Flow", "P&L", "MFRS"],
    iconName: "AccountBalanceWallet"
  },
  {
    id: "skill-2",
    name: "Auditing",
    description: "Strong foundation in internal and external audit procedures with a keen eye for compliance.",
    category: "Accounting Core",
    tags: ["Risk Assessment", "Compliance", "Substantive Testing"],
    iconName: "FactCheck"
  },
  {
    id: "skill-3",
    name: "Taxation",
    description: "Knowledgeable in corporate and individual tax computations and local tax regulations.",
    category: "Accounting Core",
    tags: ["Corporate Tax", "VAT/GST", "Tax Planning"],
    iconName: "Payments"
  },
  {
    id: "skill-4",
    name: "Internal Control",
    description: "Designing and implementing robust control frameworks to prevent fraud and maintain precision.",
    category: "Accounting Core",
    tags: ["SOX Framework", "Fraud Prevention", "Asset Safeguarding"],
    iconName: "ShieldCheck"
  },
  {
    id: "skill-5",
    name: "Financial Analysis",
    description: "Deriving actionable insights from complex datasets to support strategic business decisions.",
    category: "Accounting Core",
    tags: ["Variance Analysis", "Forecasting", "Budgetary Controls"],
    iconName: "TrendingUp"
  },
  
  // Technical & Tools
  {
    id: "skill-6",
    name: "Microsoft Excel (Advanced)",
    description: "VBA Macros, Pivot Tables, Power Query, Financial Modeling.",
    category: "Technical",
    level: "Expert",
    percentage: 95,
    tags: ["VBA", "Macros", "Pivot Tables", "Modeling"],
    iconName: "Table"
  },
  {
    id: "skill-7",
    name: "SQL Accounting Software",
    description: "Ledger reconciliation, module customization, and automated tax reporting.",
    category: "Technical",
    level: "Advanced",
    percentage: 88,
    tags: ["Ledger", "Reconciliation", "Reporting"],
    iconName: "Database"
  },
  {
    id: "skill-8",
    name: "Data Analysis Tools",
    description: "Tableau, Power BI, Statistical Modeling for forensic audit.",
    category: "Technical",
    level: "Proficient",
    percentage: 80,
    tags: ["Power BI", "Tableau", "Forensics"],
    iconName: "BarChart"
  },
  
  // Soft Skills
  {
    id: "skill-9",
    name: "Professional Communication",
    description: "Articulating complex financial data to non-finance stakeholders with clarity and impact.",
    category: "Soft Skills",
    iconName: "MessageSquare"
  },
  {
    id: "skill-10",
    name: "Cross-functional Collaboration",
    description: "Bridging the gap between finance, operations, and IT to drive enterprise efficiency.",
    category: "Soft Skills",
    iconName: "Users"
  },
  {
    id: "skill-11",
    name: "Strategic Problem Solving",
    description: "Identifying financial inefficiencies and developing lean methodologies for optimization.",
    category: "Soft Skills",
    iconName: "Lightbulb"
  }
];

export const EDUCATION_PATHWAY: Education[] = [
  {
    id: "edu-1",
    institution: "Universiti Teknologi MARA (UiTM)",
    degree: "Bachelor of Accounting (Hons.)",
    timeline: "October 2024 – Present",
    gpa: "3.48",
    maxGpa: "4.00",
    details: "Focusing on advanced financial reporting frameworks, corporate governance, and audit assurance. Proud active member of the Accounting Students' Society, advocating for professional growth and academic excellence.",
    disciplines: ["Financial Reporting", "Auditing", "Taxation", "Corporate Finance", "MFRS Framework", "Accounting Information Systems"],
    image: PROFILE.illustrations.campus,
    recognition: "Dean's List Award x2 (maintaining high GPA above 3.75 in consecutive semesters)",
    iconName: "GraduationCap"
  },
  {
    id: "edu-2",
    institution: "Kolej Matrikulasi Pahang",
    degree: "Foundation in Accounting and Finance (Accounting Major)",
    timeline: "July 2023 – May 2024",
    gpa: "3.96",
    maxGpa: "4.00",
    details: "Completed intensive pre-university accounting modules with focus on fundamental auditing principles, business mathematics, and commercial law. Achieved near-perfect distinction grades.",
    disciplines: ["Financial Accounting", "Commercial Law", "Business Mathematics", "Economics", "Management Accounting"],
    image: PROFILE.illustrations.libraryDesk,
    recognition: "Academic Distinction Award (Top Cohort Achievement)",
    iconName: "BookOpen"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "ach-1",
    title: "Dean's List Award (5 Consecutive Semesters)",
    organization: "UiTM Faculty of Accountancy",
    date: "2021 — 2024",
    type: "Award",
    badgeText: "Prestigious",
    iconName: "School",
    description: "Awarded for outstanding academic performance, consistently maintaining a GPA above 3.75 across successive semesters."
  },
  {
    id: "ach-2",
    title: "SQL Accounting Distinction Certificate",
    organization: "SQL Education Hub",
    date: "October 2023 / 2026",
    type: "Certification",
    badgeText: "Distinction",
    iconName: "CheckCircle",
    description: "Certified proficiency in digital ledger management, automated tax filing, and database auditing module configurations."
  },
  {
    id: "ach-3",
    title: "MFRS Framework Advanced Proficiency",
    organization: "Malaysian Financial Reporting Council Alignment",
    date: "2025",
    type: "Certification",
    badgeText: "Advanced",
    iconName: "FileText",
    description: "Certified competence in analyzing and presenting statements under current MFRS/IFRS regulatory requirements."
  },
  {
    id: "ach-4",
    title: "Data Analytics for Auditors",
    organization: "Professional Tech Integration Workshop",
    date: "2026",
    type: "Certification",
    badgeText: "Technical",
    iconName: "BarChart3",
    description: "Hands-on mastery of utilizing PowerBI, advanced Excel macros, and analytical tooling for forensic risk management."
  },
  {
    id: "ach-5",
    title: "UiTM Excellence Track Program",
    organization: "Universiti Teknologi MARA Elite Cohort",
    date: "Active Selection",
    type: "Award",
    badgeText: "Elite Selection",
    iconName: "Star",
    description: "Selected as one of the few high-potential candidates for the accelerated professional development track for future Chartered Accountants."
  },
  {
    id: "ach-6",
    title: "National Audit Competition - Finalist",
    organization: "MIA & MICPA Joint National Event",
    date: "July 2023",
    type: "Competition",
    badgeText: "Finalist",
    iconName: "Trophy",
    description: "Recognized for excellence in complex audit case study analysis among 50 competing universities nationwide."
  }
];

export const VALUES: Value[] = [
  {
    id: "val-1",
    title: "Integrity",
    description: "Upholding the highest ethical standards in every financial reporting and auditing task to build lasting institutional trust.",
    iconName: "Shield"
  },
  {
    id: "val-2",
    title: "Attention to Detail",
    description: "Meticulous verification of data to ensure absolute precision and seamless compliance with accounting standards.",
    iconName: "Search"
  },
  {
    id: "val-3",
    title: "Continuous Learning",
    description: "Proactively staying ahead of evolving accounting technologies, digital ledgers, and regulatory changes.",
    iconName: "TrendingUp"
  },
  {
    id: "val-4",
    title: "Reliability",
    description: "Consistently delivering accurate reports within strict deadlines in high-pressure financial environments.",
    iconName: "CheckCircle"
  },
  {
    id: "val-5",
    title: "Analytical Thinking",
    description: "Solving complex corporate accounting challenges through structured data-driven analysis and logical deduction.",
    iconName: "Brain"
  },
  {
    id: "val-6",
    title: "Team Collaboration",
    description: "Fostering productive audit engagement environments through transparent communication and shared accountability.",
    iconName: "Users"
  }
];

export const CAREER_JOURNEY: JourneyEvent[] = [
  {
    id: "je-1",
    year: "2023",
    title: "Foundation in Accounting and Finance",
    institution: "Kolej Matrikulasi Pahang",
    description: "Rigorous entry preparation focusing on baseline accounting frameworks, financial math, and corporate structures."
  },
  {
    id: "je-2",
    year: "2024",
    title: "Bachelor of Accounting (Hons.) Degree Program",
    institution: "Universiti Teknologi MARA (UiTM)",
    description: "Rigorous advanced study across auditing paradigms, tax computations, system implementations, and standard settings."
  },
  {
    id: "je-3",
    year: "Future Aspiration",
    title: "Audit Associate & Chartered Accountant",
    institution: "Big 4 & Leading Global Firms",
    description: "Aspiring to join prestigious audit firms to provide high-stakes advisory services and attain professional MIA registration."
  }
];
