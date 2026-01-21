import { getClient } from "@/lib/apollo-client";
import { GET_CONTINENTS } from "@/lib/queries";
import { ContinentsData } from "@/types";

const ContinentsList = async () => {
  const client = getClient();
  const { data } = await client.query<ContinentsData>({
    query: GET_CONTINENTS,
  });

  return (
    <div className="bg-linear-to-br from-slate-800 to-slate-900 rounded-xl p-6 shadow-lg border border-slate-700">
      {/* Заголовок с индикатором SSR */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white">🌍 Континенты</h2>
        <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full border border-green-500/30">
          🖥️ SSR (Server)
        </span>
      </div>

      <p className="text-slate-400 text-sm mb-4">
        Данные загружены на сервере — HTML пришёл уже с контентом
      </p>

      {/* Список континентов */}
      <div className="space-y-3">
        {data?.continents.map((continent) => (
          <div key={continent.code} className="bg-slate-700/50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-white">{continent.name}</h3>
              <span className="text-slate-400 text-sm">
                {continent.countries.length} стран
              </span>
            </div>

            {/* Флаги первых 8 стран */}
            <div className="flex flex-wrap gap-1">
              {continent.countries.slice(0, 8).map((country) => (
                <span
                  key={country.code}
                  className="text-2xl"
                  title={country.name}
                >
                  {country.emoji}
                </span>
              ))}
              {continent.countries.length > 8 && (
                <span className="text-slate-500 text-sm self-center ml-1">
                  +{continent.countries.length - 8}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinentsList;
