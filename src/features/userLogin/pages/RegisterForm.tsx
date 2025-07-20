import React, { useState } from "react";
import { toast } from "react-toastify";
import type { RegisterRequest } from "../types";

import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../authApi";

const RegisterForm = () => {
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
    <div className="flex flex-col md:pt-12">
      {/* Right Side Form */}
      <div className="w-full flex items-center justify-center px-4 py-12 ">
        <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
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
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              minLength={6}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-green-400 hover:bg-green-500 text-white font-semibold py-2 rounded-lg transition"
            >
              {isLoading ? "Registering..." : "Register"}
            </button>
          </form>

          <p className="text-sm text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <Link to="/loginPage" className="text-purple-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
