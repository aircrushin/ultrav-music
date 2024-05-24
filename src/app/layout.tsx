import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import AOSInitializer from '@/lib/AOSInitializer'; // 导入 AOSInitializer 组件

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'UltraV Music',
  description: 'I make Tropical House/lofi music',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AOSInitializer /> {/* 使用 AOSInitializer 组件 */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
