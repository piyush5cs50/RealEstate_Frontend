import axios from "axios";

const API = axios.create({
  // import.meta.env.VITE_API_URL
  baseURL: "https://realestate-backend-19ah.onrender.com/api",
});

export default API;