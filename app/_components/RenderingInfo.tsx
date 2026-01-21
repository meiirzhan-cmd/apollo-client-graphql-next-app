"use client";

import { useState } from "react";

const RenderingInfo = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-linear-to-r from-violet-950/40 via-fuchsia-950/30 to-purple-950/40 rounded-2xl p-6 border border-violet-500/30 backdrop-blur-sm shadow-xl">
      <button
        className="w-full flex items-center justify-between cursor-pointer text-left group"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        <div className="flex items-center gap-3">
          <span className="text-3xl group-hover:scale-110 transition-transform duration-300">📊</span>
          <h2 className="text-xl font-bold text-transparent bg-linear-to-r from-violet-300 to-fuchsia-300 bg-clip-text">
            Как работает рендеринг данных GraphQL
          </h2>
        </div>
        <span className="text-violet-300 hover:text-violet-200 transition-colors font-medium">
          {isExpanded ? "▲ Скрыть" : "▼ Подробнее"}
        </span>
      </button>

      {isExpanded && (
        <div className="mt-6 space-y-4">
          {/* SSR объяснение */}
          <div className="bg-linear-to-br from-emerald-900/30 to-teal-900/20 rounded-xl p-5 border border-emerald-500/30 shadow-lg">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1.5 bg-emerald-500/20 text-emerald-300 text-xs font-semibold rounded-full shadow-lg shadow-emerald-500/20">
                🖥️ SSR
              </span>
              <h3 className="font-bold text-emerald-300 text-lg">
                Server-Side Rendering
              </h3>
            </div>
            <ul className="text-sm text-slate-200 space-y-2">
              <li>
                • <strong className="text-emerald-300">Континенты</strong> загружаются на сервере
              </li>
              <li>
                • HTML приходит уже с данными — быстрый First Contentful Paint
              </li>
              <li>• Идеально для SEO и статичного контента</li>
              <li>• Использует async/await в серверных компонентах</li>
              <li>
                • Код:{" "}
                <code className="bg-slate-800/80 px-2 py-1 rounded text-emerald-300 font-mono text-xs border border-emerald-500/30">
                  await getClient().query()
                </code>
              </li>
            </ul>
          </div>

          {/* CSR объяснение */}
          <div className="bg-linear-to-br from-cyan-900/30 to-blue-900/20 rounded-xl p-5 border border-cyan-500/30 shadow-lg">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1.5 bg-cyan-500/20 text-cyan-300 text-xs font-semibold rounded-full shadow-lg shadow-cyan-500/20">
                🌐 CSR
              </span>
              <h3 className="font-bold text-cyan-300 text-lg">
                Client-Side Rendering
              </h3>
            </div>
            <ul className="text-sm text-slate-200 space-y-2">
              <li>
                • <strong className="text-cyan-300">Страны мира</strong> загружаются
                в браузере
              </li>
              <li>• Показывает skeleton/loading при загрузке</li>
              <li>• Поддерживает интерактивность (фильтры, обновление)</li>
              <li>• Использует React хуки в клиентских компонентах</li>
              <li>
                • Код:{" "}
                <code className="bg-slate-800/80 px-2 py-1 rounded text-cyan-300 font-mono text-xs border border-cyan-500/30">
                  useQuery(GET_COUNTRIES)
                </code>
              </li>
            </ul>
          </div>

          {/* Сравнительная таблица */}
          <div className="overflow-x-auto bg-slate-900/50 rounded-xl p-4 border border-violet-500/20">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-violet-500/30">
                  <th className="text-left py-3 text-violet-200 font-bold">
                    Характеристика
                  </th>
                  <th className="text-center py-3 text-emerald-300 font-bold">SSR</th>
                  <th className="text-center py-3 text-cyan-300 font-bold">CSR</th>
                </tr>
              </thead>
              <tbody className="text-slate-200">
                <tr className="border-b border-violet-500/10 hover:bg-violet-500/5 transition-colors">
                  <td className="py-3 font-medium">Первая отрисовка</td>
                  <td className="text-center">⚡ Быстрая</td>
                  <td className="text-center">🔄 После загрузки JS</td>
                </tr>
                <tr className="border-b border-violet-500/10 hover:bg-violet-500/5 transition-colors">
                  <td className="py-3 font-medium">SEO</td>
                  <td className="text-center">✅ Отлично</td>
                  <td className="text-center">⚠️ Требует SSR fallback</td>
                </tr>
                <tr className="border-b border-violet-500/10 hover:bg-violet-500/5 transition-colors">
                  <td className="py-3 font-medium">Интерактивность</td>
                  <td className="text-center">📄 Статично</td>
                  <td className="text-center">🎮 Полная</td>
                </tr>
                <tr className="border-b border-violet-500/10 hover:bg-violet-500/5 transition-colors">
                  <td className="py-3 font-medium">Кэширование</td>
                  <td className="text-center">На сервере</td>
                  <td className="text-center">InMemoryCache</td>
                </tr>
                <tr className="hover:bg-violet-500/5 transition-colors">
                  <td className="py-3 font-medium">Когда использовать</td>
                  <td className="text-center">Статичные данные</td>
                  <td className="text-center">Динамичные данные</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default RenderingInfo;
