import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Check } from 'lucide-react';

const questions = [
    {
        id: 1,
        question: "Quel est votre objectif principal avec la vidéo aujourd'hui ?",
        options: ["Augmenter mon Autorité", "Générer plus de Leads", "Vendre mes Offres/Formations", "Scaler avec la Publicité"]
    },
    {
        id: 2,
        question: "Avez-vous déjà une offre qui génère du chiffre d'affaires ?",
        options: ["Oui, c'est mon activité principale", "Oui, mais je veux passer au niveau supérieur", "Non, je démarre", "Je suis en phase de lancement"]
    },
    {
        id: 3,
        question: "Produisez-vous déjà du contenu vidéo ?",
        options: ["Oui, régulièrement", "Parfois, mais c'est irrégulier", "Non, je veux m'y mettre sérieusement", "J'ai essayé mais sans résultats"]
    },
    {
        id: 4,
        question: "Êtes-vous prêt à investir pour accélérer votre croissance ?",
        options: ["Oui, je cherche un partenaire de confiance", "Je regarde les opportunités", "Non, je cherche du gratuit"]
    }
];

const Quiz: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleAnswer = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(prev => prev + 1);
        } else {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setIsFinished(true);
            }, 1500);
        }
    };

    return (
        <section className="py-24 px-4 md:px-8 bg-luxury-offwhite">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 text-luxury-black">Diagnostic Vidéo Gratuit</h2>
                    <p className="text-gray-500">3 minutes pour identifier votre levier de croissance vidéo.</p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 min-h-[400px] flex flex-col justify-center relative overflow-hidden">
                    <AnimatePresence mode="wait">
                        {loading ? (
                            <motion.div
                                key="loading"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-col items-center justify-center gap-4"
                            >
                                <div className="w-12 h-12 border-4 border-luxury-accent border-t-transparent rounded-full animate-spin"></div>
                                <p className="text-lg font-medium text-gray-600">Analyse de votre profil...</p>
                            </motion.div>
                        ) : isFinished ? (
                            <motion.div
                                key="result"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center"
                            >
                                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Check size={40} strokeWidth={3} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-gray-900">Analyse Terminée</h3>
                                <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
                                    D'après vos réponses, un système vidéo adapté peut considérablement augmenter vos résultats. Discutons-en lors d'une session stratégique.
                                </p>
                                <a
                                    href="https://tally.so/r/Np6pBj"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-luxury-accent text-black px-8 py-4 text-lg font-bold uppercase tracking-wide hover:bg-yellow-400 transition-all rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                >
                                    Voir mon résultat et réserver <ChevronRight className="w-5 h-5" />
                                </a>
                            </motion.div>
                        ) : (
                            <motion.div
                                key={questions[currentQuestion].id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="w-full max-w-2xl mx-auto"
                            >
                                <div className="mb-8 flex justify-between items-center text-sm font-medium text-gray-400 uppercase tracking-widest">
                                    <span>Question {currentQuestion + 1} / {questions.length}</span>
                                    <span className="text-luxury-accent">{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
                                </div>

                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 leading-snug">
                                    {questions[currentQuestion].question}
                                </h3>

                                <div className="grid gap-4">
                                    {questions[currentQuestion].options.map((option, idx) => (
                                        <button
                                            key={idx}
                                            onClick={handleAnswer}
                                            className="w-full text-left p-6 border-2 border-gray-100 hover:border-luxury-accent hover:bg-luxury-accent/5 rounded-xl transition-all duration-200 group flex items-center justify-between"
                                        >
                                            <span className="text-lg text-gray-700 group-hover:text-black font-medium">{option}</span>
                                            <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-luxury-accent transition-colors" />
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Progress Bar background */}
                    {!isFinished && !loading && (
                        <div className="absolute bottom-0 left-0 h-2 bg-gray-100 w-full">
                            <motion.div
                                className="h-full bg-luxury-accent"
                                initial={{ width: 0 }}
                                animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Quiz;
