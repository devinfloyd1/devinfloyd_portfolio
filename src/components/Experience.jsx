import { motion } from 'framer-motion';

const experiences = [
    {
        role: "Cloud Data Engineer – Data & AI",
        company: "Pariveda Solutions",
        period: "Feb 2026 – Present",
        description: "Embedded with Stanford Health Care's Platform & Ingestion Team. Built a 118 TB, 70,000+ table migration from Oracle/Snowflake to Databricks Medallion Architecture, integrated with Databricks ML/AI tools such as Genie. Designing reusable ingestion patterns for Databricks Spark Declarative Pipelines and LakeFlow Connect. Also built internal AI-powered developer workspaces using Model Context Protocol (MCP) servers, standardizing how the team builds, tests, and operates services."
    },
    {
        role: "Solutions Engineer II – Data & Backend Engineering",
        company: "Capital Group ($2.6T AUM)",
        period: "Aug 2021 – Dec 2025",
        description: "Built and operated a data platform processing 500K+ daily financial transactions and $50B+ in assets. Designed dimensional schemas and star schemas on AWS Redshift powering BI dashboards for 200+ institutional clients. Developed batch and streaming ETL/ELT pipelines using Spark and Kinesis processing 2M+ events/day with 99.97% accuracy SLA. Built 15+ internal REST APIs and established a data quality monitoring framework using Great Expectations, reducing MTTR from 45 to 12 minutes."
    },
    {
        role: "Media Technology Intern",
        company: "NBCUniversal",
        period: "Jun 2020 – Aug 2020",
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

            <div className="relative border-l border-white/10 ml-4 md:ml-10 space-y-16">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="relative pl-12"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gemini-blue border-4 border-gemini-dark" />

                        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                                    <span className="text-gemini-blue text-lg font-medium">{exp.company}</span>
                                </div>
                                <span className="text-sm text-gray-500 uppercase tracking-wider mt-2 md:mt-0 bg-white/5 px-4 py-1 rounded-full">{exp.period}</span>
                            </div>
                            <p className="text-gray-400 leading-relaxed">
                                {exp.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
