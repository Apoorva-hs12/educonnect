import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, GraduationCap } from "lucide-react";
import axios from "axios";
import { useAuthStore } from "@/store/useAuthStore";

export default function SignInPage() {
  const navigate = useNavigate();
  const { setUser, setToken } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const response = await axios.post(`${API_URL}/api/auth/login`, {
        email: formData.email,
        password: formData.password,
      });

      const data = response.data;
      
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      
      setUser(data.user);
      setToken(data.token);
      
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || err.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F6FAFD] p-4">
      <div className="w-full max-w-[500px] bg-white rounded-xl shadow-sm border border-[#E0E0E0] p-8 md:p-10">
        <div className="flex flex-col items-center mb-8">
          <Link to="/" className="w-12 h-12 bg-[#4A7FA7] rounded-lg flex items-center justify-center text-white mb-4">
            <GraduationCap size={32} />
          </Link>
          <h1 className="text-2xl font-bold text-[#0A1931]">Welcome Back</h1>
          <p className="text-[#757575] mt-1 text-center font-medium">Sign in to continue your learning journey</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-[#0A1931] mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="name@example.com"
              className="input-field"
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="relative">
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-semibold text-[#0A1931]">Password</label>
              <Link to="/forgot-password" title="Get back into your account" className="text-xs text-[#4A7FA7] hover:underline font-semibold">Forgot Password?</Link>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                className="input-field"
                required
                onChange={handleInputChange}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#757575] hover:text-[#0A1931]"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 py-2">
            <input 
              type="checkbox" 
              id="rememberMe" 
              name="rememberMe"
              className="checkbox-custom" 
              onChange={handleInputChange}
            />
            <label htmlFor="rememberMe" className="text-sm text-[#757575] font-medium leading-none cursor-pointer">
              Remember me
            </label>
          </div>

          <button type="submit" className="btn-primary" disabled={isLoading}>
            {isLoading ? (
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            ) : "Sign In"}
          </button>

          <div className="relative flex items-center gap-4 py-4">
            <div className="h-px bg-[#E0E0E0] flex-1"></div>
            <span className="text-sm text-[#757575] font-medium">Or continue with</span>
            <div className="h-px bg-[#E0E0E0] flex-1"></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button type="button" className="flex items-center justify-center gap-2 py-2.5 border border-[#E0E0E0] rounded-lg hover:bg-[#F6FAFD] transition-colors">
              <span className="font-bold text-[#1A3D63]">G</span>
              <span className="text-sm font-medium text-[#1A3D63]">Google</span>
            </button>
            <button type="button" className="flex items-center justify-center gap-2 py-2.5 border border-[#E0E0E0] rounded-lg hover:bg-[#F6FAFD] transition-colors">
              <span className="text-sm font-medium text-[#1A3D63]">Github</span>
            </button>
          </div>

          <div className="text-center pt-6">
            <p className="text-sm text-[#757575] font-medium">
              Don't have an account? <Link to="/signup" className="text-[#4A7FA7] font-bold hover:underline">Create one</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
