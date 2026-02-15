import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold text-luxury-black mb-8 tracking-tight"
        >
          Prêt à scaler ?
        </motion.h2>
        <p className="text-xl text-gray-500 mb-12 font-light">
          Ne laissez plus vos rushs dormir dans un disque dur. Créons ensemble du contenu qui convertit.
        </p>

        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <a 
            href="mailto:contact@example.com" 
            className="bg-luxury-black text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-gray-800 transition-all flex items-center gap-3 shadow-xl hover:shadow-2xl"
          >
            Discutons de vos vidéos <ArrowRight size={20} />
          </a>
        </motion.div>

        <div className="mt-16 flex justify-center gap-8 text-gray-400 text-sm uppercase tracking-widest">
          <a href="#" className="hover:text-black transition-colors">Instagram</a>
          <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-black transition-colors">YouTube</a>
        </div>
      </div>

      {/* Subtle footer decoration */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
    </section>
  );
};

export default Contact;