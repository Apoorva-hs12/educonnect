import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  Compass,
  ClipboardList,
  MessageSquare,
  Settings,
  LogOut,
  Award,
  Video,
  PlusCircle,
  Users,
  LineChart,
  Shield,
  ClipboardCheck
} from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";

const studentLinks = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/my-courses", label: "My Classes", icon: BookOpen },
  { href: "/courses", label: "Explore Courses", icon: Compass },
  { href: "/live-class", label: "Live Classes", icon: Video },
  { href: "/assignments", label: "Assignments", icon: ClipboardList },
  { href: "/achievements", label: "Achievements", icon: Award },
];

const instructorLinks = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/my-courses", label: "My Courses", icon: BookOpen },
  { href: "/courses", label: "Explore Curriculum", icon: Compass },
  { href: "/create-course", label: "Create Course", icon: PlusCircle },
  { href: "/students", label: "My Students", icon: Users },
  { href: "/live-class", label: "Live Classes", icon: Video },
  { href: "/analytics", label: "Analytics", icon: LineChart },
];

const adminLinks = [
  { href: "/admin", label: "Command Center", icon: Shield },
  { href: "/courses", label: "Curriculum", icon: Compass },
  { href: "/analytics", label: "Global Stats", icon: LineChart },
  { href: "/students", label: "Personnel", icon: Users },
];

export default function Sidebar() {
  const location = useLocation();
  const pathname = location.pathname;
  const { user, logout } = useAuthStore();

  const links = user?.role === "admin" ? adminLinks : (user?.role === "instructor" ? instructorLinks : studentLinks);

  return (
    <aside className="hidden lg:flex flex-col w-[260px] min-h-[calc(100vh-64px)] bg-white border-r border-[#E0E0E0] sticky top-16 overflow-y-auto">
      <nav className="flex flex-col gap-1 p-4 flex-1">
        {links.map((link) => {
          const isActive = pathname === link.href || pathname?.startsWith(link.href + "/");
          return (
            <Link
              key={link.href}
              to={link.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 group ${
                isActive
                  ? "text-[#4A7FA7] bg-[#B3CFE5]/20 border-l-[3px] border-[#4A7FA7]"
                  : "text-[#1A3D63] hover:text-[#4A7FA7] hover:bg-[#F6FAFD] border-l-[3px] border-transparent"
              }`}
            >
              <link.icon size={18} className={`${isActive ? "text-[#4A7FA7]" : "text-[#757575] group-hover:text-[#4A7FA7]"} transition-colors`} />
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-[#E0E0E0]">
        <div className="flex items-center gap-3 px-2 py-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4A7FA7] to-[#1A3D63] flex items-center justify-center text-white text-sm font-bold shadow-md shadow-[#4A7FA7]/20 uppercase">
            {user?.fullName?.charAt(0) || "U"}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-[#0A1931] truncate">{user?.fullName || "User"}</p>
            <p className="text-[10px] text-[#4A7FA7] font-bold uppercase tracking-wider">{user?.role}</p>
            <p className="text-xs text-[#757575] truncate">{user?.email || "user@example.com"}</p>
          </div>
        </div>
        <div className="px-2 mt-2">
            <Link to="/settings" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-[#1A3D63] hover:bg-[#F6FAFD] transition-colors font-medium">
                <Settings size={16} /> Settings
            </Link>
            <button
                onClick={logout}
                className="flex items-center gap-3 w-full px-4 py-2.5 rounded-lg text-sm text-[#C62828] hover:bg-red-50 transition-colors mt-1 font-medium"
            >
                <LogOut size={16} /> Logout
            </button>
        </div>
      </div>
    </aside>
  );
}
