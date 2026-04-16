import React, { useState } from "react";
import {
  Users,
  BookOpen,
  IndianRupee,
  TrendingUp,
  Award,
  BarChart3,
  Search,
  MoreVertical,
  CheckCircle,
  XCircle,
  Clock,
  Briefcase,
  ChevronRight
} from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";

const adminStats = [
  { label: "Total Revenue", value: "₹245,600", icon: IndianRupee, color: "#2E7D32" },
  { label: "Total Students", value: "1,240", icon: Users, color: "#4A7FA7" },
  { label: "Active Instructors", value: "42", icon: Briefcase, color: "#F57C00" },
  { label: "Live Courses", value: "18", icon: BookOpen, color: "#C62828" },
];

const admissionStats = [
  { course: "React Workshop", students: 450, growth: "+15%", color: "#4A7FA7" },
  { course: "Advanced Node.js", students: 320, growth: "+8%", color: "#2E7D32" },
  { course: "UI/UX Design", students: 280, growth: "+12%", color: "#F57C00" },
  { course: "Python 101", students: 190, growth: "+20%", color: "#C62828" },
];

const mockUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Instructor", joinDate: "Jan 12, 2026", status: "Active" },
  { id: 2, name: "Alex Johnson", email: "alex@example.com", role: "Student", joinDate: "Feb 05, 2026", status: "Active" },
  { id: 3, name: "Maria Garcia", email: "maria@example.com", role: "Student", joinDate: "Feb 10, 2026", status: "Pending" },
  { id: 4, name: "Jane Smith", email: "jane@example.com", role: "Instructor", joinDate: "Dec 15, 2025", status: "Active" },
  { id: 5, name: "David Lee", email: "david@example.com", role: "Student", joinDate: "Mar 01, 2026", status: "Inactive" },
];

export default function AdminDashboard() {
  const { user } = useAuthStore();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = mockUsers.filter(u => 
    u.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    u.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 lg:p-8 max-w-[1400px] mx-auto animate-in fade-in duration-700">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-black text-[#0A1931] tracking-tight">Executive Command Center</h1>
        <p className="text-[#757575] mt-2 font-medium">Global EduConnect Metrics & Management</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {adminStats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-3xl border border-[#E0E0E0] p-6 shadow-xl shadow-[#4A7FA7]/5 hover:shadow-2xl transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#B3CFE5]/10 rounded-full translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-700" />
            <div className="flex items-center gap-5 relative z-10">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg transform group-hover:rotate-6 transition-transform"
                style={{ backgroundColor: stat.color }}
              >
                <stat.icon size={26} />
              </div>
              <div>
                <p className="text-xs font-black text-[#757575] uppercase tracking-widest">{stat.label}</p>
                <p className="text-2xl font-black text-[#0A1931] mt-1">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Admission Statistics */}
        <div className="lg:col-span-1 bg-white rounded-[2.5rem] border border-[#E0E0E0] p-8 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-black text-[#0A1931] flex items-center gap-3">
              <BarChart3 size={22} className="text-[#4A7FA7]" /> Admission Stats
            </h2>
            <TrendingUp size={18} className="text-[#2E7D32]" />
          </div>
          
          <div className="space-y-6">
            {admissionStats.map((item) => (
              <div key={item.course} className="group">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-bold text-[#1A3D63]">{item.course}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-[#0A1931]">{item.students}</span>
                    <span className="text-[10px] font-black text-[#2E7D32] bg-[#2E7D32]/10 px-1.5 py-0.5 rounded">{item.growth}</span>
                  </div>
                </div>
                <div className="h-2 bg-[#F6FAFD] rounded-full overflow-hidden border border-[#E0E0E0]/30 shadow-inner">
                  <div
                    className="h-full rounded-full transition-all duration-1000 group-hover:opacity-80"
                    style={{ width: `${(item.students / 500) * 100}%`, backgroundColor: item.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* User Management Table */}
        <div className="lg:col-span-2 bg-white rounded-[2.5rem] border border-[#E0E0E0] p-8 shadow-sm overflow-hidden flex flex-col">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <h2 className="text-lg font-black text-[#0A1931] flex items-center gap-3">
              <Users size={22} className="text-[#4A7FA7]" /> User Directory
            </h2>
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#757575]" />
              <input 
                type="text" 
                placeholder="Lookup personnel..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 h-10 bg-[#F6FAFD] border border-[#E0E0E0] rounded-xl text-xs font-bold text-[#1A3D63] focus:ring-2 focus:ring-[#4A7FA7]/20 outline-none transition-all w-full sm:w-64"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[#F6FAFD]">
                  <th className="pb-4 text-[10px] font-black text-[#757575] uppercase tracking-[0.2em]">Personnel</th>
                  <th className="pb-4 text-[10px] font-black text-[#757575] uppercase tracking-[0.2em]">Responsibility</th>
                  <th className="pb-4 text-[10px] font-black text-[#757575] uppercase tracking-[0.2em]">Enrollment</th>
                  <th className="pb-4 text-[10px] font-black text-[#757575] uppercase tracking-[0.2em]">Status</th>
                  <th className="pb-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F6FAFD]">
                {filteredUsers.map((u) => (
                  <tr key={u.id} className="group hover:bg-[#F6FAFD]/30 transition-colors">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4A7FA7] to-[#1A3D63] flex items-center justify-center text-white text-xs font-black uppercase">
                          {u.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-black text-[#0A1931] leading-tight">{u.name}</p>
                          <p className="text-[10px] text-[#757575] font-medium">{u.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">
                      <span className={`px-2 py-1 rounded-md text-[10px] font-black uppercase tracking-widest ${
                        u.role === "Instructor" ? "bg-[#4A7FA7]/10 text-[#4A7FA7]" : "bg-[#1A3D63]/10 text-[#1A3D63]"
                      }`}>
                        {u.role}
                      </span>
                    </td>
                    <td className="py-4 text-xs font-bold text-[#757575]">{u.joinDate}</td>
                    <td className="py-4">
                      <div className="flex items-center gap-1.5">
                        {u.status === "Active" ? (
                          <CheckCircle size={14} className="text-[#2E7D32]" />
                        ) : u.status === "Pending" ? (
                          <Clock size={14} className="text-[#F57C00]" />
                        ) : (
                          <XCircle size={14} className="text-red-500" />
                        )}
                        <span className={`text-[10px] font-black uppercase tracking-widest ${
                          u.status === "Active" ? "text-[#2E7D32]" : 
                          u.status === "Pending" ? "text-[#F57C00]" : "text-red-500"
                        }`}>
                          {u.status}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 text-right">
                      <button className="p-2 text-[#E0E0E0] hover:text-[#0A1931] transition-colors"><MoreVertical size={16} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <button className="mt-6 self-start text-[11px] font-black text-[#4A7FA7] uppercase tracking-widest hover:underline flex items-center gap-1">
            Generate Personnel Report <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
