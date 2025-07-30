'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaQuoteLeft, FaChartLine, FaShoppingCart, FaBoxOpen } from 'react-icons/fa';

export const ResultsShowcase = () => {
  const cases = [
    {
      id: 1,
      logo: "/logos/brazz-logo.png",
      title: "Brazz Brazz Papelaria",
      period: "2025-2024",
      role: "Analista de E-commerce",
      metrics: [
        { icon: <FaShoppingCart />, value: "+40%", label: "Conversões" },
        { icon: <FaChartLine />, value: "-25%", label: "CAC" }
      ],
      quote: "Melhoramos o SEO do nosso site obtendo redução de 25% no CAC e passamos a atender o território nacional",
      author: "Misael Muniz, Diretor Logístico",
      avatar: "/images/misael.png",
      tags: ["Tray", "Google Analytics", "SEO"]

    },
    {
      id: 2,
      logo: "/logos/atacado-logo.png",
      title: "Atacado do Lojista",
      period: "2024-2023",
      role: "Supervisão de E-commerce",
      metrics: [
        { icon: <FaBoxOpen />, value: "30k", label: "SKUs Organizados" },
        { icon: <FaChartLine />, value: "+10%", label: "Ticket Médio" }
      ],
      quote: "Reestruturamos nossa plataforma com integração ERP impecável, resultando em crescimento de 30% na receita.",
      author: "Marcos Eli, CEO",
      avatar: "/images/marcos.png",
      featured: true,
      tags: ["VTEX IO", "Google ADS", "Marketplace", "BI"]

    },
    {
      id: 3,
      logo: "/logos/maranguape-logo.png",
      title: "Comercial Maranguape",
      period: "2023-2022",
      role: "Desenvolvimento & Suporte",
      metrics: [
        { icon: <FaShoppingCart />, value: "+35%", label: "Recompra" },
        { icon: <FaChartLine />, value: "+40%", label: "ROI" }
      ],
      quote: "Reorganização do catálogo elevaram nosso tráfego em 50% com melhorias contínuas na plataforma VTEX.",
      author: "Wellington Martins, Gerente de E-commerce",
      avatar: "/images/wellington.png",
      featured: true,
      tags: ["VTEX", "Payments", "Winthor"]
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white to-blue-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Resultados que <span className="text-blue-600">Falam por Si</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Projetos reais + Vozes de quem trabalhou comigo
          </p>
        </motion.div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cases.map((caseStudy) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              className={`bg-white rounded-lg md:rounded-xl shadow-xs hover:shadow-md border border-gray-100 overflow-hidden transition-all ${caseStudy.featured ? 'ring-2 ring-blue-500' : ''
                }`}
            >
              {/* Cabeçalho com Logo */}
              <div className="p-4 sm:p-6 flex items-center gap-3 sm:gap-4 border-b border-gray-100">
                <div className="relative h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0">
                  <Image
                    src={caseStudy.logo}
                    alt={`Logo ${caseStudy.title}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 40px, 48px"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 truncate">{caseStudy.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 truncate">
                    {caseStudy.role} · {caseStudy.period}
                  </p>
                </div>
              </div>

              {/* Métricas */}
              <div className="p-4 sm:p-6 grid grid-cols-2 gap-2 sm:gap-3">
                {caseStudy.metrics.map((metric, i) => (
                  <div key={i} className="bg-blue-50 rounded-md sm:rounded-lg p-2 sm:p-3 text-center">
                    <div className="text-blue-600 flex justify-center mb-1 text-sm sm:text-base">
                      {metric.icon}
                    </div>
                    <p className="font-bold text-gray-900 text-sm sm:text-base">{metric.value}</p>
                    <p className="text-gray-600 text-xs sm:text-sm">{metric.label}</p>
                  </div>
                ))}
              </div>

              {/* Depoimento */}
              <div className="bg-gray-50 p-4 sm:p-6">
                <div className="flex items-start gap-2 mb-3">
                  <FaQuoteLeft className="text-gray-300 mt-1 flex-shrink-0 text-sm sm:text-base" />
                  <blockquote className="text-gray-700 italic text-sm sm:text-base">
                    &quot;{caseStudy.quote}&quot;
                  </blockquote>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="relative h-8 w-8 sm:h-10 sm:w-10 rounded-full overflow-hidden border border-gray-200 bg-gray-100">
                    {caseStudy.avatar ? (
                      <Image
                        src={caseStudy.avatar}
                        alt={caseStudy.author}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 32px, 40px"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-400">
                        <FaQuoteLeft className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-gray-800 truncate">
                    {caseStudy.author}
                  </p>
                </div>
              </div>

              {/* Tags (opcional) */}
              {caseStudy.tags && (
                <div className="p-3 sm:p-4 border-t border-gray-100 bg-white">
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};