"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { projects } from "@/data/projects";
import { FaEnvelope as EnvelopeIcon, FaFacebook, FaInstagram, FaWhatsapp, FaPhone as PhoneIcon } from "react-icons/fa";
import { FaLinkedin as LinkedInIcon, FaGithub as GitHubIcon } from "react-icons/fa";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import Image from "next/image";
import ExperienceTimeline from "@/components/ExperienceTimeLine";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import TechRecommendations from "@/components/TechRecomendation";

export default function Home() {
  return (
    <main className="relative overflow-hidden">

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-blue-800 to-purple-900 flex items-center justify-center text-white relative overflow-hidden">
        {/* Efeito de partículas */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10" />

        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-12">
          {/* Texto + CTA (esquerda) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left z-10"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Jonathan Costa
            </h1>

            <TypeAnimation
              sequence={[
                "Desenvolvimento Web",
                2000,
                "Engenheiro Frontend",
                2000,
                "Focado em React & Next.js",
                2000,
                "Especialista em E-commerce",
                2000,
                "Arquitetura de Integrações",
                2000,
                "Performance com Conversão",
                2000,
                "Resultados Previsíveis",
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-xl md:text-3xl text-blue-100 font-medium mb-8"
              repeat={Infinity}
            />

            <div className="flex mt-4 gap-4 justify-center md:justify-start">
              {/* Botões mantidos iguais */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex gap-4 justify-center"
              >
                <a
                  href="#projects"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
                >
                  Ver Projetos
                </a>
                <a
                  href="/Jonathan Costa-2025.pdf"
                  download
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-all"
                >
                  Baixar Currículo
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Foto (direita) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white/20 overflow-hidden shadow-2xl"
          >
            <Image
              src="/jdc.jpeg" // Caminho para sua foto em /public/
              alt="Foto de Jonathan Costa"
              fill
              className="object-cover"
              priority
              placeholder="blur" // Efeito de loading suave
              blurDataURL="data:image/png;base64,..." // Gere com `plaiceholder.co`
            />
          </motion.div>
        </div>
      </section>

      {/* Seção de Projetos */}
      <section id="projects" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Projetos em Destaque
          </motion.h2>

          <ProjectsCarousel projects={projects} />
          <div>
            <p className="text-center text-gray-600 mt-6">
              Confira mais projetos no meu <Link target="_blank" href="https://react-github-pi.vercel.app/" className="text-blue-600 hover:underline">portfólio completo</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Sessão sobre */}

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Sobre Mim
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Seu Desenvolvedor Web e <br /> Parceiro Estratégico.</h3>
              <p className="text-gray-600 mb-6">
                {/* Ex-profissional de vendas que encontrou na tecnologia como<strong> multiplicar resultados</strong> na venda on-line. Com +5 anos de experiência combino<strong> visão estratégica de negócio </strong>e <strong> habilidades técnicas</strong> para criar e otimizar plataformas de e-commerce, focando sempre na <strong>performance </strong>e na <strong>experiência do cliente</strong>.
                <br /> */}
                Com uma abordagem única que une <strong >expertise técnica em Desenvolvimento Frontend</strong> e uma <strong >visão estratégica aprofundada em e-commerce</strong>, construo e otimizo soluções digitais que funcionam, impactam e <strong >geram resultados exponenciais</strong>. Com experiência comprovada de +5 anos me permite ir além, desde otimizações de performance a integração complexas para o seu negócio, meu objetivo é claro: levo a sua operação online ao <strong >próximo nível de lucratividade e eficiência</strong>.
                <Link
                  href="/especialista"
                  className="mt-4 inline-flex items-center gap-1 text-blue-600 hover:underline"
                >
                  Descubra minhas expertises em e-commerce →
                </Link>
              </p>
              <div className="space-y-2">
                {/* <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>+5 anos desenvolvendo para negócios</span>
                </div> */}
                {/* Adicione mais bullets */}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 p-4 rounded-xl"
            >
              <h4 className="font-bold mb-4">Principais Habilidades</h4>
              <div className="flex flex-wrap gap-3">
                {['React', 'NextJs', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind', 'BootStrap', 'Prisma', 'SQL', 'Git', 'Redux', 'API', 'SEO', 'CRO', 'ERP', 'VTEX', 'TRAY', 'Kommo', 'RD Station', 'Email Marketing', 'Google ADS', 'Meta ADS', 'Tag Manager', 'Analytics', 'BI', 'Figma', 'IA', 'VSCode', 'Trello', 'Notion', 'n8n', 'Mercado Livre', 'Amazon', 'Shoppe'].map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full text-sm hover:bg-green-200 hover:text-green-800 transition duration-300 cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* sessão de Recomendações Técnicas */}
      <section >
        <div >

          <TechRecommendations />
        </div>
      </section>

      {/* sessão de Experiência */}

      <section id="experience" className="py-20 px-4 bg-gray-100">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Minha Jornada Profissional
          </motion.h2>

          <ExperienceTimeline />

          <div className="text-center mt-12">
            <a
              href="/Jonathan Costa-2025.pdf"
              download
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition"
            >
              Baixar CV Completo
            </a>
          </div>
        </div>
      </section>



      {/* sessão de Contato */}

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Vamos Conversar?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Interessado em trabalhar juntos? Preencha o formulário ou entre em contato diretamente por email.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Formulário */}
            <ContactForm />

            {/* Informações de Contato */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Contato Direto</h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="mt-1 text-blue-600">
                      <EnvelopeIcon className="h-5 w-5" /> {/* Ícone do react-icons */}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Email</h4>
                      <a href="mailto:jddatsoc@gmail.com" className="text-gray-600 hover:text-blue-600 transition">
                        jddatsoc@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="mt-1 text-blue-600">
                      <PhoneIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Telefone</h4>
                      <a href="tel:+558499043539" className="text-gray-600 hover:text-blue-600 transition">
                        (84) 9 9904-3539
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Redes Sociais</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/jonathanduartecosta/"
                    target="_blank"
                    className="bg-gray-100 hover:bg-blue-100 p-3 rounded-full transition"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon className="h-6 w-6 text-gray-700" />
                  </a>
                  <a
                    href="https://github.com/jonathandcosta"
                    target="_blank"
                    className="bg-gray-100 hover:bg-gray-300 p-3 rounded-full transition"
                    aria-label="GitHub"
                  >
                    <GitHubIcon className="h-6 w-6 text-gray-700" />
                  </a>

                  <a
                    href="https://www.facebook.com/Jonathanatsoc"
                    target="_blank"
                    className="bg-gray-100 hover:bg-blue-200 p-3 rounded-full transition"
                    aria-label="GitHub"
                  >
                    <FaFacebook className="h-6 w-6 text-gray-700" />
                  </a>

                  <a
                    href="https://www.instagram.com/jonathanatsoc/"
                    target="_blank"
                    className="bg-gray-100 hover:bg-orange-200 p-3 rounded-full transition"
                    aria-label="GitHub"
                  >
                    <FaInstagram className="h-6 w-6 text-gray-700" />
                  </a>

                  <a
                    href="https://wa.me/558499043539?text=Ol%C3%A1%20Jonathan,%20gostaria%20de%20falar%20sobre%20um%20projeto."
                    target="_blank"
                    className="bg-gray-100 hover:bg-green-300 p-3 rounded-full transition"
                    aria-label="GitHub"
                  >
                    <FaWhatsapp className="h-6 w-6 text-gray-700" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* footer */}

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Sobre */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Jonathan Costa</h3>
              <p className="mb-4">
                Desenvolvedor Frontend com +5 anos de experiência, ajudo empresas a otimizar suas operações e aumentar suas vendas online.
                <br />
                <Link
                  href="/especialista"
                  className="mt-4 inline-flex items-center gap-1 text-gray-500 hover:underline"
                >
                  Ver cases de sucesso →
                </Link>
              </p>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/jonathanduartecosta/" className="text-gray-400 hover:text-white transition">
                  <LinkedInIcon className="h-5 w-5" />
                </a>
                <a href="https://github.com/jonathandcosta" className="text-gray-400 hover:text-white transition">
                  <GitHubIcon className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Links Rápidos */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-white transition">Sobre</a></li>
                <li><a href="#projects" className="hover:text-white transition">Projetos</a></li>
                <li><a href="#experience" className="hover:text-white transition">Experiência</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contato</a></li>
                <li><Link href="/especialista" className="hover:text-white transition">Especialidade</Link></li>
              </ul>
            </div>
            {/* Direitos */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Legal</h3>
              <p className="mb-2">© {new Date().getFullYear()} Jonathan Costa</p>
              <p className="text-sm text-gray-500">Todos os direitos reservados.</p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
            <p>Desenvolvido com Next.js, Tailwind CSS e Framer Motion</p>
          </div>
        </div>
      </footer>

    </main>
  );
}