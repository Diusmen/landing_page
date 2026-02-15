import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, PlayCircle } from 'lucide-react';

const stats = [
    {
        icon: <TrendingUp className="w-6 h-6" />,
        value: "+300%",
        label: "Croissance Moyenne"
    },
    {
        icon: <Users className="w-6 h-6" />,
        value: "500k+",
        label: "Vues Générées"
    },
    {
        icon: <Award className="w-6 h-6" />,
        value: "98%",
        label: "Taux de Rétention"
    },
    {
        icon: <PlayCircle className="w-6 h-6" />,
        value: "50+",
        label: "Projets Livrés"
    }
];

const Authority: React.FC = () => {
    return (
        <section className="bg-luxury-black py-24 px-4 md:px-8 text-white relative overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-luxury-accent rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                            Nous ne faisons pas que du "beau". <br />
                            <span className="text-luxury-accent">Nous faisons du performant.</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
                            Il ne s'agit pas seulement de couper des scènes. Il s'agit de comprendre la psychologie de votre audience, de structurer votre message pour la vente, et de créer une expérience visuelle qui positionne votre marque comme le leader indiscutable de son marché.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium border border-white/5">Montage Dynamique</span>
                            <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium border border-white/5">Sound Design</span>
                            <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium border border-white/5">Storytelling</span>
                            <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium border border-white/5">Color Grading</span>
                        </div>
                    </motion.div>

                    <div className="flex-1 w-full">
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 text-center hover:bg-white/10 transition-colors"
                                >
                                    <div className="inline-flex justify-center items-center w-12 h-12 rounded-full bg-luxury-accent/20 text-luxury-accent mb-4">
                                        {stat.icon}
                                    </div>
                                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                                    <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Authority;
