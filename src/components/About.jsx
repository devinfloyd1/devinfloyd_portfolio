import { motion } from 'framer-motion';
import { DataInfraIcon, BackgroundIcon, AIMLIcon } from './icons/AboutIcons';

const About = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.18 }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 32 },
        show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 55, damping: 14 } }
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
                viewport={{ once: true, margin: '-100px' }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
                {/* Main Bio Card — glass */}
                <motion.div
                    variants={item}
                    className="md:col-span-2 glass-card rounded-3xl p-8 hover:border-white/20 transition-colors duration-300"
                >
                    <h3 className="text-2xl font-semibold mb-4 text-white">The Engineer</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Data &amp; Backend Engineer with 5+ years building production-grade data and API systems for enterprise financial platforms.
                        I specialize in designing and operating event-driven pipelines, cloud-native infrastructure, and high-volume data flows
                        that power downstream analytics and ML-ready systems.
                    </p>
                </motion.div>

                {/* ── Stats Card — Apple visionOS glass ── */}
                <motion.div
                    variants={item}
                    className="glass-stat rounded-3xl p-8 flex flex-col justify-center items-center text-center"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <motion.div
                        className="text-6xl font-bold mb-2 bg-clip-text text-transparent"
                        style={{
                            background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            filter: 'drop-shadow(0 0 20px rgba(37,99,235,0.5))',
                        }}
                        animate={{ filter: ['drop-shadow(0 0 16px rgba(37,99,235,0.4))', 'drop-shadow(0 0 28px rgba(124,58,237,0.6))', 'drop-shadow(0 0 16px rgba(37,99,235,0.4))'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        5+
                    </motion.div>
                    <div className="text-sm font-medium text-blue-200/70 tracking-widest uppercase" style={{ letterSpacing: '0.15em' }}>
                        Years Experience
                    </div>
                </motion.div>

                {/* Focus Card 1 — Data Infrastructure */}
                <motion.div
                    variants={item}
                    className="glass-card rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300 hover:border-purple-500/25"
                >
                    <DataInfraIcon delay={300} />
                    <div>
                        <h4 className="text-xl font-bold mb-2">Data Infrastructure</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">Event-Driven Pipelines, API-Based Ingestion, AWS Redshift, PostgreSQL, Spark, Databricks, Data Quality &amp; Validation</p>
                    </div>
                </motion.div>

                {/* Focus Card 2 — Background */}
                <motion.div
                    variants={item}
                    className="glass-card rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300 hover:border-amber-500/25"
                >
                    <BackgroundIcon delay={500} />
                    <div>
                        <h4 className="text-xl font-bold mb-2">Background</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">Former D1 Football Player | Former Senator at JMU</p>
                    </div>
                </motion.div>

                {/* Focus Card 3 — AI & ML */}
                <motion.div
                    variants={item}
                    className="glass-card rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300 hover:border-pink-500/25"
                >
                    <AIMLIcon delay={700} />
                    <div>
                        <h4 className="text-xl font-bold mb-2">AI &amp; ML</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">Sports Analytics, ML-Ready Data Pipelines, AI Applications</p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;
