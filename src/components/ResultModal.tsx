import React from 'react';
import { 
  X, 
  Printer, 
  Award, 
  CheckCircle2, 
  XCircle, 
  FileText, 
  Star,
  Building2,
  Calendar,
  Hash,
  User,
  ShieldCheck
} from 'lucide-react';
import { StudentResult } from '../types';

interface ResultModalProps {
  student: StudentResult | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ResultModal: React.FC<ResultModalProps> = ({ student, isOpen, onClose }) => {
  if (!isOpen || !student) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      {/* Modal Container */}
      <div 
        className="modal-container bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Header Bar */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between no-print">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-red-600 text-white">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base tracking-tight">Official Exam Result Sheet</h3>
              <p className="text-xs text-slate-300">Bancassurance Department • 2026</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
            title="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Printable Official Document Body */}
        <div id="printable-result-sheet" className="p-6 sm:p-8 space-y-6">
          
          {/* Document Header (Department Header, Corporate Red) */}
          <div className="text-center pb-4 border-b border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-red-600 tracking-tight">
              Bancassurance Department
            </h2>
            <p className="text-lg font-bold text-red-600 tracking-wide mt-0.5">
              Exam Result (၂၀၂၆ ခုနှစ် ဘဏ်အာမခံ စာမေးပွဲ ရလဒ်)
            </p>
          </div>

          {/* Student Header Info */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600">
                <User className="w-4 h-4 text-slate-700" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-semibold uppercase">Student Name (အမည်)</p>
                <p className="font-bold text-slate-900 text-base">{student.name} ({student.nameMm})</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600">
                <Hash className="w-4 h-4 text-slate-700" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-semibold uppercase">Roll No (ခုံနံပါတ်)</p>
                <p className="font-bold text-slate-900 text-base">{student.rollNo}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600">
                <Building2 className="w-4 h-4 text-slate-700" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-semibold uppercase">Department (ဌာန)</p>
                <p className="font-semibold text-slate-800">{student.department}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600">
                <Calendar className="w-4 h-4 text-slate-700" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-semibold uppercase">Batch / Exam Year</p>
                <p className="font-semibold text-slate-800">{student.batch}</p>
              </div>
            </div>

          </div>

          {/* Overall Pass/Fail Banner */}
          <div className={`p-4 rounded-xl border flex items-center justify-between gap-4 ${
            student.isPassed 
              ? 'bg-emerald-50 border-emerald-200 text-emerald-900' 
              : 'bg-rose-50 border-rose-200 text-rose-900'
          }`}>
            <div className="flex items-center gap-3">
              {student.isPassed ? (
                <CheckCircle2 className="w-7 h-7 text-emerald-600 shrink-0" />
              ) : (
                <XCircle className="w-7 h-7 text-rose-600 shrink-0" />
              )}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Overall Status (အတည်ပြုချက်)
                </p>
                <p className="text-lg font-bold">
                  {student.isPassed ? 'အောင်မြင်သည် (PASSED)' : 'မအောင်မြင်ပါ (FAILED)'}
                </p>
              </div>
            </div>

            <span className={`px-4 py-1.5 rounded-full text-base font-extrabold tracking-wide ${
              student.isPassed 
                ? 'bg-emerald-600 text-white shadow-xs' 
                : 'bg-rose-600 text-white shadow-xs'
            }`}>
              {student.isPassed ? 'အောင်' : 'ကျ'}
            </span>
          </div>

          {/* Detailed Marks Table (ဘာသာရပ်အလိုက် အမှတ်စာရင်း) */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>ဘာသာရပ်အလိုက် အမှတ်စာရင်း (Detailed Marks Breakdown)</span>
            </h4>

            <div className="border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-bold text-xs uppercase tracking-wider">
                      <th className="py-3 px-4">Code</th>
                      <th className="py-3 px-4">Subject Name (ဘာသာရပ်)</th>
                      <th className="py-3 px-4 text-center">Score (အမှတ်)</th>
                      <th className="py-3 px-4 text-center">Grade</th>
                      <th className="py-3 px-4 text-right">Status (အခြေအနေ)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {student.subjects.map((sub, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-3 px-4 font-mono text-xs text-slate-500 font-bold">{sub.code}</td>
                        <td className="py-3 px-4 font-semibold text-slate-900">
                          <div>{sub.name}</div>
                          <div className="text-xs text-slate-500 font-normal">{sub.nameMm}</div>
                        </td>
                        <td className="py-3 px-4 text-center font-bold text-slate-900 text-base">
                          {sub.score} <span className="text-xs text-slate-400 font-normal">/ {sub.maxScore}</span>
                        </td>
                        <td className="py-3 px-4 text-center font-bold">
                          <span className={`inline-block px-2.5 py-0.5 rounded text-xs ${
                            sub.isDistinction 
                              ? 'bg-amber-100 text-amber-800 border border-amber-300' 
                              : sub.score >= 50 
                                ? 'bg-slate-100 text-slate-800' 
                                : 'bg-rose-100 text-rose-800'
                          }`}>
                            {sub.grade}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right font-bold">
                          {sub.isDistinction ? (
                            <span className="inline-flex items-center gap-1 text-xs text-amber-700 font-bold bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                              ဂုဏ်ထူး
                            </span>
                          ) : sub.score >= 50 ? (
                            <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                              အောင်
                            </span>
                          ) : (
                            <span className="text-xs text-rose-700 font-bold bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">
                              ကျ
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Distinction Section (ဂုဏ်ထူး ရ/မရ) */}
          <div className="bg-amber-50/70 border border-amber-200/90 rounded-xl p-5 space-y-2">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-600" />
              <h4 className="text-sm font-bold text-slate-900">
                Distinction Breakdown (ဂုဏ်ထူး ရ/မရ)
              </h4>
            </div>

            {student.distinctions.length > 0 ? (
              <div className="space-y-2 pt-1">
                <p className="text-xs text-slate-600 font-medium">
                  ဂုဏ်ထူး ရရှိသော ဘာသာရပ်များ ({student.distinctions.length} ခု) -
                </p>
                <div className="flex flex-wrap gap-2">
                  {student.distinctions.map((d, i) => (
                    <span 
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 border border-amber-300 rounded-lg text-xs font-bold shadow-2xs"
                    >
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      <span>{d.name} ({d.nameMm})</span>
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              <div className="p-3 bg-white/80 border border-amber-200 rounded-lg text-sm text-slate-700 font-semibold text-center">
                ဂုဏ်ထူးမရပါ (No Distinction Awarded)
              </div>
            )}
          </div>

          {/* Total Score & Summary Grade */}
          <div className="bg-slate-900 text-white rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Total Aggregate Score</p>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-3xl font-extrabold text-white">{student.totalScore}</span>
                <span className="text-slate-400 text-sm">/ {student.maxTotal} Marks ({student.percentage}%)</span>
              </div>
            </div>

            <div className="text-right sm:text-right text-center">
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Remarks</p>
              <p className="text-sm font-bold text-amber-400 mt-0.5">{student.summaryRemarks}</p>
            </div>
          </div>

        </div>

        {/* Modal Action Buttons Footer */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 no-print">
          <p className="text-xs text-slate-500 font-medium">
            * ဤအမှတ်စာရင်းသည် ဘဏ်အာမခံဌာနမှ ထုတ်ပြန်သော တရားဝင် ရလဒ် ဖြစ်ပါသည်။
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              id="print-result-btn"
              onClick={handlePrint}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl shadow-2xs transition cursor-pointer"
            >
              <Printer className="w-4 h-4 text-slate-700" />
              <span>ထုတ်ယူမည် (Print / Save)</span>
            </button>
            <button
              id="close-modal-btn"
              onClick={onClose}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-2xs transition cursor-pointer"
            >
              <span>ပိတ်မည် (Close)</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
