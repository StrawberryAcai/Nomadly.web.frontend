import axios from "axios";

let accessToken: string | null = null;

export const setAccessToken = (token: string) => accessToken = token;

export const getAccessToken = () => accessToken;

const api = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (originalRequest?.url?.includes("/api/auth/login")) return Promise.reject(error);
    if (error.response?.status === 401) {
      try {
        const res = await axios.post(
          "http://localhost:8000/api/auth/reissue",
          {},
          { withCredentials: true }
        );
        const newToken = res.headers["authorization"]?.replace("Bearer ", "");
        if (newToken) {
          setAccessToken(newToken);
          error.config.headers["Authorization"] = `Bearer ${newToken}`;
          return api.request(error.config);
        }
      } catch (refreshError) {
        console.error("토큰 갱신 실패:", refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
