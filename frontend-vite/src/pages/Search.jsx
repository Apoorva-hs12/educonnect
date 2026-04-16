import React, { useState } from "react";
import { Search, X, Users, Star, Filter, ArrowRight, Play, MoreVertical } from "lucide-react";
import { Link } from "react-router-dom";

const tabs = [
  { id: "All", label: "Everything" },
  { id: "Courses", label: "Masterclasses" },
  { id: "Classes", label: "Live Sessions" },
  { id: "Instructors", label: "Educators" }
];

const searchResults = [
  { id: "1", type: "course", title: "React Advanced Concepts", instructor: "John Doe", rating: 4.9, students: 2340, price: "49", duration: "8 weeks", tag: "Advanced" },
  { id: "2", type: "course", title: "React Basics for Beginners", instructor: "Jane Smith", rating: 4.7, students: 1890, price: "Free", duration: "4 weeks", tag: "Beginner" },
];

export default function SearchResultsPage() {
  const [searchQuery, setSearchQuery] = useState("React");
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="p-6 lg:p-8 max-w-[1100px] mx-auto animate-in fade-in duration-700">
      {/* Search Header */}
      <div className="flex flex-col gap-6 mb-10">
        <div>
            <h1 className="text-3xl font-black text-[#0A1931] tracking-tight">Global Explorer</h1>
            <p className="text-[#757575] mt-1 font-medium">Find courses, workshops, and instructors worldwide.</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1 group">
                <Search size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-[#757575] group-focus-within:text-[#4A7FA7] transition-colors" />
                <input
                type="text"
                placeholder="Search anything..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-14 pl-14 pr-12 bg-white border border-[#E0E0E0] rounded-[1.25rem] text-[15px] font-bold outline-none focus:border-[#4A7FA7] focus:ring-8 focus:ring-[#4A7FA7]/5 transition-all shadow-sm"
                />
                {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#757575] hover:text-[#0A1931] bg-[#F6FAFD] p-1.5 rounded-lg transition-colors">
                    <X size={16} />
                </button>
                )}
            </div>
            <button className="h-14 px-6 rounded-[1.25rem] bg-white border border-[#E0E0E0] text-[#1A3D63] flex items-center justify-center gap-2 hover:bg-[#F6FAFD] transition-all font-black uppercase tracking-widest text-[11px] shadow-sm">
                <Filter size={16} /> Filters
            </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 text-[11px] font-black uppercase tracking-[0.15em] whitespace-nowrap rounded-[1rem] transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-[#0A1931] text-white shadow-xl shadow-[#0A1931]/20"
                : "bg-white text-[#757575] border border-[#E0E0E0] hover:border-[#4A7FA7]/50"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between mb-8">
        <p className="text-[13px] font-bold text-[#757575]">
            Discovering <span className="text-[#0A1931] font-black">24 Results</span> for <span className="text-[#4A7FA7] font-black italic">"{searchQuery}"</span>
        </p>
        <div className="flex gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4A7FA7] animate-pulse" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#4A7FA7] animate-pulse [animation-delay:200ms]" />
        </div>
      </div>

      <div className="space-y-12">
         {/* Courses Section */}
         {(activeTab === "All" || activeTab === "Courses") && (
            <div>
               <div className="flex items-center gap-3 mb-6">
                   <h2 className="text-[10px] font-black text-[#757575] uppercase tracking-[0.2em]">Validated Programs</h2>
                   <div className="flex-1 h-px bg-[#E0E0E0]/50" />
               </div>
               
               <div className="grid grid-cols-1 gap-6">
                  {searchResults.map((course) => (
                     <div key={course.id} className="group bg-white rounded-[2rem] border border-[#E0E0E0] p-6 flex flex-col lg:flex-row items-center gap-8 hover:shadow-2xl hover:border-[#4A7FA7]/30 transition-all duration-500 relative overflow-hidden">
                        <div className="w-full lg:w-64 h-44 bg-[#F6FAFD] rounded-[1.5rem] flex items-center justify-center shrink-0 relative overflow-hidden group/img border border-[#E0E0E0]/30">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#4A7FA7]/20 to-[#1A3D63]/20 group-hover/img:scale-110 transition-transform duration-700" />
                            <span className="text-4xl font-black text-[#4A7FA7] relative z-10 drop-shadow-sm">{course.title.charAt(0)}</span>
                            <div className="absolute top-4 left-4">
                                <span className="px-2.5 py-1 bg-white/40 backdrop-blur-md border border-white/50 rounded-lg text-[9px] font-black text-[#1A3D63] uppercase tracking-widest">{course.tag}</span>
                            </div>
                        </div>
                        
                        <div className="flex-1 w-full">
                           <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                                <div>
                                    <h3 className="text-xl font-black text-[#0A1931] mb-1 group-hover:text-[#4A7FA7] transition-colors tracking-tight">{course.title}</h3>
                                    <div className="flex items-center gap-3 text-xs font-bold text-[#757575]">
                                        <span className="hover:text-[#4A7FA7] cursor-pointer">By {course.instructor}</span>
                                        <span className="w-1 h-1 rounded-full bg-[#E0E0E0]" />
                                        <div className="flex items-center gap-1.5 text-[#F57C00]">
                                            <Star size={14} className="fill-current" />
                                            <span className="text-[#0A1931]">{course.rating}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end">
                                    <span className="text-2xl font-black text-[#0A1931]">{course.price === "Free" ? "FREE" : `$${course.price}`}</span>
                                    <span className="text-[10px] font-black text-[#757575] uppercase tracking-widest">{course.duration} Session</span>
                                </div>
                           </div>

                           <p className="text-[14px] leading-relaxed text-[#757575] mb-6 line-clamp-2 max-w-[650px]">
                               {course.title.includes("React") ? "Deep dive into component architecture, optimized state management, and the latest React ecosystem features used by top tech companies." : "Comprehensive learning path designed to take you from foundational knowledge to professional execution in less than two months."}
                           </p>

                           <div className="flex items-center gap-4">
                              <Link to={`/courses/${course.id}`} className="h-11 px-8 rounded-xl bg-[#0A1931] text-white text-[11px] font-black uppercase tracking-widest hover:-translate-y-1 transition-all shadow-xl shadow-[#0A1931]/10 flex items-center justify-center gap-2">
                                 Inspect Course <ArrowRight size={14} />
                              </Link>
                              <button className="w-11 h-11 rounded-xl bg-[#F6FAFD] border border-[#E0E0E0] flex items-center justify-center text-[#757575] hover:bg-white hover:border-[#4A7FA7]/30 transition-all">
                                 <MoreVertical size={18} />
                              </button>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         )}

         {/* Live Classes Section */}
         {(activeTab === "All" || activeTab === "Classes") && (
            <div>
               <div className="flex items-center gap-3 mb-6">
                   <h2 className="text-[10px] font-black text-[#757575] uppercase tracking-[0.2em]">Hot Sessions</h2>
                   <div className="flex-1 h-px bg-[#E0E0E0]/50" />
               </div>

               <div className="bg-[#0A1931] rounded-[2rem] p-8 flex flex-col md:flex-row items-center justify-between gap-8 text-white relative overflow-hidden shadow-2xl">
                  {/* Glow effect */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#4A7FA7]/20 rounded-full blur-[80px] -z-0" />
                  
                  <div className="flex items-start gap-6 relative z-10">
                     <div className="w-16 h-16 rounded-2xl bg-[#C62828]/20 border border-[#C62828]/30 flex items-center justify-center shrink-0">
                        <Play size={24} className="text-red-500 fill-current animate-pulse" />
                     </div>
                     <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="px-2 py-0.5 bg-red-500 rounded text-[9px] font-black uppercase tracking-widest">Live Now</span>
                            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest flex items-center gap-1"><Users size={12} /> 1,240 Online</span>
                        </div>
                        <h3 className="text-xl font-black mb-1">React Performance Optimization</h3>
                        <p className="text-sm font-medium text-white/60">Lead Architect: Mike Johnson • Advanced Strategy Session</p>
                     </div>
                  </div>
                  <Link to="/live-class" className="h-12 px-8 rounded-xl bg-white text-[#0A1931] text-[11px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all relative z-10 shadow-xl">
                     Bridge Session
                  </Link>
               </div>
            </div>
         )}
      </div>
      
      {/* Pagination */}
      <div className="flex items-center justify-center gap-3 mt-16 pb-12">
         <button className="h-11 px-5 rounded-xl text-[11px] font-black uppercase tracking-widest text-[#757575] hover:bg-[#F6FAFD] transition-all border border-transparent hover:border-[#E0E0E0]">Previous</button>
         <div className="flex items-center gap-1">
            {[1, 2, 3].map((page) => (
                <button
                key={page}
                className={`w-11 h-11 rounded-xl text-xs font-black transition-all border ${
                    page === 1
                    ? "bg-[#0A1931] text-white border-[#0A1931] shadow-lg shadow-[#0A1931]/10"
                    : "bg-white text-[#757575] border-[#E0E0E0] hover:border-[#4A7FA7]/50"
                }`}
                >
                {page}
                </button>
            ))}
         </div>
         <button className="h-11 px-5 rounded-xl text-[11px] font-black uppercase tracking-widest text-[#4A7FA7] hover:bg-[#F6FAFD] transition-all border border-transparent hover:border-[#B3CFE5]">Next Page</button>
      </div>

    </div>
  );
}
