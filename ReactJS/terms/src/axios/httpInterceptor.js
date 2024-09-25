import axiosInstance from "./axiosInstance";

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token") || "JWT_TOKEN";
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => {
    // if (response.status === 200)
    //show notification
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        window.location.href = "/login";
      } else {
        // show error toast message
      }
    }
    return Promise.reject(error);
  }
);
