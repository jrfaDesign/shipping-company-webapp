import axios from "axios";

const api = axios;

// * Request interceptor to add Authorization header
api.interceptors.request.use((config) => {
  const authToken = localStorage.getItem("token") ?? null;
  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }
  return config;
});

// * Response interceptor to handle 401 status code
api.interceptors.response.use(
  (response) => response,
  (error) => {
    /* if (error.response && error.response.status === 401) {
      // Logout user and show toast on 401 status
      useUserStore.getState().logout();
      useToastStore.getState().setToastOptions({
        isVisible: true,
        message: "Sessão expirada, faça login novamente.",
        severity: "error"
      });
    } */
  }
);

export { api as axios };
