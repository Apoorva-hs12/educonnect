import React, { useState } from "react";
import { Send, Paperclip, Search, MoreVertical, Phone, Video, Smile, ArrowLeft, Check, CheckCheck } from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";

const conversations = [
  { id: "1", name: "John Doe", lastMessage: "Hey, how are you?", time: "2 hours ago", unread: false, online: true },
  { id: "2", name: "Sarah Kim", lastMessage: "Thanks for your help with the project!", time: "Just now", unread: true, online: true },
  { id: "3", name: "Mike Johnson", lastMessage: "Let's catch up tomorrow", time: "Yesterday", unread: false, online: false },
  { id: "4", name: "React Study Group", lastMessage: "Meeting tomorrow at 3 PM?", time: "3 days ago", unread: false, online: false },
  { id: "5", name: "Emma Davis", lastMessage: "Check out this tutorial!", time: "4 days ago", unread: false, online: true },
];

const messagesMock = [
  { sender: "John Doe", text: "Hey, how are you?", time: "10:00 AM", self: false, status: "read" },
  { sender: "You", text: "I'm doing great! Just finished the React module.", time: "10:05 AM", self: true, status: "read" },
  { sender: "John Doe", text: "That's awesome! How did you find the hooks section?", time: "10:06 AM", self: false, status: "read" },
  { sender: "You", text: "It was really helpful. The custom hooks part was my favorite.", time: "10:10 AM", self: true, status: "read" },
  { sender: "John Doe", text: "Would love to help with the project if you need any guidance 😊", time: "10:15 AM", self: false, status: "read" },
  { sender: "You", text: "That would be amazing! Can we schedule a call?", time: "10:18 AM", self: true, status: "sent" },
  { sender: "John Doe", text: "Sure! How about tomorrow at 2 PM?", time: "10:20 AM", self: false, status: "read" },
];

export default function MessagesPage() {
  const { user } = useAuthStore();
  const [activeConvo, setActiveConvo] = useState("1");
  const [messageInput, setMessageInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showConvoList, setShowConvoList] = useState(true);

  const activeConversation = conversations.find((c) => c.id === activeConvo);

  return (
    <div className="flex h-[calc(100vh-64px)] overflow-hidden bg-white">
      {/* Sidebar - Conversation List */}
      <div className={`w-full md:w-[380px] border-r border-[#E0E0E0] flex flex-col shrink-0 bg-white transition-all duration-300 ${
        !showConvoList ? "hidden md:flex" : "flex"
      }`}>
        <div className="p-6 border-b border-[#E0E0E0]">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[#0A1931]">Messages</h2>
            <div className="w-10 h-10 rounded-xl bg-[#F6FAFD] border border-[#E0E0E0] flex items-center justify-center text-[#4A7FA7] hover:bg-[#B3CFE5]/20 cursor-pointer transition-colors">
                <MoreVertical size={20} />
            </div>
          </div>
          <div className="relative group">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#757575] group-focus-within:text-[#4A7FA7] transition-colors" />
            <input
              type="text"
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-11 pl-12 pr-4 bg-[#F6FAFD] border border-[#E0E0E0] rounded-xl text-sm outline-none focus:border-[#4A7FA7] focus:ring-4 focus:ring-[#4A7FA7]/5 transition-all"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-2">
          {conversations.map((convo) => (
            <button
              key={convo.id}
              onClick={() => { setActiveConvo(convo.id); setShowConvoList(false); }}
              className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all mb-1 ${
                activeConvo === convo.id ? "bg-[#F6FAFD] border border-[#E0E0E0]/50" : "hover:bg-[#F6FAFD]/50 border border-transparent"
              }`}
            >
              <div className="relative shrink-0">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#4A7FA7] to-[#1A3D63] flex items-center justify-center text-white text-lg font-bold shadow-md shadow-[#4A7FA7]/20 uppercase">
                  {convo.name.charAt(0)}
                </div>
                {convo.online && (
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#2E7D32] rounded-full border-2 border-white" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className={`text-[15px] truncate tracking-tight ${convo.unread ? "font-black text-[#0A1931]" : "font-bold text-[#1A3D63]"}`}>
                    {convo.name}
                  </span>
                  <span className="text-[10px] font-bold text-[#757575] uppercase tracking-wider">{convo.time}</span>
                </div>
                <div className="flex items-center justify-between gap-2 mt-1">
                    <p className={`text-[13px] truncate ${convo.unread ? "text-[#0A1931] font-bold" : "text-[#757575] font-medium"}`}>
                    {convo.lastMessage}
                    </p>
                    {convo.unread && (
                        <div className="min-w-[18px] h-[18px] bg-[#4A7FA7] rounded-full flex items-center justify-center text-[9px] text-white font-black">1</div>
                    )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className={`flex-1 flex flex-col bg-[#F6FAFD] relative ${showConvoList ? "hidden md:flex" : "flex"}`}>
        {/* Chat Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-[#E0E0E0] shadow-sm relative z-10">
          <div className="flex items-center gap-4">
            <button className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-[#757575] hover:bg-[#F6FAFD]" onClick={() => setShowConvoList(true)}>
              <ArrowLeft size={18} />
            </button>
            <div className="relative">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#4A7FA7] to-[#1A3D63] flex items-center justify-center text-white text-base font-bold shadow-lg shadow-[#4A7FA7]/20 uppercase">
                {activeConversation?.name.charAt(0)}
              </div>
              {activeConversation?.online && (
                <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#2E7D32] rounded-full border-2 border-white" />
              )}
            </div>
            <div>
              <p className="text-base font-black text-[#0A1931] tracking-tight leading-none">{activeConversation?.name}</p>
              <div className="flex items-center gap-1.5 mt-1.5">
                 <span className="w-1.5 h-1.5 bg-[#2E7D32] rounded-full animate-pulse" />
                 <p className="text-[10px] text-[#2E7D32] font-black uppercase tracking-wider">Active Now</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-xl flex items-center justify-center text-[#757575] bg-[#F6FAFD] border border-[#E0E0E0]/50 hover:bg-[#B3CFE5]/20 hover:text-[#4A7FA7] transition-all">
              <Phone size={18} />
            </button>
            <button className="w-10 h-10 rounded-xl flex items-center justify-center text-[#757575] bg-[#F6FAFD] border border-[#E0E0E0]/50 hover:bg-[#B3CFE5]/20 hover:text-[#4A7FA7] transition-all">
              <Video size={18} />
            </button>
            <button className="w-10 h-10 rounded-xl flex items-center justify-center text-[#757575] bg-[#F6FAFD] border border-[#E0E0E0]/50 hover:bg-[#B3CFE5]/20 hover:text-[#4A7FA7] transition-all">
              <MoreVertical size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable Messages Container */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]">
          <div className="flex justify-center mb-8">
             <span className="px-3 py-1 bg-[#E0E0E0]/50 backdrop-blur-sm rounded-full text-[10px] font-bold text-[#757575] uppercase tracking-widest border border-white/50">Today</span>
          </div>

          {messagesMock.map((msg, i) => (
            <div key={i} className={`flex ${msg.self ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
              <div className={`max-w-[70%] group ${msg.self ? "order-last ml-auto" : "mr-auto"}`}>
                {!msg.self && (
                    <div className="flex items-center gap-2 mb-1 pl-1">
                        <span className="text-[10px] font-black text-[#4A7FA7] uppercase tracking-tight">{msg.sender}</span>
                    </div>
                )}
                <div className={`px-5 py-3 rounded-2xl text-[14px] leading-relaxed shadow-sm transition-transform cursor-pointer hover:scale-[1.01] ${
                  msg.self
                    ? "bg-[#4A7FA7] text-white rounded-tr-none"
                    : "bg-white text-[#1A3D63] border border-[#E0E0E0]/50 rounded-tl-none"
                }`}>
                  {msg.text}
                </div>
                <div className={`flex items-center gap-2 mt-1.5 px-1 ${msg.self ? "justify-end" : "justify-start"}`}>
                  <span className="text-[9px] font-bold text-[#757575] uppercase">{msg.time}</span>
                  {msg.self && (
                    <div className="text-[#4A7FA7]">
                        {msg.status === "read" ? <CheckCheck size={12} /> : <Check size={12} />}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {/* Typing Indicator */}
          <div className="flex items-center gap-3 text-[#757575] opacity-60">
            <div className="flex gap-1.5 p-3 bg-white rounded-2xl border border-[#E0E0E0]/50 shadow-sm">
              <span className="w-1.5 h-1.5 bg-[#4A7FA7] rounded-full animate-bounce [animation-delay:-0.3s]" />
              <span className="w-1.5 h-1.5 bg-[#4A7FA7] rounded-full animate-bounce [animation-delay:-0.15s]" />
              <span className="w-1.5 h-1.5 bg-[#4A7FA7] rounded-full animate-bounce" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider">Typer is writing...</span>
          </div>
        </div>

        {/* Input Controls */}
        <div className="p-6 bg-white border-t border-[#E0E0E0]">
          <div className="flex items-center gap-3 max-w-[1000px] mx-auto">
            <div className="flex items-center gap-1">
                <button className="w-10 h-10 rounded-xl flex items-center justify-center text-[#757575] hover:bg-[#F6FAFD] hover:text-[#4A7FA7] transition-all">
                <Paperclip size={20} />
                </button>
                <button className="w-10 h-10 rounded-xl flex items-center justify-center text-[#757575] hover:bg-[#F6FAFD] hover:text-[#4A7FA7] transition-all">
                <Smile size={20} />
                </button>
            </div>
            <div className="flex-1 relative">
                <input
                type="text"
                placeholder="Type your message here..."
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                className="w-full h-12 px-6 bg-[#F6FAFD] border border-[#E0E0E0] rounded-2xl text-[14px] font-medium outline-none focus:border-[#4A7FA7] focus:ring-4 focus:ring-[#4A7FA7]/5 transition-all"
                />
            </div>
            <button className="w-12 h-12 rounded-2xl bg-[#4A7FA7] flex items-center justify-center text-white hover:bg-[#1A3D63] transition-all shadow-xl shadow-[#4A7FA7]/30 hover:-translate-y-1 active:scale-95">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
