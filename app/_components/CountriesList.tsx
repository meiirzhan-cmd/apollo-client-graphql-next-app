"use client";

import { GET_COUNTRIES } from "@/lib/queries";
import { CountriesData } from "@/types";
import { useQuery } from "@apollo/client/react";
import { useMemo, useState } from "react";
import CountryCard from "./CountryCard";

export function CountriesList() {
  const [search, setSearch] = useState("");
  const [selectedContinent, setSelectedContinent] = useState<string>("all");

  // useQuery хук для клиентской загрузки данных
  const { loading, error, data, refetch } =
    useQuery<CountriesData>(GET_COUNTRIES);

  // Фильтрация стран
  const filteredCountries = useMemo(() => {
    if (!data?.countries) return [];

    return data.countries.filter((country) => {
      const matchesSearch =
        country.name.toLowerCase().includes(search.toLowerCase()) ||
        country.code.toLowerCase().includes(search.toLowerCase());

      const matchesContinent =
        selectedContinent === "all" ||
        country.continent.name === selectedContinent;

      return matchesSearch && matchesContinent;
    });
  }, [data, search, selectedContinent]);

  // Уникальные континенты для фильтра
  const continents = useMemo(() => {
    if (!data?.countries) return [];
    const unique = [...new Set(data.countries.map((c) => c.continent.name))];
    return unique.sort((a, b) => a.localeCompare(b));
  }, [data]);

  // Обработка состояния загрузки
  if (loading) {
    return (
      <div className="bg-linear-to-br from-blue-900/50 to-slate-900 rounded-xl p-6 shadow-lg border border-blue-700/30">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white">🏳️ Страны мира</h2>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full border border-blue-500/30">
            🌐 CSR (Client)
          </span>
        </div>
        <div className="space-y-3">
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={`skeleton-${i}`}
              className="animate-pulse bg-slate-700/50 rounded-lg h-16"
            />
          ))}
        </div>
        <p className="text-center text-blue-400 text-sm mt-4">
          ⏳ Загрузка данных...
        </p>
      </div>
    );
  }

  // Обработка ошибки
  if (error) {
    return (
      <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/30">
        <h2 className="text-xl font-bold text-red-400 mb-2">Ошибка загрузки</h2>
        <p className="text-red-300 text-sm mb-4">{error.message}</p>
        <button
          onClick={() => refetch()}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Повторить
        </button>
      </div>
    );
  }

  return (
    <div className="bg-linear-to-br from-blue-900/50 to-slate-900 rounded-xl p-6 shadow-lg border border-blue-700/30">
      {/* Заголовок с индикатором CSR */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white">🏳️ Страны мира</h2>
        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full border border-blue-500/30">
          🌐 CSR (Client)
        </span>
      </div>

      {/* Фильтры */}
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        {/* Поиск */}
        <input
          type="text"
          placeholder="Поиск страны..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-slate-700 text-white text-sm rounded-lg px-4 py-2 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-slate-400"
        />

        {/* Фильтр по континенту */}
        <select
          value={selectedContinent}
          onChange={(e) => setSelectedContinent(e.target.value)}
          className="bg-slate-700 text-white text-sm rounded-lg px-3 py-2 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">Все континенты</option>
          {continents.map((continent) => (
            <option key={continent} value={continent}>
              {continent}
            </option>
          ))}
        </select>

        {/* Кнопка обновления */}
        <button
          onClick={() => refetch()}
          className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition flex items-center gap-2 justify-center"
        >
          <span>🔄</span>
          <span className="hidden sm:inline">Обновить</span>
        </button>
      </div>

      {/* Статистика */}
      <p className="text-slate-400 text-sm mb-4">
        Показано: {filteredCountries.length} из {data?.countries.length} стран
      </p>

      {/* Список стран */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-96 overflow-y-auto pr-2">
        {filteredCountries.slice(0, 20).map((country) => (
          <CountryCard key={country.code} country={country} />
        ))}
      </div>

      {filteredCountries.length > 20 && (
        <p className="text-center text-slate-500 text-sm mt-4">
          ...и ещё {filteredCountries.length - 20} стран
        </p>
      )}
    </div>
  );
}
