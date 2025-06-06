interface Project {
  title: string;
  type: 'profissional' | 'educacional' | 'freelancer';
  description: string;
  tags: string[];
  image: string;
  githubLink?: string;
  deployLink?: string;
}

export const projects: Project[] = [
  {
    title: 'Ecommerce - BrazzBrazz',
    type: 'profissional',
    description:
      'Otimizei páginas do e-commerce, estruturei processos (cadastro, logística, atendimento e marketing) e integrei ferramentas (Google Analytics, Tag Manager, ERP). Atuei no suporte técnico VTEX e liderei migração de plataforma.',
    tags: ['JavaScript', 'VTEX', 'Tray', 'Totvs'],
    image: '/projetos/brazz.jpg',
    githubLink: '#',
    deployLink: 'https://www.brazzbrazz.com.br/',
  },
  {
    title: 'Ecommerce - AL',
    type: 'profissional',
    description:
      'Atuei na VTEX com manutenção, otimização de layout, performance e integrações (marketing, ERP, analytics). Liderança técnica na migração para Tray: negociação com fornecedores, documentação de requisitos, gestão de produtos, atendimento e logística.',
    tags: ['ReactJs', 'VTEX', 'Tray', 'Totvs'],
    image: '/projetos/atacado.jpg',
    githubLink: '#',
    deployLink: 'https://www.atacadodolojista.com.br/',
  },
  {
    title: 'Ecommerce - Eplay',
    type: 'educacional',
    description:
      'E-Play: E-commerce de games desenvolvido em ReactJS com Styled Components. Integra Redux para gerenciamento de carrinho e APIs, oferecendo UI responsiva, formulários de pagamento validados e checkout seguro.',
    tags: ['React', 'TypeScript', 'API', 'Redux'],
    image: '/projetos/eplay.png', // Coloque a imagem em /public/
    githubLink: 'https://github.com/jonathandcosta/react_ecommerce_play',
    deployLink: 'https://eplay-one.vercel.app/',
  },
  {
    title: 'Social Media - Dogs',
    type: 'educacional',
    description:
      'Dogs: Rede social para apaixonados por pets, construída em React. Oferece cadastro de usuários, postagem de fotos e interações em tempo real via API, com foco em UX e sua interface responsiva e acessível utilizando CSS Modules. 🐾',
    tags: ['React', 'API', 'SVG', 'Eslint', 'Vite'],
    image: '/projetos/dogs.jpg', // Coloque a imagem em /public/
    githubLink: 'https://github.com/jonathandcosta/react_dogs',
    deployLink: 'https://react-dogs-ten.vercel.app/',
  },
  {
    title: 'Ecommerce - Sports Store',
    type: 'educacional',
    description:
      'SportStore: Vitrine de e-commerce esportivo em ReactJS + TypeScript, com Redux para gestão de estado do carrinho. Combina tipagem estática para código robusto e UX fluido, garantindo performance e previsibilidade no fluxo de dados.',
    tags: ['React', 'Redux', 'TypeScript'],
    image: '/projetos/sports.jpg',
    githubLink: 'https://github.com/jonathandcosta/react_sports_redux',
    deployLink: 'https://react-sports-redux.vercel.app/',
  },
  {
    title: 'Profile - Jonathan Costa',
    type: 'educacional',
    description:
      'PortfolioHub: Vitrine dinâmica em ReactJS + Styled Components, com temas customizáveis via props. Consome a API do GitHub para exibir projetos de forma interativa, destacando habilidades em frontend e integração de dados.',
    tags: ['React', 'VTEX', 'TypeScript'],
    image: '/projetos/github.jpg', // Coloque a imagem em /public/
    githubLink: 'https://github.com/jonathandcosta/react_github',
    deployLink: 'https://react-github-pi.vercel.app/',
  },
  {
    title: 'E-menu - Delivery',
    type: 'educacional',
    description:
      'E-Menu: Plataforma de pedidos para hamburguerias em HTML/CSS/JS. Permite montar combos e enviar pedidos automáticos via WhatsApp (com detalhes + endereço). Interface responsiva e intuitiva, otimizando conversões em delivery.',
    tags: ['HTML', 'Bootstrap', 'CSS', 'JavaScript'],
    image: '/projetos/menu.png',
    githubLink: '#',
    deployLink: '#',
  },
  {
    title: 'Bikcraft - Loja de Bicicletas',
    type: 'educacional',
    description:
      'Bikcraft: E-commerce premium de bicicletas em HTML/CSS/JS. Design responsivo e interações fluidas, criando uma experiência de usuário sofisticada para produtos de alto padrão. O resultado é uma experiência de usuário sofisticada e funcional.',
    tags: ['JavaScript', 'CSS', 'Flexbox', 'Grid'],
    image: '/projetos/bikcraft.png',
    githubLink: 'https://github.com/jonathandcosta/bikcraft-final',
    deployLink: 'https://bikcraft-final-five.vercel.app/',
  },
  {
    title: 'Infojobs - Busca de Trabalho',
    type: 'educacional',
    description:
      'Infojobs: Plataforma de busca de vagas em ReactJS + Styled Components (CSS-in-JS). Arquitetura componentizada para desenvolvimento ágil, entregando UI moderna, responsiva e otimizada para candidatos.',
    tags: ['React', 'Styled Components', 'TypeScript'],
    image: '/projetos/jobs.jpg',
    githubLink: 'https://github.com/jonathandcosta/ReactJS_base_css_in_js',
    deployLink: 'https://react-js-base-css-in-js.vercel.app/',
  },
];
