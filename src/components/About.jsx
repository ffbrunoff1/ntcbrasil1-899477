import React from 'react';
import { motion } from 'framer-motion';
import { Building, ShieldCheck, Users } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const features = [
    {
      icon: <Building className="h-10 w-10 text-brand-blue" />,
      title: 'Inovação em Construção',
      description:
        'Utilizamos as mais recentes tecnologias e métodos construtivos para garantir projetos eficientes e de alta qualidade.',
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-brand-blue" />,
      title: 'Confiança e Segurança',
      description:
        'Nossa prioridade é a segurança em todas as etapas da obra, assegurando tranquilidade para nossos clientes e equipe.',
    },
    {
      icon: <Users className="h-10 w-10 text-brand-blue" />,
      title: 'Equipe Especializada',
      description:
        'Contamos com um time de profissionais experientes e dedicados, prontos para superar desafios e entregar resultados excepcionais.',
    },
  ];

  const imageUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/construction-team.jpg';

  return (
    <div className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Sobre a NTC Brasil
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              A NTC Brasil nasceu com a missão de revolucionar o setor da
              construção, combinando técnica, paixão e um compromisso inabalável
              com a satisfação do cliente. Cada projeto é uma oportunidade de
              construir não apenas estruturas, mas também relacionamentos
              duradouros baseados na confiança e na transparência.
            </p>
            <p className="text-lg text-slate-600 mb-8">
              Nossa trajetória é marcada pela entrega de obras que se destacam
              pela qualidade, cumprimento de prazos e atenção aos mínimos
              detalhes.
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  custom={index}
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0 bg-brand-blue/10 p-3 rounded-full">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-dark">
                      {feature.title}
                    </h3>
                    <p className="text-slate-500 mt-1">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="relative h-full min-h-[500px]"
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-brand-blue rounded-xl transform translate-x-4 translate-y-4"></div>
            <img
              src={imageUrl}
              alt="Equipe da NTC Brasil em uma obra"
              className="relative w-full h-full object-cover rounded-xl shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
