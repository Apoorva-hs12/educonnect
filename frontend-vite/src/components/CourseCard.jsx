import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Clock, Users, Star, Play, Award, Box } from "lucide-react";

/**
 * Intelligent Image Mapping for Course Thumbnails
 * Prioritizes local premium assets, then specialized high-res external ones, 
 * with a beautiful branded fallback.
 */
const getCourseImage = (title) => {
  const t = title.toLowerCase();
  
  // 1. Priority: Local Premium Generated Assets
  if (t.includes("react")) return "/images/react.png";
  if (t.includes("node")) return "/images/node.png";
  if (t.includes("design") || t.includes("ux") || t.includes("ui")) return "/images/uiux.png";
  if (t.includes("docker") || t.includes("container")) return "/images/docker.png";
  if (t.includes("python")) return "/images/python.png";
  if (t.includes("cyber") || t.includes("hacking") || t.includes("security")) return "/images/cyber.png";

  // 2. High-Reliability Niche-Specific Photography (External)
  if (t.includes("typescript") || t.includes("javascript")) return "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=800&q=80";
  if (t.includes("flutter") || t.includes("mobile") || t.includes("ios") || t.includes("android")) return "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80";
  if (t.includes("graphql") || t.includes("api") || t.includes("backend")) return "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&w=800&q=80";
  if (t.includes("machine learning") || t.includes("ml") || t.includes("ai") || t.includes("intelligence")) return "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80";
  if (t.includes("marketing") || t.includes("business") || t.includes("strategy")) return "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80";
  if (t.includes("cloud") || t.includes("aws") || t.includes("azure") || t.includes("architecture")) return "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80";
  
  // 3. Elegant Abstract Fallback
  return "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80";
};

export default function CourseCard({
  id,
  title,
  instructor,
  rating,
  students,
  price,
  progress,
  duration,
  tag,
  variant = "default",
}) {
  const [imgError, setImgError] = useState(false);
  const courseImage = getCourseImage(title || "");

  return (
    <Link to={`/courses/${id}`} className="group block h-full">
      <div className="bg-white rounded-3xl border border-[#E0E0E0] overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#4A7FA7]/40 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col relative">
        
        {/* Card Media Section */}
        <div className="relative h-48 bg-[#0A1931] overflow-hidden">
          {!imgError ? (
            <img 
              src={courseImage} 
              alt={title} 
              onError={() => setImgError(true)}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#4A7FA7] to-[#1A3D63] flex items-center justify-center">
                <Box size={48} className="text-white/20 animate-pulse" />
            </div>
          )}
          
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
          
          {tag && (
            <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1.5 bg-white/10 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[0.15em] rounded-xl border border-white/20 shadow-xl shadow-black/20">
                {tag}
                </span>
            </div>
          )}

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
             <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center text-white shadow-2xl">
                <Play size={24} className="fill-current ml-1" />
             </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col flex-1 bg-white relative z-10">
          <div className="mb-auto">
             <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] font-black text-[#4A7FA7] uppercase tracking-widest bg-[#F6FAFD] px-2 py-1 rounded-md">Professional</span>
                <div className="flex items-center gap-1.5 border border-[#E0E0E0] px-2 py-1 rounded-md">
                    <Star size={12} className="fill-[#F57C00] text-[#F57C00]" />
                    <span className="text-[11px] font-black text-[#0A1931]">{rating || '4.8'}</span>
                </div>
             </div>
             
             <h3 className="text-[17px] font-black text-[#0A1931] group-hover:text-[#4A7FA7] transition-colors line-clamp-2 leading-tight mb-4 tracking-tight">
                {title}
             </h3>
             
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#4A7FA7] to-[#1A3D63] flex items-center justify-center text-[11px] text-white font-black uppercase shadow-lg shadow-[#4A7FA7]/20">
                    {instructor?.charAt(0) || "E"}
                </div>
                <div className="flex flex-col min-w-0">
                    <span className="text-[10px] text-[#757575] font-black uppercase tracking-wider">Instructor</span>
                    <span className="text-xs text-[#0A1931] font-bold truncate">{instructor || "EduConnect Mentor"}</span>
                </div>
             </div>
          </div>

          <div className="mt-6 pt-5 border-t border-[#F6FAFD]">
            {variant === "enrolled" ? (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-black text-[#757575] tracking-widest">Your Progress</span>
                  <span className="text-xs font-black text-[#4A7FA7]">{progress || 0}%</span>
                </div>
                <div className="h-2 bg-[#F6FAFD] rounded-full overflow-hidden border border-[#E0E0E0]/30 shadow-inner">
                  <div
                    className="h-full bg-gradient-to-r from-[#4A7FA7] to-[#1A3D63] rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(74,127,167,0.4)]"
                    style={{ width: `${progress || 0}%` }}
                  />
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-[#757575]">
                    <div className="flex items-center gap-1">
                        <Users size={14} />
                        <span className="text-xs font-bold text-[#0A1931]">{students > 1000 ? `${(students/1000).toFixed(1)}k` : students || '1.2k'}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span className="text-xs font-bold text-[#0A1931]">{duration || '8w'}</span>
                    </div>
                </div>
                <div className="text-right">
                    <span className="text-xl font-black text-[#0A1931] tracking-tighter">
                        {price === "Free" ? "FREE" : price ? `₹${price}` : "₹4,200"}
                    </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
