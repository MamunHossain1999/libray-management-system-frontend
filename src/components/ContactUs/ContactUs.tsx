import React, { useState } from "react";
import { toast } from "react-toastify";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-6xl w-full bg-white shadow-xl rounded-2xl p-6 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-green-600 mb-6">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-400"
            />
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-md font-medium hover:bg-green-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="bg-green-100 rounded-xl p-6 sm:p-8">
          <h3 className="text-xl font-semibold mb-4 text-green-800">Contact Information</h3>
          <p className="text-gray-700 mb-2">📧 Email: support@mylibrary.com</p>
          <p className="text-gray-700 mb-2">📞 Phone: +880 1795920956</p>
          <p className="text-gray-700 mb-6">📍 Address: Dhanmondi, Dhaka, Bangladesh</p>

          <div className="flex flex-wrap gap-4 mt-4">
            <a href="https://facebook.com" className="text-green-700 hover:underline">Facebook</a>
            <a href="https://twitter.com" className="text-green-700 hover:underline">Twitter</a>
            <a href="https://linkedin.com" className="text-green-700 hover:underline">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
