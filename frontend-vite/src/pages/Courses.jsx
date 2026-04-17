import React, { useState } from "react";
import CourseCard from "@/components/CourseCard";
import { Search, SlidersHorizontal, X } from "lucide-react";

const categories = ["Programming", "Design", "Business", "Data Science", "DevOps", "Marketing"];
const levels = ["Beginner", "Intermediate", "Advanced"];
const ratings = ["4+ Stars", "3+ Stars", "All"];

const allCourses = [
  { id: "1", title: "React Advanced Concepts", instructor: "John Doe", rating: 4.9, students: 2340, price: "2499", duration: "8 weeks", tag: "Popular" },
  { id: "2", title: "Node.js Backend Development", instructor: "Jane Smith", rating: 4.7, students: 1890, price: "2999", duration: "10 weeks", tag: "Trending" },
  { id: "3", title: "UI/UX Design Fundamentals", instructor: "Emma Davis", rating: 4.8, students: 1200, price: "1999", duration: "6 weeks" },
  { id: "4", title: "Python for Data Science", instructor: "David Lee", rating: 4.6, students: 3100, price: "Free", duration: "4 weeks", tag: "Free" },
  { id: "5", title: "Docker & Kubernetes", instructor: "Chris Wilson", rating: 4.5, students: 890, price: "3499", duration: "12 weeks", tag: "Advanced" },
  { id: "6", title: "TypeScript Mastery", instructor: "Lisa Park", rating: 4.9, students: 1560, price: "Free", duration: "8 weeks" },
  { id: "7", title: "AWS Cloud Fundamentals", instructor: "Mike Johnson", rating: 4.4, students: 2100, price: "3999", duration: "10 weeks", tag: "New" },
  { id: "8", title: "Machine Learning Basics", instructor: "Sarah Lee", rating: 4.8, students: 1800, price: "4500", duration: "14 weeks" },
  { id: "9", title: "GraphQL API Development", instructor: "Tom Brown", rating: 4.3, students: 650, price: "2500", duration: "6 weeks" },
  { id: "10", title: "Flutter Mobile Development", instructor: "Anna Chen", rating: 4.7, students: 920, price: "2800", duration: "10 weeks", tag: "Popular" },
  { id: "11", title: "Cybersecurity Essentials", instructor: "James White", rating: 4.6, students: 1100, price: "3200", duration: "8 weeks" },
  { id: "12", title: "Digital Marketing Strategy", instructor: "Maria Garcia", rating: 4.5, students: 2200, price: "2000", duration: "4 weeks", tag: "Bestseller" },
  { id: "13", title: "Generative AI Masterclass", instructor: "Dr. Aris", rating: 4.9, students: 15400, price: "8500", duration: "12 weeks", tag: "New" },
  { id: "14", title: "Ethical Hacking & Cyber Defense", instructor: "Kevin Mitnick", rating: 4.8, students: 8200, price: "4500", duration: "10 weeks" },
  { id: "15", title: "Advanced Cloud Architecture", instructor: "Jeff Bezos", rating: 4.7, students: 12100, price: "9200", duration: "14 weeks", tag: "Enterprise" },
];

export default function BrowseCoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [sortBy, setSortBy] = useState("popular");

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const filteredCourses = allCourses.filter((c) =>
    c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.instructor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedLevel("");
    setPriceFilter("");
    setSearchQuery("");
  };

  return (
    <div className="p-6 lg:p-8 max-w-[1200px] mx-auto">
      {/* Search Bar */}
      <div className="relative mb-6">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#757575]" />
        <input
          type="text"
          placeholder="Search courses, instructors..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="input-field !h-12 !pl-11 !pr-4 shadow-sm"
        />
        {searchQuery && (
          <button onClick={() => setSearchQuery("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#757575] hover:text-[#0A1931]">
            <X size={16} />
          </button>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Filters Sidebar */}
        <div className={`lg:w-[240px] shrink-0 ${showFilters ? "block" : "hidden lg:block"}`}>
          <div className="bg-white rounded-xl border border-[#E0E0E0] p-5 sticky top-20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-[#0A1931] text-sm">Filters</h3>
              <button onClick={clearFilters} className="text-xs text-[#4A7FA7] hover:underline font-medium">Clear All</button>
            </div>

            {/* Category */}
            <div className="mb-5">
              <h4 className="text-xs font-bold text-[#757575] uppercase tracking-wider mb-3">Category</h4>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <label key={cat} className="flex items-center gap-2.5 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                      className="w-4 h-4 rounded border-[#E0E0E0] text-[#4A7FA7]"
                    />
                    <span className="text-sm text-[#1A3D63] group-hover:text-[#4A7FA7] font-medium">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Level */}
            <div className="mb-5">
              <h4 className="text-xs font-bold text-[#757575] uppercase tracking-wider mb-3">Level</h4>
              <div className="space-y-2">
                {levels.map((level) => (
                  <label key={level} className="flex items-center gap-2.5 cursor-pointer group">
                    <input
                      type="radio"
                      name="level"
                      checked={selectedLevel === level}
                      onChange={() => setSelectedLevel(level)}
                      className="w-4 h-4 border-[#E0E0E0] text-[#4A7FA7]"
                    />
                    <span className="text-sm text-[#1A3D63] group-hover:text-[#4A7FA7] font-medium">{level}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-5">
              <h4 className="text-xs font-bold text-[#757575] uppercase tracking-wider mb-3">Price</h4>
              <div className="space-y-2">
                {["Free", "Paid"].map((p) => (
                  <label key={p} className="flex items-center gap-2.5 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={priceFilter === p}
                      onChange={() => setPriceFilter(priceFilter === p ? "" : p)}
                      className="w-4 h-4 rounded border-[#E0E0E0] text-[#4A7FA7]"
                    />
                    <span className="text-sm text-[#1A3D63] group-hover:text-[#4A7FA7] font-medium">{p}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Rating */}
            <div>
              <h4 className="text-xs font-bold text-[#757575] uppercase tracking-wider mb-3">Rating</h4>
              <div className="space-y-2">
                {ratings.map((r) => (
                  <label key={r} className="flex items-center gap-2.5 cursor-pointer group">
                    <input type="radio" name="rating" className="w-4 h-4 border-[#E0E0E0] text-[#4A7FA7]" />
                    <span className="text-sm text-[#1A3D63] group-hover:text-[#4A7FA7] font-medium">{r}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Filter Toggle */}
        <button
          className="lg:hidden btn-secondary !h-10 !w-auto"
          onClick={() => setShowFilters(!showFilters)}
        >
          <SlidersHorizontal size={16} />
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>

        {/* Course Grid */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-5">
            <p className="text-sm text-[#757575] font-medium">
              Showing <span className="font-bold text-[#0A1931]">{filteredCourses.length}</span> courses
            </p>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-[#E0E0E0] rounded-lg px-3 py-2 text-[#1A3D63] bg-white font-medium"
            >
              <option value="popular">Sort: Popular</option>
              <option value="newest">Sort: Newest</option>
              <option value="rating">Sort: Highest Rated</option>
              <option value="price-low">Sort: Price Low-High</option>
              <option value="price-high">Sort: Price High-Low</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-1 mt-8">
            {[1, 2, 3, "...", 8].map((page, i) => (
              <button
                key={i}
                className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
                  page === 1
                    ? "bg-[#4A7FA7] text-white shadow-md"
                    : "text-[#757575] hover:bg-[#F6FAFD] hover:text-[#4A7FA7]"
                }`}
              >
                {page}
              </button>
            ))}
            <button className="px-4 h-9 rounded-lg text-sm font-medium text-[#4A7FA7] hover:bg-[#F6FAFD]">
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
