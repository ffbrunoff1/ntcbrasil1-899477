import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const logoUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753367716249_0.png';
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.footer
      className="bg-brand-dark text-white"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <img src={logoUrl} alt="NTC Brasil Logo" className="h-14 w-auto" />
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-brand-blue">
              Navegação
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#inicio"
                  className="hover:text-brand-blue transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="hover:text-brand-blue transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="hover:text-brand-blue transition-colors"
                >
                  Soluções
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="hover:text-brand-blue transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-brand-blue">Contato</h4>
            <ul className="space-y-2 text-slate-300">
              <li>+55 44 99104-0774</li>
              <li>ffbrunoff@yahoo.com.br</li>
              <li>Padre Lebret 801, G05 Bloco 03</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700 text-center text-slate-400 text-sm">
          <p>&copy; {currentYear} NTC Brasil. Todos os direitos reservados.</p>
          <p className="mt-2">
            Construindo o futuro com qualidade e confiança.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
