import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Star,
  Clock,
  Users,
  Share2,
  Heart,
  ChevronDown,
  ChevronUp,
  Play,
  Lock,
  Download,
  Award,
} from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";

const curriculum = [
  {
    title: "Module 1: Foundations",
    lessons: [
      { name: "React Basics Review", duration: "45 min", free: true },
      { name: "JSX Deep Dive", duration: "55 min", free: true },
      { name: "Component Lifecycle", duration: "60 min", free: false },
    ],
  },
  {
    title: "Module 2: Hooks",
    lessons: [
      { name: "useState & useEffect", duration: "50 min", free: false },
      { name: "Custom Hooks", duration: "55 min", free: false },
      { name: "Hooks Best Practices", duration: "45 min", free: false },
    ],
  },
  {
    title: "Module 3: Advanced Patterns",
    lessons: [
      { name: "Context API", duration: "50 min", free: false },
      { name: "Render Props", duration: "40 min", free: false },
      { name: "HOC Patterns", duration: "45 min", free: false },
      { name: "Code Splitting", duration: "35 min", free: false },
      { name: "Suspense & Error Boundaries", duration: "55 min", free: false },
      { name: "Performance Optimization", duration: "60 min", free: false },
      { name: "Memoization", duration: "40 min", free: false },
    ],
  },
  {
    title: "Module 4: Real-World Projects",
    lessons: [
      { name: "Project Setup", duration: "30 min", free: false },
      { name: "Building the UI", duration: "90 min", free: false },
      { name: "State Management", duration: "75 min", free: false },
      { name: "Deployment", duration: "45 min", free: false },
    ],
  },
];

const reviews = [
  { name: "Sarah Kim", rating: 5, text: "Excellent course! Very comprehensive and well-structured.", date: "Jan 10, 2024" },
  { name: "Mike Johnson", rating: 5, text: "John explains concepts so clearly. Best React course!", date: "Jan 5, 2024" },
  { name: "Lisa Park", rating: 4, text: "Great content. Would love more practice exercises.", date: "Dec 28, 2023" },
];

const getCourseImage = (title) => {
  if (!title) return "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";
  const t = title.toLowerCase();
  if (t.includes("react")) return "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";
  if (t.includes("node")) return "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";
  if (t.includes("design") || t.includes("ux")) return "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";
  if (t.includes("python") || t.includes("data")) return "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";
  return "https://images.unsplash.com/photo-1510511459019-5dee99c43dbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";
};

export default function CourseDetailPage() {
  const { id } = useParams();
  const [expandedModule, setExpandedModule] = useState(0);
  const [liked, setLiked] = useState(false);
  const { initialize } = useAuthStore();

  // In a real app, we'd fetch this. We'll simulate finding it from a list
  const courseTitle = id === "1" ? "React Advanced Concepts" : "Professional Course";
  const courseImage = getCourseImage(courseTitle);


  useEffect(() => {
    initialize();
    window.scrollTo(0, 0);
  }, [initialize]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} size={16} className={i < rating ? "fill-[#F57C00] text-[#F57C00]" : "text-[#E0E0E0]"} />
    ));
  };

  return (
    <div className="p-6 lg:p-8 max-w-[900px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Back */}
      <Link to="/courses" className="flex items-center gap-2 text-sm text-[#757575] hover:text-[#4A7FA7] transition-colors font-medium mb-6">
        <ArrowLeft size={16} /> Back to Courses
      </Link>

      {/* Hero Card */}
      <div className="bg-white rounded-2xl border border-[#E0E0E0] overflow-hidden mb-8 shadow-sm">
        <div className="relative h-64 sm:h-80 bg-gradient-to-br from-[#4A7FA7] to-[#1A3D63] flex items-center justify-center">
          <img 
            src={courseImage} 
            alt={courseTitle} 
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="w-24 h-24 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white text-4xl font-bold shadow-2xl relative z-10">
            {courseTitle.charAt(0)}
          </div>
          <span className="absolute top-6 left-6 px-3 py-1.5 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider rounded-md border border-white/30 z-10">
            Professional Certification
          </span>
        </div>

        <div className="p-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-[#0A1931] mb-3 leading-tight">{courseTitle}</h1>

          <p className="text-[#757575] mb-6 text-lg font-medium leading-relaxed">Master the art of high-performance React applications with deep dives into design patterns and architectural best practices.</p>

          <div className="flex items-center gap-6 mb-8 flex-wrap">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4A7FA7] to-[#1A3D63] flex items-center justify-center text-white text-sm font-bold shadow-md">J</div>
              <div>
                <p className="text-xs text-[#757575] uppercase font-bold tracking-wider">Instructor</p>
                <p className="text-sm font-bold text-[#0A1931]">John Doe</p>
              </div>
            </div>
            <div className="h-10 w-px bg-[#E0E0E0] hidden sm:block"></div>
            <div>
              <p className="text-xs text-[#757575] uppercase font-bold tracking-wider mb-1">Rating</p>
              <div className="flex items-center gap-2">
                <div className="flex">{renderStars(5)}</div>
                <span className="text-sm font-bold text-[#0A1931]">4.9</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-[#E0E0E0] mb-8">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold text-[#757575] uppercase tracking-wider">Duration</span>
              <span className="text-sm font-bold text-[#1A3D63] flex items-center gap-1.5"><Clock size={16} className="text-[#4A7FA7]" /> 8 weeks</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold text-[#757575] uppercase tracking-wider">Students</span>
              <span className="text-sm font-bold text-[#1A3D63] flex items-center gap-1.5"><Users size={16} className="text-[#4A7FA7]" /> 2.3k+</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold text-[#757575] uppercase tracking-wider">Language</span>
              <span className="text-sm font-bold text-[#1A3D63]">English</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold text-[#757575] uppercase tracking-wider">Certificate</span>
              <span className="text-sm font-bold text-[#1A3D63] flex items-center gap-1.5"><Award size={16} className="text-[#4A7FA7]" /> Included</span>
            </div>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex flex-col mr-4">
              <span className="text-xs font-bold text-[#757575] uppercase tracking-wider">Course Price</span>
              <span className="text-3xl font-bold text-[#4A7FA7]">₹4,200</span>
            </div>
            <button className="btn-primary !h-14 !px-10 !w-auto shadow-xl shadow-[#4A7FA7]/30 hover:-translate-y-1 transition-transform">
              Enroll Now
            </button>
            <div className="flex items-center gap-2">
                <button
                onClick={() => setLiked(!liked)}
                className={`w-14 h-14 rounded-xl border flex items-center justify-center transition-all ${
                    liked ? "bg-red-50 border-[#C62828] text-[#C62828]" : "bg-white border-[#E0E0E0] text-[#757575] hover:border-[#C62828] hover:text-[#C62828]"
                }`}
                >
                <Heart size={20} className={liked ? "fill-current" : ""} />
                </button>
                <button className="w-14 h-14 rounded-xl border border-[#E0E0E0] bg-white flex items-center justify-center text-[#757575] hover:text-[#4A7FA7] hover:border-[#4A7FA7] transition-all">
                <Share2 size={20} />
                </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <section className="bg-white rounded-2xl border border-[#E0E0E0] p-8 shadow-sm">
                <h2 className="text-xl font-bold text-[#0A1931] mb-6 border-l-4 border-[#4A7FA7] pl-4">About the Course</h2>
                <div className="prose prose-blue max-w-none">
                    <p className="text-[#1A3D63] leading-relaxed mb-6 text-lg">
                    This advanced curriculum is designed for developers looking to push the boundaries of modern frontend architecture. We explore complex state synchronization, high-performance rendering, and enterprise-grade code structures.
                    </p>
                    <h3 className="font-bold text-[#0A1931] mb-4 text-base">What you will master:</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                        "Atomic Design Patterns",
                        "Complex Data Fetching Techniques",
                        "Runtime Performance Audits",
                        "Advanced React Reconciliation",
                        "Micro-Frontend Architectures"
                    ].map((topic) => (
                        <li key={topic} className="flex items-center gap-3 text-sm text-[#1A3D63] font-medium bg-[#F6FAFD] p-3 rounded-lg border border-[#E0E0E0]/50">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#4A7FA7] shrink-0" />
                        {topic}
                        </li>
                    ))}
                    </ul>
                </div>
            </section>

            {/* Curriculum */}
            <section className="bg-white rounded-2xl border border-[#E0E0E0] p-8 shadow-sm">
                <h2 className="text-xl font-bold text-[#0A1931] mb-6 border-l-4 border-[#4A7FA7] pl-4">Curriculum Breakdown</h2>
                <div className="space-y-3">
                {curriculum.map((module, idx) => (
                    <div key={idx} className="border border-[#E0E0E0] rounded-xl overflow-hidden bg-white hover:border-[#4A7FA7]/30 transition-colors">
                    <button
                        onClick={() => setExpandedModule(expandedModule === idx ? null : idx)}
                        className={`w-full flex items-center justify-between p-5 transition-colors ${expandedModule === idx ? 'bg-[#F6FAFD]' : 'bg-white'}`}
                    >
                        <div className="flex items-center gap-4">
                            <span className="w-8 h-8 rounded-lg bg-[#4A7FA7]/10 flex items-center justify-center text-[#4A7FA7] font-bold text-sm">0{idx + 1}</span>
                            <div className="text-left">
                                <p className="text-sm font-bold text-[#0A1931]">{module.title}</p>
                                <p className="text-[10px] text-[#757575] font-bold uppercase tracking-widest">{module.lessons.length} Modules</p>
                            </div>
                        </div>
                        {expandedModule === idx ? <ChevronUp size={18} className="text-[#4A7FA7]" /> : <ChevronDown size={18} className="text-[#757575]" />}
                    </button>
                    {expandedModule === idx && (
                        <div className="border-t border-[#E0E0E0] bg-[#F6FAFD]/50">
                        {module.lessons.map((lesson, li) => (
                            <div key={li} className="flex items-center justify-between px-6 py-4 border-b border-[#E0E0E0] last:border-0 hover:bg-white transition-colors">
                            <div className="flex items-center gap-4">
                                {lesson.free ? (
                                <Play size={16} className="text-[#4A7FA7] fill-current opacity-20" />
                                ) : (
                                <Lock size={16} className="text-[#757575] opacity-40" />
                                )}
                                <span className="text-sm font-medium text-[#1A3D63]">{lesson.name}</span>
                                {lesson.free && (
                                <span className="px-2 py-0.5 bg-[#2E7D32]/10 text-[#2E7D32] text-[10px] font-bold rounded">PREVIEW</span>
                                )}
                            </div>
                            <span className="text-xs font-bold text-[#757575] bg-white px-2 py-1 rounded border border-[#E0E0E0]">{lesson.duration}</span>
                            </div>
                        ))}
                        </div>
                    )}
                    </div>
                ))}
                </div>
            </section>
        </div>

        <div className="space-y-6">
             {/* Simple Sidebar Widget */}
             <div className="bg-[#1A3D63] rounded-2xl p-8 text-white shadow-xl relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors" />
                <h3 className="text-lg font-bold mb-4 relative z-10">Lifetime Access</h3>
                <p className="text-white/70 text-sm mb-6 leading-relaxed relative z-10">Enroll once and get unlimited access to all future updates and course materials.</p>
                <button className="w-full bg-white text-[#1A3D63] font-bold py-3 rounded-xl hover:bg-[#F6FAFD] transition-colors relative z-10 shadow-lg">
                    Get Lifetime Pass
                </button>
             </div>
             
             {/* Quick Stats */}
             <div className="bg-white rounded-2xl border border-[#E0E0E0] p-6 shadow-sm">
                <h3 className="font-bold text-[#0A1931] mb-4">Course Highlights</h3>
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#2E7D32]/10 flex items-center justify-center text-[#2E7D32]">
                            <Download size={16} />
                        </div>
                        <span className="text-sm font-medium text-[#1A3D63]">12 Downloadable resources</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#4A7FA7]/10 flex items-center justify-center text-[#4A7FA7]">
                            <Users size={16} />
                        </div>
                        <span className="text-sm font-medium text-[#1A3D63]">Community access</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#F57C00]/10 flex items-center justify-center text-[#F57C00]">
                            <Award size={16} />
                        </div>
                        <span className="text-sm font-medium text-[#1A3D63]">Signed certification</span>
                    </div>
                </div>
             </div>
        </div>
      </div>
    </div>
  );
}
