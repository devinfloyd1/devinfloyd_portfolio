import { motion } from 'framer-motion';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="py-32 px-4 max-w-4xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-20 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
            >
                Education &amp; Certifications
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Education Card */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ y: -4 }}
                    className="glass-card p-8 rounded-2xl hover:border-blue-500/25 transition-all duration-300"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div
                            className="p-3 rounded-xl glass-badge"
                            style={{ background: 'rgba(37,99,235,0.15)', borderColor: 'rgba(37,99,235,0.3)' }}
                        >
                            <GraduationCap className="w-7 h-7 text-blue-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Education</h3>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <h4 className="text-lg font-semibold text-white">James Madison University</h4>
                            <p className="text-blue-400 font-medium text-sm mt-1">BBA in Computer Information Systems</p>
                        </div>
                    </div>
                </motion.div>

                {/* Certifications Card */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ y: -4 }}
                    className="glass-card p-8 rounded-2xl hover:border-purple-500/25 transition-all duration-300"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div
                            className="p-3 rounded-xl glass-badge"
                            style={{ background: 'rgba(124,58,237,0.15)', borderColor: 'rgba(124,58,237,0.3)' }}
                        >
                            <Award className="w-7 h-7 text-purple-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Certifications</h3>
                    </div>

                    <div className="space-y-5">
                        <div className="group flex items-start justify-between">
                            <div>
                                <h4 className="text-base font-semibold text-white group-hover:text-blue-400 transition-colors">
                                    <a
                                        href="https://www.credly.com/badges/68f81b5f-7cab-4429-96f2-83d418c0156f/linked_in_profile"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2"
                                    >
                                        AWS Certified AI Practitioner
                                        <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                </h4>
                                <p className="text-xs text-gray-500 mt-1">December 2025</p>
                            </div>
                        </div>

                        <div className="flex items-start justify-between pt-4 border-t border-white/8">
                            <div>
                                <h4 className="text-base font-semibold text-white">Databricks Certified Data Engineer Associate</h4>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
