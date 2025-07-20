// src/features/auth/components/GoogleLoginButton.tsx
import { GoogleLogin, type CredentialResponse,  } from "@react-oauth/google";
import axios from "axios";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { setUser } from "@/features/userLogin/authSlice";

const GoogleLoginButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleLogin = async (credentialResponse: CredentialResponse) => {
    if (!credentialResponse.credential) {
      toast.error("Google login failed: No credential found");
      return;
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/auth/google-login`,
        { credential: credentialResponse.credential },
        { withCredentials: true }
      );

      dispatch(setUser(res.data.user));
      toast.success("Login successful with Google");
      navigate("/");
    } catch {
      toast.error("Google login failed");
    }
  };

  return (
    <GoogleLogin
      onSuccess={handleGoogleLogin}
      onError={() => toast.error("Google login failed")}
    />
  );
};

export default GoogleLoginButton;
