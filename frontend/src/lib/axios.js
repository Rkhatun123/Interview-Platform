import axios from "axios";

// Pehle se bana hua instance ya aapka base URL setting
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://interview-platform-9-hu11.onrender.com",
});

// 🔥 Request Interceptor: Yeh har ek API call me automatic background me token jod dega
axiosInstance.interceptors.request.use(
  async (config) => {
    try {
      // Browser ke window object se Clerk ka instance check karte hain
      const clerk = window.Clerk;
      
      if (clerk && clerk.session) {
        // Clerk se fresh authorization token mangwate hain
        const token = await clerk.session.getToken();
        
        if (token) {
          // Token ko "Authorization" header me 'Bearer' format me add karte hain
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
    } catch (error) {
      console.error("Error fetching Clerk auth token for Axios:", error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
