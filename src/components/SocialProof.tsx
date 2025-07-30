import Link from 'next/link';
import { FaReact, FaChartLine } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript } from 'react-icons/si';

export default function SocialProof() {
  const metrics = [
    {
      icon: <FaReact className="text-blue-600" size={24} />,
      value: "+40%",
      label: "Performance em aplicações React"
    },
    {
      icon: <SiNextdotjs className="text-black" size={24} />,
      value: "90+",
      label: "Pontos no Lighthouse"
    },
    {
      icon: <FaChartLine className="text-green-600" size={24} />,
      value: "30%+",
      label: "Produção com IA e componentes reutilizáveis"
    },
    {
      icon: <SiTypescript className="text-blue-400" size={24} />,
      value: "100%",
      label: "Projetos com TypeScript"
    }
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            <span className="block">Front-End com </span>
            <span className="block text-blue-600">Mentalidade de E-Commerce</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">

            Combinação única de
            <span className="font-semibold"> habilidades técnicas </span> e
            <span className="font-semibold"> visão de negócios </span>
            - traduzo requisitos em sistemas que performam.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl text-center border border-gray-200 hover:shadow-md transition-all"
            >
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-white shadow-sm mb-4">
                {item.icon}
              </div>
              <p className="text-3xl font-bold text-gray-900">{item.value}</p>
              <p className="mt-2 text-base text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-xl p-6 sm:p-8 lg:p-10 border border-blue-100 mx-4 sm:mx-0">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="lg:w-2/3">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Por que essa combinação é valiosa?
              </h3>
              <p className="mt-3 sm:mt-4 text-base sm:text-[1.025rem] text-gray-600">
                Entendo tanto de componentes reutilizáveis quanto de fluxos de conversão.
                Seu projeto terá não apenas código limpo, mas uma arquitetura pensada
                para <span className="font-semibold text-blue-700">gerar negócios</span>.
              </p>
            </div>
            <div className="lg:w-1/3 flex-shrink-0">
              <Link
                href="#contact"
                className="w-full sm:w-auto flex items-center justify-center px-6 py-3 sm:px-8 sm:py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Agendar uma conversa
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}