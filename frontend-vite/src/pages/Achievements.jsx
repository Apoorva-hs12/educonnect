import React from "react";
import { Link } from "react-router-dom";
import { Share2, Lock, Award, Shield, Zap, Flame, Trophy, Star } from "lucide-react";

const unlockedBadges = [
  { id: "1", name: "React Expert", icon: "🏆", earned: "Jan 10, 2026", color: "from-yellow-400 to-orange-500", shadow: "shadow-orange-200" },
  { id: "2", name: "Node Master", icon: "⚡", earned: "Dec 28, 2025", color: "from-green-400 to-emerald-600", shadow: "shadow-emerald-200" },
  { id: "3", name: "5-Day Streak", icon: "🔥", earned: "Jan 8, 2026", color: "from-orange-500 to-red-600", shadow: "shadow-red-200" },
  { id: "4", name: "First Course", icon: "📚", earned: "Dec 15, 2025", color: "from-blue-400 to-indigo-600", shadow: "shadow-blue-200" },
  { id: "5", name: "Top Contributor", icon: "🌟", earned: "Nov 20, 2025", color: "from-amber-400 to-yellow-600", shadow: "shadow-yellow-200" },
];

const lockedBadges = [
  { id: "6", name: "10-Day Streak", icon: "🔥", progress: 70, progressText: "7/10 days" },
  { id: "7", name: "Python Expert", icon: "🐍", progress: 0, progressText: "0 courses" },
  { id: "8", name: "Course Master", icon: "🎓", progress: 40, progressText: "2/5 courses" },
  { id: "9", name: "Helpful Peer", icon: "🤝", progress: 80, progressText: "4/5 answers" },
];

export default function AchievementsPage() {
  return (
    <div className="p-6 lg:p-8 max-w-[1200px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Trophy size={20} className="text-[#F57C00]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-[#757575]">Hall of Fame</span>
          </div>
          <h1 className="text-4xl font-black text-[#0A1931] tracking-tight">Your Achievements</h1>
          <p className="text-[#757575] mt-2 font-medium">Collect badges and climb the leaderboard as you master new skills.</p>
        </div>
        <div className="flex items-center gap-4">
            <div className="bg-white rounded-2xl border border-[#E0E0E0] p-4 flex items-center gap-4 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FFF3E0] flex items-center justify-center text-[#F57C00]">
                    <Zap size={24} />
                </div>
                <div>
                   <p className="text-xl font-black text-[#0A1931]">1,240</p>
                   <p className="text-[10px] font-bold text-[#757575] uppercase tracking-wider">Total XP</p>
                </div>
            </div>
            <Link to="/certificates" className="btn-primary !w-auto !h-14 px-8 shadow-xl shadow-[#4A7FA7]/20">
                View Credentials
            </Link>
        </div>
      </div>

      {/* Unlocked Badges Section */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
            <h2 className="text-[11px] font-black text-[#757575] uppercase tracking-[0.2em]">Unlocked Rewards</h2>
            <div className="flex-1 h-px bg-[#E0E0E0]/50" />
            <span className="text-[10px] font-bold text-[#4A7FA7] bg-[#B3CFE5]/10 px-2 py-0.5 rounded border border-[#4A7FA7]/10">{unlockedBadges.length} Total</span>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {unlockedBadges.map((badge) => (
            <div key={badge.id} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${badge.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500 -z-10`} />
                <div className="bg-white rounded-3xl border border-[#E0E0E0] p-6 flex flex-col items-center text-center shadow-sm hover:shadow-2xl hover:border-white transition-all duration-500 group-hover:-translate-y-2 h-full">
                <div className={`w-20 h-20 rounded-[2rem] bg-gradient-to-br ${badge.color} flex items-center justify-center text-4xl shadow-xl ${badge.shadow} mb-4 transform transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}>
                    {badge.icon}
                </div>
                <h3 className="text-sm font-black text-[#0A1931] mb-1 tracking-tight">{badge.name}</h3>
                <p className="text-[9px] font-bold text-[#757575] uppercase tracking-widest mt-auto opacity-60">Enthused {badge.earned}</p>
                
                <div className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                    <button className="w-8 h-8 rounded-lg bg-[#F6FAFD] border border-[#E0E0E0] flex items-center justify-center text-[#4A7FA7] hover:bg-[#4A7FA7] hover:text-white transition-all">
                        <Share2 size={12} />
                    </button>
                    <button className="w-8 h-8 rounded-lg bg-[#F6FAFD] border border-[#E0E0E0] flex items-center justify-center text-[#4A7FA7] hover:bg-[#4A7FA7] hover:text-white transition-all">
                        <Star size={12} />
                    </button>
                </div>
                </div>
            </div>
          ))}
        </div>
      </div>

      {/* Locked Badges Section */}
      <div>
        <div className="flex items-center gap-3 mb-8">
            <h2 className="text-[11px] font-black text-[#757575] uppercase tracking-[0.2em] flex items-center gap-2">
                <Lock size={12} /> Future Goals
            </h2>
            <div className="flex-1 h-px bg-[#E0E0E0]/50" />
            <p className="text-[10px] italic text-[#757575]">Complete courses to reveal hidden rewards</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {lockedBadges.map((badge) => (
            <div key={badge.id} className="bg-white/40 rounded-3xl border border-[#E0E0E0] border-dashed p-6 flex flex-col items-center text-center backdrop-blur-sm grayscale grayscale-0 group hover:bg-white/60 transition-colors">
              <div className="w-20 h-20 rounded-[2rem] bg-[#F6FAFD] flex items-center justify-center text-4xl shadow-inner mb-4 relative overflow-hidden ring-1 ring-[#E0E0E0]">
                <span className="opacity-20 group-hover:opacity-40 transition-opacity">{badge.icon}</span>
                <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                   <Lock size={20} className="text-[#0A1931]/20 group-hover:text-[#0A1931]/40 transition-colors" />
                </div>
              </div>
              <h3 className="text-sm font-bold text-[#0A1931]/40 mb-4 tracking-tight">{badge.name}</h3>
              
              <div className="w-full mt-auto">
                <div className="flex justify-between items-center mb-1.5">
                   <span className="text-[9px] font-black text-[#757575] uppercase tracking-wider">Progress</span>
                   <span className="text-[10px] font-black text-[#0A1931]">{badge.progressText}</span>
                </div>
                <div className="h-1.5 w-full bg-[#E0E0E0] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-gray-300 to-gray-400 rounded-full transition-all duration-1000"
                    style={{ width: `${badge.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
          
          {/* Mystery Badge Placeholder */}
          <div className="bg-gradient-to-br from-[#F6FAFD] to-white rounded-3xl border border-[#E0E0E0] border-dashed p-6 flex flex-col items-center justify-center text-center opacity-40">
             <div className="w-16 h-16 rounded-full border-2 border-[#E0E0E0] flex items-center justify-center mb-3">
                <Shield size={24} className="text-[#E0E0E0]" />
             </div>
             <p className="text-[10px] font-black text-[#757575] uppercase tracking-widest">Mystery Badge</p>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="mt-16 bg-[#0A1931] rounded-[2.5rem] p-10 text-white flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#4A7FA7]/10 rounded-full blur-[80px]" />
          <div className="relative z-10">
              <h2 className="text-2xl font-black mb-2">Achievement Master</h2>
              <p className="text-white/60 text-sm max-w-md">You{"'"}re in the top 5% of learners this month! Complete one more course to reach Platinum status.</p>
          </div>
          <div className="flex gap-10 relative z-10 shrink-0">
              <div className="text-center">
                  <p className="text-4xl font-black text-[#4A7FA7]">03</p>
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mt-1">Pending Unlocks</p>
              </div>
              <div className="text-center">
                  <p className="text-4xl font-black text-[#F57C00]">12</p>
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mt-1">Rare Badges</p>
              </div>
              <div className="text-center">
                   <p className="text-4xl font-black text-[#2E7D32]">84%</p>
                   <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mt-1">Overall Rank</p>
              </div>
          </div>
      </div>
    </div>
  );
}
