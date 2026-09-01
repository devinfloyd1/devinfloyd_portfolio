import { motion } from 'framer-motion';

const experiences = [
    {
        role: "Cloud Data Engineer – Data & AI",
        company: "Pariveda Solutions",
        period: "Feb 2026 – Present",
        accent: "#60a5fa",   // blue
        description: "Embedded with a Health Care client's Platform & Ingestion Team. Built a 118 TB, 70,000+ table migration from Oracle/Snowflake to Databricks Medallion Architecture, integrated with Databricks ML/AI tools such as Genie. Designing reusable ingestion patterns for Databricks Spark Declarative Pipelines and LakeFlow Connect. Also built internal AI-powered developer workspaces using Model Context Protocol (MCP) servers, standardizing how the team builds, tests, and operates services."
    },
    {
        role: "Solutions Engineer II – Data & Backend Engineering",
        company: "Capital Group ($2.6T AUM)",
        period: "Aug 2021 – Dec 2025",
        accent: "#a78bfa",   // purple
        description: "Built and operated a data platform processing 500K+ daily financial transactions and $50B+ in assets. Designed dimensional schemas and star schemas on AWS Redshift powering BI dashboards for 200+ institutional clients. Developed batch and streaming ETL/ELT pipelines using Spark and Kinesis processing 2M+ events/day with 99.97% accuracy SLA. Built 15+ internal REST APIs and established a data quality monitoring framework using Great Expectations, reducing MTTR from 45 to 12 minutes."
    },
    {
        role: "Media Technology Intern",
        company: "NBCUniversal",
        period: "Jun 2020 – Aug 2020",
        accent: "#f472b6",   // pink
        description: "Led infrastructure migration across 50+ production broadcast servers, reducing deployment time and improving system reliability. Won 1st place in a company-wide hackathon building a full-stack media scheduling app using React, Node.js, and SQL Server."
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-32 px-4 max-w-4xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-20 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
            >
                Experience
            </motion.h2>

            <div className="relative ml-4 md:ml-10 space-y-14">
                {/* Timeline vertical line */}
                <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/30 to-transparent" />

                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        className="relative pl-12"
                    >
                        {/* Glowing timeline dot */}
                        <motion.div
                            className="absolute -left-[7px] top-4 w-3.5 h-3.5 rounded-full border-2 border-gemini-dark"
                            style={{ backgroundColor: exp.accent, boxShadow: `0 0 12px ${exp.accent}` }}
                            animate={{ boxShadow: [`0 0 8px ${exp.accent}80`, `0 0 20px ${exp.accent}`, `0 0 8px ${exp.accent}80`] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: index * 0.5 }}
                        />

                        {/* Glass card with colored left accent bar */}
                        <motion.div
                            className="glass-card rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
                            whileHover={{ y: -4 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        >
                            {/* Colored accent bar on left edge */}
                            <div
                                className="absolute left-0 top-0 bottom-0 w-0.5 rounded-l-2xl"
                                style={{ background: `linear-gradient(180deg, ${exp.accent} 0%, transparent 100%)` }}
                            />

                            <div className="p-8">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-3">
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1 leading-snug">{exp.role}</h3>
                                        <span className="text-sm font-semibold" style={{ color: exp.accent }}>{exp.company}</span>
                                    </div>
                                    <span
                                        className="text-xs font-medium uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap self-start glass-badge"
                                        style={{
                                            color: exp.accent,
                                            background: `${exp.accent}15`,
                                            borderColor: `${exp.accent}30`,
                                        }}
                                    >
                                        {exp.period}
                                    </span>
                                </div>
                                <p className="text-gray-400 leading-relaxed text-sm">{exp.description}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
