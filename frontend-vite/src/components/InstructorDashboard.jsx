import React from "react";
import { Link } from "react-router-dom";
import CourseCard from "@/components/CourseCard";
import {
  Users,
  BookOpen,
  IndianRupee,
  TrendingUp,
  Plus,
  ChevronRight,
  Play,
  Calendar,
  MessageSquare,
  Star,
  Clock
} from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";

const instructorStats = [
  { label: "Total Students", value: "842", icon: Users, color: "#4A7FA7" },
  { label: "Active Courses", value: "5", icon: BookOpen, color: "#2E7D32" },
  { label: "Total Hours Taught", value: "156h", icon: Clock, color: "#F57C00" },
];

const instructorCourses = [
  { id: "1", title: "React Workshop", students: 2340, rating: 4.9, status: "Active", progress: 85, price: "4,200" },
  { id: "2", title: "Advanced Node.js", students: 1890, rating: 4.7, status: "Active", progress: 60, price: "3,150" },
  { id: "3", title: "UI/UX Principles", students: 1200, rating: 4.8, status: "Draft", progress: 0, price: "2,800" },
];

const studentActivity = [
  { name: "Alex Johnson", course: "React Workshop", activity: "Completed Module 4", time: "2m ago" },
  { name: "Maria Garcia", course: "Advanced Node.js", activity: "Posted a question", time: "15m ago" },
  { name: "James Smith", course: "React Workshop", activity: "Enrolled in course", time: "1h ago" },
];

export default function InstructorDashboard() {
  const { user } = useAuthStore();
  const today = new Date();
  const dayName = today.toLocaleDateString("en-US", { weekday: "long" });
  const dateStr = today.toLocaleDateString("en-US", { month: "long", day: "numeric" });

  return (
    <div className="p-6 lg:p-8 max-w-[1200px] mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-[#0A1931]">
            Haii {user?.fullName || "there"}, welcome back! 👋
          </h1>
          <p className="text-[#757575] mt-1 font-medium italic">Here{"'"}s your impact today.</p>
          <p className="text-xs text-[#757575] mt-0.5">{dayName}, {dateStr}</p>
        </div>
        <Link to="/create-course" className="btn-primary !w-auto flex items-center gap-2 shadow-lg shadow-[#4A7FA7]/20 border border-[#E0E0E0]">
          <Plus size={18} /> Create New Course
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {instructorStats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl border border-[#E0E0E0] p-5 hover:shadow-md transition-shadow group"
          >
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-110"
                style={{ backgroundColor: stat.color }}
              >
                <stat.icon size={22} />
              </div>
              <div>
                <p className="text-2xl font-bold text-[#0A1931]">{stat.value}</p>
                <p className="text-xs text-[#757575] font-medium">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Course Management */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-[#E0E0E0] p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-[#0A1931] flex items-center gap-2">
              <TrendingUp size={20} className="text-[#4A7FA7]" /> Active Courses
            </h2>
            <Link to="/my-courses" className="text-sm text-[#4A7FA7] font-semibold hover:underline flex items-center gap-1">
              Manage All <ChevronRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {instructorCourses.map((course) => (
              <CourseCard 
                key={course.id} 
                {...course} 
                tag={course.status}
                instructor={user?.fullName || "Instructor"} 
              />
            ))}
          </div>

        </div>

        {/* Recent Student Activity */}
        <div className="bg-white rounded-xl border border-[#E0E0E0] p-6 shadow-sm">
          <h2 className="text-lg font-bold text-[#0A1931] flex items-center gap-2 mb-6">
            <MessageSquare size={20} className="text-[#4A7FA7]" /> Student Activity
          </h2>
          <div className="space-y-6">
            {studentActivity.map((act, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F6FAFD] border border-[#E0E0E0] flex items-center justify-center text-[10px] font-bold text-[#4A7FA7] shrink-0">
                  {act.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-[#0A1931] truncate">{act.name}</p>
                  <p className="text-[10px] text-[#757575] italic">{act.course}</p>
                  <p className="text-xs text-[#1A3D63] mt-0.5">{act.activity}</p>
                  <p className="text-[10px] text-[#757575] mt-1">{act.time}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-2 text-xs font-bold text-[#4A7FA7] border border-[#4A7FA7]/20 rounded-lg hover:bg-[#F6FAFD] transition-colors">
            View All Activity
          </button>
        </div>
      </div>
    </div>
  );
}
