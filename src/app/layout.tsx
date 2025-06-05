import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jonathan Costa | Desenvolvedor Frontend & E-commerce',
  description: 'Portfólio profissional com projetos em React, VTEX e soluções para e-commerce. Especializado em performance e conversão.',
  keywords: ['frontend', 'e-commerce', 'React', 'VTEX', 'desenvolvedor', 'portfolio'],
  authors: [{ name: 'Jonathan Costa' }],

  icons: {
    icon: '/faviconjdc.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}