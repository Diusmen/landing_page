import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

const StrategicSession: React.FC = () => {
    return (
        <section className="py-24 px-4 md:px-8 bg-luxury-offwhite text-center">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-3xl p-8 md:p-16 shadow-2xl border border-gray-100 relative overflow-hidden"
                >
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-accent/10 rounded-bl-[100px] -z-0"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-luxury-black/5 rounded-tr-[100px] -z-0"></div>

                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-bold mb-8 border border-green-100">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            Places limitées pour ce mois
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold text-luxury-black mb-6 tracking-tight">
                            Session Stratégique <br /><span className="text-luxury-accent">Offerte</span> (15 min)
                        </h2>

                        <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
                            On analyse votre situation actuelle, on identifie les points de blocage, et je vous propose un plan d'action personnalisé pour votre contenu vidéo.
                        </p>

                        <div className="flex flex-col items-center gap-6">
                            <a
                                href="https://tally.so/r/Np6pBj"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-luxury-black text-white px-10 py-5 text-lg font-bold uppercase tracking-widest hover:bg-luxury-accent hover:text-black transition-all shadow-xl hover:shadow-2xl flex items-center gap-4 rounded-lg transform hover:-translate-y-1"
                            >
                                <Calendar className="w-6 h-6" />
                                Réserver ma session
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>

                            <p className="text-sm text-gray-400 font-medium max-w-md">
                                ⚠️ Je travaille avec un nombre limité de clients chaque mois afin de garantir un accompagnement premium et une qualité irréprochable.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default StrategicSession;
