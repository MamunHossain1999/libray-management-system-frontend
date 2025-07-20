import axios  from 'axios';



const API_URL = import.meta.env.VITE_API_BASE_URL;;

export const registerUser = async (data: { name: string; email: string; password: string }) => {
  const response = await axios.post(`${API_URL}/api/auth/register`, data, {
    headers: { "Content-Type": "application/json" },
    withCredentials: true, 
  });
  return response.data;
};

export const loginUser = async (data: { email: string; password: string }) => {
  const response = await axios.post(`${API_URL}/api/auth/login`, data, {
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });
  return response.data;
};
