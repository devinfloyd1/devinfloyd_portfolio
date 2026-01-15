import { motion } from 'framer-motion';

const skills = [
    { category: "Languages", items: ["Python", "SQL", "Java", "JavaScript", "React"] },
    {
        category: "Data & Infrastructure", items: [
            "Event-Driven Pipelines",
            "API-Based Data Ingestion",
            "AWS Redshift",
            "PostgreSQL",
            "Spark",
            "Databricks",
            "ETL / ELT Pipelines",
            "Data Quality & Validation"]
    },
    {
        category: "Cloud & Tools", items: [
            "AWS (S3, Lambda, API Gateway, EMR, Kinesis, Redshift, SageMaker, Bedrock)",
            "Docker",
            "Terraform",
            "Datadog",
            "CloudWatch",
            "CI/CD Pipelines"
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-32 px-4 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
                >
                    Technical Arsenal
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skills.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-6"
                        >
                            <h3 className="text-xl font-bold text-gray-200 mb-6 border-b border-white/10 pb-2">{category.category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {category.items.map((skill) => (
                                    <span key={skill} className="px-3 py-1 bg-gemini-blue/20 text-blue-200 rounded-full text-sm font-medium hover:bg-gemini-blue/30 transition-colors">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
