import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from '@/store/useAuthStore';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

// Pages - We will create these next
import LandingPage from '@/pages/LandingPage';
import SignIn from '@/pages/SignIn';
import SignUp from '@/pages/SignUp';
import Dashboard from '@/pages/Dashboard';
import Courses from '@/pages/Courses';
import CourseDetail from '@/pages/CourseDetail';
import MyCourses from '@/pages/MyCourses';

import LiveClass from '@/pages/LiveClass';
import Assignments from '@/pages/Assignments';
import Messages from '@/pages/Messages';
import Achievements from '@/pages/Achievements';
import Settings from '@/pages/Settings';
import Profile from '@/pages/Profile';
import Search from '@/pages/Search';
import CreateCourse from '@/pages/CreateCourse';
import Students from '@/pages/Students';
import Analytics from '@/pages/Analytics';
import AdminDashboard from '@/pages/AdminDashboard';
import Notifications from '@/pages/Notifications';

// Auth Guard Wrapper
const ProtectedRoute = ({ children }) => {
  const { token, initialize } = useAuthStore();
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    initialize();
    setIsReady(true);
  }, [initialize]);

  if (!isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F6FAFD]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#4A7FA7]"></div>
      </div>
    );
  }

  if (!token) {
    return <Navigate to="/signin" />;
  }

  return children;
};

// Layout for Dashboard routes
const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#F6FAFD]">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 min-w-0">{children}</main>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected Dashboard Routes */}
        <Route path="/dashboard" element={<ProtectedRoute><DashboardLayout><Dashboard /></DashboardLayout></ProtectedRoute>} />
        <Route path="/courses" element={<ProtectedRoute><DashboardLayout><Courses /></DashboardLayout></ProtectedRoute>} />
        <Route path="/courses/:id" element={<ProtectedRoute><DashboardLayout><CourseDetail /></DashboardLayout></ProtectedRoute>} />
        <Route path="/my-courses" element={<ProtectedRoute><DashboardLayout><MyCourses /></DashboardLayout></ProtectedRoute>} />

        <Route path="/live-class" element={<ProtectedRoute><DashboardLayout><LiveClass /></DashboardLayout></ProtectedRoute>} />
        <Route path="/assignments" element={<ProtectedRoute><DashboardLayout><Assignments /></DashboardLayout></ProtectedRoute>} />
        <Route path="/achievements" element={<ProtectedRoute><DashboardLayout><Achievements /></DashboardLayout></ProtectedRoute>} />
        <Route path="/settings" element={<ProtectedRoute><DashboardLayout><Settings /></DashboardLayout></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><DashboardLayout><Profile /></DashboardLayout></ProtectedRoute>} />
        <Route path="/search" element={<ProtectedRoute><DashboardLayout><Search /></DashboardLayout></ProtectedRoute>} />
        <Route path="/notifications" element={<ProtectedRoute><DashboardLayout><Notifications /></DashboardLayout></ProtectedRoute>} />
        
        {/* Instructor Specific */}
        <Route path="/create-course" element={<ProtectedRoute><DashboardLayout><CreateCourse /></DashboardLayout></ProtectedRoute>} />
        <Route path="/students" element={<ProtectedRoute><DashboardLayout><Students /></DashboardLayout></ProtectedRoute>} />
        <Route path="/analytics" element={<ProtectedRoute><DashboardLayout><Analytics /></DashboardLayout></ProtectedRoute>} />

        {/* Admin Specific */}
        <Route path="/admin" element={<ProtectedRoute><DashboardLayout><AdminDashboard /></DashboardLayout></ProtectedRoute>} />

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
