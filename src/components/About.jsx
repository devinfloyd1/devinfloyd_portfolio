import { motion } from 'framer-motion';
import { Database, Brain, Trophy } from 'lucide-react';

const About = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
    };

    return (
        <section id="about" className="py-32 px-4 max-w-7xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-16 text-center md:text-left bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
            >
                About Me
            </motion.h2>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
                {/* Main Bio Card */}
                <motion.div variants={item} className="md:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
                    <h3 className="text-2xl font-semibold mb-4 text-white">The Engineer</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Data & Backend Engineer with 4+ years building production-grade data and API systems for enterprise financial platforms.
                        I specialize in designing and operating event-driven pipelines, cloud-native infrastructure, and high-volume data flows
                        that power downstream analytics and ML-ready systems.
                    </p>
                </motion.div>

                {/* Stats Card */}
                <motion.div variants={item} className="bg-gemini-blue/10 border border-gemini-blue/20 rounded-3xl p-8 flex flex-col justify-center items-center text-center">
                    <div className="text-5xl font-bold text-gemini-blue mb-2">4+</div>
                    <div className="text-gray-400">Years Experience</div>
                </motion.div>

                {/* Focus Card 1 */}
                <motion.div variants={item} className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
                    <Database className="w-10 h-10 text-purple-400 mb-4" />
                    <div>
                        <h4 className="text-xl font-bold mb-2">Data Infrastructure</h4>
                        <p className="text-sm text-gray-400">Event-Driven Pipelines, API-Based Ingestion, AWS Redshift, PostgreSQL, Spark, Databricks, Data Quality & Validation</p>
                    </div>
                </motion.div>

                {/* Focus Card 2 */}
                <motion.div variants={item} className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
                    <Trophy className="w-10 h-10 text-yellow-500 mb-4" />
                    <div>
                        <h4 className="text-xl font-bold mb-2">Background</h4>
                        <p className="text-sm text-gray-400">Former D1 Football Player| Former Senator at JMU | Driven & Disciplined</p>
                    </div>
                </motion.div>

                {/* Focus Card 3 */}
                <motion.div variants={item} className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
                    <Brain className="w-10 h-10 text-pink-400 mb-4" />
                    <div>
                        <h4 className="text-xl font-bold mb-2">AI & ML</h4>
                        <p className="text-sm text-gray-400">Sports Analytics, ML-Ready Data Pipelines, AI Applications</p>
                    </div>
                </motion.div>

            </motion.div>
        </section>
    );
};

export default About;
