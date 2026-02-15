import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, XCircle } from 'lucide-react';

const Identification: React.FC = () => {
    const painPoints = [
        "Vous publiez régulièrement mais les ventes ne suivent pas.",
        "Vos vidéos manquent d'impact visuel et de rétention.",
        "Vous n'avez pas de système de contenu clair et prévisible.",
        "Vous manquez de temps pour éditer des vidéos de qualité.",
        "Vos publicités ne convertissent pas assez de prospects froids."
    ];

    return (
        <section className="bg-luxury-black text-white py-24 px-4 md:px-8">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        Votre contenu ne vous rapporte pas <br />
                        <span className="text-luxury-accent">ce qu'il devrait.</span>
                    </h2>
                    <div className="w-24 h-1 bg-luxury-accent mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="space-y-6"
                    >
                        {painPoints.map((point, index) => (
                            <div key={index} className="flex items-start gap-4 group">
                                <div className="mt-1 flex-shrink-0">
                                    <XCircle className="w-6 h-6 text-red-500/80 group-hover:text-red-500 transition-colors" />
                                </div>
                                <p className="text-lg text-gray-300 font-light group-hover:text-white transition-colors">
                                    {point}
                                </p>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="relative bg-white/5 border border-white/10 p-12 md:p-14 rounded-none md:rounded-r-2xl border-l-4 border-l-luxury-accent"
                    >
                        <div className="absolute top-6 left-6 text-luxury-accent opacity-20">
                            <AlertCircle size={60} />
                        </div>
                        <blockquote className="relative z-10">
                            <p className="text-2xl md:text-3xl font-serif italic leading-relaxed text-gray-200">
                                "Le problème n'est pas votre expertise. C'est la <span className="text-white font-bold not-italic decoration-luxury-accent underline decoration-2 underline-offset-4">stratégie</span> derrière vos vidéos."
                            </p>
                        </blockquote>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Identification;
