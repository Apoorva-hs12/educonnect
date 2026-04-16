import React, { useState } from "react";
import {
  ArrowLeft,
  Mic,
  MicOff,
  Video,
  VideoOff,
  Hand,
  Monitor,
  Settings,
  MessageSquare,
  Users,
  FileText,
  Send,
  Play,
  Copy,
  Download,
  LogOut,
  MoreVertical,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAuthStore } from "@/store/useAuthStore";

const codeExample = `import { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    // Cleanup function
    return () => clearInterval(interval);
  }, []);

  return <div>Count: {count}</div>;
}`;

export default function LiveClassPage() {
  const { user } = useAuthStore();
  const userName = user?.fullName || "User";
  
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [handRaised, setHandRaised] = useState(false);
  const [activeTab, setActiveTab] = useState("chat");
  const [activeToolTab, setActiveToolTab] = useState("code");
  const [chatInput, setChatInput] = useState("");
  const [showSidebar, setShowSidebar] = useState(true);

  const participants = [
    { name: `${userName} (You)`, role: user?.role === 'instructor' ? 'instructor' : 'student', hand: false },
    { name: "Sarah Kim", role: user?.role === 'instructor' ? 'student' : 'instructor', hand: false },
    { name: "Mike Johnson", role: "student", hand: true },
    { name: "Emma Davis", role: "student", hand: false },
    { name: "David Lee", role: "student", hand: false },
    { name: "Jane Smith", role: "student", hand: false },
    { name: "Tom Brown", role: "student", hand: false },
    { name: "Lisa Park", role: "student", hand: false },
    { name: "Chris Wilson", role: "student", hand: false },
  ];

  const chatMessages = [
    { sender: user?.role === 'instructor' ? userName : "John Doe", message: "Welcome everyone! Let's get started.", time: "9:30 AM", self: true },
    { sender: "Sarah Kim", message: "Great class so far! ", time: "9:45 AM", self: false },
    { sender: "Mike Johnson", message: "Can you explain the useEffect cleanup?", time: "9:50 AM", self: false },
    { sender: user?.role === 'instructor' ? userName : "John Doe", message: "Sure! Let me show you with an example.", time: "9:51 AM", self: true },
  ];

  return (
    <div className="fixed inset-0 z-[60] bg-[#0A1931] text-white flex flex-col font-sans">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-[#0A1931] border-b border-white/10">
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-all">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-base font-bold tracking-tight">React Advanced Concepts</h1>
            <p className="text-[10px] text-white/50 font-bold uppercase tracking-widest mt-0.5">Session: 09:30 - 11:00 AM</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-red-500/10 text-red-500 rounded-full border border-red-500/20">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
            <span className="text-[10px] font-black uppercase tracking-wider">Live Now</span>
          </div>
          <button className="w-9 h-9 rounded-full hover:bg-white/10 flex items-center justify-center text-white/60" onClick={() => setShowSidebar(!showSidebar)}>
            <MoreVertical size={20} />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Section */}
        <div className="flex-1 flex flex-col min-w-0 p-4">
          {/* Video Area */}
          <div className="relative bg-[#000] aspect-video max-h-[45vh] lg:max-h-[50vh] flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl group mb-4 border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1A3D63]/30 to-[#0A1931]/80 opacity-60" />
            
            {/* Main Speaker Avatar */}
            {!isCameraOn && (
                <div className="relative text-center animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#4A7FA7] to-[#1A3D63] flex items-center justify-center text-3xl font-black mx-auto mb-4 shadow-2xl ring-4 ring-white/10">
                    {user?.role === 'instructor' ? userName.charAt(0) : "J"}
                </div>
                <p className="text-sm font-bold text-white tracking-wide">{user?.role === 'instructor' ? userName : "John Doe"}</p>
                <p className="text-[10px] text-[#4A7FA7] font-bold uppercase tracking-widest mt-1">Instructor</p>
                </div>
            )}

            {/* Overlay Info */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
                <div className="px-2 py-1 bg-black/40 backdrop-blur-md rounded-md border border-white/10 text-[9px] font-bold text-white uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    HD Streaming
                </div>
            </div>

            {/* Floating Mini Videos */}
            <div className="absolute bottom-4 right-4 flex gap-3">
              <div className="w-24 h-16 rounded-xl bg-[#1A3D63] border border-white/20 flex items-center justify-center shadow-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="relative z-10 text-[10px] font-bold text-white/90">You</span>
              </div>
              {["S", "M"].map((letter, i) => (
                <div key={i} className="hidden sm:flex w-24 h-16 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center shadow-lg">
                  <span className="text-[10px] font-bold text-white/30">{letter}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Code Editor / Whiteboard */}
          <div className="flex-1 bg-[#010101]/40 rounded-2xl border border-white/10 flex flex-col overflow-hidden backdrop-blur-sm">
            <div className="flex items-center px-4 border-b border-white/10 bg-white/5">
              {(["code", "whiteboard"]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveToolTab(tab)}
                  className={`px-6 py-3 text-[10px] font-bold uppercase tracking-widest transition-all relative ${
                    activeToolTab === tab
                      ? "text-[#4A7FA7] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#4A7FA7]"
                      : "text-white/40 hover:text-white"
                  }`}
                >
                  {tab === "code" ? "Live Editor" : "Sketch Board"}
                </button>
              ))}
            </div>
            <div className="flex-1 p-6 overflow-auto font-mono custom-scrollbar">
              {activeToolTab === "code" ? (
                <div className="space-y-4">
                  <pre className="text-sm text-blue-300 leading-relax tracking-tight">
                    {codeExample.split('\n').map((line, i) => (
                        <div key={i} className="flex gap-4">
                            <span className="w-6 text-white/20 text-right select-none">{i + 1}</span>
                            <span>{line}</span>
                        </div>
                    ))}
                  </pre>
                  
                  <div className="flex items-center gap-3 pt-6 border-t border-white/5">
                    <button className="flex items-center gap-2 px-4 py-2 bg-green-600/20 text-green-400 text-[10px] font-bold uppercase tracking-widest rounded-lg border border-green-600/30 hover:bg-green-600 hover:text-white transition-all">
                      <Play size={14} className="fill-current" /> Run Script
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-white/5 text-white/60 text-[10px] font-bold uppercase tracking-widest rounded-lg border border-white/5 hover:bg-white/10 transition-all">
                      <Copy size={14} /> Copy Source
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full text-white/10">
                  <Monitor size={48} strokeWidth={1} />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        {showSidebar && (
          <div className="w-[340px] bg-[#0A1931] border-l border-white/10 flex flex-col animate-in slide-in-from-right duration-300">
            {/* Tabs */}
            <div className="grid grid-cols-3 border-b border-white/10">
              {(["chat", "participants", "resources"]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex flex-col items-center justify-center py-4 text-[9px] font-bold uppercase tracking-widest transition-all gap-1.5 ${
                    activeTab === tab ? "text-[#4A7FA7] bg-white/5" : "text-white/30 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {tab === "chat" && <MessageSquare size={16} />}
                  {tab === "participants" && <Users size={16} />}
                  {tab === "resources" && <FileText size={16} />}
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
              {activeTab === "participants" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">In this session ({participants.length})</p>
                  </div>
                  <div className="space-y-4">
                    {participants.map((p, i) => (
                      <div key={i} className="flex items-center gap-4 group">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#4A7FA7] to-[#1A3D63] flex items-center justify-center text-xs font-bold ring-2 ring-white/5">
                          {p.name.charAt(0)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[13px] font-bold truncate group-hover:text-[#4A7FA7] transition-colors">{p.name}</p>
                          <p className={`text-[10px] font-bold uppercase tracking-wider ${p.role === 'instructor' ? 'text-[#F57C00]' : 'text-white/30'}`}>{p.role}</p>
                        </div>
                        {p.hand && <div className="animate-bounce">🤚</div>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "chat" && (
                <div className="flex flex-col h-full space-y-6">
                    {chatMessages.map((msg, i) => (
                      <div key={i} className={`flex flex-col ${msg.self ? "items-end" : "items-start"}`}>
                        <div className="flex items-center gap-2 mb-2">
                             {!msg.self && <span className="text-[10px] font-black text-[#4A7FA7]">{msg.sender}</span>}
                             <span className="text-[9px] font-bold text-white/20">{msg.time}</span>
                        </div>
                        <div className={`px-4 py-3 rounded-2xl text-[13px] leading-relaxed max-w-[90%] shadow-lg ${
                          msg.self ? "bg-[#4A7FA7] text-white rounded-tr-none" : "bg-white/5 text-white/90 rounded-tl-none border border-white/5"
                        }`}>
                          {msg.message}
                        </div>
                      </div>
                    ))}
                </div>
              )}

              {activeTab === "resources" && (
                <div className="space-y-3">
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-4">Materials Library</p>
                  {["lecture-slides.pdf", "starter-template.git", "documentation.zip"].map((file) => (
                    <div key={file} className="flex items-center gap-4 px-4 py-4 bg-white/5 rounded-xl border border-white/5 hover:border-[#4A7FA7]/30 transition-all cursor-pointer group">
                      <div className="w-8 h-8 rounded-lg bg-[#4A7FA7]/10 flex items-center justify-center text-[#4A7FA7]">
                        <FileText size={16} />
                      </div>
                      <span className="text-xs font-bold text-white/70 flex-1 truncate">{file}</span>
                      <Download size={14} className="text-white/20 group-hover:text-white" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Chat Input Area */}
            {activeTab === "chat" && (
              <div className="p-6 border-t border-white/10 bg-white/5">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    className="w-full bg-[#0A1931] border border-white/10 rounded-xl pl-4 pr-12 py-3 text-sm text-white placeholder:text-white/20 focus:border-[#4A7FA7] outline-none transition-all shadow-xl"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-[#4A7FA7] flex items-center justify-center hover:scale-105 active:scale-95 transition-all text-white shadow-lg">
                    <Send size={14} />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom Controls */}
      <div className="flex items-center justify-center gap-6 px-10 py-6 bg-[#010101]/60 backdrop-blur-xl border-t border-white/10">
        <div className="flex items-center gap-4">
            <button
            onClick={() => setIsMuted(!isMuted)}
            className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${
                isMuted ? "bg-red-500 text-white shadow-lg shadow-red-500/20" : "bg-white/10 text-white hover:bg-white/20"
            }`}
            >
            {isMuted ? <MicOff size={24} /> : <Mic size={24} />}
            </button>
            <button
            onClick={() => setIsCameraOn(!isCameraOn)}
            className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${
                !isCameraOn ? "bg-red-500 text-white shadow-lg shadow-red-500/20" : "bg-white/10 text-white hover:bg-white/20"
            }`}
            >
            {isCameraOn ? <Video size={24} /> : <VideoOff size={24} />}
            </button>
        </div>

        <div className="h-10 w-px bg-white/10 mx-2" />

        <div className="flex items-center gap-4">
            <button
            onClick={() => setHandRaised(!handRaised)}
            className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${
                handRaised ? "bg-[#F57C00] text-white shadow-lg shadow-[#F57C00]/20" : "bg-white/10 text-white hover:bg-white/20"
            }`}
            >
            <Hand size={24} className={handRaised ? "animate-bounce" : ""} />
            </button>
            <button className="w-14 h-14 rounded-2xl bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-all">
                <Monitor size={24} />
            </button>
            <button className="w-14 h-14 rounded-2xl bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-all lg:hidden" onClick={() => setShowSidebar(!showSidebar)}>
                <MessageSquare size={24} />
            </button>
        </div>

        <div className="h-10 w-px bg-white/10 mx-2 hidden sm:block" />

        <Link
          to="/dashboard"
          className="h-14 px-8 rounded-2xl bg-red-600 text-white text-[13px] font-black uppercase tracking-widest hover:bg-red-700 flex items-center gap-3 transition-all shadow-xl shadow-red-600/20 hover:-translate-y-1 active:translate-y-0"
        >
          <LogOut size={18} /> Exit Class
        </Link>
      </div>
    </div>
  );
}
