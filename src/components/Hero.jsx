import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.28, delayChildren: 0.4 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } }
    };

    return (
        <section id="home" className="h-screen flex flex-col justify-center items-center relative overflow-hidden bg-gemini-dark text-white">

            {/* ── Layered ambient orbs ── */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Primary blue core */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[120px]" />
                {/* Purple accent — offset right */}
                <div className="absolute top-[35%] left-[60%] w-[380px] h-[380px] bg-purple-700/12 rounded-full blur-[100px]" />
                {/* Cyan whisper — offset left */}
                <div className="absolute top-[55%] left-[25%] w-[300px] h-[300px] bg-cyan-600/8 rounded-full blur-[90px]" />
                {/* Subtle grid overlay */}
                <div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                        backgroundSize: '60px 60px',
                    }}
                />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="text-center z-10 px-4"
            >
                <motion.h1
                    variants={itemVariants}
                    className="text-6xl md:text-9xl font-bold mb-5 tracking-tighter"
                    style={{
                        background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 40%, #94a3b8 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}
                >
                    Devin Floyd
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-2xl text-gray-400 font-light mb-14 tracking-wide"
                >
                    Data &amp; Backend Engineer&nbsp;&nbsp;·&nbsp;&nbsp;Cloud Architecture&nbsp;&nbsp;·&nbsp;&nbsp;ML Systems
                </motion.p>

                <motion.div variants={itemVariants} className="flex justify-center gap-4 flex-wrap">
                    {/* Primary CTA — glass */}
                    <a
                        href="#about"
                        className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide text-white overflow-hidden transition-all duration-300 hover:scale-105"
                        style={{
                            background: 'linear-gradient(135deg, rgba(37,99,235,0.5) 0%, rgba(124,58,237,0.4) 100%)',
                            border: '1px solid rgba(100,160,255,0.25)',
                            boxShadow: '0 1px 0 rgba(255,255,255,0.15) inset, 0 0 30px rgba(37,99,235,0.2), 0 8px 24px rgba(0,0,0,0.4)',
                            backdropFilter: 'blur(20px)',
                        }}
                    >
                        <span
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.08), transparent)' }}
                        />
                        Explore Work
                    </a>
                    {/* Secondary CTA */}
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
                        style={{
                            border: '1px solid rgba(255,255,255,0.1)',
                            boxShadow: '0 1px 0 rgba(255,255,255,0.07) inset',
                            backdropFilter: 'blur(12px)',
                        }}
                    >
                        Get in Touch
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2, duration: 1 }}
                className="absolute bottom-10 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-gray-600 tracking-widest uppercase" style={{ letterSpacing: '0.2em' }}>Scroll</span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
                >
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
