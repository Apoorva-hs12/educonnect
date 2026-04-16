import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  user: null,
  token: null,
  setUser: (user) => set({ user }),
  setToken: (token) => set({ token }),
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    set({ user: null, token: null });
    window.location.href = "/signin";
  },
  initialize: () => {
    if (typeof window !== 'undefined') {
      const storedToken = localStorage.getItem('token');
      const storedUser = localStorage.getItem('user');
      
      if (storedToken && storedUser) {
        try {
          set({ token: storedToken, user: JSON.parse(storedUser) });
        } catch (e) {
          console.error("Failed to parse user from local storage");
        }
      }
    }
  },
  updateProfile: async (profileData) => {
    try {
      const { token } = set((state) => state); // get current token
      // Assuming you have access to token via closure or localStorage directly
      const currentToken = localStorage.getItem('token');
      if (!currentToken) throw new Error("No token found");

      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const response = await fetch(`${API_URL}/api/users/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${currentToken}`
        },
        body: JSON.stringify(profileData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update profile');
      }

      const data = await response.json();
      
      // Update local storage and store
      localStorage.setItem('user', JSON.stringify(data.user));
      set({ user: data.user });
      
      return data;
    } catch (error) {
      console.error("Profile update error:", error);
      throw error;
    }
  }
}));
