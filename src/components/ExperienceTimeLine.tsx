// components/ExperienceTimeline.tsx
'use client';
import { motion } from 'framer-motion';

export default function ExperienceTimeline() {
  const experiences = [
    {
      year: "2024 - Atual",
      role: "Supervisão e Desenvolvedor Frontend",
      company: "Brazz Brazz Papelaria",
      highlights: [
        "Migração para plataforma Tray",
        "Loja ativa com +10.000 produtos",
        "Aumento de 80% em acessos orgânicos via SEO",
        "Aumento de 200% no faturamento mensal",
      ]
    },
    {
      year: "2022 - 2024",
      role: "Supervisão e Auxiliar de Desenvolvimento Frontend",
      company: "Atacado do Lojista",
      highlights: [
        "Migração para plataforma VTEX IO",
        "Automatização do processos de vendas",
        "Loja ativa com +30.000 produtos",
        "Aumento de 30% no faturamento mensal",
      ]
    },
    {
      year: "2020 - 2022",
      role: "Desenvolvedor Frontend",
      company: "Freelancer",
      highlights: [
        "Desenvolvimento de sites e lojas virtuais",
        "Especialização em React e Next.js",
        "Criação de soluções personalizadas para clientes",
        "Aprimoramento de habilidades em SEO e performance web",
      ]
    },
    // Adicione outras experiências
  ];

  return (
    <div className="relative max-w-2xl mx-auto">
      {/* Linha do tempo */}
      <div className="absolute left-5 md:left-1/2 h-full w-0.5 bg-blue-200 transform -translate-x-1/2" />

      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={`relative mb-12 pl-10 md:pl-0 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}
        >
          {/* Ponto da timeline */}
          <div className={`absolute top-4 w-3 h-3 rounded-full bg-blue-600 ${index % 2 === 0 ? 'left-2 md:left-auto md:right-[-5px]' : 'left-2 md:left-[-5px]'}`} />

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <span className="text-blue-600 font-medium">{exp.year}</span>
            <h3 className="text-xl font-bold mt-1">{exp.role}</h3>
            <p className="text-gray-500 mb-3">{exp.company}</p>
            <ul className="space-y-2">
              {exp.highlights.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
}