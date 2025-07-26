import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logoUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753367716249_0.png';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#sobre', label: 'Sobre Nós' },
    { href: '#servicos', label: 'Nossas Soluções' },
    { href: '#contato', label: 'Contato' },
  ];

  const linkVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: i => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1 + 0.3,
        type: 'spring',
        stiffness: 120,
      },
    }),
  };

  const menuVariants = {
    closed: { opacity: 0, x: '100%' },
    open: {
      opacity: 1,
      x: '0%',
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const mobileLinkVariants = {
    closed: { opacity: 0, x: 50 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a
          href="#inicio"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img src={logoUrl} alt="NTC Brasil Logo" className="h-12 w-auto" />
        </motion.a>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="text-brand-dark hover:text-brand-blue transition-colors duration-300 font-medium"
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              custom={i}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-brand-dark"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-brand-dark/90 backdrop-blur-sm z-50 md:hidden"
          variants={menuVariants}
          initial="closed"
          animate="open"
          exit="closed"
        >
          <div className="flex justify-end p-6">
            <button onClick={() => setIsMenuOpen(false)} className="text-white">
              <X size={32} />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map(link => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-white text-3xl font-semibold"
                onClick={() => setIsMenuOpen(false)}
                variants={mobileLinkVariants}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
