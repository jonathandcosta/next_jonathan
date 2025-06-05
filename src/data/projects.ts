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
      'Desenvolvi novas páginas para o site, liderei iniciativas para organizar os processos internos do e-commerce, envolvendo cadastro de produtos, logística, atendimento e marketing, integração com ferramentas como Google Analytics, Tag Manager e ERP. Suporte técnico na Vtex, e realizei migração para a plataforma Tray.',
    tags: ['JavaScript', 'VTEX', 'Tray', 'Totvs'],
    image: '/projetos/brazz.jpg',
    githubLink: '#',
    deployLink: 'https://www.brazzbrazz.com.br/',
  },
  {
    title: 'Ecommerce - AL',
    type: 'profissional',
    description:
      'Inicialmente com a plataforma VTEX, realizando manutenção e ajustes em layout, melhorias de performance e integrações com ferramentas de marketing, ERP e análise. Na responsabilidade técnica iniciei a transição para a nova plataforma Tray, participando das negociações com fornecedores, documentação de requisitos, cadastro de produtos, atendimento e logística.',
    tags: ['ReactJs', 'VTEX', 'Tray', 'Totvs'],
    image: '/projetos/atacado.jpg',
    githubLink: '#',
    deployLink: 'https://www.atacadodolojista.com.br/',
  },
  {
    title: 'Ecommerce - Eplay',
    type: 'educacional',
    description:
      'E-play é um e-commerce de jogos de videogame criado com ReactJS. Utilizando Styled Components, Redux para gerenciar o carrinho e APIs, oferece páginas responsivas e interativas, com formulários validados para dados de pagamento e finalização segura das compras.',
    tags: ['React', 'TypeScript', 'API', 'Redux'],
    image: '/projetos/eplay.png', // Coloque a imagem em /public/
    githubLink: 'https://github.com/jonathandcosta/react_ecommerce_play',
    deployLink: 'https://eplay-one.vercel.app/',
  },
  {
    title: 'Social Media - Dogs',
    type: 'educacional',
    description:
      'Dogs é uma rede social inovadora para amantes de cachorros, desenvolvida com React. O projeto permite gerenciar usuários, publicar fotos e acompanhar interações em cada postagem. Com integração de API, oferece uma experiência dinâmica e responsiva, destacando a qualidade no gerenciamento de dados e na navegação. 🐾',
    tags: ['React', 'API', 'SVG', 'Eslint', 'Vite'],
    image: '/projetos/dogs.jpg', // Coloque a imagem em /public/
    githubLink: 'https://github.com/jonathandcosta/react_dogs',
    deployLink: 'https://react-dogs-ten.vercel.app/',
  },
  {
    title: 'Ecommerce - Sports Store',
    type: 'educacional',
    description:
      'Este projeto é uma vitrine de loja de material esportivo desenvolvida em ReactJS, utilizando TypeScript para garantir a tipagem estática e a robustez do código. A aplicação emprega Redux para uma gestão eficiente dos itens no carrinho de compras, proporcionando uma experiência de usuário otimizada e um fluxo de dados previsível.',
    tags: ['React', 'Redux', 'TypeScript'],
    image: '/projetos/sports.jpg',
    githubLink: 'https://github.com/jonathandcosta/react_sports_redux',
    deployLink: 'https://react-sports-redux.vercel.app/',
  },
  {
    title: 'Profile - Jonathan Costa',
    type: 'educacional',
    description:
      'Este projeto, desenvolvido em ReactJS com Styled Components, explora o conceito de personalização através da utilização de props para modificar o tema (cor) da página. O objetivo principal foi criar uma vitrine interativa e visualmente atraente dos meus projetos, demonstrando minha habilidade no consumo da API do github.',
    tags: ['React', 'VTEX', 'TypeScript'],
    image: '/projetos/github.jpg', // Coloque a imagem em /public/
    githubLink: 'https://github.com/jonathandcosta/react_github',
    deployLink: 'https://react-github-pi.vercel.app/',
  },
  {
    title: 'E-menu - Delivery',
    type: 'educacional',
    description:
      'E-menu é um sistema pensado para delivery de hamburguerias, permitindo montar pedidos e enviá-los diretamente via WhatsApp com detalhes e endereço. Desenvolvido em HTML, CSS e JavaScript, possui páginas interativas e um layout responsivo, facilitando a interação do cliente com a loja.',
    tags: ['HTML', 'Bootstrap', 'CSS', 'JavaScript'],
    image: '/projetos/menu.png',
    githubLink: '#',
    deployLink: '#',
  },
  {
    title: 'Bikcraft - Loja de Bicicletas',
    type: 'educacional',
    description:
      'Bikcraft é um projeto que simula uma loja online de bicicletas de alto padrão. Desenvolvido com HTML, CSS e JavaScript, o site oferece páginas interativas e um design responsivo, adaptando-se a diferentes dispositivos. O resultado é uma experiência de usuário sofisticada e funcional, ideal para apresentar produtos de alta qualidade.',
    tags: ['JavaScript', 'CSS', 'Flexbox', 'Grid'],
    image: '/projetos/bikcraft.png',
    githubLink: 'https://github.com/jonathandcosta/bikcraft-final',
    deployLink: 'https://bikcraft-final-five.vercel.app/',
  },
  {
    title: 'Infojobs - Busca de Trabalho',
    type: 'educacional',
    description:
      'Criei esta página de busca de trabalho utilizando ReactJS e Styled Components, com uma abordagem de CSS-in-JS. Essa combinação permitiu um desenvolvimento mais ágil e componentizado, resultando em uma interface moderna e responsiva, otimizada para a experiência do usuário na busca por oportunidades.',
    tags: ['React', 'Styled Components', 'TypeScript'],
    image: '/projetos/jobs.jpg',
    githubLink: 'https://github.com/jonathandcosta/ReactJS_base_css_in_js',
    deployLink: 'https://react-js-base-css-in-js.vercel.app/',
  },
];
