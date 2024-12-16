import React from 'react';
import { motion } from 'framer-motion';
import DecorativeTriangles from './DecorativeTriangles';
import FadeIn from './animations/FadeIn';
import SlideIn from './animations/SlideIn';

type HeroProps = {
  isBusinessClient: boolean;
};

export default function Hero({ isBusinessClient }: HeroProps) {
  const scrollToSection = () => {
    const sectionId = isBusinessClient ? 'devis' : 'design';
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Triangles décoratifs en arrière-plan */}
      <div className="absolute inset-0 z-0">
        <DecorativeTriangles position="bottom" className="opacity-50" />
      </div>
      
      {/* Image et overlay en premier plan */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-10"
      >
        <img
          src="https://images.unsplash.com/photo-1564859228273-274232fdb516?auto=format&fit=crop&q=80"
          alt="Atelier d'impression textile professionnel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-primary/40" />
      </motion.div>
      
      {/* Contenu au-dessus de tout */}
      <div className="relative h-full flex items-center justify-center text-center text-white px-4 z-20">
        <div>
          <SlideIn direction="up" duration={0.7}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {isBusinessClient
                ? 'Solutions d\'impression textile professionnelles'
                : 'Donnez vie à vos créations textiles'}
            </h1>
          </SlideIn>
          
          <FadeIn delay={0.3} duration={0.7}>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              {isBusinessClient
                ? 'Des solutions sur mesure pour vos projets d\'entreprise'
                : 'Créez des vêtements personnalisés uniques et de qualité'}
            </p>
          </FadeIn>

          <FadeIn delay={0.6} duration={0.7}>
            <button
              onClick={scrollToSection}
              className="bg-secondary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-secondary/90 transition-colors"
            >
              {isBusinessClient ? 'Demander un devis' : 'Commander maintenant'}
            </button>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}