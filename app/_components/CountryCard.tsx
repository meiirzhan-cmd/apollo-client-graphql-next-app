import { Country } from "@/types";
import React from "react";

const CountryCard = ({ country }: { country: Country }) => {
  return (
    <div className="bg-linear-to-br from-slate-800/80 to-cyan-900/20 rounded-xl p-3 border border-cyan-500/10 hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 group">
      <div className="flex items-start gap-3">
        {/* Флаг */}
        <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{country.emoji}</span>

        {/* Информация */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-cyan-100 truncate group-hover:text-cyan-50 transition-colors">{country.name}</h3>
          <p className="text-xs text-cyan-400/80 font-medium">
            {country.code} • {country.continent.name}
          </p>
          {country.capital && (
            <p className="text-xs text-slate-400 mt-1">🏛️ {country.capital}</p>
          )}
          {country.languages.length > 0 && (
            <p className="text-xs text-slate-400 truncate">
              🗣️ {country.languages.map((l) => l.name).join(", ")}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
