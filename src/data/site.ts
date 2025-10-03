export type Theme = "NeoAnalyst" | "CoolSlate" | "CleanQuartz";

export interface SiteConfig {
  name: string;
  role_titles: string[];
  summary: string;
  status: string;
  links: {
    email: string;
    github: string;
    linkedin: string;
    resume: string;
  };
  skills: {
    category: string;
    items: string[];
  }[];
  education: {
    degree: string;
    school: string;
    dates: string;
    location: string;
    gpa: string;
    coursework: string[];
  }[];
  experience: {
    role: string;
    company: string;
    dates: string;
    location: string;
    intro: string;
    tech: string[];
    bullets: string[];
  }[];
  projects: {
    title: string;
    description: string;
    features: string[];
    tech: string[];
    code_url?: string;
    live_url?: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "Karan Patel",
  role_titles: ["Business Analyst", "Data Analyst"],
  summary: "I turn financial and operational data into clear insights that teams can act on. My focus is on Business Intelligence, reporting automation, and decision support. Hands-on with SQL, Power BI, Tableau, Excel, and Python. Strong in data prep with Power Query, DAX, and clean data modeling. Recent role: Business Intelligence Analyst Intern at Acumen Fiscal Agent — built dashboards across Solomon, NetSuite, Access DB, and Excel; automated data pipelines; and partnered with AR, GL, and IT to standardize reporting. I am also specializing in Supply Chain Analytics — forecasting, process analysis, and KPI tracking to improve planning and execution.",
  status: "Open to Work",
  links: {
    email: "patelkaran3639@gmail.com",
    github: "",
    linkedin: "https://www.linkedin.com/in/kpate304/",
    resume: "/Karan_Patel_Resume.pdf"
  },
  skills: [
    {
      category: "Data & BI",
      items: ["SQL", "Power BI", "Tableau", "Excel", "DAX", "Power Query", "ETL", "EDA", "Data Modeling", "KPI Design", "Financial Reporting", "Variance Analysis", "Storytelling with Dashboards", "Executive-level Reporting"]
    },
    {
      category: "Python & ML",
      items: ["Python", "Pandas", "NumPy", "scikit-learn", "TensorFlow (LSTM)", "Statsmodels", "Jupyter", "Time-Series Forecasting", "Monte Carlo Simulation", "Scenario Analysis", "Visualization (matplotlib, plotly)", "Anomaly Detection"]
    },
    {
      category: "Cloud & Data Platforms",
      items: ["Snowflake", "AWS (S3, Athena, SageMaker)", "Azure", "MS Access DB", "NetSuite", "Solomon (MS Dynamics SL)", "ERP Systems", "APIs", "Data Cleaning", "Data Validation", "Workflow Automation"]
    },
    {
      category: "Tools & Methods",
      items: ["Agile", "Jira", "Confluence", "Lean Six Sigma (DMAIC)", "BPMN/Swimlane Documentation", "SOP Development", "User Stories", "Training Guides", "Testing/Validation", "Version Control (Git)", "Digital Transformation Support"]
    },
    {
      category: "Business & Strategic",
      items: ["Requirements Gathering", "Stakeholder Alignment", "Roadmapping", "Cost/Benefit Analysis", "ROI Tracking", "OKRs", "Supply Chain Analytics", "Inventory Management", "Demand Forecasting", "Supplier Analysis", "Vendor & Procurement Analysis", "Risk Assessment & Mitigation", "Change Management"]
    },
    {
      category: "Communication & Collaboration",
      items: ["Exec-ready Presentations", "Data Storytelling", "Business Case Building", "Cross-functional Workshops", "Requirements Workshops", "UAT Sessions", "Training/Playbooks", "Cross-cultural Collaboration", "Stakeholder Management"]
    },
    {
      category: "Analytical & Interpersonal",
      items: ["Problem Structuring", "Hypothesis-driven Analysis", "Critical Thinking", "Root Cause Analysis", "Data-driven Decision Support", "Attention to Detail", "Prioritization", "Time Management", "Adaptability", "Ownership", "Leadership in Projects/Teams"]
    }
  ],
  education: [
    {
      degree: "Master of Science in Business Analytics - Supply Chain Track",
      school: "W. P. Carey School of Business at Arizona State University (ASU)",
      dates: "Expected Dec 2025",
      location: "Tempe, AZ",
      gpa: "3.70 / 4.00",
      coursework: [
        "Analytical Decision Modeling",
        "Business Process Analytics",
        "Machine Learning in Business",
        "AI & Data Analytics Strategy",
        "Quantitative Risk Management",
        "Operations & Supply Chain Management",
        "Strategic Procurement",
        "Logistics in Supply Chain"
      ]
    },
    {
      degree: "Bachelor of Engineering - BE, Electronics and Computer Science",
      school: "Shah And Anchor Kutchhi Engineering College",
      dates: "Aug 2019 - May 2024",
      location: "Mumbai, India",
      gpa: "3.49 / 4.00",
      coursework: [
        "Object-Oriented Programming (Python)",
        "Web Development (HTML, CSS, Tailwind)",
        "Artificial Intelligence and Machine Learning",
        "Enterprise System Design and Management",
        "Data Warehousing and Mining"
      ]
    }
  ],
  experience: [
    {
      role: "Business Intelligence Analyst Intern",
      company: "Acumen Fiscal Agent",
      dates: "May 2025 - Aug 2025",
      location: "AZ, USA",
      intro: "Built enterprise dashboards and automated reporting workflows that transformed business operations.",
      tech: ["Power BI", "Power Query", "SQL", "Solomon", "NetSuite", "Excel", "Lean Six Sigma"],
      bullets: [
        "Built and deployed a Power BI billing dashboard integrating Solomon, NetSuite, Access DB, and Excel; adopted daily by leadership, cut reporting time ~30%, and improved decision-making through storytelling.",
        "Automated data prep with 10+ Power Query models and Lean Six Sigma workflow mapping; improved data quality, scalability, and identified 5 key areas for process optimization.",
        "Partnered with AR, GL, and IT teams to gather requirements and standardize recurring reports; boosted accuracy by 20% and increased stakeholder confidence in financial insights."
      ]
    },
    {
      role: "Business Analyst Intern",
      company: "Skill Vertex",
      dates: "Sep 2023 - Dec 2023",
      location: "Bangalore, India",
      intro: "Streamlined financial operations through SQL-based ETL pipelines and automated reporting.",
      tech: ["SQL", "Python", "Tableau", "ETL", "Data Integration", "Financial Reporting"],
      bullets: [
        "Streamlined financial data management by processing 10,000+ records through SQL-based ETL pipelines, improving data integration efficiency and achieving 98% accuracy.",
        "Developed automated reporting workflows using Python, SQL, and Tableau, integrating 5+ data sources to create interactive dashboards and reducing reporting time by 30%.",
        "Conducted data-driven analysis to support business decision-making and FP&A initiatives, collaborating with cross-functional teams to identify trends and improve data visualization strategies."
      ]
    },
    {
      role: "Data Analyst Intern",
      company: "JSW Paints",
      dates: "Jan 2022 - Jun 2022",
      location: "Mumbai, India",
      intro: "Designed interactive dashboards enabling real-time inventory tracking and quality analysis.",
      tech: ["SQL", "Power BI", "Inventory Management", "Supply Chain Analytics", "Data Validation"],
      bullets: [
        "Designed interactive dashboards using SQL & Power BI, enabling real-time inventory tracking and quality analysis, reducing manual reporting efforts by 40%.",
        "Enhanced inventory management processes by implementing automated validation checks, improving data accuracy for inventory records and paint samples.",
        "Optimized supply chain efficiency by identifying data discrepancies and streamlining logistics workflows, leading to more accurate demand forecasting."
      ]
    }
  ],
  projects: [
    {
      title: "Supply Chain Risk Assessment",
      description: "AI-driven forecasting model utilizing LSTM and Monte Carlo Simulation to enhance supply chain resilience and predict potential disruptions.",
      features: [
        "Historical cost data analysis from suppliers and contracts",
        "Time-series forecasting with LSTM neural networks",
        "Monte Carlo risk simulation for proactive cost management",
        "Supplier lead time analysis for logistics planning"
      ],
      tech: ["Python", "TensorFlow", "LSTM", "SQL", "Monte Carlo Simulation", "Time-Series Analysis"],
      code_url: "https://github.com/kpatel304/supply-chain-risk"
    },
    {
      title: "Solar Power Generation Analysis",
      description: "Statistical modeling and feature engineering project analyzing 10,000+ data points to optimize solar energy output and minimize grid wastage.",
      features: [
        "Statistical analysis of solar energy factors",
        "Feature engineering for power output prediction",
        "Real-time anomaly detection with Tableau dashboards",
        "Power distribution efficiency assessment"
      ],
      tech: ["Python", "Tableau", "Statistical Modeling", "Feature Engineering", "Anomaly Detection"],
      code_url: "https://github.com/kpatel304/solar-analysis"
    },
    {
      title: "Optimal Location Modeling for Streetcar Hub",
      description: "Built an optimization model to pick the best streetcar stop, cutting weighted travel distance by 112m per stop.",
      features: [
        "Processed geospatial data for 14 stops in Python",
        "Demand-weighted scoring (ASU/Mill Ave emphasis)",
        "Candidate ranking and map output",
        "Final recommendation improved efficiency by ~20%"
      ],
      tech: ["Python", "Geospatial Analysis", "GPS Data Modeling", "Optimization"],
      code_url: "https://github.com/kpatel304/streetcar-optimization"
    }
  ]
};

export const THEME: Theme = "NeoAnalyst";
