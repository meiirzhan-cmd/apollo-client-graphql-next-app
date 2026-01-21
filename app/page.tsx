import RenderingInfo from "./_components/RenderingInfo";
import { Suspense } from "react";
import ContinentsList from "./_components/ContinentsList";
import ContinentsListSkeleton from "./_components/ContinentsListSkeleton";
import { CountriesList } from "./_components/CountriesList";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-indigo-950 to-slate-900 py-8 px-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Заголовок */}
        <header className="text-center mb-8">
          <div className="inline-block mb-4">
            <div className="bg-linear-to-r from-cyan-500/10 via-violet-500/10 to-fuchsia-500/10 rounded-2xl p-6 border border-violet-500/20 backdrop-blur-sm">
              <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-2">
                🌍 Countries GraphQL Dashboard
              </h1>
            </div>
          </div>
          <p className="text-slate-300 text-lg">
            Apollo Client + Next.js App Router: демонстрация SSR и CSR
          </p>
          <div className="mt-6 flex items-center justify-center gap-6 text-sm">
            <span className="flex items-center gap-2 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/30">
              <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-emerald-300 font-medium">SSR (Server Component)</span>
            </span>
            <span className="flex items-center gap-2 bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/30">
              <span className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-cyan-300 font-medium">CSR (Client Component)</span>
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
        <footer className="text-center text-slate-400 text-sm pt-8 border-t border-violet-500/20">
          <p>
            Данные из{" "}
            <a
              href="https://countries.trevorblades.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
            >
              Countries GraphQL API
            </a>
          </p>
          <p className="mt-2 text-slate-500">
            Apollo Client 3 + Next.js App Router + TypeScript
          </p>
        </footer>
      </div>
    </div>
  );
}
