import React from "react";
import { useAuthStore } from "@/store/useAuthStore";
import InstructorDashboard from "@/components/InstructorDashboard";
import StudentDashboard from "@/components/StudentDashboard";
import AdminDashboard from "@/pages/AdminDashboard";

export default function DashboardPage() {
  const { user } = useAuthStore();

  if (user?.role === "admin") {
    return <AdminDashboard />;
  }

  if (user?.role === "instructor") {
    return <InstructorDashboard />;
  }

  return <StudentDashboard user={user} />;
}
