import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  GraduationCap,
  Search,
  Bell,
  User,
  Menu,
  X,
  LogOut,
  Settings,
  BookOpen,
} from "lucide-react";

import { useAuthStore } from "@/store/useAuthStore";

const navLinks = [
  { href: "/dashboard", label: "Home" },
  { href: "/courses", label: "Explore" },
  { href: "/search", label: "Search" },
];


export default function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  
  const { user, token, initialize, logout } = useAuthStore();
  
  useEffect(() => {
    initialize();
  }, [initialize]);
  
  const isLoggedIn = !!token && !!user;

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E0E0E0]">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        {/* Logo */}
        <Link to="/dashboard" className="flex items-center gap-2.5 shrink-0">
          <div className="w-9 h-9 bg-gradient-to-br from-[#4A7FA7] to-[#1A3D63] rounded-lg flex items-center justify-center text-white shadow-md shadow-[#4A7FA7]/20">
            <GraduationCap size={22} />
          </div>
          <span className="text-lg font-bold text-[#0A1931] hidden sm:block">EduConnect</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === link.href || pathname?.startsWith(link.href + "/")
                  ? "text-[#4A7FA7] bg-[#B3CFE5]/20"
                  : "text-[#1A3D63] hover:text-[#4A7FA7] hover:bg-[#F6FAFD]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          {/* Search */}
          <Link
            to="/search"
            className="w-9 h-9 rounded-lg flex items-center justify-center text-[#757575] hover:bg-[#F6FAFD] hover:text-[#4A7FA7] transition-colors"
          >
            <Search size={18} />
          </Link>

          {isLoggedIn ? (
            <>
              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => { setNotifOpen(!notifOpen); setUserMenuOpen(false); }}
                  className="relative w-9 h-9 rounded-lg flex items-center justify-center text-[#757575] hover:bg-[#F6FAFD] hover:text-[#4A7FA7] transition-colors"
                >
                  <Bell size={18} />
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#C62828] rounded-full"></span>
                </button>
                {notifOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-[#E0E0E0] py-2">
                    <div className="px-4 py-3 border-b border-[#E0E0E0]">
                      <h3 className="font-semibold text-sm text-[#0A1931]">Notifications</h3>
                    </div>
                    <div className="px-4 py-3 hover:bg-[#F6FAFD] cursor-pointer">
                      <p className="text-sm font-medium text-[#0A1931]">🔔 New class available</p>
                      <p className="text-xs text-[#757575] mt-0.5">React Advanced Concepts — 2h ago</p>
                    </div>
                    <div className="px-4 py-3 hover:bg-[#F6FAFD] cursor-pointer">
                      <p className="text-sm font-medium text-[#0A1931]">🎉 Achievement unlocked!</p>
                      <p className="text-xs text-[#757575] mt-0.5">React Expert badge earned — Yesterday</p>
                    </div>
                    <Link to="/notifications" className="block text-center text-sm text-[#4A7FA7] font-semibold py-2 hover:underline border-t border-[#E0E0E0] mt-1">
                      View All
                    </Link>
                  </div>
                )}
              </div>

              {/* User Menu */}
              <div className="relative">
                <button
                  onClick={() => { setUserMenuOpen(!userMenuOpen); setNotifOpen(false); }}
                  className="w-9 h-9 rounded-full bg-gradient-to-br from-[#4A7FA7] to-[#1A3D63] flex items-center justify-center text-white text-sm font-bold shadow-md shadow-[#4A7FA7]/20 hover:scale-105 transition-transform uppercase"
                >
                  {user?.fullName?.charAt(0) || "U"}
                </button>
                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-[#E0E0E0] py-2">
                    <div className="px-4 py-3 border-b border-[#E0E0E0]">
                      <p className="font-semibold text-sm text-[#0A1931]">{user?.fullName}</p>
                      <p className="text-xs text-[#757575]">{user?.email}</p>
                      <p className="text-[10px] uppercase tracking-wider text-[#4A7FA7] font-bold mt-1 bg-[#F6FAFD] inline-block px-2 py-0.5 rounded border border-[#4A7FA7]/20">{user?.role}</p>
                    </div>
                    <Link to="/profile" className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-[#1A3D63] hover:bg-[#F6FAFD] transition-colors">
                      <User size={16} /> Profile
                    </Link>
                    <Link to="/my-courses" className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-[#1A3D63] hover:bg-[#F6FAFD] transition-colors">
                      <BookOpen size={16} /> My Courses
                    </Link>
                    <Link to="/settings" className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-[#1A3D63] hover:bg-[#F6FAFD] transition-colors">
                      <Settings size={16} /> Settings
                    </Link>
                    <div className="border-t border-[#E0E0E0] mt-1 pt-1">
                      <button onClick={logout} className="flex items-center gap-2.5 w-full px-4 py-2.5 text-sm text-[#C62828] hover:bg-red-50 transition-colors">
                        <LogOut size={16} /> Log out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="/signin" className="btn-secondary !h-9 text-sm !px-4">Sign In</Link>
              <Link to="/signup" className="btn-primary !h-9 text-sm !px-4">Sign Up</Link>
            </div>
          )}

          {/* Mobile Toggle */}
          <button
            className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-[#757575] hover:bg-[#F6FAFD]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#E0E0E0]">
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-[#4A7FA7] bg-[#B3CFE5]/20"
                    : "text-[#1A3D63] hover:bg-[#F6FAFD]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
