import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Edit,
  Award,
  Clock,
  Flame,
  BookOpen,
  Star,
  Calendar,
  TrendingUp,
  Share2,
  MapPin,
  Link as LinkIcon,
  Globe,
  Code
} from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";

const statsData = [
  { label: "Skills Learned", value: "12", icon: Award, color: "#4A7FA7" },
  { label: "Hours Spent", value: "42", icon: Clock, color: "#2E7D32" },
  { label: "Streak Days", value: "5", icon: Flame, color: "#F57C00" },
];

const skillCategories = [
  { name: "Web Development", progress: 80, courses: 4 },
  { name: "Mobile Development", progress: 60, courses: 2 },
  { name: "Backend Development", progress: 70, courses: 3 },
  { name: "Data Science", progress: 30, courses: 1 },
];

const badges = [
  { name: "React Expert", icon: "🏆", earned: "Jan 10, 2026" },
  { name: "Node Master", icon: "⚡", earned: "Dec 28, 2025" },
  { name: "5-Day Streak", icon: "🔥", earned: "Jan 8, 2026" },
  { name: "First Course", icon: "📚", earned: "Dec 15, 2025" },
  { name: "Top Contributor", icon: "🌟", earned: "Nov 20, 2025" },
];

const recentActivity = [
  { text: "Completed React Basics", date: "Jan 10, 2026", type: "completion" },
  { text: "Started Node.js Course", date: "Jan 8, 2026", type: "start" },
  { text: "Earned React Expert Badge", date: "Jan 5, 2026", type: "badge" },
  { text: "Completed First Assignment", date: "Dec 28, 2025", type: "assignment" },
  { text: "Joined EduConnect", date: "Dec 1, 2025", type: "join" },
];

export default function ProfilePage() {
  const { user } = useAuthStore();
  const joinDate = "Dec 2025";

  return (
    <div className="p-6 lg:p-8 max-w-[1000px] mx-auto animate-in fade-in duration-700">
      {/* Back & Edit */}
      <div className="flex items-center justify-between mb-8">
        <Link to="/dashboard" className="flex items-center gap-2 text-sm text-[#757575] hover:text-[#4A7FA7] transition-all font-bold group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Learning
        </Link>
        <Link to="/settings" className="h-10 px-5 rounded-xl bg-white border border-[#E0E0E0] text-[11px] font-black uppercase tracking-widest text-[#0A1931] hover:bg-[#F6FAFD] hover:border-[#4A7FA7]/30 transition-all flex items-center gap-2 shadow-sm">
          <Edit size={14} /> Update Portfolio
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Profile Card */}
        <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-3xl border border-[#E0E0E0] p-8 text-center shadow-xl shadow-[#4A7FA7]/5 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-br from-[#4A7FA7] to-[#1A3D63] -z-10 opacity-[0.05]" />
                
                <div className="relative inline-block mb-6">
                    <div className="w-32 h-32 rounded-[2.5rem] bg-gradient-to-br from-[#4A7FA7] to-[#1A3D63] flex items-center justify-center text-white text-5xl font-black shadow-2xl shadow-[#4A7FA7]/40 ring-8 ring-white transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3 uppercase">
                        {user?.fullName?.charAt(0) || "U"}
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#2E7D32] rounded-2xl flex items-center justify-center text-white shadow-xl ring-4 ring-white">
                        <Star size={18} className="fill-current" />
                    </div>
                </div>

                <h1 className="text-2xl font-black text-[#0A1931] tracking-tight">{user?.fullName || "Student Name"}</h1>
                <p className="text-[10px] font-black text-[#4A7FA7] uppercase tracking-widest mt-2 bg-[#B3CFE5]/20 inline-block px-3 py-1 rounded-full border border-[#4A7FA7]/10">
                    {user?.role || "Student"} Specialist
                </p>
                
                <div className="flex flex-col gap-3 mt-8">
                    <div className="flex items-center gap-3 text-[#757575] text-xs font-medium justify-center">
                        <MapPin size={14} /> {user?.location || "Location Not Set"}
                    </div>
                    <div className="flex items-center gap-3 text-[#4A7FA7] text-xs font-bold justify-center hover:underline cursor-pointer">
                        <LinkIcon size={14} /> portfolio.me/{user?.fullName?.split(" ")[0]?.toLowerCase() || "user"}
                    </div>
                </div>
                
                {user?.bio && (
                    <div className="mt-6 pt-6 border-t border-[#E0E0E0]/50 text-left">
                        <h3 className="text-[10px] font-black text-[#757575] uppercase tracking-widest mb-2">Biography</h3>
                        <p className="text-xs text-[#1A3D63] font-medium leading-relaxed">{user.bio}</p>
                    </div>
                )}

                <div className="flex items-center justify-center gap-4 mt-8">
                    <button className="w-10 h-10 rounded-xl bg-[#F6FAFD] border border-[#E0E0E0] flex items-center justify-center text-[#1A3D63] hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] transition-all">
                        <Globe size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-xl bg-[#F6FAFD] border border-[#E0E0E0] flex items-center justify-center text-[#1A3D63] hover:bg-[#333] hover:text-white hover:border-[#333] transition-all">
                        <Code size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-xl bg-[#F6FAFD] border border-[#E0E0E0] flex items-center justify-center text-[#1A3D63] hover:bg-[#4A7FA7] hover:text-white hover:border-[#4A7FA7] transition-all">
                        <Share2 size={18} />
                    </button>
                </div>
            </div>

            {/* Stats Card */}
            {user?.role !== "admin" && (
                <div className="bg-[#0A1931] rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -z-0" />
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white/40 mb-6">Performance Matrix</h3>
                    <div className="space-y-6 relative z-10">
                        {statsData.map((stat) => (
                            <div key={stat.label} className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/10 text-white shadow-lg">
                                        <stat.icon size={20} />
                                    </div>
                                    <span className="text-xs font-bold text-white/70">{stat.label}</span>
                                </div>
                                <span className="text-lg font-black">{stat.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>

        {/* Right Column: Content */}
        <div className="lg:col-span-2 space-y-8">
            {user?.role === "admin" ? (
                <div className="bg-white rounded-3xl border border-[#E0E0E0] p-12 shadow-sm h-full flex flex-col justify-center items-center text-center">
                    <div className="w-24 h-24 rounded-full bg-[#1A3D63]/5 flex items-center justify-center mb-6">
                        <Globe size={48} className="text-[#1A3D63]" />
                    </div>
                    <h2 className="text-3xl font-black text-[#0A1931] mb-4">System Administrator</h2>
                    <p className="text-[#757575] font-medium leading-relaxed max-w-md mx-auto mb-8">
                        You are currently viewing your profile with elevated administrative clearance. As a System Admin, your primary responsibilities involve overseeing global operations, managing personnel directories, and monitoring high-level analytics rather than personal learning milestones.
                    </p>
                    <Link to="/admin" className="px-8 py-4 rounded-xl bg-[#0A1931] text-white font-black uppercase tracking-widest text-xs hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0A1931]/20 transition-all">
                        Open Command Center
                    </Link>
                </div>
            ) : (
                <>
                    {/* Learning Progress */}
                    <section className="bg-white rounded-3xl border border-[#E0E0E0] p-8 shadow-sm">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-lg font-black text-[#0A1931] flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-[#4A7FA7]/10 flex items-center justify-center text-[#4A7FA7]">
                                    <TrendingUp size={18} />
                                </div>
                                Skill Progression
                            </h2>
                            <span className="text-[10px] font-black text-[#4A7FA7] uppercase tracking-widest bg-[#F6FAFD] px-3 py-1 rounded-md border border-[#E0E0E0]">Real-time sync</span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {skillCategories.map((skill) => (
                                <div key={skill.name} className="p-4 rounded-2xl border border-[#F6FAFD] bg-[#F6FAFD]/30">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-[13px] font-black text-[#1A3D63]">{skill.name}</span>
                                        <span className="text-[10px] font-bold text-[#757575] bg-white px-2 py-0.5 rounded border border-[#E0E0E0]">{skill.courses} Courses</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex-1 h-2 bg-white rounded-full overflow-hidden border border-[#E0E0E0]/50">
                                            <div
                                            className="h-full bg-gradient-to-r from-[#4A7FA7] to-[#1A3D63] rounded-full transition-all duration-1000"
                                            style={{ width: `${skill.progress}%` }}
                                            />
                                        </div>
                                        <span className="text-xs font-black text-[#4A7FA7] w-8">{skill.progress}%</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Badges Collection */}
                    <section className="bg-white rounded-3xl border border-[#E0E0E0] p-8 shadow-sm">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-lg font-black text-[#0A1931] flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-[#F57C00]/10 flex items-center justify-center text-[#F57C00]">
                                    <Award size={18} />
                                </div>
                                Earned Recognition
                            </h2>
                            <Link to="/achievements" className="text-[11px] font-black text-[#4A7FA7] uppercase tracking-widest hover:underline">Showcase All ({badges.length})</Link>
                        </div>
                        
                        <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
                        {badges.map((badge) => (
                            <div
                            key={badge.name}
                            className="flex flex-col items-center text-center group cursor-pointer"
                            >
                            <div className="w-16 h-16 rounded-[1.5rem] bg-[#F6FAFD] border border-[#E0E0E0] flex items-center justify-center text-3xl shadow-sm group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 mb-3 grayscale group-hover:grayscale-0">
                                {badge.icon}
                            </div>
                            <p className="text-[10px] font-black text-[#1A3D63] uppercase leading-tight mb-1">{badge.name}</p>
                            <p className="text-[9px] font-bold text-[#757575]">{badge.earned.split(" ")[0]}</p>
                            </div>
                        ))}
                        </div>
                    </section>

                    {/* Activity Stream */}
                    <section className="bg-white rounded-3xl border border-[#E0E0E0] p-8 shadow-sm">
                        <h2 className="text-lg font-black text-[#0A1931] flex items-center gap-3 mb-8">
                            <div className="w-8 h-8 rounded-lg bg-[#2E7D32]/10 flex items-center justify-center text-[#2E7D32]">
                                <Calendar size={18} />
                            </div>
                            Activity Timeline
                        </h2>
                        <div className="space-y-4">
                            {recentActivity.map((activity, i) => (
                                <div
                                key={i}
                                className="flex items-center justify-between p-4 rounded-2xl border border-transparent hover:border-[#E0E0E0] hover:bg-[#F6FAFD]/50 transition-all group"
                                >
                                <div className="flex items-center gap-4">
                                    <div className={`w-2.5 h-2.5 rounded-full ring-4 ring-white shadow-sm ${
                                    activity.type === "completion" ? "bg-[#2E7D32]" :
                                    activity.type === "badge" ? "bg-[#F57C00]" :
                                    activity.type === "start" ? "bg-[#4A7FA7]" :
                                    "bg-[#757575]"
                                    }`} />
                                    <span className="text-sm font-bold text-[#1A3D63] group-hover:text-[#4A7FA7] transition-all">{activity.text}</span>
                                </div>
                                <span className="text-[10px] font-black text-[#757575] uppercase tracking-widest">{activity.date}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </>
            )}
        </div>
      </div>
    </div>
  );
}
