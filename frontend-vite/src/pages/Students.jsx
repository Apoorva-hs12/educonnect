import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Search,
  Filter,
  MoreVertical,
  Mail,
  MessageSquare,
  TrendingUp,
  Clock,
  CheckCircle2,
  ChevronRight,
  ArrowLeft,
  UserCheck,
  Zap,
  Star
} from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";

const studentsMock = [
  { id: "1", name: "Alex Johnson", email: "alex@example.com", course: "React Workshop", progress: 85, lastActive: "2m ago", performance: "Excellent" },
  { id: "2", name: "Maria Garcia", email: "maria@example.com", course: "Advanced Node.js", progress: 60, lastActive: "15m ago", performance: "Good" },
  { id: "3", name: "James Smith", email: "james@example.com", course: "React Workshop", progress: 92, lastActive: "1h ago", performance: "Top" },
  { id: "4", name: "Emma Davis", email: "emma@example.com", course: "UI/UX Principles", progress: 45, lastActive: "3h ago", performance: "Average" },
  { id: "5", name: "David Lee", email: "david@example.com", course: "React Workshop", progress: 12, lastActive: "1d ago", performance: "Warning" },
  { id: "6", name: "Jane Smith", email: "jane@example.com", course: "Advanced Node.js", progress: 78, lastActive: "5h ago", performance: "Good" },
];

export default function StudentsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = studentsMock.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 lg:p-12 max-w-[1200px] mx-auto animate-in fade-in duration-700">
      {/* Header Engine */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
            <Link to="/dashboard" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#757575] hover:text-[#4A7FA7] transition-all mb-4 group w-fit">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Control Center
            </Link>
            <h1 className="text-4xl font-black text-[#0A1931] tracking-tight">Student Intelligence</h1>
            <p className="text-[#757575] mt-2 font-medium">Monitor engagement, performance vectors, and personal growth.</p>
        </div>
      </div>

      {/* Real-time Summary Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-8 rounded-3xl border border-[#E0E0E0] shadow-xl shadow-[#4A7FA7]/5 flex items-center gap-6 group hover:border-[#4A7FA7]/30 transition-all">
          <div className="w-16 h-16 rounded-2xl bg-[#4A7FA7]/10 flex items-center justify-center text-[#4A7FA7] group-hover:scale-110 transition-transform">
            <Users size={32} />
          </div>
          <div>
            <p className="text-3xl font-black text-[#0A1931]">{studentsMock.length}</p>
            <p className="text-[10px] text-[#757575] font-black uppercase tracking-widest mt-1">Active Accounts</p>
          </div>
        </div>
        <div className="bg-[#0A1931] p-8 rounded-3xl text-white shadow-2xl flex items-center gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
                <Zap size={60} />
          </div>
          <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-[#4A7FA7] relative z-10">
            <TrendingUp size={32} />
          </div>
          <div className="relative z-10">
            <p className="text-3xl font-black">76%</p>
            <p className="text-[10px] text-white/40 font-black uppercase tracking-widest mt-1">Avg. Vector Velocity</p>
          </div>
        </div>
         <div className="bg-white p-8 rounded-3xl border border-[#E0E0E0] shadow-xl shadow-[#4A7FA7]/5 flex items-center gap-6 group hover:border-[#4A7FA7]/30 transition-all">
          <div className="w-16 h-16 rounded-2xl bg-[#F57C00]/10 flex items-center justify-center text-[#F57C00] group-hover:scale-110 transition-transform">
            <Star size={32} />
          </div>
          <div>
            <p className="text-3xl font-black text-[#0A1931]">12</p>
            <p className="text-[10px] text-[#757575] font-black uppercase tracking-widest mt-1">Milestones Hit</p>
          </div>
        </div>
      </div>

      {/* Search & Strategy Hub */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-8">
        <div className="relative w-full lg:w-[450px] group">
          <Search size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-[#757575] group-focus-within:text-[#4A7FA7] transition-colors" />
          <input
            type="text"
            placeholder="Search identity or credential..."
            className="w-full h-14 pl-14 pr-6 bg-white border border-[#E0E0E0] rounded-[1.25rem] text-[15px] font-bold outline-none focus:border-[#4A7FA7] focus:ring-8 focus:ring-[#4A7FA7]/5 transition-all shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-4 w-full lg:w-auto">
          <button className="h-14 px-8 bg-white border border-[#E0E0E0] rounded-[1.25rem] text-[11px] font-black uppercase tracking-[0.1em] text-[#1A3D63] hover:bg-[#F6FAFD] transition-all flex items-center gap-2 shadow-sm flex-1 lg:flex-none justify-center">
            <Filter size={18} /> Advanced Filters
          </button>
          <button className="h-14 px-8 bg-[#0A1931] text-white rounded-[1.25rem] text-[11px] font-black uppercase tracking-[0.1em] hover:-translate-y-1 transition-all flex items-center gap-2 flex-1 lg:flex-none justify-center shadow-xl shadow-[#0A1931]/20">
            <Mail size={18} /> Broadcast Dispatch
          </button>
        </div>
      </div>

      {/* Intelligence Table */}
      <div className="bg-white rounded-[2.5rem] border border-[#E0E0E0] overflow-hidden shadow-2xl shadow-[#4A7FA7]/5">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#F6FAFD]/80 border-b border-[#E0E0E0]">
                <th className="px-8 py-5 text-[10px] font-black text-[#757575] uppercase tracking-[0.2em]">Individual Identity</th>
                <th className="px-8 py-5 text-[10px] font-black text-[#757575] uppercase tracking-[0.2em]">Course Vector</th>
                <th className="px-8 py-5 text-[10px] font-black text-[#757575] uppercase tracking-[0.2em]">Progression</th>
                <th className="px-8 py-5 text-[10px] font-black text-[#757575] uppercase tracking-[0.2em]">Efficiency</th>
                <th className="px-8 py-5 text-[10px] font-black text-[#757575] uppercase tracking-[0.2em] text-right">Interactions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E0E0E0]/50 bg-white">
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-[#F6FAFD]/30 transition-all group">
                  <td className="px-8 py-6 whitespace-nowrap">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#4A7FA7] to-[#1A3D63] flex items-center justify-center text-white text-sm font-black shadow-lg shadow-[#4A7FA7]/20 uppercase transform group-hover:rotate-3 transition-transform">
                        {student.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-[15px] font-black text-[#0A1931] group-hover:text-[#4A7FA7] transition-colors tracking-tight">{student.name}</p>
                        <p className="text-[11px] font-bold text-[#757575] mt-0.5">{student.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap">
                    <p className="text-[13px] font-black text-[#1A3D63] tracking-tight">{student.course}</p>
                    <p className="text-[10px] font-bold text-[#757575] flex items-center gap-1.5 mt-1 opacity-60">
                      <Clock size={12} /> Heartbeat: {student.lastActive}
                    </p>
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap">
                    <div className="w-40">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-black text-[#1A3D63]">{student.progress}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-[#F6FAFD] rounded-full overflow-hidden border border-[#E0E0E0]/30">
                        <div 
                          className={`h-full rounded-full shadow-[0_0_8px_rgba(0,0,0,0.1)] transition-all duration-1000 ${
                            student.progress > 80 ? 'bg-[#2E7D32]' : 
                            student.progress > 40 ? 'bg-[#4A7FA7]' : 'bg-[#C62828]'
                          }`} 
                          style={{ width: `${student.progress}%` }} 
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap">
                    <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-xl border ${
                      student.performance === 'Top' || student.performance === 'Excellent' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' :
                      student.performance === 'Good' ? 'bg-blue-50 text-blue-700 border-blue-100' :
                      student.performance === 'Average' ? 'bg-orange-50 text-orange-700 border-orange-100' :
                      'bg-red-50 text-red-700 border-red-100'
                    }`}>
                      {student.performance}
                    </span>
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap text-right">
                    <div className="flex items-center justify-end gap-2 translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                       <button className="w-10 h-10 rounded-xl flex items-center justify-center text-[#757575] bg-[#F6FAFD] border border-[#E0E0E0] hover:bg-[#4A7FA7] hover:text-white hover:border-[#4A7FA7] transition-all" title="Secure Link">
                        <MessageSquare size={18} />
                      </button>
                      <button className="w-10 h-10 rounded-xl flex items-center justify-center text-[#757575] bg-[#F6FAFD] border border-[#E0E0E0] hover:bg-[#0A1931] hover:text-white hover:border-[#0A1931] transition-all">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredStudents.length === 0 && (
          <div className="p-20 text-center animate-in zoom-in duration-500">
            <div className="w-24 h-24 bg-[#F6FAFD] rounded-[2.5rem] border border-[#E0E0E0] flex items-center justify-center mx-auto mb-6 text-[#757575] shadow-inner">
              <Users size={40} strokeWidth={1} />
            </div>
            <h3 className="text-xl font-black text-[#0A1931] tracking-tight">Zero Identities Found</h3>
            <p className="text-sm font-medium text-[#757575] mt-2">No students match your current search parameters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
