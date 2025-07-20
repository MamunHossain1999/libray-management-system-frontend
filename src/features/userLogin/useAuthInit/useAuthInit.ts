import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../authSlice";
import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;

export const useAuthInit = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${baseURL}/api/auth/me`, {
          withCredentials: true,
        });
        console.log("Fetched user:", res.data.user);
        dispatch(setUser(res.data.user));
      } catch (error) {
        console.log("No logged in user or error", error);
      }
    };

    fetchUser();
  }, [dispatch]);
};
