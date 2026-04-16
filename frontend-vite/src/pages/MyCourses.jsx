import React, { useState } from "react";
import { Link } from "react-router-dom";
import CourseCard from "@/components/CourseCard";
import { ChevronRight } from "lucide-react";

const tabs = ["All", "Active", "Completed", "Wishlist"];

const courses = [
  { id: "1", title: "React Basics", instructor: "John Doe", rating: 4.9, students: 2340, price: "49", progress: 80, duration: "8 weeks", tag: "Active" },
  { id: "2", title: "Node.js Backend Development", instructor: "Jane Smith", rating: 4.7, students: 1890, price: "59", progress: 100, duration: "10 weeks" },
  { id: "3", title: "Web Design Principles", instructor: "David Lee", rating: 4.8, students: 1200, price: "39", progress: 0, duration: "6 weeks" },
  { id: "4", title: "Python 101", instructor: "Emma Davis", rating: 4.6, students: 3100, price: "Free", progress: 45, duration: "4 weeks", tag: "Active" },
  { id: "5", title: "Docker Advanced", instructor: "Chris Wilson", rating: 4.5, students: 890, price: "69", progress: 60, duration: "12 weeks", tag: "Active" },
];

export default function MyCoursesPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered = courses.filter((c) => {
    if (activeTab === "All") return true;
    if (activeTab === "Active") return c.progress > 0 && c.progress < 100;
    if (activeTab === "Completed") return c.progress === 100;
    if (activeTab === "Wishlist") return c.progress === 0;
    return true;
  });

  return (
    <div className="p-6 lg:p-8 max-w-[1200px] mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-[#0A1931]">My Courses</h1>
        <Link to="/courses" className="text-sm text-[#4A7FA7] font-semibold hover:underline flex items-center gap-1">
          Browse New Courses <ChevronRight size={14} />
        </Link>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 border-b border-[#E0E0E0] mb-6 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
              activeTab === tab
                ? "text-[#4A7FA7] border-[#4A7FA7]"
                : "text-[#757575] border-transparent hover:text-[#0A1931]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Course Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((course) => (
            <CourseCard key={course.id} {...course} variant="enrolled" />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-4xl mb-4">📚</p>
          <h3 className="text-lg font-semibold text-[#0A1931] mb-2">No courses here yet</h3>
          <p className="text-sm text-[#757575] mb-6 font-medium">Start learning by exploring available courses.</p>
          <Link to="/courses" className="btn-primary !w-auto inline-flex border border-[#E0E0E0]">Browse Courses</Link>
        </div>
      )}
    </div>
  );
}
