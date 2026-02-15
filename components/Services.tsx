import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, MonitorPlay, Zap, Youtube, Film, PenTool } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    { title: "Montage Shorts & Reels", desc: "Format vertical dynamique, sous-titres animés, retention hacking.", icon: Smartphone },
    { title: "Vidéos YouTube", desc: "Storytelling long format, rythmique travaillée, sound design immersif.", icon: Youtube },
    { title: "Video Ads", desc: "Hooks agressifs, CTA clairs, optimisé pour la conversion.", icon: Zap },
    { title: "VSL (Video Sales Letter)", desc: "Montage persuasif pour vos pages de vente et funnels.", icon: MonitorPlay },
    { title: "Motion Design", desc: "Animations graphiques 2D/3D pour élever la qualité perçue.", icon: PenTool },
    { title: "Direction Artistique", desc: "Création d'une identité visuelle unique pour votre chaîne.", icon: Film },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-luxury-black mb-16">Expertise Sur Mesure</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group p-8 rounded-2xl border border-gray-100 bg-white hover:border-luxury-black/20 hover:shadow-xl transition-all duration-300 cursor-default"
            >
              <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center mb-6 text-gray-800 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                <service.icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-luxury-black mb-3 group-hover:translate-x-1 transition-transform duration-300">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;