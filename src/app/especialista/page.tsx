// app/especialista-ecommerce/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import { FiCheckCircle, FiBarChart2, FiCodesandbox, FiCpu } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Jonathan Costa | Especialista VTEX & Tray | Integrações de Sistemas',
  description: 'Soluções completas para e-commerce: plataformas VTEX/Tray, integrações ERP-CRM e otimização de operações.',
};

export default function SpecialistPage() {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-purple-900 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Transformo <span className="text-yellow-300">e-commerces</span> em máquinas de vendas
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Especialista em <strong>VTEX & Tray</strong> | Arquitetura de <strong>integrações</strong> (ERP, CRM, Marketing) | <strong>+R$500k</strong> em faturamento gerado
          </p>
        </div>
      </section>

      {/* Seção "O Que Resolvo" */}
      <section className="py-16 px-4 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="border-b-4 border-blue-600 pb-2">Problemas Que Resolvo</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FiBarChart2 size={32} className="text-blue-600" />,
              title: "Plataformas Desorganizadas",
              text: "Migro e estruturo lojas VTEX/Tray com arquitetura escalável, catálogo otimizado e checkout high-conversion."
            },
            {
              icon: <FiCodesandbox size={32} className="text-blue-600" />,
              title: "Sistemas Desconectados",
              text: "Integro ERPs (Winthor, Totvs), CRMs (RD Station), ferramentas de marketing para operações automáticas e processos internos."
            },
            {
              icon: <FiCpu size={32} className="text-blue-600" />,
              title: "Baixa Performance",
              text: "Implemento SEO técnico, análise de dados e CRO para aumentar tráfego e conversão em +300%."
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Seção Experiência com Dados */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="border-b-4 border-blue-600 pb-2">Resultados Entregues</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6">Brazz Brazz Papelaria</h3>
            <ul className="space-y-4">
              {[
                "Liderei a reestruturação completa do e-commerce: migração para VTEX IO, redesign de UI/UX e integração com ERP (Winthor)",
                "Implementei automações de marketing (carrinho abandonado, e-mail marketing) reduzindo esforço manual em 20h/mês",
                "Desenvolvi dashboards em Power BI para análise de CAC, LTV e taxa de conversão",
                "Resultado: Faturamento mensal cresceu de R$1,5k para R$6k+ em 5 meses"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <FiCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-semibold mt-12 mb-6">Comercial Maranguape</h3>
            <ul className="space-y-4">
              {[
                "Executei a integração entre plataforma Tray e ERP Totvs, sincronizando estoque (99,8% de acurácia) e pedidos",
                "Configurei fluxos de nutrição no RD Station, aumentando a conversão de leads em 35%",
                "Otimizei o tempo de carregamento do site em 40% através de ajustes técnicos"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <FiCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gray-100 py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para escalar seu e-commerce?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Vamos conversar sobre como posso ajudar sua empresa a vender mais com tecnologia.
          </p>
          <a
            href="https://wa.me/558499043539?text=Ol%C3%A1%20Jonathan,%20gostaria%20de%20falar%20sobre%20o%20meu%20projeto."
            target="_blank"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105"
          >
            Agendar Chamada
          </a>
        </div>
      </section>
      <Link
        href="/"
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all"
        aria-label="Voltar para home"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      </Link>
    </main>
  );
}