import { Database, Code2, Cloud, Settings, Target, Users, Brain, ChevronDown } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/data/site";

export const About = () => {
  const [isSkillsExpanded, setIsSkillsExpanded] = useState(false);

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Me</span>
        </h2>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-lg text-muted-foreground leading-relaxed">
            <p>
              Karan Patel is a Business Intelligence and Supply Chain Analytics professional with hands-on experience turning financial and operational data into actionable insights. He recently worked as a Business Intelligence Analyst Intern at Acumen Fiscal Agent, where he built enterprise dashboards, automated data pipelines, and streamlined reporting across Solomon, NetSuite, and Access DB. His work improved accuracy, reduced reporting time by 30%, and increased stakeholder confidence in financial insights.
            </p>
            <p className="mt-4">
              At Arizona State University, he is pursuing a master's in Business Analytics with a focus on supply chain. His projects span risk forecasting with LSTM and Monte Carlo simulations, geospatial optimization for public transit hubs, and solar energy data analysis. With skills in SQL, Power BI, Tableau, Python, and Snowflake, paired with ERP and cloud experience, Karan combines technical depth with business impact. He is known for clear communication, stakeholder collaboration, and a practical approach to solving business problems.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center mb-8">
            Skills, Toolkit & <span className="text-primary">Strengths</span>
          </h3>
          <div className="grid justify-items-center gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {/* Data & BI */}
            <div className="w-full max-w-md rounded-2xl border border-slate-800/60 bg-slate-900/50 backdrop-blur p-6 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-400/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-foreground">Data & BI</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Dashboards, KPI design, and reporting that leaders use daily.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["SQL", "Power BI", "Tableau", "Excel", "DAX", "Power Query", "Data Modeling", "EDA"].map((skill) => (
                  <span key={skill} className="rounded-full border border-slate-700/70 px-2.5 py-1 text-xs text-foreground bg-slate-800/40">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="text-xs text-cyan-300 mb-3">3 live dashboards · 30% reporting time saved</div>
              <div className="space-y-2">
                {[{ label: "KPI Design", value: 90 }, { label: "Data Modeling", value: 85 }, { label: "DAX", value: 80 }].map((bar) => (
                  <div key={bar.label}>
                    <div className="flex justify-between text-xs text-muted-foreground mb-1">
                      <span>{bar.label}</span>
                    </div>
                    <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-400 rounded-full" style={{ width: `${bar.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <a href="#experience" className="mt-3 text-xs text-muted-foreground block hover:text-primary transition-colors">
                <span className="text-cyan-400">Used in:</span> Acumen Billing Dashboard
              </a>
            </div>

            {/* Python & ML */}
            <div className="w-full max-w-md rounded-2xl border border-slate-800/60 bg-slate-900/50 backdrop-blur p-6 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-400/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-foreground">Python & ML</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Analysis and forecasting for real business questions.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Pandas", "NumPy", "scikit-learn", "TensorFlow (LSTM)", "Statsmodels"].map((skill) => (
                  <span key={skill} className="rounded-full border border-slate-700/70 px-2.5 py-1 text-xs text-foreground bg-slate-800/40">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="text-xs text-cyan-300 mb-3">10k+ rows modeled · 2 forecasting projects</div>
              <div className="space-y-2">
                {[{ label: "Time-Series", value: 85 }, { label: "Feature Eng.", value: 80 }, { label: "Validation", value: 90 }].map((bar) => (
                  <div key={bar.label}>
                    <div className="flex justify-between text-xs text-muted-foreground mb-1">
                      <span>{bar.label}</span>
                    </div>
                    <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-400 rounded-full" style={{ width: `${bar.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <a href="#projects" className="mt-3 text-xs text-muted-foreground block hover:text-primary transition-colors">
                <span className="text-cyan-400">Used in:</span> Supply Chain Risk, Solar Analysis
              </a>
            </div>

            {/* Cloud & Data Platforms */}
            <div className="w-full max-w-md rounded-2xl border border-slate-800/60 bg-slate-900/50 backdrop-blur p-6 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-400/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-foreground">Cloud & Data Platforms</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Data access across cloud and ERP sources.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Snowflake", "AWS (S3, Athena)", "Azure", "NetSuite", "Solomon", "Access DB", "APIs"].map((skill) => (
                  <span key={skill} className="rounded-full border border-slate-700/70 px-2.5 py-1 text-xs text-foreground bg-slate-800/40">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="text-xs text-cyan-300 mb-3">10+ automated pipelines</div>
              <div className="space-y-2">
                {[{ label: "Data Access", value: 90 }, { label: "Quality", value: 85 }, { label: "Automation", value: 88 }].map((bar) => (
                  <div key={bar.label}>
                    <div className="flex justify-between text-xs text-muted-foreground mb-1">
                      <span>{bar.label}</span>
                    </div>
                    <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-400 rounded-full" style={{ width: `${bar.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <a href="#experience" className="mt-3 text-xs text-muted-foreground block hover:text-primary transition-colors">
                <span className="text-cyan-400">Used in:</span> Reporting Standardization
              </a>
            </div>

            {/* Tools & Methods */}
            <div className="w-full max-w-md rounded-2xl border border-slate-800/60 bg-slate-900/50 backdrop-blur p-6 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-400/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-foreground">Tools & Methods</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Reliable workflows and clear documentation.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Agile", "Jira", "Confluence", "Lean Six Sigma (DMAIC)", "BPMN", "SOPs", "Testing"].map((skill) => (
                  <span key={skill} className="rounded-full border border-slate-700/70 px-2.5 py-1 text-xs text-foreground bg-slate-800/40">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="text-xs text-cyan-300 mb-3">5+ process docs · 3 UAT cycles</div>
              <div className="space-y-2">
                {[{ label: "Requirements", value: 90 }, { label: "Documentation", value: 88 }, { label: "QA", value: 85 }].map((bar) => (
                  <div key={bar.label}>
                    <div className="flex justify-between text-xs text-muted-foreground mb-1">
                      <span>{bar.label}</span>
                    </div>
                    <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-400 rounded-full" style={{ width: `${bar.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <a href="#experience" className="mt-3 text-xs text-muted-foreground block hover:text-primary transition-colors">
                <span className="text-cyan-400">Used in:</span> AR/GL Reporting, Team Playbooks
              </a>
            </div>

            {/* Business & Strategic */}
            <div className="w-full max-w-md rounded-2xl border border-slate-800/60 bg-slate-900/50 backdrop-blur p-6 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-400/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-foreground">Business & Strategic</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Framing problems, sizing impact, aligning stakeholders.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Requirements", "Roadmapping", "Cost/Benefit", "ROI", "OKRs", "Vendor/Procurement"].map((skill) => (
                  <span key={skill} className="rounded-full border border-slate-700/70 px-2.5 py-1 text-xs text-foreground bg-slate-800/40">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="text-xs text-cyan-300 mb-3">3 stakeholder groups aligned</div>
              <div className="space-y-2">
                {[{ label: "Prioritization", value: 90 }, { label: "ROI", value: 85 }, { label: "Communication", value: 92 }].map((bar) => (
                  <div key={bar.label}>
                    <div className="flex justify-between text-xs text-muted-foreground mb-1">
                      <span>{bar.label}</span>
                    </div>
                    <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-400 rounded-full" style={{ width: `${bar.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <a href="#experience" className="mt-3 text-xs text-muted-foreground block hover:text-primary transition-colors">
                <span className="text-cyan-400">Used in:</span> Billing Enhancements
              </a>
            </div>

            {/* Communication & Collaboration */}
            <div className="w-full max-w-md rounded-2xl border border-slate-800/60 bg-slate-900/50 backdrop-blur p-6 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-400/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-foreground">Communication & Collaboration</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Turning analysis into decisions people act on.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Exec Decks", "Data Storytelling", "Workshops", "UAT Sessions", "Training"].map((skill) => (
                  <span key={skill} className="rounded-full border border-slate-700/70 px-2.5 py-1 text-xs text-foreground bg-slate-800/40">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="text-xs text-cyan-300 mb-3">8+ executive readouts</div>
              <div className="space-y-2">
                {[{ label: "Storytelling", value: 92 }, { label: "Facilitation", value: 88 }, { label: "Training", value: 85 }].map((bar) => (
                  <div key={bar.label}>
                    <div className="flex justify-between text-xs text-muted-foreground mb-1">
                      <span>{bar.label}</span>
                    </div>
                    <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-400 rounded-full" style={{ width: `${bar.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <a href="#experience" className="mt-3 text-xs text-muted-foreground block hover:text-primary transition-colors">
                <span className="text-cyan-400">Used in:</span> Leadership Reviews
              </a>
            </div>

            {/* Analytical & Interpersonal */}
            <div className="w-full max-w-md rounded-2xl border border-slate-800/60 bg-slate-900/50 backdrop-blur p-6 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-400/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-foreground">Analytical & Interpersonal</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Structured thinking and ownership under deadlines.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Problem Structuring", "Hypothesis-driven", "Root Cause", "Attention to Detail", "Time Mgmt"].map((skill) => (
                  <span key={skill} className="rounded-full border border-slate-700/70 px-2.5 py-1 text-xs text-foreground bg-slate-800/40">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="text-xs text-cyan-300 mb-3">4 sprints supported</div>
              <div className="space-y-2">
                {[{ label: "Critical Thinking", value: 95 }, { label: "Detail", value: 90 }, { label: "Ownership", value: 92 }].map((bar) => (
                  <div key={bar.label}>
                    <div className="flex justify-between text-xs text-muted-foreground mb-1">
                      <span>{bar.label}</span>
                    </div>
                    <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-400 rounded-full" style={{ width: `${bar.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <a href="#projects" className="mt-3 text-xs text-muted-foreground block hover:text-primary transition-colors">
                <span className="text-cyan-400">Used in:</span> All Projects
              </a>
            </div>
          </div>

          {/* Complete Skills Index - Expandable */}
          <div className="mt-12 max-w-4xl mx-auto">
            <button
              onClick={() => setIsSkillsExpanded(!isSkillsExpanded)}
              className="w-full flex items-center justify-between px-6 py-4 rounded-xl border border-slate-800/60 bg-slate-900/30 hover:bg-slate-900/50 transition-all"
            >
              <h4 className="text-lg font-semibold text-foreground">Complete Skills Index</h4>
              <ChevronDown 
                className={`h-5 w-5 text-primary transition-transform duration-300 ${isSkillsExpanded ? 'rotate-180' : ''}`}
              />
            </button>
            
            {isSkillsExpanded && (
              <div className="mt-4 rounded-xl border border-slate-800/60 bg-slate-900/30 p-6 space-y-6 animate-fade-in">
                {siteConfig.skills.map((skillGroup, index) => (
                  <div key={index} className="space-y-3">
                    <h5 className="text-base font-semibold text-primary">{skillGroup.category}</h5>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1.5 text-sm rounded-full bg-muted/50 border border-border text-foreground hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
