import React from 'react';
import { motion } from 'framer-motion';
import { HardHat, ClipboardList, DraftingCompass } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <DraftingCompass className="h-12 w-12 text-brand-blue" />,
      title: 'Planejamento e Consultoria',
      description:
        'Desenvolvemos projetos detalhados e oferecemos consultoria especializada para otimizar recursos e garantir a viabilidade da sua obra.',
    },
    {
      icon: <HardHat className="h-12 w-12 text-brand-blue" />,
      title: 'Execução de Obras',
      description:
        'Gerenciamos e executamos todos os tipos de construção, desde residenciais a comerciais, com foco na qualidade e no cumprimento de prazos.',
    },
    {
      icon: <ClipboardList className="h-12 w-12 text-brand-blue" />,
      title: 'Gestão de Projetos',
      description:
        'Coordenamos todas as fases do seu projeto, da concepção à entrega, assegurando comunicação clara e controle total sobre o andamento.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <div className="py-20 md:py-28 bg-brand-light">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
            Nossas Soluções em Construção
          </h2>
          <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
            Oferecemos um portfólio completo de serviços para atender todas as
            necessidades do seu projeto com a máxima eficiência.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
              variants={cardVariants}
            >
              <div className="flex-shrink-0 mb-6">{service.icon}</div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-brand-dark mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="mt-auto pt-6">
                <a
                  href="#contato"
                  className="font-semibold text-brand-blue hover:text-blue-500 transition-colors duration-300"
                >
                  Saiba Mais &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
