import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-32 px-4 text-center bg-gradient-to-b from-transparent to-black/50">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto"
            >
                <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600">
                    Let's Connect
                </h2>
                <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                    Interested in working together or have a question?
                    <br />Email me or connect on socials.
                </p>

                <div className="flex flex-wrap justify-center gap-6">
                    <a
                        href="mailto:devinfloyd0503@gmail.com"
                        className="group flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors"
                    >
                        <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        Email Me
                    </a>

                    <a
                        href="https://www.linkedin.com/in/devin-f-79144ba8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full font-bold hover:bg-white/20 transition-colors"
                    >
                        <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        LinkedIn
                    </a>

                    <a
                        href="https://github.com/devinfloyd1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full font-bold hover:bg-white/20 transition-colors"
                    >
                        <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        GitHub
                    </a>
                </div>

                <div className="mt-24 text-gray-600 text-sm">
                    <p>© 2026 Devin Floyd. Built with React & Tailwind.</p>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
