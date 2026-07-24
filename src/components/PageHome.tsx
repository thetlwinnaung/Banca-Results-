import React from 'react';
import { ArrowRight, GraduationCap, Award } from 'lucide-react';

interface PageHomeProps {
  onNavigateToSearch: () => void;
}

export const PageHome: React.FC<PageHomeProps> = ({ onNavigateToSearch }) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 bg-[#F3F4F6]">
      <div className="max-w-2xl w-full text-center space-y-8 my-auto">
        
        {/* Main Title */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold tracking-wide mb-2">
            <Award className="w-4 h-4 text-red-600" />
            <span>Official Portal • 2026</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Banca Exam Results
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium max-w-lg mx-auto leading-relaxed">
            မော်တော်ယာဉ် အာမခံ ဘာသာရပ် (Motor Product Subject) စာမေးပွဲ အမှတ်စာရင်းများအား အလွယ်တကူ စစ်ဆေးကြည့်ရှုနိုင်ပါသည်။
          </p>
        </div>

        {/* Navigation Button Card (Centered, Dark Blue Border & Hover Effects) */}
        <div className="flex justify-center pt-2">
          <button
            id="nav-to-search-btn"
            onClick={onNavigateToSearch}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-5 text-xl font-bold rounded-2xl border-2 border-blue-900 bg-white text-blue-900 shadow-md hover:bg-blue-900 hover:text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer w-full sm:w-auto min-w-[280px]"
          >
            <GraduationCap className="w-7 h-7 text-blue-900 group-hover:text-white transition-colors" />
            <span>အောင်စာရင်း ကြည့်ရန်</span>
            <ArrowRight className="w-6 h-6 text-blue-900 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </button>
        </div>

        {/* Quick Info Card */}
        <div className="bg-white/80 border border-slate-200/80 rounded-2xl p-6 shadow-xs max-w-lg mx-auto text-left space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            စစ်ဆေးနိုင်သည့် အချက်အလက်များ
          </h3>
          <ul className="text-sm text-slate-700 space-y-2 font-medium">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>ဘာသာရပ်အလိုက် ရရှိထားသော အမှတ်စာရင်း (Detailed Marks)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span>ဂုဏ်ထူး ရ/မရ အသေးစိတ် စာရင်း (Distinction Breakdown)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span>စုစုပေါင်း အမှတ်နှင့် စာမေးပွဲ အောင်/ကျ အခြေအနေ</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};
