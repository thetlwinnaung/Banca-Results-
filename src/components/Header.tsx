import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-white border-b border-slate-200 py-6 px-4 shadow-xs text-center no-print">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
        {/* Strictly NO logo or crest as required */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-red-600 tracking-tight leading-tight">
          Bancassurance Department
        </h1>
        <p className="text-base md:text-lg font-bold text-red-600 tracking-wide mt-0.5">
          Exam Result
        </p>
      </div>
    </header>
  );
};
