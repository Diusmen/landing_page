import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CounterProps {
  target: number;
  suffix: string;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ target, suffix, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16); // 60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count}{suffix}</span>;
};

const Results: React.FC = () => {
  const stats = [
    { id: 1, value: 3500000, label: "vues générées", suffix: "+" },
    { id: 2, value: 480, label: "vidéos montées", suffix: "+" },
    { id: 3, value: 120, label: "campagnes publicitaires éditées", suffix: "+" }
  ];

  return (
    <section className="py-24 bg-luxury-offwhite relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-luxury-black mb-4">Des résultats concrets.</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Chiffres qui parlent d'eux-mêmes. Voici les performances obtenues pour mes clients.
          </p>
        </div>

        {/* Grid for Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500"
            >
              <div className="text-4xl md:text-5xl font-bold text-luxury-black mb-2">
                <Counter target={item.value} suffix={item.suffix} />
              </div>
              <p className="text-gray-600">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;