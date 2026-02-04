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
                Education & Certifications
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Education Card */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-blue-500/20 rounded-lg">
                            <GraduationCap className="w-8 h-8 text-blue-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Education</h3>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <h4 className="text-xl font-semibold text-white">James Madison University</h4>
                            <p className="text-gemini-blue font-medium">BBA in Computer Information Systems</p>
                            <p className="text-gray-400 mt-2">GPA: 3.72</p>
                        </div>
                    </div>
                </motion.div>

                {/* Certifications Card */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-purple-500/20 rounded-lg">
                            <Award className="w-8 h-8 text-purple-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Certifications</h3>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-start justify-between group">
                            <div>
                                <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                                    <a
                                        href="https://www.credly.com/badges/68f81b5f-7cab-4429-96f2-83d418c0156f/linked_in_profile"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2"
                                    >
                                        AWS Certified AI Practitioner
                                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                </h4>
                            </div>
                        </div>

                        <div className="flex items-start justify-between">
                            <div>
                                <h4 className="text-lg font-semibold text-white">Databricks Certified Data Engineer Associate</h4>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
