import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { Inter } from 'next/font/google';
import "./globals.css";
import { Providers } from '@/lib/providers';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SoBa - Sistema de Pedidos',
  description: 'Sistema completo de gerenciamento de pedidos para restaurantes',
  manifest: '/manifest.json',
  themeColor: '#8B5CF6',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};


export default function RootLayout({  children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
          {children}
      </body>
    </html>
  );
}
