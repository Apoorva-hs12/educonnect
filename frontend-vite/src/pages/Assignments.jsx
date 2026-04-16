import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Clock, CheckCircle, FileText, AlertCircle, ArrowUpRight } from "lucide-react";

const tabs = ["All", "Pending", "Submitted", "Completed"];

const assignments = [
  {
    id: "1",
    title: "Build a React Todo App",
    course: "React Advanced Concepts",
    dueDate: "Jan 20, 2026 (5 days left)",
    status: "Pending",
    progress: 15,
    statusColor: "bg-[#F57C00]",
    priority: "High",
  },
  {
    id: "2",
    title: "Design a Component Library",
    course: "React Advanced Concepts",
    dueDate: "Jan 25, 2026 (10 days left)",
    status: "Pending",
    progress: 0,
    statusColor: "bg-[#F57C00]",
    priority: "Medium",
  },
  {
    id: "3",
    title: "Deploy App to Production",
    course: "Full-Stack Development",
    dueDate: "Jan 22, 2026 (7 days left)",
    status: "Submitted",
    progress: 100,
    statusColor: "bg-[#4A7FA7]",
    grade: "Pending Review",
    priority: "High",
  },
  {
    id: "4",
    title: "Final Project: Full Portfolio",
    course: "Advanced Web Development",
    dueDate: "Dec 28, 2025 (Completed)",
    status: "Completed",
    progress: 100,
    statusColor: "bg-[#2E7D32]",
    grade: "A+ (95/100)",
    priority: "Low",
  },
];

export default function AssignmentsPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered = assignments.filter((a) => {
    if (activeTab === "All") return true;
    return a.status === activeTab;
  });

  return (
    <div className="p-6 lg:p-8 max-w-[1100px] mx-auto animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-black text-[#0A1931] tracking-tight">Assignments</h1>
          <p className="text-[#757575] mt-1 font-medium">Manage your projects and track your submissions.</p>
        </div>
        <div className="flex items-center gap-3">
            <div className="px-4 py-2 bg-white rounded-xl border border-[#E0E0E0] shadow-sm flex items-center gap-2">
                <span className="text-[10px] font-black text-[#757575] uppercase tracking-widest">Avg. Score</span>
                <span className="text-sm font-black text-[#4A7FA7]">92%</span>
            </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 mb-8 bg-[#F6FAFD] p-1.5 rounded-2xl border border-[#E0E0E0] w-fit">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2.5 text-xs font-black uppercase tracking-widest rounded-xl transition-all duration-300 ${
              activeTab === tab
                ? "bg-white text-[#4A7FA7] shadow-lg shadow-[#4A7FA7]/10 border border-[#E0E0E0]"
                : "text-[#757575] hover:text-[#0A1931] hover:bg-white/50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="grid grid-cols-1 gap-4">
        {filtered.map((assignment, idx) => (
          <div
            key={assignment.id}
            className="group bg-white rounded-2xl border border-[#E0E0E0] p-6 hover:shadow-xl hover:border-[#4A7FA7]/30 transition-all duration-300 relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <FileText size={120} strokeWidth={1} />
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-3">
                    <span className={`px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-widest ${
                        assignment.priority === 'High' ? 'bg-red-50 text-red-600 border border-red-100' : 
                        assignment.priority === 'Medium' ? 'bg-orange-50 text-orange-600 border border-orange-100' : 
                        'bg-green-50 text-green-600 border border-green-100'
                    }`}>
                        {assignment.priority} Priority
                    </span>
                    <span className="text-xs font-bold text-[#4A7FA7] truncate">{assignment.course}</span>
                </div>
                
                <h3 className="text-xl font-black text-[#0A1931] mb-2 group-hover:text-[#4A7FA7] transition-colors">{assignment.title}</h3>
                
                <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex items-center gap-2 text-[#757575]">
                        <Clock size={14} />
                        <span className="text-sm font-bold">{assignment.dueDate}</span>
                    </div>
                    {assignment.grade && (
                        <div className="flex items-center gap-2 px-3 py-1 bg-[#F6FAFD] rounded-lg border border-[#E0E0E0]">
                            <span className="text-[10px] font-black text-[#757575] uppercase tracking-widest">Score:</span>
                            <span className="text-sm font-black text-[#1A3D63]">{assignment.grade}</span>
                        </div>
                    )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-8 lg:w-[400px]">
                <div className="flex-1 w-full">
                    <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-black text-[#757575] uppercase tracking-widest">Execution</span>
                    <span className="text-xs font-black text-[#4A7FA7]">{assignment.progress}%</span>
                    </div>
                    <div className="h-2 bg-[#F6FAFD] rounded-full overflow-hidden border border-[#E0E0E0]/50">
                    <div
                        className="h-full rounded-full bg-gradient-to-r from-[#4A7FA7] to-[#1A3D63] shadow-[0_0_10px_rgba(74,127,167,0.3)] transition-all duration-1000"
                        style={{ width: `${assignment.progress}%` }}
                    />
                    </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button className="w-12 h-12 rounded-xl flex items-center justify-center text-[#757575] bg-[#F6FAFD] border border-[#E0E0E0] hover:bg-[#4A7FA7] hover:text-white hover:border-[#4A7FA7] transition-all">
                        <AlertCircle size={20} />
                  </button>
                  {assignment.status === "Pending" ? (
                    <button className="h-12 px-6 rounded-xl bg-[#4A7FA7] text-white text-xs font-black uppercase tracking-widest shadow-lg shadow-[#4A7FA7]/20 hover:-translate-y-1 active:translate-y-0 transition-all flex items-center gap-2">
                      Upload Project <ArrowUpRight size={16} />
                    </button>
                  ) : (
                    <button className={`h-12 px-6 rounded-xl border text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2 ${
                        assignment.status === 'Completed' ? 'bg-green-50 text-green-700 border-green-200 hover:bg-green-100' : 'bg-white text-[#4A7FA7] border-[#4A7FA7]/30 hover:bg-[#F6FAFD]'
                    }`}>
                      {assignment.status === 'Completed' ? 'Review Submission' : 'Resubmit File'}
                      {assignment.status === 'Completed' && <CheckCircle size={16} />}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 px-6 bg-[#F6FAFD] rounded-3xl border border-dashed border-[#E0E0E0]">
                <div className="w-16 h-16 rounded-2xl bg-white border border-[#E0E0E0] flex items-center justify-center text-[#757575] mb-4">
                    <FileText size={32} />
                </div>
                <h3 className="text-lg font-bold text-[#0A1931]">No assignments found</h3>
                <p className="text-[#757575] text-sm text-center mt-1">You{"'"}re all caught up! No assignments match your current filter.</p>
            </div>
        )}
      </div>
    </div>
  );
}
