// app/especialista-ecommerce/page.tsx
import ProfessionalValidation from '@/components/ProfissionalValidation';
import { Metadata } from 'next';
import Link from 'next/link';
import { FiBarChart2, FiCodesandbox, FiCpu, FiSmartphone, FiActivity, FiHeadphones } from 'react-icons/fi';

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
            Especialista em <strong>VTEX & Tray</strong> | Arquitetura de <strong>integrações</strong> (ERP, Logística, CRM, Marketing, ADS, Marketplaces, Analytics, Business Inteligence) | <strong>+R$500k</strong> em faturamento gerado.
          </p>
          <p className="text-sm max-w-5xl mx-auto mt-8 text-white/60">
            Com uma abordagem única que une <strong >expertise técnica em Desenvolvimento Frontend</strong> e uma <strong >visão estratégica aprofundada de e-commerce</strong>, construo e otimizo soluções digitais que funcionam e <strong >geram resultados exponenciais</strong>. Desde otimizações de performance a integrações complexas, meu objetivo é claro: <strong >levo sua operação online para o próximo nível de lucratividade e eficiência</strong>.
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
              text: "Migro e estruturo lojas on-line com arquitetura escalável, catálogo otimizado e checkout high-conversion."
            },
            {
              icon: <FiCodesandbox size={32} className="text-blue-600" />,
              title: "Sistemas Desconectados",
              text: "Integro ERPs (Winthor-Totvs), CRMs, ferramentas de marketing para operações automáticas e processos internos."
            },
            {
              icon: <FiCpu size={32} className="text-blue-600" />,
              title: "Baixa Performance",
              text: "Implemento SEO técnico, análise de dados e CRO, criação de Hot SItes para aumentar tráfego e conversão."
            },
            {
              icon: <FiSmartphone size={32} className="text-blue-600" />,
              title: "UX/UI Mobile Defasada",
              text: "Otimizo o design e a performance de e-commerces para mobile, garantindo navegação fluida e elevadas taxas de conversão em todos os dispositivos."
            },
            {
              icon: <FiHeadphones size={32} className="text-blue-600" />,
              title: "Pós-Venda Ineficiente",
              text: "Automatizo fluxos de comunicação e suporte pós-compra, escalando a satisfação do cliente através da integração com CRMs e plataformas de atendimento."
            },
            {
              icon: <FiActivity size={32} className="text-blue-600" />,
              title: "Picos de Venda (Sazonalidades)",
              text: "Estruturo plataformas e integrações para suportar grandes volumes de tráfego e pedidos, assegurando estabilidade e alta performance."
            },
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-50">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>

      </section>

      <section>
        <ProfessionalValidation />
      </section>

      {/* Seção Experiência com Dados-resultados entregues */}
      {/* <section className="bg-white py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="border-b-4 border-blue-600 pb-2">Resultados Entregues</span>
          </h2>

          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6">Brazz Brazz Papelaria</h3>
            <ul className="space-y-4 p-6 hover:rounded-4xl hover:shadow-md">
              {[
                "Apresentei o projeto para a equipe, destacando as melhorias e os resultados esperados.",
                "Utilizei a ferramenta Trello e Notion para gerenciar o projeto, garantindo uma comunicação clara e eficiente com a equipe.",
                "Reestruturei com a ferramenta Figma o layout e a navegação do site, garantindo uma experiência do usuário mais fluida e intuitiva.",
                "Desenvolvi novas funcionalidades utilizando HTML5, CSS3, JavaScript e Bootstrap, aplicando boas práticas de SEO, acessibilidade e performance web.",
                "Implementação de SEO técnico, resultando em um aumento de 300% no tráfego orgânico.",
                "Implantei melhorias na VTEX IO, incluindo configuração de transportadoras, retirada em loja, recuperação de carrinhos abandonados, otimização de checkout, diversas validações e aprimoramento do cadastro de produtos.",
                "Automatizei processos internos para melhorar a experiência do cliente e aumentar a eficiência operacional.",
                "Gerenciei e padronizei o cadastro completo de +10.000 produtos, garantindo a qualidade e a consistência das informações.",
                "Apresentei novo projeto viabilizando um novo site, com foco em SEO, acessibilidade e performance web.",
                "Liderança técnica na migração de e-commerce para plataforma Tray, com redesign completo de UI/UX.",
                "Líder responsável por conduzir economia direta de 30% no custo do e-commerce e manutenção do site.",
                "Responsável pela integração com ERP Winthor, garantindo 99% de acuracidade no estoque e pedidos.",
                "Gerenciamento ativo de pedidos e estoque, garantindo a eficiência operacional e a satisfação do cliente.",
                "Criação de fluxos de nutrição no Brevo diretamente com e-mail marketing, aumentando a conversão de leads em 35%.",
                "Implementação de testes A/B para otimização de campanhas, resultando em um aumento de 20% na taxa de cliques.",
                "Implementação do sistema Melhor Envio para melhor gestão de logística, melhorando a eficiência na entrega em 40%.",
                "Configurei e otimizei Google Tag Manager, Google Analytics, Google Meu Negócio e Google Shopping, ampliando a visibilidade online da marca.",
                "Acompanhei campanhas de Google Ads e Meta Ads (Facebook/Instagram), monitorando métricas como ROI, CAC e LTV.",
                "Inicialização e integração com marketplaces: Mercado Livre, Shopee e Amazon, aumentando a visibilidade e as vendas em 10% no primeiro mês.",
                "Acompanhamento  de KPis de desempenho, como CAC, LTV e taxa de conversão, utilizando ferramentas como Google Analytics e Power BI.",
                "Desenvolvimento de dashboards em Power BI para análise de CAC, LTV e taxa de conversão.",
                "Aumento de 50% na taxa de conversão e redução de 30% no CAC.",
                "Resultados: Aumento de 300% no tráfego orgânico, 50% na taxa de conversão e redução de 30% no CAC.",
                "Resultado: Faturamento mensal cresceu 300% em poucos meses.",
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <FiCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-semibold mt-12 mb-6">Atacado do Lojista</h3>
            <ul className="space-y-4 p-6 hover:rounded-4xl hover:shadow-md">
              {[
                "Liderei a modernização do e-commerce, implementando novas funcionalidades e melhorias no frontend utilizando HTML5, CSS3, JavaScript e frameworks como Bootstrap. ",
                "Otimizei o tempo de carregamento do site em 40% através de ajustes técnicos",
                "Realizei aprimoramentos no design, usabilidade e acessibilidade, melhorando a experiência do usuário (UX/UI) e otimizando páginas para SEO e conversão.",
                "Desenvolvi testes A/B para validar elementos de design, copywriting e call-to-action, gerando aumento no engajamento e nas taxas de conversão.",
                "Conduzi a implementação do PIX e a integração de novas plataformas de pagamento (Getnet, Itaú, PagBank, PagarMe, Vindi).",
                "Implementei melhorias na plataforma Vtex, incluindo configuração de transportadoras, retirada em loja, recuperação de carrinhos abandonados, otimização de checkout, diversas validações e aprimoramento do cadastro de produtos.",
                "Responsavel técnico na migração de atualização da plataforma VtexIO, com redesign completo de UI/UX.",
                "Automatizei processos internos para melhorar a experiência do cliente e aumentar a eficiência operacional.",
                "Gerenciei e padronizei o cadastro completo de +30.000 produtos, garantindo a qualidade e a consistência das informações.",
                "Coordenei a integração do e-commerce com sistemas ERP Winthor, CRM e marketplaces, otimizando a gestão de pedidos e estoque.",
                "Gerenciei e conduzi negociações com fornecedores de tecnologia e serviços, garantindo a melhor relação custo-benefício.",
                "Implementei soluções de automação de marketing e CRM (Kommo, RD Station), aumentando a eficiência das campanhas e a retenção de clientes.",
                "Criei e otimizei campanhas de Google Ads e Meta Ads (Facebook/Instagram), monitorando métricas como ROI, CAC e LTV.",
                "Otimizei o funil de conversão por meio de melhorias no checkout, estratégias de recuperação de carrinho e otimização de SEO.",
                "Gerenciei equipes multidisciplinares de Marketing, Desenvolvimento, Cadastro e Atendimento.",
                "Redução no CAC e aumento na retenção de clientes através de estratégias personalizadas de marketing digital.",
                "Melhoria na experiência do usuário e otimização do checkout, aumentando a taxa de conversão do e-commerce.",
                "Automação de processos internos e integração de novas tecnologias, aumentando a eficiência operacional e escalabilidade do negócio.",
                "Desenvolvi dashboards em Power BI e Targit para análise de métricas de desempenho, como CAC, LTV e taxa de conversão.",
                "Resultados: Aumento de 50% no tráfego orgânico, 15% na taxa de conversão e redução de 10% no CAC.",
                "Resultado: Faturamento mensal cresceu 30%.",
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <FiCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section> */}

      {/* CTA Final */}
      <section className="bg-gray-100 py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para escalar seu o e-commerce?</h2>
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