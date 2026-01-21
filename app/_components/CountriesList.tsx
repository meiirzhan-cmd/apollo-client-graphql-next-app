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
      <div className="bg-linear-to-br from-cyan-950/40 via-slate-900/90 to-blue-950/40 rounded-2xl p-6 shadow-2xl border border-cyan-500/20 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-transparent bg-linear-to-r from-cyan-300 to-blue-300 bg-clip-text">🏳️ Страны мира</h2>
          <span className="px-3 py-1.5 bg-cyan-500/20 text-cyan-300 text-xs font-semibold rounded-full border border-cyan-400/40 shadow-lg shadow-cyan-500/20">
            🌐 CSR (Client)
          </span>
        </div>
        <div className="space-y-3">
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={`skeleton-${i}`}
              className="animate-pulse bg-linear-to-r from-slate-800/50 via-cyan-900/20 to-slate-800/50 rounded-lg h-16"
            />
          ))}
        </div>
        <p className="text-center text-cyan-300 text-sm mt-4 animate-pulse">
          ⏳ Загрузка данных...
        </p>
      </div>
    );
  }

  // Обработка ошибки
  if (error) {
    return (
      <div className="bg-linear-to-br from-rose-950/40 to-red-950/40 rounded-2xl p-6 border border-rose-500/30 backdrop-blur-sm">
        <h2 className="text-xl font-bold text-rose-300 mb-2">Ошибка загрузки</h2>
        <p className="text-rose-200 text-sm mb-4">{error.message}</p>
        <button
          onClick={() => refetch()}
          className="px-4 py-2 bg-linear-to-r from-rose-600 to-red-600 text-white rounded-lg hover:from-rose-500 hover:to-red-500 transition-all duration-300 shadow-lg shadow-rose-500/30 font-medium"
        >
          Повторить
        </button>
      </div>
    );
  }

  return (
    <div className="bg-linear-to-br from-cyan-950/40 via-slate-900/90 to-blue-950/40 rounded-2xl p-6 shadow-2xl border border-cyan-500/20 backdrop-blur-sm">
      {/* Заголовок с индикатором CSR */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-transparent bg-linear-to-r from-cyan-300 to-blue-300 bg-clip-text">🏳️ Страны мира</h2>
        <span className="px-3 py-1.5 bg-cyan-500/20 text-cyan-300 text-xs font-semibold rounded-full border border-cyan-400/40 shadow-lg shadow-cyan-500/20">
          🌐 CSR (Client)
        </span>
      </div>

      {/* Фильтры */}
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        {/* Поиск */}
        <input
          type="text"
          placeholder="Поиск страны..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-slate-800/80 text-white text-sm rounded-lg px-4 py-2.5 border border-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 placeholder-slate-400 transition-all duration-300"
        />

        {/* Фильтр по континенту */}
        <select
          value={selectedContinent}
          onChange={(e) => setSelectedContinent(e.target.value)}
          className="bg-slate-800/80 text-white text-sm rounded-lg px-3 py-2.5 border border-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300"
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
          className="px-4 py-2.5 bg-linear-to-r from-cyan-600 to-blue-600 text-white text-sm rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 flex items-center gap-2 justify-center shadow-lg shadow-cyan-500/30 font-medium"
        >
          <span>🔄</span>
          <span className="hidden sm:inline">Обновить</span>
        </button>
      </div>

      {/* Статистика */}
      <p className="text-cyan-300 text-sm mb-4 font-medium">
        Показано: <span className="text-cyan-200">{filteredCountries.length}</span> из <span className="text-cyan-200">{data?.countries.length}</span> стран
      </p>

      {/* Список стран */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
        {filteredCountries.slice(0, 20).map((country) => (
          <CountryCard key={country.code} country={country} />
        ))}
      </div>

      {filteredCountries.length > 20 && (
        <p className="text-center text-cyan-400/60 text-sm mt-4 font-medium">
          ...и ещё {filteredCountries.length - 20} стран
        </p>
      )}
    </div>
  );
}
