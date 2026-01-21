import type { Metadata } from "next";
import "./globals.css";
import ApolloWrapper from "./_wrapper/ApolloWrapper";

export const metadata: Metadata = {
  title: "GraphQL Dashboard - Apollo Client + Next.js",
  description: "Демонстрация интеграции Apollo Client с Next.js App Router",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="bg-slate-900 text-white antialiased">
        {/* 
          ApolloWrapper оборачивает всё приложение
          Это нужно для работы useQuery в клиентских компонентах
        */}
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
