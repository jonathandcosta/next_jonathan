import Image from 'next/image';

export default function ProfissionalValidation() {
  const testimonials = [
    {
      company: "Brazz Brazz Papelaria",
      role: "Analista de E-commerce",
      period: "2024-2025",
      logo: "/logos/brazz-logo.png", // Substitua pelo caminho real
      quote: "Migramos toda nossa operação digital com aumento de 40% nas conversões e redução de 25% no CAC através das estratégias implementadas.",
      person: "Misael Muniz, Diretor Logístico"
    },
    {
      company: "Atacado do Lojista",
      role: "Supervisão de E-commerce",
      period: "2023-2024",
      logo: "/logos/atacado-logo.png", // Substitua pelo caminho real
      quote: "Restruturamos nossa plataforma de vendas online, resultando em um crescimento de 30% na receita mensal. A integração com nosso ERP foi impecável.",
      person: "Marcos Eli, CEO"
    },
    {
      company: "Comercial Maranguape - AL",
      role: "Aux. de desenvolvimento & Suporte",
      period: "2022-2023",
      logo: "/logos/maranguape-logo.png", // Substitua pelo caminho real
      quote: "O trabalho de reorganização do catálogo de produtos, a implatanção das técnicas de SEO e manutenção da plataforma VTEX nos trouxe aumento de 50% no tráfego orgânico.",
      person: "Wellington Martins, Gerente de E-commerce"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Depoimentos</h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Empresas que confiaram em meu trabalho e colheram resultados
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-100 flex flex-col"
            >
              <div className="mb-4 flex items-center">
                <div className="relative h-12 w-12 mr-4">
                  <Image
                    src={testimonial.logo}
                    alt={`Logo ${testimonial.company}`}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{testimonial.company}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role} · {testimonial.period}</p>
                </div>
              </div>

              <blockquote className="flex-grow italic text-gray-700 mb-4">
                &quot;{testimonial.quote}&quot;
              </blockquote>

              <p className="text-sm text-right font-medium text-gray-600">
                — {testimonial.person}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}