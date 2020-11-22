import axios from "axios";

const api = axios.create({
  baseURL: "https://gorest.co.in/public-api/",
});

export default api;