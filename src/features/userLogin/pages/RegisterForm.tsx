import React, { useState } from "react";
import { toast } from "react-toastify";
import type { RegisterRequest } from "../types";
import book from "@/assets/loginImg/booik.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../authApi";
import GoogleLoginButton from "@/components/GoogleLoginButton/GoogleLoginButton";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState<RegisterRequest>({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setMessage(null);
    try {
      const res = await registerUser(formData).unwrap();
      setMessage(res.message || "Registration successful!");
      toast.success("Registered successfully!");
      setFormData({ name: "", email: "", password: "" });
      navigate("/loginPage");
    } catch {
      toast.error("Failed to register");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${book})` }}
    >
      <div className="w-full max-w-md bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Register
        </h2>

        {message && (
          <p className="text-green-600 text-center mb-4">{message}</p>
        )}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              minLength={6}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-2 text-sm text-gray-600"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-green-400 hover:bg-green-500 text-white font-semibold py-2 rounded-lg transition"
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="py-4">
          <GoogleLoginButton />
        </p>

        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/loginPage" className="text-purple-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
