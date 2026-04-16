import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  XCircle,
  Bell,
  Lock,
  User,
  Monitor,
  Globe,
  Settings as SettingsIcon,
  Shield,
  CreditCard,
  UserCheck,
  ChevronRight,
  LogOut,
  Smartphone,
  Laptop
} from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("Account");
  const { user, logout, updateProfile } = useAuthStore();
  
  // Profile Form State
  const [bio, setBio] = useState(user?.bio || "");
  const [location, setLocation] = useState(user?.location || "");
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateMessage, setUpdateMessage] = useState({ type: "", text: "" });

  const handleUpdateProfile = async () => {
    setIsUpdating(true);
    setUpdateMessage({ type: "", text: "" });
    try {
      await updateProfile({ bio, location });
      setUpdateMessage({ type: "success", text: "Profile synchronized successfully!" });
      setTimeout(() => setUpdateMessage({ type: "", text: "" }), 3000);
    } catch (error) {
      setUpdateMessage({ type: "error", text: error.message || "Failed to sync profile." });
    } finally {
      setIsUpdating(false);
    }
  };

  const tabs = [
    { id: "Account", icon: User, label: "Identity" },
    { id: "Notifications", icon: Bell, label: "Alerts" },
    { id: "Learning", icon: Monitor, label: "Environment" },
    { id: "Security", icon: Shield, label: "Protection" },
  ];

  return (
    <div className="p-6 lg:p-8 max-w-[1200px] mx-auto animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
        <div>
          <h1 className="text-3xl font-black text-[#0A1931] tracking-tight">System Settings</h1>
          <p className="text-[#757575] mt-2 font-medium">Customize your learning experience and security preferences.</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Navigation Sidebar */}
        <div className="w-full lg:w-[280px] shrink-0">
          <div className="bg-white rounded-3xl border border-[#E0E0E0] p-3 shadow-sm sticky top-24">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-300 group ${
                  activeTab === tab.id
                    ? "bg-[#0A1931] text-white shadow-xl shadow-[#0A1931]/20"
                    : "text-[#1A3D63] hover:bg-[#F6FAFD]"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                    activeTab === tab.id ? "bg-white/10 text-white" : "bg-[#F6FAFD] text-[#4A7FA7] group-hover:bg-[#B3CFE5]/20"
                  }`}>
                    <tab.icon size={18} />
                  </div>
                  <span className="text-[13px] font-black uppercase tracking-widest">{tab.label}</span>
                </div>
                <ChevronRight size={16} className={activeTab === tab.id ? "opacity-40" : "opacity-20"} />
              </button>
            ))}
            
            <div className="h-px bg-[#E0E0E0]/50 my-3 mx-4" />
            
            <button 
                onClick={logout}
                className="w-full flex items-center gap-4 p-4 text-red-500 hover:bg-red-50 rounded-2xl transition-all font-black uppercase tracking-widest text-[11px]"
            >
                <LogOut size={16} /> Terminate Session
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1">
          <div className="bg-white rounded-[2.5rem] border border-[#E0E0E0] p-8 lg:p-12 shadow-sm min-h-[600px] relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
                <SettingsIcon size={200} strokeWidth={1} />
            </div>

            <div className="relative z-10 max-w-[650px]">
                {/* Account Settings */}
                {activeTab === "Account" && (
                    <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-500">
                        <div className="flex items-center gap-4">
                            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#4A7FA7] to-[#1A3D63] flex items-center justify-center text-white text-3xl font-black shadow-xl uppercase">
                                {user?.fullName?.charAt(0) || "U"}
                            </div>
                            <div>
                                <h2 className="text-xl font-black text-[#0A1931] tracking-tight">{user?.fullName}</h2>
                                <p className="text-xs font-bold text-[#757575] uppercase tracking-widest mt-1">Personal Identity • Learning Account</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[11px] font-black text-[#757575] uppercase tracking-[0.2em]">Contact Email</label>
                                    <div className="flex items-center justify-between">
                                        <span className="text-[9px] font-black text-green-600 bg-green-50 px-2 py-0.5 rounded-md flex items-center gap-1 uppercase tracking-widest"><CheckCircle size={10} /> Verified</span>
                                    </div>
                                    <input type="email" value={user?.email} disabled className="w-full h-12 px-5 bg-[#F6FAFD] border border-[#E0E0E0] rounded-2xl text-[13px] font-bold text-[#1A3D63] focus:border-[#4A7FA7] transition-all opacity-70" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[11px] font-black text-[#757575] uppercase tracking-[0.2em]">Student Role</label>
                                    <input type="text" value={user?.role} disabled className="w-full h-12 px-5 bg-[#F6FAFD] border border-[#E0E0E0] rounded-2xl text-[13px] font-bold text-[#1A3D63] uppercase tracking-widest opacity-70" />
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                 <label className="text-[11px] font-black text-[#757575] uppercase tracking-[0.2em]">Location</label>
                                 <input 
                                    type="text" 
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    placeholder="e.g., New York, USA"
                                    className="w-full h-12 px-5 bg-white border border-[#E0E0E0] rounded-2xl text-[13px] font-bold text-[#1A3D63] focus:border-[#4A7FA7] transition-all outline-none" 
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[11px] font-black text-[#757575] uppercase tracking-[0.2em]">Display Biography</label>
                                <textarea 
                                    value={bio}
                                    onChange={(e) => setBio(e.target.value)}
                                    placeholder="Tell the community about yourself..."
                                    className="w-full h-32 p-5 bg-white border border-[#E0E0E0] rounded-3xl text-[14px] font-medium text-[#1A3D63] outline-none focus:border-[#4A7FA7] focus:ring-4 focus:ring-[#4A7FA7]/5 transition-all resize-none"
                                />
                            </div>
                        </div>
                        
                        <div className="pt-8 border-t border-[#F6FAFD] flex items-center gap-4">
                            <button 
                                onClick={handleUpdateProfile}
                                disabled={isUpdating}
                                className="h-14 px-10 rounded-2xl bg-[#0A1931] text-white text-[13px] font-black uppercase tracking-widest shadow-xl shadow-[#0A1931]/20 hover:-translate-y-1 active:translate-y-0 transition-all disabled:opacity-50 disabled:hover:translate-y-0 flex items-center gap-2"
                            >
                                {isUpdating ? 'Synchronizing...' : 'Synchronize Profile'}
                            </button>
                            {updateMessage.text && (
                                <span className={`text-xs font-bold ${updateMessage.type === 'success' ? 'text-green-600' : 'text-red-500'}`}>
                                    {updateMessage.text}
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Notifications */}
                {activeTab === "Notifications" && (
                    <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-500">
                        <div>
                            <h2 className="text-[11px] font-black text-[#757575] uppercase tracking-[0.2em] mb-6">Alert Configurations</h2>
                            <div className="space-y-4">
                                {[
                                    { id: "n1", label: "Real-time Class Reminders", description: "Get notified 15 mins before a session starts", checked: true },
                                    { id: "n2", label: "Message Push Notifications", description: "Stay updated with peer discussions", checked: true },
                                    { id: "n3", label: "Assignment Feedback", description: "Alerts when an instructor grades your work", checked: true },
                                    { id: "n4", label: "Newsletter & Updates", description: "Bi-weekly platform feature summaries", checked: false },
                                ].map(item => (
                                    <div key={item.id} className="flex items-center justify-between p-5 rounded-2xl border border-transparent hover:border-[#F6FAFD] hover:bg-[#F6FAFD]/50 transition-all cursor-pointer group">
                                        <div className="max-w-[80%]">
                                            <p className="text-[14px] font-black text-[#1A3D63] group-hover:text-[#4A7FA7] transition-colors">{item.label}</p>
                                            <p className="text-xs text-[#757575] mt-1">{item.description}</p>
                                        </div>
                                        <div className="relative inline-flex items-center cursor-pointer group">
                                            <input type="checkbox" className="sr-only peer" defaultChecked={item.checked} />
                                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4A7FA7]"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="pt-8 border-t border-[#F6FAFD]">
                            <button className="h-14 px-10 rounded-2xl bg-[#0A1931] text-white text-[13px] font-black uppercase tracking-widest shadow-xl shadow-[#0A1931]/20">
                                Apply Alert Settings
                            </button>
                        </div>
                    </div>
                )}

                {/* Environment/Learning */}
                {activeTab === "Learning" && (
                    <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-500">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-[11px] font-black text-[#757575] uppercase tracking-[0.2em]">Learning Pace</label>
                                <select className="w-full h-12 px-5 bg-[#F6FAFD] border border-[#E0E0E0] rounded-2xl text-[13px] font-bold text-[#1A3D63] outline-none focus:border-[#4A7FA7] transition-all appearance-none cursor-pointer">
                                    <option>Beginner (Self-Paced)</option>
                                    <option selected>Intermediate (Standard)</option>
                                    <option>Advanced (Fast-Track)</option>
                                </select>
                            </div>
                            <div className="space-y-3">
                                <label className="text-[11px] font-black text-[#757575] uppercase tracking-[0.2em]">Global Region</label>
                                <select className="w-full h-12 px-5 bg-[#F6FAFD] border border-[#E0E0E0] rounded-2xl text-[13px] font-bold text-[#1A3D63] outline-none focus:border-[#4A7FA7] transition-all appearance-none cursor-pointer">
                                    <option selected>English (United States)</option>
                                    <option>Spanish (Latin America)</option>
                                    <option>French (European)</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-6 p-6 rounded-[2rem] bg-[#F6FAFD]/80 border border-[#E0E0E0]/30 shadow-inner">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-8 h-8 rounded-lg bg-[#4A7FA7]/10 flex items-center justify-center text-[#4A7FA7]">
                                    <Monitor size={16} />
                                </div>
                                <h3 className="text-sm font-black text-[#1A3D63] uppercase tracking-widest">Interface Preferences</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold text-[#757575]">Ultra High Definition Assets</span>
                                    <div className="w-12 h-6 bg-[#4A7FA7] rounded-full flex items-center px-1 shadow-inner">
                                        <div className="w-4 h-4 bg-white rounded-full ml-auto" />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between opacity-50">
                                    <span className="text-xs font-bold text-[#757575]">Night Mode Engine (Auto-detect)</span>
                                    <div className="w-12 h-6 bg-gray-300 rounded-full flex items-center px-1">
                                        <div className="w-4 h-4 bg-white rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-[#F6FAFD]">
                            <button className="h-14 px-10 rounded-2xl bg-[#0A1931] text-white text-[13px] font-black uppercase tracking-widest shadow-xl shadow-[#0A1931]/20">
                                Update Environment
                            </button>
                        </div>
                    </div>
                )}

                {/* Security */}
                {activeTab === "Security" && (
                    <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-500">
                        <div>
                            <h2 className="text-[11px] font-black text-[#757575] uppercase tracking-[0.2em] mb-6">Device Management</h2>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-5 bg-[#F6FAFD]/50 rounded-2xl border border-[#E0E0E0]">
                                    <div className="flex items-center gap-4">
                                        <Laptop size={24} className="text-[#4A7FA7]" />
                                        <div>
                                            <p className="text-[14px] font-black text-[#0A1931]">Chrome on Windows 11</p>
                                            <p className="text-[10px] text-[#2E7D32] font-black uppercase tracking-wider mt-0.5">Current Instance • Online</p>
                                        </div>
                                    </div>
                                    <button className="text-[10px] font-black text-[#757575] px-3 py-1.5 hover:text-white hover:bg-red-500 rounded-lg transition-all border border-[#E0E0E0]/50 uppercase tracking-widest">Terminate</button>
                                </div>
                                <div className="flex items-center justify-between p-5 bg-white rounded-2xl border border-[#E0E0E0]">
                                    <div className="flex items-center gap-4 opacity-70">
                                        <Smartphone size={24} className="text-[#757575]" />
                                        <div>
                                            <p className="text-[14px] font-black text-[#0A1931]">Safari on iPhone 15 Pro</p>
                                            <p className="text-[10px] text-[#757575] font-black uppercase tracking-wider mt-0.5">Inactive • 2 Hours Ago</p>
                                        </div>
                                    </div>
                                    <button className="text-[10px] font-black text-[#757575] px-3 py-1.5 hover:text-white hover:bg-red-500 rounded-lg transition-all border border-[#E0E0E0]/50 uppercase tracking-widest">Terminate</button>
                                </div>
                            </div>
                        </div>
                        
                        <div className="p-8 rounded-[2rem] bg-red-50/30 border border-red-100">
                            <h3 className="text-sm font-black text-red-600 uppercase tracking-widest mb-4">Critical Actions</h3>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="h-12 px-6 rounded-xl bg-white border border-red-200 text-red-600 text-[10px] font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all shadow-sm">
                                    Liquidate My Data
                                </button>
                                <button className="h-12 px-6 rounded-xl bg-red-600 text-white text-[10px] font-black uppercase tracking-widest hover:bg-red-700 transition-all shadow-xl shadow-red-600/10">
                                    Deactivate Account
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
