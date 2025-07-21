import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "@/assets/loginImg/book.jpg";
import type { LoginRequest } from "../types";
import { useLoginUserMutation } from "../authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../authSlice";
import GoogleLoginButton from "@/components/GoogleLoginButton/GoogleLoginButton";

const LoginForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<LoginRequest>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const [loginUser, { isLoading }] = useLoginUserMutation();
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const result = await loginUser(formData).unwrap();

      dispatch(setUser(result.user));
      toast.success("Login successful!");
      navigate("/");
    } catch {
      toast.error("Failed to login");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${loginImg})` }}
    >
      <div className="w-full max-w-md bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              minLength={6}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-2.5 text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-green-400 hover:bg-green-500 text-white font-semibold py-2 rounded-lg transition"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="py-4">
          <GoogleLoginButton />
        </p>

        <p className="text-sm text-center text-gray-600 mt-4">
          Don’t have an account?{" "}
          <Link to="/registerPage" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
