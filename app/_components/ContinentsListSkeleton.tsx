import React from "react";

const ContinentsListSkeleton = () => {
  return (
    <div className="bg-linear-to-br from-slate-800 to-slate-900 rounded-xl p-6 shadow-lg border border-slate-700 animate-pulse">
      <div className="flex items-center justify-between mb-4">
        <div className="h-6 bg-slate-700 rounded w-32" />
        <div className="h-6 bg-slate-700 rounded w-24" />
      </div>
      <div className="space-y-3">
        {Array.from({ length: 6 }, (_, i) => (
          <div key={`skeleton-${i}`} className="h-20 bg-slate-700 rounded-lg" />
        ))}
      </div>
    </div>
  );
};

export default ContinentsListSkeleton;
