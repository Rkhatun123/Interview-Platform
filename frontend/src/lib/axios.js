import axios from "axios";
console.log("API URL =", import.meta.env.VITE_API_URL);

const axiosInstance = axios.create({
  baseURL: "https://interview-platform-9-hu11.onrender.com/api",
  withCredentials: true, // by adding this field browser will send the cookies to server automatically, on every single req
});

export default axiosInstance;
