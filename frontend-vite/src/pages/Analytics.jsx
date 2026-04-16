import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  IndianRupee,
  Users,
  Award,
  ArrowDown,
  ArrowUp,
  Download,
  Calendar,
  Filter,
  BarChart2,
  PieChart,
  Target,
  ArrowLeft,
  Star as StarIcon,
  Clock as ClockIcon,
  Zap
} from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";

const analyticsStats = [
  { label: "Total Revenue", value: "₹32,450", change: "+14.5%", up: true, icon: IndianRupee, color: "bg-emerald-500" },
  { label: "Enrollment Velocity", value: "82%", change: "+5.2%", up: true, icon: Users, color: "bg-blue-500" },
  { label: "Completion Rate", value: "64%", change: "-2.1%", up: false, icon: Target, color: "bg-orange-500" },
  { label: "Active Pulse", value: "3,240h", change: "+22.4%", up: true, icon: ClockIcon, color: "bg-purple-500" },
];

const topCourses = [
  { name: "React Workshop", revenue: "₹4,200", enrollments: 240, rating: 4.9 },
  { name: "Advanced Node.js", revenue: "₹3,150", enrollments: 180, rating: 4.7 },
  { name: "UI/UX Principles", revenue: "₹2,800", enrollments: 150, rating: 4.8 },
  { name: "Python AI 101", revenue: "₹1,200", enrollments: 320, rating: 4.6 },
];

export default function AnalyticsPage() {
  const { user } = useAuthStore();
  const isAdmin = user?.role === "admin";
  const [timeRange, setTimeRange] = useState("Last 30 Days");

  // Filter stats based on role
  const filteredStats = analyticsStats.filter(stat => isAdmin || stat.label !== "Total Revenue");
  if (!isAdmin) {
    // Add a specialized instructor stat
    filteredStats.unshift({ label: "Student Feedback", value: "4.9/5", change: "+0.2", up: true, icon: StarIcon, color: "bg-amber-500" });
  }

  return (
    <div className="p-6 lg:p-12 max-w-[1200px] mx-auto animate-in fade-in duration-700">
      {/* Header Strategy */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
            <Link to="/dashboard" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#757575] hover:text-[#4A7FA7] transition-all mb-4 group w-fit">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Command Center
            </Link>
            <h1 className="text-4xl font-black text-[#0A1931] tracking-tight">{isAdmin ? "Growth Diagnostics" : "Academic Performance"}</h1>
            <p className="text-[#757575] mt-2 font-medium">
              {isAdmin 
                ? "Analyze revenue performance, student engagement, and educational vectors."
                : "Monitor student progression, engagement trends, and course satisfaction rates."}
            </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative group">
            <Calendar size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#757575]" />
            <select 
                value={timeRange} 
                onChange={(e) => setTimeRange(e.target.value)}
                className="h-12 pl-12 pr-10 bg-white border border-[#E0E0E0] rounded-2xl text-[11px] font-black uppercase tracking-widest text-[#0A1931] outline-none focus:border-[#4A7FA7] focus:ring-8 focus:ring-[#4A7FA7]/5 appearance-none cursor-pointer transition-all shadow-sm"
            >
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                <option>Last 6 Months</option>
                <option>Fiscal Year</option>
            </select>
          </div>
          <button className="h-12 px-6 bg-[#0A1931] text-white rounded-2xl text-[11px] font-black uppercase tracking-widest hover:-translate-y-1 transition-all flex items-center gap-2 shadow-xl shadow-[#0A1931]/20">
            <Download size={16} /> Data Export
          </button>
        </div>
      </div>

      {/* KPI Matrix */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {filteredStats.map((stat, i) => (
          <div key={i} className="group bg-white p-8 rounded-[2rem] border border-[#E0E0E0] shadow-sm hover:shadow-2xl hover:border-[#4A7FA7]/30 transition-all duration-500 relative overflow-hidden">
            <div className={`absolute top-0 right-0 p-4 opacity-[0.05] group-hover:scale-150 transition-transform duration-700`}>
                <stat.icon size={100} strokeWidth={1} />
            </div>
            
            <div className="flex items-center justify-between mb-6 relative z-10">
               <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg ${stat.color}`}>
                 <stat.icon size={24} />
               </div>
               <span className={`text-[10px] font-black flex items-center gap-1 px-3 py-1 rounded-lg ${
                 stat.up ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-red-50 text-red-600 border border-red-100'
               }`}>
                 {stat.up ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
                 {stat.change}
               </span>
            </div>
            <p className="text-[10px] font-black text-[#757575] uppercase tracking-[0.2em] relative z-10">{stat.label}</p>
            <h3 className="text-3xl font-black text-[#0A1931] mt-2 tracking-tight relative z-10 group-hover:text-[#4A7FA7] transition-colors">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* Visual Analytics Hub */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Revenue/Engagement Chart Engine */}
        <div className="lg:col-span-2 bg-white p-10 rounded-[2.5rem] border border-[#E0E0E0] shadow-sm relative overflow-hidden group">
            <div className="flex items-center justify-between mb-12">
                <div>
                    <h3 className="text-lg font-black text-[#0A1931] flex items-center gap-3">
                        {isAdmin ? <BarChart2 size={24} className="text-[#4A7FA7]" /> : <TrendingUp size={24} className="text-[#4A7FA7]" />}
                        {isAdmin ? "Capital Growth Flux" : "Course Engagement Trends"}
                    </h3>
                    <p className="text-[10px] font-bold text-[#757575] uppercase tracking-widest mt-1">
                      {isAdmin ? "Monthly Financial Projection" : "Student Interaction Density"}
                    </p>
                </div>
                <div className="flex gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#4A7FA7]" />
                    <span className="w-2 h-2 rounded-full bg-[#B3CFE5]" />
                </div>
            </div>
            
            <div className="h-72 flex items-end gap-3 px-2 relative">
                {/* Horizontal Guide Lines */}
                <div className="absolute inset-x-0 top-0 h-px bg-[#F6FAFD]" />
                <div className="absolute inset-x-0 top-1/4 h-px bg-[#F6FAFD]" />
                <div className="absolute inset-x-0 top-2/4 h-px bg-[#F6FAFD]" />
                <div className="absolute inset-x-0 top-3/4 h-px bg-[#F6FAFD]" />

                {[40, 25, 65, 45, 80, 55, 90, 70, 40, 60, 30, 85].map((h, i) => (
                    <div key={i} className="flex-1 group/bar relative z-10 h-full flex items-end">
                        <div 
                            className="w-full bg-[#B3CFE5] group-hover/bar:bg-[#4A7FA7] transition-all duration-500 rounded-t-xl relative border-x border-transparent group-hover/bar:border-[#F6FAFD]" 
                            style={{ height: `${h}%` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-[#4A7FA7]/20 to-transparent opacity-0 group-hover/bar:opacity-100 transition-opacity" />
                        </div>
                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-3 py-2 bg-[#0A1931] text-white text-[10px] font-black rounded-xl opacity-0 group-hover/bar:opacity-100 transition-all scale-75 group-hover/bar:opacity-100 whitespace-nowrap shadow-2xl z-50">
                            {isAdmin ? `₹${h * 2500}` : `${h * 12} Students`}
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="flex justify-between mt-8 border-t border-[#F6FAFD] pt-6 text-[11px] font-black text-[#757575] uppercase tracking-widest">
                <span>JAN</span>
                <span>MAR</span>
                <span>JUN</span>
                <span>SEP</span>
                <span>DEC</span>
            </div>
        </div>

        {/* Top Performers Sidebar */}
        <div className="lg:col-span-1 bg-white p-10 rounded-[2.5rem] border border-[#E0E0E0] shadow-sm">
            <div className="flex items-center justify-between mb-10">
                <h3 className="text-lg font-black text-[#0A1931] flex items-center gap-3">
                    <PieChart size={24} className="text-[#4A7FA7]" /> {isAdmin ? "Top Assets" : "Primary Classes"}
                </h3>
            </div>
            <div className="space-y-6">
                {topCourses.map((course, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-[#F6FAFD]/50 hover:bg-white hover:shadow-xl hover:border-[#4A7FA7]/30 border border-transparent transition-all duration-500 group">
                        <div className="min-w-0">
                            <p className="text-[13px] font-black text-[#0A1931] group-hover:text-[#4A7FA7] truncate uppercase tracking-tight">{course.name}</p>
                            <div className="flex items-center gap-2 mt-1.5">
                                <span className="text-[10px] font-bold text-[#757575] uppercase">{course.enrollments} Units</span>
                                <span className="w-1 h-1 rounded-full bg-[#E0E0E0]" />
                                <div className="flex items-center gap-1 text-emerald-600 font-bold text-[10px]">
                                    <StarIcon size={10} className="fill-current" /> {course.rating}
                                </div>
                            </div>
                        </div>
                        <div className="text-right shrink-0">
                            <p className="text-[15px] font-black text-[#1A3D63]">{isAdmin ? course.revenue : `${Math.floor(course.enrollments / 5)}h`}</p>
                            {!isAdmin && <p className="text-[8px] font-black uppercase text-[#757575]">Taught</p>}
                        </div>
                    </div>
                ))}
            </div>
            <button className="w-full mt-10 py-4 border-2 border-dashed border-[#E0E0E0] rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest text-[#757575] hover:border-[#4A7FA7] hover:text-[#4A7FA7] transition-all">
                {isAdmin ? "Generate Full Inventory Report" : "Audience Insights Dashboard"}
            </button>
        </div>
      </div>

      {/* Strategic Intelligence Insight */}
       <div className="bg-[#0A1931] text-white p-10 lg:p-14 rounded-[3rem] shadow-[0_20px_50px_rgba(10,25,49,0.3)] relative overflow-hidden group">
            {/* Visual Flair */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4A7FA7]/10 rounded-full blur-[120px] -z-0 group-hover:bg-[#4A7FA7]/20 transition-all duration-1000" />
            
            <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
                <div className="w-24 h-24 rounded-[2rem] bg-white/10 flex items-center justify-center text-[#4A7FA7] shadow-inner shrink-0 scale-110">
                    <Zap size={48} className="animate-pulse" />
                </div>
                <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-3xl font-black tracking-tight mb-3">Operational Intelligence Insight</h3>
                    <p className="text-white/50 text-[16px] max-w-2xl leading-relaxed font-medium">
                        System analytics indicate a 25% surge in student engagement during modular sessions. We recommend deploying additional live units for the <span className="text-white font-bold italic">React Workshop</span> series.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mt-16 pt-16 border-t border-white/5 relative z-10">
                {[
                    { label: "Vibe / Satisfaction", value: "4.8 / 5.0", color: "bg-[#2E7D32]", w: "96%" },
                    { label: "Completion Vector", value: "72.4%", color: "bg-[#4A7FA7]", w: "72%" },
                    { label: "Refund / Churn", value: "0.8%", color: "bg-red-500", w: "2%" },
                ].map((stat, i) => (
                    <div key={i} className="group/stat">
                        <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-black mb-4 group-hover/stat:text-white/60 transition-colors uppercase">{stat.label}</p>
                        <h4 className="text-4xl font-black tracking-tight group-hover/stat:translate-x-2 transition-transform">{stat.value}</h4>
                        <div className="h-1.5 bg-white/10 rounded-full mt-6 overflow-hidden">
                            <div className={`h-full ${stat.color} transition-all duration-[2s]`} style={{ width: stat.w }} />
                        </div>
                    </div>
                ))}
            </div>
      </div>
    </div>
  );
}
