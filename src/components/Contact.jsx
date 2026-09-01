import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-32 px-4 text-center relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-700/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-700/10 rounded-full blur-[80px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto relative z-10"
            >
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-xs font-semibold tracking-widest uppercase text-blue-400 mb-6"
                    style={{ letterSpacing: '0.2em' }}
                >
                    Open to work
                </motion.p>

                <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 leading-tight">
                    Let's Connect
                </h2>

                <p className="text-lg text-gray-400 mb-14 leading-relaxed max-w-xl mx-auto">
                    Interested in working together or have a question?
                    <br />Email me or connect on socials.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    {/* Primary — glass blue */}
                    <motion.a
                        href="mailto:devinfloyd0503@gmail.com"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="group flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300"
                        style={{
                            background: 'linear-gradient(135deg, rgba(37,99,235,0.55) 0%, rgba(124,58,237,0.45) 100%)',
                            border: '1px solid rgba(100,160,255,0.3)',
                            boxShadow: '0 1.5px 0 rgba(255,255,255,0.18) inset, 0 0 40px rgba(37,99,235,0.25), 0 8px 24px rgba(0,0,0,0.4)',
                            backdropFilter: 'blur(20px)',
                            color: '#fff',
                        }}
                    >
                        <Mail className="w-4 h-4" />
                        Email Me
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </motion.a>

                    {/* LinkedIn — glass */}
                    <motion.a
                        href="https://www.linkedin.com/in/devin-f-79144ba8"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="group flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-sm text-gray-200 transition-all duration-300"
                        style={{
                            background: 'rgba(255,255,255,0.06)',
                            border: '1px solid rgba(255,255,255,0.12)',
                            boxShadow: '0 1px 0 rgba(255,255,255,0.1) inset, 0 4px 16px rgba(0,0,0,0.3)',
                            backdropFilter: 'blur(20px)',
                        }}
                    >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </motion.a>

                    {/* GitHub — glass */}
                    <motion.a
                        href="https://github.com/devinfloyd1"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="group flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-sm text-gray-200 transition-all duration-300"
                        style={{
                            background: 'rgba(255,255,255,0.06)',
                            border: '1px solid rgba(255,255,255,0.12)',
                            boxShadow: '0 1px 0 rgba(255,255,255,0.1) inset, 0 4px 16px rgba(0,0,0,0.3)',
                            backdropFilter: 'blur(20px)',
                        }}
                    >
                        <Github className="w-4 h-4" />
                        GitHub
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </motion.a>
                </div>

                <div className="mt-24 text-gray-700 text-xs tracking-widest" style={{ letterSpacing: '0.1em' }}>
                    <p>© 2026 Devin Floyd &nbsp;·&nbsp; Built with React &amp; Tailwind</p>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
