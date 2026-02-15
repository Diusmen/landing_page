import React from 'react';
import { motion } from 'framer-motion';
import { MonitorPlay, Youtube, Megaphone, Smartphone, ArrowRight } from 'lucide-react';

const offers = [
    {
        icon: <MonitorPlay className="w-8 h-8" />,
        title: "Production Complète de Formation",
        problem: "Vous avez l'expertise mais la qualité de vos vidéos de cours ne reflète pas votre valeur.",
        solution: "Tournage, montage, et structure pédagogique optimisée pour l'apprentissage.",
        result: "Une formation premium qui justifie un prix High-Ticket."
    },
    {
        icon: <Youtube className="w-8 h-8" />,
        title: "Système YouTube Mensuel",
        problem: "La production de vidéos longues vous prend trop de temps et d'énergie.",
        solution: "Délégation totale : je transforme vos idées en vidéos ultra-qualitatives.",
        result: "Une autorité qui grandit en automatique et des leads qualifiés."
    },
    {
        icon: <Megaphone className="w-8 h-8" />,
        title: "Vidéos Ads & VSL",
        problem: "Vos publicités ne convertissent pas assez et le coût par lead explose.",
        solution: "Création de créas publicitaires basées sur la psychologie de vente.",
        result: "Un ROAS qui décolle et un système d'acquisition rentable."
    },
    {
        icon: <Smartphone className="w-8 h-8" />,
        title: "Système Shorts Réseaux Sociaux",
        problem: "Vous êtes invisible sur TikTok et Instagram Reels.",
        solution: "Production de shorts dynamiques et viraux extraits de vos contenus longs.",
        result: "Une visibilité massive et une audience engagée au quotidien."
    }
];

const Offers: React.FC = () => {
    return (
        <section className="py-24 px-4 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-luxury-black">
                        Solutions <span className="text-luxury-accent">Premium</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
                        Des systèmes vidéo clé en main pour dominer votre marché.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {offers.map((offer, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group bg-gray-50 hover:bg-luxury-black hover:text-white p-8 md:p-10 rounded-2xl transition-all duration-300 border border-gray-100 hover:border-gray-800 shadow-sm hover:shadow-2xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <ArrowRight className="w-24 h-24 -mr-4 -mt-4 transform group-hover:rotate-45 transition-transform duration-500" />
                            </div>

                            <div className="inline-flex p-4 bg-white text-luxury-black rounded-xl mb-8 shadow-sm group-hover:bg-luxury-accent group-hover:text-luxury-black transition-colors">
                                {offer.icon}
                            </div>

                            <h3 className="text-2xl font-bold mb-6 group-hover:text-white transition-colors">
                                {offer.title}
                            </h3>

                            <div className="space-y-4 relative z-10">
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-gray-500 mb-1">Problème</h4>
                                    <p className="text-gray-600 group-hover:text-gray-300 text-sm leading-relaxed">
                                        {offer.problem}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-gray-500 mb-1">Solution</h4>
                                    <p className="text-gray-600 group-hover:text-gray-300 text-sm leading-relaxed">
                                        {offer.solution}
                                    </p>
                                </div>

                                <div className="pt-4 mt-4 border-t border-gray-200 group-hover:border-gray-700">
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-luxury-accent mb-1">Résultat</h4>
                                    <p className="text-gray-800 group-hover:text-white font-medium text-base">
                                        {offer.result}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Offers;
