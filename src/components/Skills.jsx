import { motion } from 'framer-motion';

const skills = [
    {
        category: "Languages",
        accent: "#60a5fa",
        items: ["Python (Expert)", "SQL (Expert)", "C# .NET", "Java", "C++", "JavaScript", "Go"]
    },
    {
        category: "Data Platforms",
        accent: "#a78bfa",
        items: ["Kafka", "Airflow", "Iceberg", "Databricks", "Snowflake", "PostgreSQL", "Redis", "MySQL"]
    },
    {
        category: "Data Engineering",
        accent: "#34d399",
        items: ["Spark/PySpark", "SSIS", "ETL/ELT Pipelines", "Batch & Stream Processing", "Data Modeling", "Star Schemas", "OLAP"]
    },
    {
        category: "AWS",
        accent: "#fb923c",
        items: ["S3", "Lambda", "Kinesis", "EMR", "Glue", "EC2", "ECS", "DynamoDB", "API Gateway", "EventBridge", "Athena", "Step Functions", "SQS", "SNS", "Redshift"]
    },
    {
        category: "Backend & DevOps",
        accent: "#38bdf8",
        items: ["REST APIs", "Microservices", "Terraform", "Docker", "Kubernetes", "GitHub Actions", "Harness"]
    },
    {
        category: "Observability",
        accent: "#f472b6",
        items: ["Datadog", "CloudWatch", "Great Expectations", "SLOs/SLIs", "Data Quality Monitoring"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-32 px-4 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/8 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-900/6 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
                >
                    Technical Arsenal
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {skills.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08 }}
                            whileHover={{ y: -4 }}
                            className="glass-card rounded-2xl p-6 hover:border-white/18 transition-all duration-300 group"
                        >
                            {/* Category header with accent dot */}
                            <div className="flex items-center gap-2.5 mb-5 pb-4 border-b border-white/8">
                                <span
                                    className="w-2 h-2 rounded-full flex-shrink-0"
                                    style={{ backgroundColor: category.accent, boxShadow: `0 0 8px ${category.accent}80` }}
                                />
                                <h3 className="text-sm font-bold text-gray-200 uppercase tracking-widest" style={{ letterSpacing: '0.12em' }}>
                                    {category.category}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="glass-badge px-3 py-1 rounded-full text-xs font-medium"
                                        style={{
                                            color: category.accent,
                                            background: `${category.accent}12`,
                                            borderColor: `${category.accent}28`,
                                        }}
                                    >
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
