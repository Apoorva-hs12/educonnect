import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Plus,
  Image as ImageIcon,
  Video,
  FileText,
  DollarSign,
  Clock,
  BookOpen,
  ChevronRight,
  Settings,
  X,
  PlusCircle,
  Layout,
  Upload,
  Save,
  Rocket,
  ChevronLeft,
  CheckCircle2
} from "lucide-react";

export default function CreateCoursePage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    category: "Web Development",
    price: "",
    level: "Beginner",
    thumbnail: null,
    modules: [{ title: "Introduction", lessons: ["Welcome to the course"] }]
  });

  const steps = [
    { id: 1, name: "Core Concept", icon: BookOpen },
    { id: 2, name: "Syllabus", icon: Layout },
    { id: 3, name: "Assets & ROI", icon: DollarSign },
    { id: 4, name: "Deployment", icon: Rocket },
  ];

  const handleNext = () => setCurrentStep(prev => Math.min(prev + 1, 4));
  const handleBack = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="p-6 lg:p-12 max-w-[1100px] mx-auto min-h-screen font-sans animate-in fade-in duration-700">
      {/* Navigation Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
            <button onClick={() => navigate("/dashboard")} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#757575] hover:text-[#4A7FA7] transition-all mb-4 group w-fit">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Control Panel
            </button>
            <h1 className="text-4xl font-black text-[#0A1931] tracking-tight">Create Educational Product</h1>
            <p className="text-[#757575] mt-2 font-medium">Engineer a premium learning experience for your global audience.</p>
        </div>
        <div className="flex items-center gap-3">
             <div className="px-4 py-2 bg-[#F6FAFD] rounded-xl border border-[#E0E0E0] shadow-sm flex items-center gap-2">
                <span className="text-[10px] font-black text-[#757575] uppercase tracking-widest">Progress</span>
                <span className="text-sm font-black text-[#4A7FA7]">{Math.round((currentStep/4) * 100)}%</span>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Progress Timeline Sidebar */}
        <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
                {steps.map((step, i) => (
                    <div key={step.id} className="relative">
                        <div className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-500 border ${
                            currentStep === step.id 
                            ? "bg-[#0A1931] text-white border-[#0A1931] shadow-2xl shadow-[#0A1931]/20 scale-[1.05] z-10" 
                            : currentStep > step.id 
                            ? "bg-white text-[#2E7D32] border-[#2E7D32]/20 opacity-80" 
                            : "bg-white text-[#757575] border-[#E0E0E0] opacity-40 grayscale"
                        }`}>
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                                currentStep === step.id ? "bg-white/10" : "bg-[#F6FAFD]"
                            }`}>
                                {currentStep > step.id ? <CheckCircle2 size={20} /> : <step.icon size={20} />}
                            </div>
                            <div>
                                <p className="text-[9px] font-black uppercase tracking-widest opacity-50">Step {step.id}</p>
                                <p className="text-[13px] font-black leading-none mt-1">{step.name}</p>
                            </div>
                        </div>
                        {i < steps.length - 1 && (
                            <div className={`w-[2px] h-4 mx-9 my-1 ${currentStep > i + 1 ? "bg-[#2E7D32]" : "bg-[#E0E0E0]"}`} />
                        )}
                    </div>
                ))}
            </div>
        </div>

        {/* Form Content Engine */}
        <div className="lg:col-span-3">
            <div className="bg-white rounded-[2.5rem] border border-[#E0E0E0] shadow-xl shadow-[#4A7FA7]/5 overflow-hidden min-h-[500px] flex flex-col relative">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 p-8 opacity-[0.02] pointer-events-none">
                     <Layout size={300} strokeWidth={1} />
                </div>

                <div className="p-8 lg:p-12 flex-1 relative z-10">
                {currentStep === 1 && (
                    <div className="space-y-10 animate-in fade-in slide-in-from-right-8 duration-500">
                        <div className="space-y-2">
                            <label className="text-[11px] font-black text-[#757575] uppercase tracking-[0.2em] mb-4 block">Product Title</label>
                            <input 
                                type="text" 
                                placeholder="e.g. Architecting Scalable Cloud Systems"
                                className="w-full h-14 px-6 rounded-2xl bg-[#F6FAFD] border border-[#E0E0E0] text-[16px] font-bold text-[#0A1931] outline-none focus:border-[#4A7FA7] focus:ring-8 focus:ring-[#4A7FA7]/5 transition-all"
                            />
                        </div>
                        
                        <div className="space-y-2">
                            <label className="text-[11px] font-black text-[#757575] uppercase tracking-[0.2em] mb-4 block">Manifesto / Description</label>
                            <textarea 
                                rows={6}
                                placeholder="Articulate the core value proposition and transformation path..."
                                className="w-full p-6 rounded-[2rem] bg-[#F6FAFD] border border-[#E0E0E0] text-[15px] font-medium text-[#0A1931] outline-none focus:border-[#4A7FA7] transition-all resize-none shadow-inner"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-[11px] font-black text-[#757575] uppercase tracking-[0.2em] mb-4 block">Classification</label>
                                <select className="w-full h-14 px-6 rounded-2xl bg-[#F6FAFD] border border-[#E0E0E0] text-[14px] font-black text-[#1A3D63] outline-none appearance-none cursor-pointer">
                                    <option>Technical Engineering</option>
                                    <option>Strategic Design</option>
                                    <option>Venture Growth</option>
                                    <option>Applied Intelligence</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[11px] font-black text-[#757575] uppercase tracking-[0.2em] mb-4 block">Difficulty Gradient</label>
                                <select className="w-full h-14 px-6 rounded-2xl bg-[#F6FAFD] border border-[#E0E0E0] text-[14px] font-black text-[#1A3D63] outline-none appearance-none cursor-pointer">
                                    <option>Foundational</option>
                                    <option>Professional</option>
                                    <option>Expert / Specialist</option>
                                </select>
                            </div>
                        </div>
                    </div>
                )}

                {currentStep === 2 && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-base font-black text-[#0A1931] uppercase tracking-widest">Syllabus Architecture</h3>
                            <button className="h-10 px-4 rounded-xl bg-[#4A7FA7]/10 text-[#4A7FA7] text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-[#4A7FA7] hover:text-white transition-all">
                                <Plus size={16} /> Integrate Module
                            </button>
                        </div>
                        <div className="space-y-6">
                            {[1, 2].map((m) => (
                                <div key={m} className="p-8 rounded-[2rem] border border-[#E0E0E0] bg-[#F6FAFD]/30 group hover:border-[#4A7FA7]/30 transition-all">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-white border border-[#E0E0E0] flex items-center justify-center text-[13px] font-black text-[#4A7FA7] shadow-sm">{m}</div>
                                            <input 
                                                defaultValue={m === 1 ? "Core Fundamentals & Setup" : "Advanced State Logic"}
                                                className="bg-transparent text-lg font-black text-[#0A1931] border-b border-transparent focus:border-[#4A7FA7] outline-none min-w-[300px]"
                                            />
                                        </div>
                                        <button className="w-10 h-10 rounded-xl hover:bg-red-50 text-[#757575] hover:text-red-500 transition-all flex items-center justify-center">
                                            <X size={18} />
                                        </button>
                                    </div>
                                    <div className="space-y-3 pl-14">
                                        <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-[#E0E0E0] shadow-sm hover:shadow-md transition-all cursor-pointer">
                                            <Video size={16} className="text-[#4A7FA7]" />
                                            <span className="text-[13px] font-bold text-[#1A3D63] flex-1">1.1 Infrastructure Blueprint & Environment</span>
                                            <Settings size={14} className="text-[#E0E0E0] group-hover:text-[#757575] transition-colors" />
                                        </div>
                                        <button className="w-full py-4 border-2 border-dashed border-[#E0E0E0] rounded-2xl text-[10px] uppercase font-black tracking-[0.2em] text-[#757575] hover:border-[#4A7FA7] hover:text-[#4A7FA7] hover:bg-white transition-all">
                                            + Insert Lesson Unit
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {currentStep === 3 && (
                    <div className="space-y-12 animate-in fade-in slide-in-from-right-8 duration-500">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-4">
                                <label className="text-[11px] font-black text-[#757575] uppercase tracking-[0.2em] mb-4 block">Product Cover Art</label>
                                <div className="aspect-video bg-[#F6FAFD] rounded-[2rem] border-2 border-dashed border-[#E0E0E0] flex flex-col items-center justify-center text-[#757575] hover:bg-white hover:border-[#4A7FA7] hover:shadow-2xl hover:shadow-[#4A7FA7]/5 cursor-pointer transition-all group/upload h-[200px]">
                                    <div className="w-16 h-16 rounded-2xl bg-white border border-[#E0E0E0] flex items-center justify-center mb-4 group-hover/upload:scale-110 transition-transform">
                                        <Upload size={24} className="text-[#4A7FA7]" />
                                    </div>
                                    <p className="text-[11px] font-black uppercase tracking-widest">Transmit Assets</p>
                                    <p className="text-[9px] font-bold text-[#BDBDBD] mt-1 italic">Dimensions: 1920x1080 (HD)</p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[11px] font-black text-[#757575] uppercase tracking-[0.2em] mb-4 block">Valuation (USD)</label>
                                    <div className="relative group">
                                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-[#757575] group-focus-within:text-[#4A7FA7] transition-colors font-black text-xl">$</div>
                                        <input 
                                            type="number" 
                                            placeholder="149.00"
                                            className="w-full h-16 pl-12 pr-6 rounded-2xl bg-[#F6FAFD] border border-[#E0E0E0] text-[20px] font-black text-[#0A1931] outline-none focus:border-[#4A7FA7] transition-all"
                                        />
                                    </div>
                                </div>
                                <div className="p-6 bg-[#2E7D32]/5 rounded-2xl border border-[#2E7D32]/10">
                                    <p className="text-[10px] text-[#2E7D32] uppercase font-black tracking-widest leading-relaxed">Instructor Insights:</p>
                                    <p className="text-[12px] text-[#214a24] font-medium leading-relaxed mt-2 italic">Premium courses priced between $99 - $199 see a 40% higher completion rate globally.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {currentStep === 4 && (
                    <div className="flex flex-col items-center justify-center py-16 text-center animate-in zoom-in-95 duration-700">
                        <div className="relative mb-10">
                            <div className="absolute inset-0 bg-[#2E7D32]/20 rounded-full blur-[40px] animate-pulse" />
                            <div className="relative w-28 h-28 bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] rounded-[2.5rem] flex items-center justify-center text-white shadow-2xl relative">
                                <Rocket size={48} className="animate-bounce" />
                            </div>
                        </div>
                        <h3 className="text-3xl font-black text-[#0A1931] tracking-tight">Deployment Ready</h3>
                        <p className="text-[#757575] text-[15px] max-w-sm mt-4 leading-relaxed font-medium">
                            Your educational product is synchronized and ready for the global marketplace. Finalize to launch the experience.
                        </p>
                        
                        <div className="mt-12 p-8 bg-[#F6FAFD] rounded-[2.5rem] text-left w-full max-w-[500px] border border-[#E0E0E0] shadow-inner relative overflow-hidden group">
                           <div className="absolute top-0 right-0 p-6 opacity-[0.05] grayscale group-hover:grayscale-0 transition-all">
                                <Save size={100} />
                           </div>
                           <p className="text-[11px] font-black text-[#0A1931] uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                                <CheckCircle2 size={16} className="text-[#2E7D32]" /> Launch Checklist
                           </p>
                           <ul className="space-y-4">
                                {[
                                    { label: "Identity & Meta-data", status: "Verified" },
                                    { label: "Curriculum Architecture", status: "Synchronized" },
                                    { label: "Asset Integration", status: "Finalized" },
                                    { label: "ROI & Monetization Hub", status: "Active" },
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center justify-between">
                                        <span className="text-[13px] font-bold text-[#1A3D63]">{item.label}</span>
                                        <span className="text-[9px] font-black text-[#2E7D32] uppercase tracking-[0.1em]">{item.status}</span>
                                    </li>
                                ))}
                           </ul>
                        </div>
                    </div>
                )}
                </div>

                {/* Tactical Footer */}
                <div className="px-8 lg:px-12 py-8 bg-[#F6FAFD] border-t border-[#E0E0E0] flex items-center justify-between">
                   <button 
                     onClick={handleBack}
                     disabled={currentStep === 1}
                     className="h-14 px-8 rounded-2xl font-black text-[11px] uppercase tracking-widest text-[#1A3D63] hover:bg-white disabled:opacity-30 transition-all border border-transparent hover:border-[#E0E0E0] flex items-center gap-2"
                   >
                     <ChevronLeft size={16} /> Revisit
                   </button>
                   <button 
                     onClick={handleNext}
                     className={`h-14 px-10 rounded-2xl text-white font-black text-[11px] uppercase tracking-widest flex items-center gap-3 transition-all shadow-2xl ${
                        currentStep === 4 
                        ? "bg-[#2E7D32] shadow-[#2E7D32]/30 hover:bg-[#1B5E20]" 
                        : "bg-[#0A1931] shadow-[#0A1931]/30 hover:-translate-y-1"
                     }`}
                   >
                     {currentStep === 4 ? "Commence Launch" : "Proceed Evolution"} <ChevronRight size={16} />
                   </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
