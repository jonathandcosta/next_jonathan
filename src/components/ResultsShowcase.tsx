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
      period: "2024-2025",
      role: "Analista de E-commerce",
      metrics: [
        { icon: <FaShoppingCart />, value: "+40%", label: "Conversões" },
        { icon: <FaChartLine />, value: "-25%", label: "CAC" }
      ],
      quote: "Melhoramos o SEO do nosso site obtendo redução de 25% no CAC e passamos a atendemos o território nacional",
      author: "Misael Muniz, Diretor Logístico",
      avatar: "/images/misael.png"
    },
    {
      id: 2,
      logo: "/logos/atacado-logo.png",
      title: "Atacado do Lojista",
      period: "2023-2024",
      role: "Supervisão de E-commerce",
      metrics: [
        { icon: <FaBoxOpen />, value: "30k", label: "SKUs Organizado" },
        { icon: <FaChartLine />, value: "+10%", label: "Ticket Médio" }
      ],
      quote: "Reestruturamos nossa plataforma com integração ERP impecável, resultando em crescimento de 30% na receita.",
      author: "Marcos Eli, CEO",
      avatar: "/images/marcos.png",
      // Opcional: destaque para caso premium
      featured: true
    },
    {
      id: 3,
      logo: "/logos/maranguape-logo.png",
      title: "Comercial Maranguape",
      period: "2022-2023",
      role: "Desenvolvimento & Suporte",
      metrics: [
        { icon: <FaShoppingCart />, value: "+35%", label: "Recompra" },
        { icon: <FaChartLine />, value: "+40%", label: "ROI" }
      ],
      quote: "Reorganização do catálogo e SEO técnico elevaram nosso tráfego em 50% com melhorias contínuas na plataforma VTEX.",
      author: "Wellington Martins, Gerente de E-commerce",
      avatar: "/images/wellington.png",
      // Opcional: adicione tags de tecnologias
      tags: ["VTEX", "Google Analytics", "SEO"]
    }
    // ... outros casos (Atacado do Lojista e Comercial Maranguape)
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Resultados que <span className="text-blue-600">Falam por Si</span></h2>
          <p className="text-lg text-gray-600">Projetos reais + Vozes de quem trabalhou comigo</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseStudy) => (
            <motion.div
              key={caseStudy.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all"
            >
              {/* Cabeçalho com Logo */}
              <div className="p-6 flex items-center gap-4 border-b">
                <div className="relative h-12 w-12">
                  <Image
                    src={caseStudy.logo}
                    alt={caseStudy.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-bold">{caseStudy.title}</h3>
                  <p className="text-sm text-gray-500">{caseStudy.role} · {caseStudy.period}</p>
                </div>
              </div>

              {/* Métricas em Destaque */}
              <div className="p-6 grid grid-cols-2 gap-3">
                {caseStudy.metrics.map((result, i) => (
                  <div key={i} className="bg-blue-50 rounded-lg p-3 text-center">
                    <div className="text-blue-600 flex justify-center mb-1">{result.icon}</div>
                    <p className="font-bold text-gray-900">{result.label}</p>
                    <p className="text-xs text-gray-600">{result.value}</p>
                  </div>
                ))}
              </div>

              {/* Depoimento com Avatar */}
              <div className="bg-gray-50 p-6">
                <FaQuoteLeft className="text-gray-300 mb-3" />
                <blockquote className="text-gray-700 italic mb-4">
                  &quot;{caseStudy.quote}&quot;
                </blockquote>
                <div className="flex items-center gap-3">
                  {/* <div className="relative h-10 w-10 rounded-full overflow-hidden">
                    <Image
                      src={caseStudy.avatar}
                      alt={caseStudy.author}
                      fill
                      className="object-cover"
                    />
                  </div> */}
                  <p className="text-sm font-medium ">{caseStudy.author}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};