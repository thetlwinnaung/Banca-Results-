import React, { useState } from 'react';
import { Lock, User, KeyRound, ShieldCheck, AlertCircle, ArrowRight } from 'lucide-react';

interface LoginPageProps {
  onLoginSuccess: (username: string) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanUsername = username.trim();
    
    if (!cleanUsername) {
      setErrorMsg('ကျေးဇူးပြု၍ အသုံးပြုသူအမည် (Username) ထည့်သွင်းပါ။');
      return;
    }
    if (!password) {
      setErrorMsg('ကျေးဇူးပြု၍ လျှို့ဝှက်နံပါတ် (Password) ထည့်သွင်းပါ။');
      return;
    }

    setIsLoading(true);
    setErrorMsg('');

    // Check credentials: Username - Admin, Password - Test@123
    setTimeout(() => {
      setIsLoading(false);
      if (cleanUsername.toLowerCase() === 'admin' && password === 'Test@123') {
        onLoginSuccess('Admin');
      } else {
        setErrorMsg('အသုံးပြုသူအမည် သို့မဟုတ် လျှို့ဝှက်နံပါတ် မှားယွင်းနေပါသည်။');
      }
    }, 400);
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8 bg-[#F3F4F6] w-full min-h-[calc(100vh-180px)]">
      <div className="max-w-md w-full mx-auto space-y-6">
        
        {/* Title Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-red-600 text-white shadow-md mb-1">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Portal Login
          </h2>
          <p className="text-sm text-slate-600 font-medium">
            ဘဏ်အာမခံဌာန အမှတ်စာရင်း စစ်ဆေးရန် အကောင့်ဝင်ရောက်ပါ
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          <form onSubmit={handleLogin} className="space-y-4">
            
            {/* Username Field */}
            <div className="space-y-1.5">
              <label htmlFor="login-username" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Username <span className="text-slate-500 font-normal">(အသုံးပြုသူအမည်)</span>
              </label>
              <div className="relative">
                <input
                  id="login-username"
                  type="text"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    if (errorMsg) setErrorMsg('');
                  }}
                  placeholder="Username ထည့်ပါ"
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                />
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <label htmlFor="login-password" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Password <span className="text-slate-500 font-normal">(လျှို့ဝှက်နံပါတ်)</span>
              </label>
              <div className="relative">
                <input
                  id="login-password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errorMsg) setErrorMsg('');
                  }}
                  placeholder="Password ထည့်ပါ"
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                />
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Error Message */}
            {errorMsg && (
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs font-medium text-rose-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              id="login-submit-btn"
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 px-4 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold text-sm rounded-xl shadow-xs transition duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 mt-2"
            >
              {isLoading ? (
                <span>စစ်ဆေးနေပါသည်...</span>
              ) : (
                <>
                  <KeyRound className="w-4 h-4" />
                  <span>အကောင့်ဝင်မည် (Sign In)</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

          </form>
        </div>

      </div>
    </div>
  );
};
