import { getClient } from "@/lib/apollo-client";
import { GET_CONTINENTS } from "@/lib/queries";
import { ContinentsData } from "@/types";

const ContinentsList = async () => {
  const client = getClient();
  const { data } = await client.query<ContinentsData>({
    query: GET_CONTINENTS,
  });

  return (
    <div className="bg-linear-to-br from-emerald-950/40 via-slate-900/90 to-teal-950/40 rounded-2xl p-6 shadow-2xl border border-emerald-500/20 backdrop-blur-sm">
      {/* Заголовок с индикатором SSR */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-transparent bg-linear-to-r from-emerald-300 to-teal-300 bg-clip-text">🌍 Континенты</h2>
        <span className="px-3 py-1.5 bg-emerald-500/20 text-emerald-300 text-xs font-semibold rounded-full border border-emerald-400/40 shadow-lg shadow-emerald-500/20">
          🖥️ SSR (Server)
        </span>
      </div>

      <p className="text-slate-300 text-sm mb-5">
        Данные загружены на сервере — HTML пришёл уже с контентом
      </p>

      {/* Список континентов */}
      <div className="space-y-3">
        {data?.continents.map((continent) => (
          <div key={continent.code} className="bg-linear-to-br from-slate-800/80 to-emerald-900/20 rounded-xl p-4 border border-emerald-500/10 hover:border-emerald-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-emerald-100 text-lg">{continent.name}</h3>
              <span className="text-emerald-400 text-sm font-medium bg-emerald-500/10 px-2.5 py-1 rounded-full">
                {continent.countries.length} стран
              </span>
            </div>

            {/* Коды стран */}
            <div className="flex flex-wrap gap-1.5 text-sm mb-3">
              {continent.countries.slice(0, 15).map((country) => (
                <span
                  key={country.code}
                  className="text-emerald-300 hover:text-emerald-100 transition-colors cursor-pointer font-semibold"
                  title={country.name}
                >
                  {country.code}
                </span>
              ))}
              {continent.countries.length > 15 && (
                <span className="text-emerald-300 text-sm self-center font-bold">
                  +{continent.countries.length - 15}
                </span>
              )}
            </div>

            {/* Флаги стран */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-emerald-500/10">
              {continent.countries.slice(0, 8).map((country) => (
                <span
                  key={`emoji-${country.code}`}
                  className="text-3xl hover:scale-125 transition-transform duration-200 cursor-pointer"
                  title={country.name}
                >
                  {country.emoji}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinentsList;
