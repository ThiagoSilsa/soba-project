// MetadaData
import type { Metadata } from "next";

// CSS
import "./globals.css";

export const metadata: Metadata = {
  title: 'SoBa - Sistema de Pedidos',
  description: 'Sistema completo de gerenciamento de pedidos para restaurantes',
};

export const viewport ={
  width: "device-width",
  themeColor: "8B5CF6",
  initialScale: 1,
  maximumScale:1,
}

export default function RootLayout({  children }:any) {
  return (
    <html lang="pt-BR">
      <body className="" >
          {children}
      </body>
    </html>
  );
}
