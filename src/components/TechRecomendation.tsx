'use client';

import { FaQuoteLeft } from 'react-icons/fa';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';


export default function TechRecommendations() {
  const recommendations = [
    {
      quote: "O Jonathan é super confiável e trabalhador mais difícil. Realmente sei o que ele está fazendo. Recomendo fortemente. ",
      author: "Allan J. Martins, Safety & Health Enverionment",
      role: "Parceiro de Equipe",
      avatar: "/images/allan.png"
    },
    {
      quote: "Jonathan é um profissional extremamente dedicado que persegue seus objetivos com muita dedicação. Qualquer empresa/projeto terá sorte de tê-lo em sua equipe.",
      author: "Álvaro Martins Jr, Compliance",
      role: "Parceiro de Equipe",
      avatar: "/images/alvaro.png"
    },
    {
      quote: "Excelente profissional e um dos líderes mais qualificados com quem já trabalhei. Ético, comprometido e motivador, e principalmente focado em resultados de alta performance.",
      author: "Leandro Domingos, Executivo de Cash",
      role: "Colega de Equipe",
      avatar: "/images/leandro.png"
    },
    {
      quote: "Um excelente líder e chefe. Sempre buscando maneiras de melhorar o desempenho da equipe e garantir que tudo seja feito com eficiência. Super honesto e disposto a ajudar a todos.",
      author: "Monaliza Dantas, Business Manager",
      role: "Equipe técnica",
      avatar: "/images/monaliza.png"
    },
    {
      quote: "Um profissional muito dedicado e trabalhador em suas ações e estudos em sua área. Com dedicação, ele aprende e aplica novas habilidades de forma eficiente e consistente.",
      author: "Moroni Macêdo, Business Development",
      role: "Integração Técnica",
      avatar: "/images/moroni.png"
    },
    {
      quote: "Jonathan elevou o nível técnico da nossa equipe com sua experiência em marketing. Ele é um verdadeiro mentor, sempre disposto a compartilhar conhecimento.",
      author: "Cleobulo Cortez, Design Gráfico",
      role: "Equipe de CRO",
      avatar: "/images/cleobulo.png"
    },
    {
      quote: "Jonathan é um profissional excepcional, sempre buscando a excelência no front. Sua dedicação e paixão pelo trabalho são inspiradoras. Um exemplo de comprometimento e ética.",
      author: "Alex Pereira, Backend Developer",
      role: "Time de Desenvolvimento",
      avatar: "/images/alex.png"
    },
    {
      quote: "Jonathan é um profissional super amigavel e sempre disposto a ajudar. Sua experiência em marketing é impressionante, sempre trouxe novas ideias para o setor do e-commerce.",
      author: "Leonardo Medeiros, Analista de Dados",
      role: "Time de Qualidade",
      avatar: "/images/leonardo.png"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);

  // Configura o carrossel automático
  useEffect(() => {
    const startCarousel = () => {
      intervalRef.current = setInterval(() => {
        setActiveIndex(prev => (prev + 1) % recommendations.length);
      }, 5000); // Muda a cada 5 segundos
    };

    startCarousel();
    return () => clearInterval(intervalRef.current);
  }, [recommendations.length]);

  // Pausa no hover
  const handleMouseEnter = () => {
    clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % recommendations.length);
    }, 5000);
  };

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Recomendações Técnicas</h2>

        <div
          ref={carouselRef}
          className="relative md:h-56 w-full max-w-4xl mx-auto bg-blue-50 rounded-lg shadow-lg overflow-hidden flex items-center justify-center h-70"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {recommendations.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 flex flex-col items-center justify-center p-6 text-center ${index === activeIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
            >
              <FaQuoteLeft className="text-gray-300 text-4xl mb-4" />
              <blockquote className="text-xl italic text-gray-700 mb-6 max-w-2xl">
                &quot;{item.quote}&quot;
              </blockquote>
              <div className="border-t pt-4 w-full max-w-sm ">
                <div className="flex items-center justify-center gap-3">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-blue-100 flex-shrink-0">
                    <Image
                      src={item.avatar || '/images/default-avatar.png'}
                      alt={`Foto de ${item.author}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 1
                    50px, 60px"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-sm md:text-base truncate">{item.author}</p>
                    <p className="text-gray-500 text-xs md:text-sm">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicadores */}
        <div className="flex justify-center mt-8 gap-2">
          {recommendations.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 w-2 rounded-full transition-all ${index === activeIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'
                }`}
              aria-label={`Ir para recomendação ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}