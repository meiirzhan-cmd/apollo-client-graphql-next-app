import { Country } from "@/types";
import React from "react";

const CountryCard = ({ country }: { country: Country }) => {
  return (
    <div className="bg-slate-800/50 rounded-lg p-3 hover:bg-slate-700/50 transition">
      <div className="flex items-start gap-3">
        {/* Флаг */}
        <span className="text-3xl">{country.emoji}</span>

        {/* Информация */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-white truncate">{country.name}</h3>
          <p className="text-xs text-slate-400">
            {country.code} • {country.continent.name}
          </p>
          {country.capital && (
            <p className="text-xs text-slate-500 mt-1">🏛️ {country.capital}</p>
          )}
          {country.languages.length > 0 && (
            <p className="text-xs text-slate-500">
              🗣️ {country.languages.map((l) => l.name).join(", ")}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
