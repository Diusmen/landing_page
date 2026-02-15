import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const videoRef3 = useRef<HTMLVideoElement>(null);
  const videoRef4 = useRef<HTMLVideoElement>(null);
  const videoRef5 = useRef<HTMLVideoElement>(null);
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto flex flex-col gap-12">

      {/* Impact Text */}
      <div className="text-center max-w-5xl mx-auto z-10 mb-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-luxury-black leading-tight"
        >
          Transformez votre expertise en vidéos qui{" "}
          <span className="relative inline-block px-2">
            <span className="relative z-10">attirent</span>
            <span className="absolute inset-x-0 bottom-2 h-4 bg-luxury-accent/40 -skew-x-6"></span>
          </span>,{" "}
          <span className="relative inline-block px-2">
            <span className="relative z-10">convertissent</span>
            <span className="absolute inset-x-0 bottom-2 h-4 bg-luxury-accent/40 -skew-x-6"></span>
          </span>{" "}
          et{" "}
          <span className="text-luxury-black bg-luxury-accent px-4 py-1 transform -skew-x-6 inline-block">
            vendent.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto font-medium"
        >
          Je produis les systèmes vidéo des coachs & entrepreneurs ambitieux : formations, YouTube, Ads & Shorts.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <a href="#quiz" className="bg-luxury-black text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-luxury-accent hover:text-black transition-all transform hover:-translate-y-1 shadow-lg">
            Faire le diagnostic gratuit
          </a>
          <a href="#results" className="border-2 border-luxury-black text-luxury-black px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-luxury-black hover:text-white transition-all transform hover:-translate-y-1">
            Voir mes réalisations
          </a>
        </motion.div>
      </div>

      {/* Custom Layout: Stacked Left (2) | Gradient Middle | Mosaic Right (3) = 5 Total */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 h-auto md:h-[650px] w-full">

        {/* Left Column (Stacked) - Spans 5 cols - 2 Items */}
        <div className="md:col-span-5 flex flex-col gap-4 md:gap-6 h-full min-h-[500px] md:min-h-0">
          {/* Item 1: Top Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative flex-1 overflow-hidden group shadow-sm"
            onMouseEnter={() => videoRef1.current?.play()}
            onMouseLeave={() => videoRef1.current?.pause()}
          >
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10" />
            <video
              ref={videoRef1}
              src="/Vsl.mp4"
              muted
              loop
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-4 left-4 z-20">
              <span className="bg-luxury-accent text-black text-xs font-bold px-3 py-1 uppercase tracking-wider">VSL</span>
            </div>
          </motion.div>

          {/* Item 2: Bottom Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative flex-1 overflow-hidden group shadow-sm"
            onMouseEnter={() => videoRef2.current?.play()}
            onMouseLeave={() => videoRef2.current?.pause()}
          >
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10" />
            <video
              ref={videoRef2}
              src="/extrait.mp4"
              muted
              loop
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-4 left-4 z-20">
              <span className="bg-white text-black text-xs font-bold px-3 py-1 uppercase tracking-wider">Extrait</span>
            </div>
          </motion.div>
        </div>

        {/* Center Column (Black/Professional) - Spans 2 cols */}
        <motion.div
          initial={{ opacity: 0, scaleY: 0.8 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="hidden md:flex md:col-span-2 h-full overflow-hidden relative bg-luxury-black shadow-2xl items-center justify-center flex-col gap-4"
        >
          <div className="w-[1px] h-32 bg-luxury-accent/50"></div>
          <span className="text-luxury-accent font-sans font-bold text-sm rotate-90 tracking-[0.3em] uppercase whitespace-nowrap">
            Excellence
          </span>
          <div className="w-[1px] h-32 bg-luxury-accent/50"></div>
        </motion.div>

        {/* Right Column (Mosaic) - Spans 5 cols - 3 Items */}
        <div className="md:col-span-5 flex flex-col gap-4 md:gap-6 h-full min-h-[600px] md:min-h-0">

          {/* Item 3: Top Right (Large) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="relative flex-[3] overflow-hidden group shadow-lg"
            onMouseEnter={() => videoRef3.current?.play()}
            onMouseLeave={() => videoRef3.current?.pause()}
          >
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10" />
            <video
              ref={videoRef3}
              src="/Vsl_2.mp4"
              muted
              loop
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-4 left-4 z-20">
              <span className="bg-luxury-accent text-black text-xs font-bold px-3 py-1 uppercase tracking-wider">Formation</span>
            </div>
          </motion.div>

          {/* Bottom Row Container */}
          <div className="flex-[2] flex gap-4 md:gap-6">
            {/* Item 4: Bottom Right A */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="relative flex-1 overflow-hidden group shadow-sm"
              onMouseEnter={() => videoRef4.current?.play()}
              onMouseLeave={() => videoRef4.current?.pause()}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10" />
              <video
                ref={videoRef4}
                src="/Se_pardonner.mp4"
                muted
                loop
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <span className="bg-white text-black text-xs font-bold px-3 py-1 uppercase tracking-wider">Short</span>
              </div>
            </motion.div>

            {/* Item 5: Bottom Right B */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="relative flex-1 overflow-hidden group shadow-sm"
              onMouseEnter={() => videoRef5.current?.play()}
              onMouseLeave={() => videoRef5.current?.pause()}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10" />
              <video
                ref={videoRef5}
                src="/Ads.mp4"
                muted
                loop
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <span className="bg-luxury-accent text-black text-xs font-bold px-3 py-1 uppercase tracking-wider">Ads</span>
              </div>
            </motion.div>
          </div>
        </div>

      </div>

      {/* Background ambiance */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white via-transparent to-transparent -z-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;