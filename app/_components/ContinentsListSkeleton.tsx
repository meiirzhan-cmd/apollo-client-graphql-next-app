import React from "react";

const ContinentsListSkeleton = () => {
  return (
    <div className="bg-linear-to-br from-emerald-950/40 via-slate-900/90 to-teal-950/40 rounded-2xl p-6 shadow-2xl border border-emerald-500/20 backdrop-blur-sm animate-pulse">
      <div className="flex items-center justify-between mb-4">
        <div className="h-7 bg-emerald-700/30 rounded-lg w-32" />
        <div className="h-6 bg-emerald-600/30 rounded-full w-24" />
      </div>
      <div className="h-4 bg-slate-700/50 rounded w-3/4 mb-5" />
      <div className="space-y-3">
        {Array.from({ length: 6 }, (_, i) => (
          <div key={`skeleton-${i}`} className="h-20 bg-linear-to-br from-slate-800/80 to-emerald-900/20 rounded-xl border border-emerald-500/10" />
        ))}
      </div>
    </div>
  );
};

export default ContinentsListSkeleton;
