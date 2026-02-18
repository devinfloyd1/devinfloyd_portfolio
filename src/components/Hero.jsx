import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
    const [loading, setLoading] = useState(true);

    // Text decode effect placeholder logic or similar
    // For now, using a staggered fade-in which is clean and "Apple-like".

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.5
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section id="home" className="h-screen flex flex-col justify-center items-center relative overflow-hidden bg-gemini-dark text-white">
            {/* Background ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gemini-blue/20 rounded-full blur-[100px] pointer-events-none" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="text-center z-10 px-4"
            >
                <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    Devin Floyd
                </motion.h1>

                <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-400 font-light mb-12 tracking-wide">
                    Data & Backend Engineer | ML Enthusiast
                </motion.p>

                <motion.div variants={itemVariants}>
                    <a
                        href="#about"
                        className="inline-block px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors backdrop-blur-sm text-sm tracking-widest uppercase"
                    >
                        Explore Work
                    </a>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 animate-bounce"
            >
                <ChevronDown className="w-6 h-6 text-gray-500" />
            </motion.div>
        </section>
    );
};

export default Hero;
