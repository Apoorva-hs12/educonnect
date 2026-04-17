import React from "react";
import { Link } from "react-router-dom";
import { GraduationCap, ArrowRight, Play, CheckCircle } from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";

export default function LandingPage() {
  const { user, initialize } = useAuthStore();

  React.useEffect(() => {
    initialize();
  }, [initialize]);

  const startLearningLink = "/signup";

  return (
    <div className="min-h-screen bg-[#F6FAFD] flex flex-col font-sans">
      {/* Header */}
      <header className="px-6 lg:px-12 py-6 flex items-center justify-between sticky top-0 bg-[#F6FAFD]/80 backdrop-blur-md z-50 border-b border-[#E0E0E0]/50">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#4A7FA7] to-[#1A3D63] rounded-lg flex items-center justify-center text-white shadow-lg shadow-[#4A7FA7]/20">
               <GraduationCap size={24} />
            </div>
            <span className="text-xl font-bold text-[#0A1931] font-display">EduConnect</span>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-8">
           <a href="#features" className="text-sm font-semibold text-[#1A3D63] hover:text-[#4A7FA7] transition-colors">Features</a>
           <a href="#courses" className="text-sm font-semibold text-[#1A3D63] hover:text-[#4A7FA7] transition-colors">Courses</a>
           <a href="#pricing" className="text-sm font-semibold text-[#1A3D63] hover:text-[#4A7FA7] transition-colors">Pricing</a>
        </div>
        <div className="flex items-center gap-3">
          {user ? (
            <Link to="/dashboard" className="btn-primary !w-auto shadow-lg shadow-[#4A7FA7]/20">Dashboard</Link>
          ) : (
            <>
              <Link to="/signin" className="hidden sm:flex text-sm font-bold text-[#4A7FA7] hover:underline px-2">Log In</Link>
              <Link to="/signup" className="btn-primary !w-auto shadow-lg shadow-[#4A7FA7]/20">Get Started</Link>
            </>
          )}
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 lg:px-8 py-20 lg:py-32 text-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#B3CFE5]/30 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#4A7FA7]/10 rounded-full blur-3xl -z-10" />
        
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E0E0E0]/50 text-[#1A3D63] text-xs font-bold uppercase tracking-wider mb-8 border border-[#E0E0E0]">
           <span className="w-2 h-2 rounded-full bg-[#2E7D32] animate-pulse" />
           Platform Live Version 2.0
        </div>
        
        <h1 className="text-5xl lg:text-7xl font-extrabold text-[#0A1931] mb-6 tracking-tight font-display max-w-4xl drop-shadow-sm">
          Master the Future with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A7FA7] to-[#1A3D63]">EduConnect</span>
        </h1>
        
        <p className="text-lg lg:text-xl text-[#757575] mb-10 max-w-2xl leading-relaxed">
          The ultimate platform for learning software development, design, and business skills. Start building your portfolio today.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link to={startLearningLink} className="btn-primary !h-14 !px-8 text-lg w-full sm:w-auto shadow-xl shadow-[#4A7FA7]/30 hover:-translate-y-1 transition-transform">
             Start Learning Now
          </Link>
          <a href="#demo" className="btn-secondary !h-14 !px-8 text-lg w-full sm:w-auto gap-2 bg-white hover:bg-[#F6FAFD] hover:-translate-y-1 transition-transform border border-[#E0E0E0]">
             <Play size={20} className="text-[#1A3D63]" /> View Demo
          </a>
        </div>
        
        <div className="mt-16 flex items-center justify-center gap-8 text-sm font-medium text-[#757575] flex-wrap">
           <div className="flex items-center gap-2">
              <CheckCircle size={18} className="text-[#2E7D32]" /> No credit card required
           </div>
           <div className="flex items-center gap-2">
              <CheckCircle size={18} className="text-[#2E7D32]" /> 14-day free trial on Pro
           </div>
           <div className="flex items-center gap-2">
              <CheckCircle size={18} className="text-[#2E7D32]" /> Cancel anytime
           </div>
        </div>
      </main>
      
      <div className="border-t border-[#E0E0E0] py-8 text-center bg-white mt-auto">
         <p className="text-sm font-bold text-[#1A3D63]">&copy; 2024 EduConnect Platform. All rights reserved.</p>
      </div>
    </div>
  );
}
