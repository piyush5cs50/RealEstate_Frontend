import axios from "axios";

const API = axios.create({
  baseURL: "https://realestate-backend-19ah.onrender.com/api",
});

export default API;