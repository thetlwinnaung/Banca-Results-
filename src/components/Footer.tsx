import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-slate-900 text-slate-300 py-4 px-4 text-center mt-auto border-t border-slate-800 no-print text-sm">
      <div className="max-w-4xl mx-auto space-y-1">
        <p className="font-medium text-slate-300">
          All rights reserved. 2026 © Bancassurance Department.
        </p>
        <p className="text-xs text-slate-400 font-semibold tracking-wide">
          System developed by <span className="text-emerald-400 font-bold">ZNA</span>
        </p>
      </div>
    </footer>
  );
};
