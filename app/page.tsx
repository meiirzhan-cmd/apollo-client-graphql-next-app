import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          🌍 GraphQL Dashboard
        </h1>
        <p className="text-xl text-slate-400 mb-8">
          Демонстрация Apollo Client с Next.js App Router
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-slate-800 rounded-xl p-6 text-left">
            <div className="text-3xl mb-3">🖥️</div>
            <h3 className="text-lg font-semibold text-green-400 mb-2">
              Server Components
            </h3>
            <p className="text-sm text-slate-400">
              Данные о континентах загружаются на сервере с помощью{" "}
              <code className="text-green-300">getClient().query()</code>
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 text-left">
            <div className="text-3xl mb-3">🌐</div>
            <h3 className="text-lg font-semibold text-blue-400 mb-2">
              Client Components
            </h3>
            <p className="text-sm text-slate-400">
              Список стран загружается в браузере с помощью{" "}
              <code className="text-blue-300">useQuery()</code>
            </p>
          </div>
        </div>

        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition shadow-lg shadow-blue-500/25"
        >
          <span>Открыть Dashboard</span>
          <span>→</span>
        </Link>

        <div className="mt-8 text-sm text-slate-500">
          <p>
            API:{" "}
            <a
              href="https://countries.trevorblades.com"
              className="text-blue-400 hover:underline"
              target="_blank"
            >
              countries.trevorblades.com
            </a>
          </p>
          <p className="mt-1">Apollo Client + Next.js 16 + TypeScript</p>
        </div>
      </div>
    </div>
  );
}
