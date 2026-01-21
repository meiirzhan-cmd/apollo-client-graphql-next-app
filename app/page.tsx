import RenderingInfo from "./_components/RenderingInfo";
import { Suspense } from "react";
import ContinentsList from "./_components/ContinentsList";
import ContinentsListSkeleton from "./_components/ContinentsListSkeleton";
import { CountriesList } from "./_components/CountriesList";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-900 py-8 px-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Заголовок */}
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            🌍 Countries GraphQL Dashboard
          </h1>
          <p className="text-slate-400">
            Apollo Client + Next.js App Router: демонстрация SSR и CSR
          </p>
          <div className="mt-4 flex items-center justify-center gap-4 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="text-slate-300">SSR (Server Component)</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-blue-500 rounded-full" />
              <span className="text-slate-300">CSR (Client Component)</span>
            </span>
          </div>
        </header>

        {/* Информация о рендеринге */}
        <RenderingInfo />

        {/* Двухколоночная сетка */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* SSR: Континенты - загружается на сервере */}
          <Suspense fallback={<ContinentsListSkeleton />}>
            <ContinentsList />
          </Suspense>

          {/* CSR: Страны - загружается в браузере */}
          <CountriesList />
        </div>

        {/* Футер */}
        <footer className="text-center text-slate-500 text-sm pt-8 border-t border-slate-800">
          <p>
            Данные из{" "}
            <a
              href="https://countries.trevorblades.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Countries GraphQL API
            </a>
          </p>
          <p className="mt-1">
            Apollo Client 3 + Next.js App Router + TypeScript
          </p>
        </footer>
      </div>
    </div>
  );
}
