import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser, setLoadingDone } from "../authSlice";
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
         dispatch(setUser({
          id: res.data.user.id,
          name: res.data.user.name,
          email: res.data.user.email,
        }));
        
        dispatch(setUser(res.data.user));
      } catch {
        dispatch(setLoadingDone()); 
      }
    };

    fetchUser();
  }, [dispatch]);
};
