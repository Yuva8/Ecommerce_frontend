import axios from "axios";

const instance = axios.create({
  baseURL: "https://ecommerceyuvi.herokuapp.com/",
});

export default instance;
