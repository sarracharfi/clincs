import axios from "axios";

const API_BASE_URL = "http://localhost:3000"; // Confirm NestJS port

// Create Axios instance with base URL
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Interceptor: Add auth header if token exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor: Handle 401/500 globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('accessToken');
      // Optional: Redirect to login
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const getUsers = async () => {
  try {
    const response = await api.get('/users');
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const signUp = async (userData) => {
  try {
    // Fix: Map 'role' to 'roleId' (assume 1 = admin; fetch roles dynamically later)
    const payload = {
      ...userData,
      roleId: userData.role === 'admin' ? 1 : 2, // Example mapping; adjust based on your DB
    };
    delete payload.role; // Remove invalid field
    const response = await api.post('/auth/register', payload);
    return response.data;
  } catch (error) {
    console.error("Signup Error:", error.response?.data || error.message);
    throw error;
  }
};

export const signIn = async (loginDto) => {
  try {
    const response = await api.post('/auth/login', loginDto);
    // Store token on success
    if (response.data.accessToken) {
      localStorage.setItem('accessToken', response.data.accessToken);
    }
    return response.data;
  } catch (error) {
    console.error("Login Error:", error.response?.data || error.message);
    throw error;
  }
};