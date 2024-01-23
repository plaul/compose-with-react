

const URL = import.meta.env.PROD
  ? import.meta.env.VITE_API_BASE_URL
  : //: "http://localhost:9999/api";
    "http://localhost:3002/api";

console.log("API URL: "+URL)
export const API_URL = URL