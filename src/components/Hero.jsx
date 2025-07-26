import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  const imageUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/construction-hero.jpg';

  return (
    <div className="relative min-h-screen flex items-center bg-white pt-20 md:pt-0">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/10 to-transparent"></div>
      <div className="container mx-auto px-6 z-10">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center md:text-left">
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-brand-dark leading-tight mb-4"
              variants={itemVariants}
            >
              Construindo <span className="text-brand-blue">sonhos</span>,
              edificando o <span className="text-brand-blue">futuro</span>.
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl mx-auto md:mx-0"
              variants={itemVariants}
            >
              Qualidade e confiança em cada projeto. Na NTC Brasil,
              transformamos ideias em realidade com excelência e compromisso.
            </motion.p>
            <motion.a
              href="#contato"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-blue text-white font-bold rounded-lg shadow-lg hover:bg-blue-500 transition-all duration-300 transform hover:scale-105"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: '0px 10px 20px rgba(98, 181, 229, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              Fale com um especialista
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
          </div>
          <motion.div className="relative" variants={itemVariants}>
            <div className="absolute -top-4 -left-4 w-full h-full bg-brand-blue rounded-lg transform -rotate-3"></div>
            <img
              src={imageUrl}
              alt="Projeto de construção moderno"
              className="relative w-full h-auto object-cover rounded-lg shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
