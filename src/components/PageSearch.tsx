import React, { useState } from 'react';
import { Search, ArrowLeft, UserCheck, AlertCircle } from 'lucide-react';
import { OFFICIAL_EXAM_SUBJECT } from '../data/students';
import { StudentResult } from '../types';

interface PageSearchProps {
  onSearchSubmit: (name: string) => void;
  onBackToHome: () => void;
  onSelectStudent?: (student: StudentResult) => void;
}

export const PageSearch: React.FC<PageSearchProps> = ({ onSearchSubmit, onBackToHome }) => {
  const [inputName, setInputName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = inputName.trim();
    if (!query) {
      setErrorMsg('ကျေးဇူးပြု၍ စစ်ဆေးလိုသော အမည် သို့မဟုတ် ခုံနံပါတ် ထည့်သွင်းပါ။');
      return;
    }
    setErrorMsg('');
    onSearchSubmit(query);
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-start p-4 sm:p-8 bg-[#F3F4F6] w-full">
      <div className="max-w-2xl w-full mx-auto space-y-6">
        
        {/* Top Back Navigation Bar */}
        <div className="flex items-center justify-between">
          <button
            id="back-to-home-btn"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition shadow-xs cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>ပင်မစာမျက်နှာသို့ ပြန်သွားမည်</span>
          </button>

          <span className="text-xs font-bold px-3 py-1 bg-red-100 text-red-800 rounded-full border border-red-200">
            {OFFICIAL_EXAM_SUBJECT.fullName} ({OFFICIAL_EXAM_SUBJECT.fullNameMm})
          </span>
        </div>

        {/* Section Title */}
        <div className="text-center py-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-emerald-800 drop-shadow-sm tracking-tight leading-snug">
            Bancassurance Department Exam Results
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium mt-1.5">
            မော်တော်ယာဉ် အာမခံ ဘာသာရပ် (Motor Product Subject) အမှတ်စာရင်း စစ်ဆေးရန်
          </p>
        </div>

        {/* Input Form Card */}
        <div className="bg-emerald-50/90 border border-emerald-200/90 rounded-2xl p-6 sm:p-8 shadow-xs w-full">
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Input Field Group */}
            <div className="space-y-2">
              <label htmlFor="student-name-input" className="block text-base font-bold text-slate-800">
                Name <span className="text-slate-600 font-normal">(အမည် / ခုံနံပါတ်)</span>
              </label>
              <div className="relative">
                <input
                  id="student-name-input"
                  type="text"
                  value={inputName}
                  onChange={(e) => {
                    setInputName(e.target.value);
                    if (errorMsg) setErrorMsg('');
                  }}
                  placeholder="ဥပမာ - Ja Seng Ing သို့မဟုတ် JSI"
                  className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-300 rounded-xl text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 shadow-xs transition"
                />
                <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
              {errorMsg && (
                <p className="text-xs text-rose-600 font-medium flex items-center gap-1.5 pt-1">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errorMsg}</span>
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-1">
              <button
                id="check-result-btn"
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-xl shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 min-w-[180px]"
              >
                <UserCheck className="w-5 h-5 text-emerald-700" />
                <span>စစ်ဆေးမည်</span>
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};
