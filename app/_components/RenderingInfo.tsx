"use client";

import { useState } from "react";

const RenderingInfo = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-linear-to-r from-amber-900/30 to-orange-900/30 rounded-xl p-6 border border-amber-500/30">
      <button
        className="w-full flex items-center justify-between cursor-pointer text-left"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">📊</span>
          <h2 className="text-lg font-bold text-white">
            Как работает рендеринг данных GraphQL
          </h2>
        </div>
        <span className="text-amber-400 hover:text-amber-300 transition">
          {isExpanded ? "▲ Скрыть" : "▼ Подробнее"}
        </span>
      </button>

      {isExpanded && (
        <div className="mt-4 space-y-4">
          {/* SSR объяснение */}
          <div className="bg-green-900/20 rounded-lg p-4 border border-green-500/20">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
                🖥️ SSR
              </span>
              <h3 className="font-semibold text-green-400">
                Server-Side Rendering
              </h3>
            </div>
            <ul className="text-sm text-slate-300 space-y-2">
              <li>
                • <strong>Компания SpaceX</strong> загружается на сервере
              </li>
              <li>
                • HTML приходит уже с данными — быстрый First Contentful Paint
              </li>
              <li>• Идеально для SEO и статичного контента</li>
              <li>• Использует async/await в серверных компонентах</li>
              <li>
                • Код:{" "}
                <code className="bg-slate-700 px-1 rounded text-green-300">
                  await getClient().query()
                </code>
              </li>
            </ul>
          </div>

          {/* CSR объяснение */}
          <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-500/20">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full">
                🌐 CSR
              </span>
              <h3 className="font-semibold text-blue-400">
                Client-Side Rendering
              </h3>
            </div>
            <ul className="text-sm text-slate-300 space-y-2">
              <li>
                • <strong>Запуски</strong> и <strong>Ракеты</strong> загружаются
                в браузере
              </li>
              <li>• Показывает skeleton/loading при загрузке</li>
              <li>• Поддерживает интерактивность (фильтры, обновление)</li>
              <li>• Использует React хуки в клиентских компонентах</li>
              <li>
                • Код:{" "}
                <code className="bg-slate-700 px-1 rounded text-blue-300">
                  useQuery(GET_LAUNCHES)
                </code>
              </li>
            </ul>
          </div>

          {/* Сравнительная таблица */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="text-left py-2 text-slate-400">
                    Характеристика
                  </th>
                  <th className="text-center py-2 text-green-400">SSR</th>
                  <th className="text-center py-2 text-blue-400">CSR</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-700">
                  <td className="py-2">Первая отрисовка</td>
                  <td className="text-center">⚡ Быстрая</td>
                  <td className="text-center">🔄 После загрузки JS</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-2">SEO</td>
                  <td className="text-center">✅ Отлично</td>
                  <td className="text-center">⚠️ Требует SSR fallback</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-2">Интерактивность</td>
                  <td className="text-center">📄 Статично</td>
                  <td className="text-center">🎮 Полная</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="py-2">Кэширование</td>
                  <td className="text-center">На сервере</td>
                  <td className="text-center">InMemoryCache</td>
                </tr>
                <tr>
                  <td className="py-2">Когда использовать</td>
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
