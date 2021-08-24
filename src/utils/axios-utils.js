import axios from "axios";
import { get_user } from "../auth/auth";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

const user = get_user();

axios.interceptors.request.use(
  function (config) {
    document.body.classList.add("loading-indicator");
    return config;
  },
  function (error) {
    document.body.classList.remove("loading-indicator");
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    document.body.classList.remove("loading-indicator");
    return response;
  },
  (error) => {
    document.body.classList.remove("loading-indicator");
    return Promise.reject(error.response);
  }
);

export default axios;
