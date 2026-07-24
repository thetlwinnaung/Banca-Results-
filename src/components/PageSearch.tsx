import React, { useState, useMemo } from 'react';
import { Search, ArrowLeft, UserCheck, Star, AlertCircle, FileText, CheckCircle2, XCircle, Award } from 'lucide-react';
import { MOCK_STUDENTS, OFFICIAL_EXAM_SUBJECT } from '../data/students';
import { StudentResult } from '../types';

interface PageSearchProps {
  onSearchSubmit: (name: string) => void;
  onBackToHome: () => void;
  onSelectStudent: (student: StudentResult) => void;
}

export const PageSearch: React.FC<PageSearchProps> = ({ onSearchSubmit, onBackToHome, onSelectStudent }) => {
  const [inputName, setInputName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [filterRank, setFilterRank] = useState<'All' | 'Distinction' | 'Pass' | 'Fail'>('All');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputName.trim()) {
      setErrorMsg('ကျေးဇူးပြု၍ စစ်ဆေးလိုသော အမည် သို့မဟုတ် ခုံနံပါတ် ထည့်သွင်းပါ။');
      return;
    }
    setErrorMsg('');
    onSearchSubmit(inputName.trim());
  };

  // Filter students for the master list
  const filteredStudents = useMemo(() => {
    return MOCK_STUDENTS.filter(s => {
      // Filter by rank tab
      if (filterRank !== 'All' && s.rank !== filterRank) {
        return false;
      }
      // Filter by search query if typed
      if (inputName.trim()) {
        const query = inputName.trim().toLowerCase();
        const matchName = s.name.toLowerCase().includes(query);
        const matchNameMm = s.nameMm.includes(query);
        const matchPrefix = s.prefix.toLowerCase().includes(query);
        return matchName || matchNameMm || matchPrefix;
      }
      return true;
    });
  }, [filterRank, inputName]);

  const distinctionCount = MOCK_STUDENTS.filter(s => s.rank === 'Distinction').length;
  const passCount = MOCK_STUDENTS.filter(s => s.rank === 'Pass').length;
  const failCount = MOCK_STUDENTS.filter(s => s.rank === 'Fail').length;

  return (
    <div className="flex-1 flex flex-col items-center justify-start p-4 sm:p-8 bg-[#F3F4F6] w-full">
      <div className="max-w-5xl w-full mx-auto space-y-6">
        
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

        {/* Section Title (Bold, Dark Green Text with Soft Drop Shadow) */}
        <div className="text-center py-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-emerald-800 drop-shadow-sm tracking-tight leading-snug">
            Bancassurance Department Exam Results
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium mt-1.5">
            မော်တော်ယာဉ် အာမခံ ဘာသာရပ် (Motor Product Subject) အမှတ်စာရင်း ရလဒ်များ
          </p>
        </div>

        {/* Input Form Card (Light Green Card Box) */}
        <div className="bg-emerald-50/90 border border-emerald-200/90 rounded-2xl p-6 sm:p-8 shadow-xs max-w-2xl mx-auto">
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

            {/* Submit Button (Centered light gray/white rounded button with subtle border and hover animations) */}
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

        {/* Master Result Table Section (Official Excel Dataset View) */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-xs p-5 sm:p-6 space-y-4">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-2 border-b border-slate-100">
            <div>
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-red-600" />
                <span>တရားဝင် အမှတ်စာရင်း စာရင်းချုပ် (Official Master List)</span>
              </h3>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                မော်တော်ယာဉ် အာမခံ စာမေးပွဲ ဖြေဆိုသူ ၁၈ ဦး၏ အမှတ်စာရင်း စာရင်းဇယား
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-bold">
              <button
                onClick={() => setFilterRank('All')}
                className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${
                  filterRank === 'All'
                    ? 'bg-white text-slate-900 shadow-2xs font-extrabold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                အားလုံး ({MOCK_STUDENTS.length})
              </button>
              <button
                onClick={() => setFilterRank('Distinction')}
                className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${
                  filterRank === 'Distinction'
                    ? 'bg-amber-500 text-white shadow-2xs font-extrabold'
                    : 'text-amber-800 hover:bg-amber-100'
                }`}
              >
                ဂုဏ်ထူး ({distinctionCount})
              </button>
              <button
                onClick={() => setFilterRank('Pass')}
                className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${
                  filterRank === 'Pass'
                    ? 'bg-emerald-600 text-white shadow-2xs font-extrabold'
                    : 'text-emerald-800 hover:bg-emerald-100'
                }`}
              >
                အောင် ({passCount})
              </button>
              <button
                onClick={() => setFilterRank('Fail')}
                className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${
                  filterRank === 'Fail'
                    ? 'bg-rose-600 text-white shadow-2xs font-extrabold'
                    : 'text-rose-800 hover:bg-rose-100'
                }`}
              >
                ကျ ({failCount})
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-bold text-xs uppercase tracking-wider">
                    <th className="py-3 px-4 text-center w-12">No</th>
                    <th className="py-3 px-4">Name (အမည်)</th>
                    <th className="py-3 px-4 text-center">PreFix</th>
                    <th className="py-3 px-4 text-center">Subject</th>
                    <th className="py-3 px-4 text-center">Mark</th>
                    <th className="py-3 px-4 text-center">Rank (အဆင့်)</th>
                    <th className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {filteredStudents.length > 0 ? (
                    filteredStudents.map((std) => (
                      <tr 
                        key={std.id}
                        onClick={() => onSelectStudent(std)}
                        className="hover:bg-slate-50 transition cursor-pointer group"
                      >
                        <td className="py-3 px-4 text-center font-bold text-slate-500 text-xs">
                          {std.no}
                        </td>
                        <td className="py-3 px-4">
                          <div className="font-bold text-slate-900 group-hover:text-emerald-700 transition">
                            {std.name}
                          </div>
                          <div className="text-xs text-slate-500">
                            {std.nameMm}
                          </div>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className="font-mono text-xs bg-slate-100 text-slate-700 font-bold px-2 py-0.5 rounded border border-slate-200">
                            {std.prefix}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center text-xs font-semibold text-slate-600">
                          {std.subjectName}
                        </td>
                        <td className="py-3 px-4 text-center font-extrabold text-base text-slate-900">
                          {std.mark}
                        </td>
                        <td className="py-3 px-4 text-center font-bold">
                          {std.rank === 'Distinction' ? (
                            <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-1 rounded-full border border-amber-300">
                              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                              Distinction (ဂုဏ်ထူး)
                            </span>
                          ) : std.rank === 'Pass' ? (
                            <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full border border-emerald-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                              Pass (အောင်)
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-800 bg-rose-100 px-2.5 py-1 rounded-full border border-rose-300">
                              <XCircle className="w-3.5 h-3.5 text-rose-600" />
                              Fail (ကျ)
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-right">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectStudent(std);
                            }}
                            className="inline-flex items-center gap-1 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 px-3 py-1.5 rounded-lg transition cursor-pointer"
                          >
                            <span>စစ်ဆေးမည်</span>
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={7} className="py-8 text-center text-slate-500 font-medium">
                        ရှာဖွေထားသော စာရင်းမရှိပါ (No results found)
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2 pt-1 font-medium">
            <p>* စာရင်းမှ မည်သည့် စာဖြေသူကိုမဆို နှိပ်၍ အပြည့်အစုံ အမှတ်စာရင်းကို ကြည့်ရှုနိုင်ပါသည်။</p>
            <p>Source Data: Motor Product Subject Official Marks List (2026)</p>
          </div>

        </div>

      </div>
    </div>
  );
};
