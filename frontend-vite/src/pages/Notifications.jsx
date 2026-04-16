import React, { useState } from "react";
import { Bell, MessageSquare, Edit3, Award, CheckCircle, Clock, Trash2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const tabs = [
  { id: "All", label: "Global Feed" },
  { id: "Classes", label: "Sessions" },
  { id: "Messages", label: "Discussions" },
  { id: "Assignments", label: "Projects" },
  { id: "System", label: "Platform" }
];

const initialNotifications = [
  {
    id: "1",
    type: "class",
    icon: Bell,
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600",
    title: "Upcoming Session: React Advanced Concepts",
    message: "The lead architect will be online in 2 hours. Prepare your questions!",
    time: "2 hours ago",
    unread: true,
    actionText: "Prepare Now",
    actionLink: "/courses/1",
  },
  {
    id: "2",
    type: "message",
    icon: MessageSquare,
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-600",
    title: "Direct message from John Doe",
    message: '"Hey, I reviewed your PR for the Todo app. Looks solid!"',
    time: "Just now",
    unread: true,
    actionText: "Reply",
    actionLink: "/messages",
  },
  {
    id: "3",
    type: "assignment",
    icon: Edit3,
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-600",
    title: "Deadline Alert: Component Library Design",
    message: "You have 48 hours left to submit your design assets.",
    time: "4 hours ago",
    unread: false,
    actionText: "Open Project",
    actionLink: "/assignments",
  },
  {
    id: "4",
    type: "system",
    icon: Award,
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-600",
    title: "Achievement Unlocked: React Specialist",
    message: "You've been ranked in the top 5% of learners this month.",
    time: "Yesterday",
    unread: false,
    actionText: "Claim Badge",
    actionLink: "/achievements",
  },
];

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [notifications, setNotifications] = useState(initialNotifications);

  const filtered = notifications.filter((n) => {
    if (activeTab === "All") return true;
    if (activeTab === "Classes") return n.type === "class";
    if (activeTab === "Messages") return n.type === "message";
    if (activeTab === "Assignments") return n.type === "assignment";
    if (activeTab === "System") return n.type === "system";
    return true;
  });

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, unread: false })));
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, unread: false } : n)));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  return (
    <div className="p-6 lg:p-8 max-w-[900px] mx-auto animate-in fade-in duration-700">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-6">
        <div>
          <h1 className="text-3xl font-black text-[#0A1931] tracking-tight">System Feedback</h1>
          <p className="text-[#757575] mt-1 font-medium">Global activity and personal updates regarding your learning path.</p>
        </div>
        <button
          onClick={markAllAsRead}
          className="h-10 px-5 rounded-xl bg-white border border-[#E0E0E0] text-[10px] font-black uppercase tracking-widest text-[#4A7FA7] hover:bg-[#F6FAFD] transition-all flex items-center gap-2 shadow-sm"
        >
          <CheckCircle size={14} /> Mark All Read
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none bg-[#F6FAFD] p-1.5 rounded-2xl border border-[#E0E0E0]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.15em] rounded-xl transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-white text-[#4A7FA7] shadow-xl shadow-[#4A7FA7]/10"
                : "text-[#757575] hover:text-[#0A1931]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mb-6 flex items-center justify-between">
         <p className="text-[12px] font-bold text-[#757575]">Showing <span className="text-[#0A1931]">{filtered.length} Updates</span></p>
      </div>

      {/* List */}
      <div className="space-y-4">
        {filtered.length > 0 ? (
          filtered.map((notification) => (
            <div
              key={notification.id}
              className={`group bg-white rounded-[2rem] border p-6 transition-all duration-300 relative overflow-hidden ${
                notification.unread ? "border-[#4A7FA7] shadow-xl shadow-[#4A7FA7]/5" : "border-[#E0E0E0] opacity-80"
              }`}
            >
              {notification.unread && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#4A7FA7]/5 rounded-bl-[5rem] -z-0" />
              )}

              <div className="flex items-start gap-6 relative z-10">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-lg ${notification.iconBg}`}
                >
                  <notification.icon size={24} className={notification.iconColor} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3
                      className={`text-[15px] tracking-tight ${
                        notification.unread ? "font-black text-[#0A1931]" : "font-bold text-[#1A3D63]"
                      }`}
                    >
                      {notification.title}
                    </h3>
                    <div className="flex flex-col items-end gap-2 shrink-0">
                        <span className="text-[9px] font-black text-[#757575] uppercase tracking-widest bg-[#F6FAFD] px-2 py-0.5 rounded border border-[#E0E0E0]">{notification.time}</span>
                        <button onClick={() => deleteNotification(notification.id)} className="w-8 h-8 rounded-lg flex items-center justify-center text-[#757575] hover:text-red-500 hover:bg-red-50 opacity-0 group-hover:opacity-100 transition-all">
                             <Trash2 size={14} />
                        </button>
                    </div>
                  </div>
                  <p className="text-[14px] leading-relaxed text-[#757575] mb-5">{notification.message}</p>
                  
                  <div className="flex items-center gap-4">
                    {notification.unread ? (
                      <button
                        onClick={() => markAsRead(notification.id)}
                        className="h-9 px-4 rounded-lg bg-[#4A7FA7]/10 text-[#4A7FA7] text-[10px] font-black uppercase tracking-widest hover:bg-[#4A7FA7] hover:text-white transition-all flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-current rounded-full" /> Dismiss Mark
                      </button>
                    ) : (
                      <div className="text-[10px] font-black text-[#757575] uppercase tracking-widest flex items-center gap-1.5 opacity-60">
                        <CheckCircle size={14} className="text-[#2E7D32]" /> Read Transaction
                      </div>
                    )}
                    <Link
                      to={notification.actionLink}
                      className="h-9 px-4 rounded-lg bg-[#F6FAFD] border border-[#E0E0E0] text-[#0A1931] text-[10px] font-black uppercase tracking-widest hover:border-[#4A7FA7] transition-all flex items-center gap-2"
                    >
                      {notification.actionText} <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-20 bg-[#F6FAFD] rounded-[3rem] border border-dashed border-[#E0E0E0]">
            <div className="w-20 h-20 bg-white rounded-3xl border border-[#E0E0E0] flex items-center justify-center text-4xl mb-6 shadow-xl">
              <Bell size={32} className="text-[#E0E0E0]" />
            </div>
            <h3 className="text-xl font-black text-[#0A1931] mb-2 tracking-tight">Quiet Horizons</h3>
            <p className="text-sm font-medium text-[#757575]">Your global feed is currently synchronized and up to date.</p>
          </div>
        )}
      </div>
    </div>
  );
}
