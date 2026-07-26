import React from 'react';
import { LogOut, User } from 'lucide-react';

interface HeaderProps {
  user?: string | null;
  onLogout?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ user, onLogout }) => {
  return (
    <header className="w-full bg-white border-b border-slate-200 py-5 px-4 shadow-xs no-print">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Title */}
        <div className="flex-1 text-center sm:text-left">
          <h1 className="text-xl md:text-2xl font-extrabold text-red-600 tracking-tight leading-tight">
            Bancassurance Department
          </h1>
          <p className="text-sm md:text-base font-bold text-red-600 tracking-wide mt-0.5">
            Exam Result Portal
          </p>
        </div>

        {/* User Info & Logout Button */}
        {user && onLogout && (
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
              <User className="w-3.5 h-3.5 text-slate-500" />
              <span>{user}</span>
            </div>
            <button
              onClick={onLogout}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 rounded-lg border border-slate-200 transition cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5 text-slate-600" />
              <span>ထွက်မည်</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

