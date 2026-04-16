import React from "react";
import { Link } from "react-router-dom";
import CourseCard from "@/components/CourseCard";
import {
  BookOpen,
  Award,
  Clock,
  TrendingUp,
  Flame,
  ChevronRight,
  Play,
  Calendar,
} from "lucide-react";

const stats = [
  { label: "Active Classes", value: "3", icon: BookOpen, color: "#4A7FA7" },
  { label: "Skills Learned", value: "12", icon: Award, color: "#2E7D32" },
  { label: "Learning Hours", value: "42h", icon: Clock, color: "#F57C00" },
];

const learningPath = [
  { name: "React Basics", progress: 80, color: "from-[#4A7FA7] to-[#2E7D32]" },
  { name: "Node.js Backend", progress: 60, color: "from-[#4A7FA7] to-[#1A3D63]" },
  { name: "MongoDB Database", progress: 40, color: "from-[#F57C00] to-[#C62828]" },
];

const recentClasses = [
  { id: "1", title: "React Workshop", instructor: "John Doe", rating: 4.9, students: 2340, price: "49", duration: "8 weeks", tag: "Popular" },
  { id: "2", title: "Data Structures & Algorithms", instructor: "Jane Smith", rating: 4.7, students: 1890, price: "59", duration: "10 weeks", tag: "Trending" },
  { id: "3", title: "UI/UX Design Fundamentals", instructor: "Emma Davis", rating: 4.8, students: 1200, price: "39", duration: "6 weeks" },
  { id: "4", title: "Python for Data Science", instructor: "David Lee", rating: 4.6, students: 3100, price: "Free", duration: "4 weeks", tag: "Free" },
];

const recommended = [
  { id: "5", title: "Python 101", instructor: "David Lee", rating: 4.6, students: 3100, price: "Free", duration: "4 weeks", tag: "Beginner" },
  { id: "6", title: "Docker & Kubernetes", instructor: "Emma Davis", rating: 4.8, students: 890, price: "69", duration: "12 weeks", tag: "Advanced" },
  { id: "7", title: "TypeScript Mastery", instructor: "Chris Wilson", rating: 4.9, students: 1560, price: "49", duration: "8 weeks" },
  { id: "8", title: "AWS Cloud Fundamentals", instructor: "Lisa Park", rating: 4.5, students: 2100, price: "79", duration: "10 weeks", tag: "New" },
];

const upcomingClasses = [
  { title: "React Performance", time: "Today, 2:00 PM", instructor: "John Doe", isLive: true },
  { title: "Node.js Streams", time: "Tomorrow, 10:00 AM", instructor: "Jane Smith", isLive: false },
  { title: "MongoDB Aggregation", time: "Wed, 3:00 PM", instructor: "Mike Johnson", isLive: false },
];

export default function StudentDashboard({ user }) {
  const today = new Date();
  const dayName = today.toLocaleDateString("en-US", { weekday: "long" });
  const dateStr = today.toLocaleDateString("en-US", { month: "long", day: "numeric" });

  return (
    <div className="p-6 lg:p-8 max-w-[1200px] mx-auto">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold text-[#0A1931]">
          Haii {user?.fullName?.split(" ")[0] || "Student"}, ready to learn? 👋
        </h1>
        <p className="text-[#757575] mt-1 font-medium italic">{dayName}, {dateStr}</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {stats.map((stat) => (
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

      {/* Learning Path + Upcoming */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Learning Path */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-[#E0E0E0] p-6 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-bold text-[#0A1931] flex items-center gap-2">
              <TrendingUp size={20} className="text-[#4A7FA7]" /> Your Learning Path
            </h2>
            <Link to="/my-courses" className="text-sm text-[#4A7FA7] font-semibold hover:underline flex items-center gap-1">
              View All <ChevronRight size={14} />
            </Link>
          </div>
          <div className="space-y-5">
            {learningPath.map((course) => (
              <div key={course.name}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-[#0A1931]">{course.name}</span>
                  <span className="text-sm font-bold text-[#4A7FA7]">{course.progress}%</span>
                </div>
                <div className="h-2.5 bg-[#E0E0E0]/50 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${course.color} rounded-full transition-all duration-700`}
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Classes */}
        <div className="bg-white rounded-xl border border-[#E0E0E0] p-6 shadow-sm">
          <h2 className="text-lg font-bold text-[#0A1931] flex items-center gap-2 mb-5">
            <Calendar size={20} className="text-[#4A7FA7]" /> Upcoming
          </h2>
          <div className="space-y-3">
            {upcomingClasses.map((cls, i) => (
              <div
                key={i}
                className="p-3 rounded-lg border border-[#E0E0E0] hover:border-[#B3CFE5] hover:shadow-sm transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-semibold text-[#0A1931]">{cls.title}</p>
                    <p className="text-xs text-[#757575] mt-0.5">{cls.instructor || "EduConnect Instructor"}</p>
                    <p className="text-xs text-[#757575] mt-1">{cls.time}</p>
                  </div>
                  {cls.isLive ? (
                    <span className="flex items-center gap-1 px-2 py-1 bg-[#C62828]/10 text-[#C62828] text-[10px] font-bold rounded-md uppercase">
                      <span className="w-1.5 h-1.5 bg-[#C62828] rounded-full animate-pulse" />
                      Live
                    </span>
                  ) : (
                    <Play size={16} className="text-[#4A7FA7] mt-1" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Learning Streak */}
      <div className="bg-white rounded-xl border border-[#E0E0E0] p-6 mb-8 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Flame size={24} className="text-[#F57C00]" />
          <div>
            <h2 className="text-lg font-bold text-[#0A1931]">5 Day Streak! 🔥</h2>
            <p className="text-xs text-[#757575]">Keep going! You{"'"}re on fire!</p>
          </div>
        </div>
        <div className="flex gap-2">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
            <div key={day} className="flex flex-col items-center gap-1.5 flex-1">
              <div
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  i < 5
                    ? "bg-gradient-to-br from-[#F57C00] to-[#C62828] text-white shadow-md"
                    : "bg-[#E0E0E0]/50 text-[#757575]"
                }`}
              >
                {i < 5 ? "✓" : ""}
              </div>
              <span className="text-[10px] text-[#757575] font-medium">{day}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Classes */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-bold text-[#0A1931]">Recent Classes</h2>
          <Link to="/my-courses" className="text-sm text-[#4A7FA7] font-semibold hover:underline flex items-center gap-1">
            See All <ChevronRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {recentClasses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>

      {/* Recommended Courses */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-bold text-[#0A1931]">Recommended For You</h2>
          <Link to="/courses" className="text-sm text-[#4A7FA7] font-semibold hover:underline flex items-center gap-1">
            Browse All <ChevronRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {recommended.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
}
