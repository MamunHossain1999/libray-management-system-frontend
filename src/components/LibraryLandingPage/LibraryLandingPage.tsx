// src/pages/LibraryLandingPage.tsx
import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, Users, Calendar, CreditCard } from "lucide-react";
import bookHero from "@/assets/carouselImg/book1.jpg";
import quoteIcon from "@/assets/carouselImg/book2.jpg";
import BookCarousel from "../carousel/BookCarousel";
import FeaturedBlogs from "../FeaturedBlogs/FeaturedBlogs";
import borrowBook from "@/assets/carouselImg/bookimg.jpg";
import { motion } from "framer-motion";

const LibraryLandingPage = () => {
  // ata state er jnno
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* HERO */}
      <section className="container mx-auto flex flex-col md:flex-row items-center py-20 px-4">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Discover, Borrow & Read your Favorite{" "}
            <span className="text-green-500">Books</span>
          </h1>
          <p className="text-gray-600">
            Join thousands of readers accessing millions of books across genres,
            all in one modern platform.
          </p>
          <Link
            to="/booklist"
            className="inline-block px-6 py-3 mb-4 md:mb-0 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold"
          >
            Explore Library
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className="md:w-1/2"
        >
          <img src={bookHero} alt="Library illustration" />
        </motion.div>
      </section>

      {/* STATS */}
      <section className="bg-white py-12">
        <motion.div
          className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          {[
            {
              icon: <Users className="mx-auto mb-2" />,
              number: "2M+",
              label: "Members",
            },
            {
              icon: <Calendar className="mx-auto mb-2" />,
              number: "800K+",
              label: "Bookings",
            },
            {
              icon: <BookOpen className="mx-auto mb-2" />,
              number: "46K+",
              label: "Books",
            },
            {
              icon: <CreditCard className="mx-auto mb-2" />,
              number: "1.9M+",
              label: "Payments",
            },
          ].map((stat, index) => (
            <motion.div key={index} variants={itemVariants}>
              <StatBox
                icon={stat.icon}
                number={stat.number}
                label={stat.label}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* HOW TO USE */}
      <section className="container mx-auto py-20 px-4 grid md:grid-cols-2 items-center gap-12">
        {/* 👈 Left side image animation */}
        <motion.img
          src={borrowBook}
          alt="How it works"
          className="w-full"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        />

        {/* 👉 Right side text animation */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            How to borrow books online
          </h2>
          <p className="text-gray-600 mb-6">
            Sign up, search your desired book, and reserve it in a few clicks.
            Collect physically or enjoy reading online!
          </p>
          <Link
            to="/borrow"
            className="inline-block px-5 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
          >
            Learn More
          </Link>
        </motion.div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-gray-100 py-16">
        <motion.div
          className="container mx-auto text-center px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <img src={quoteIcon} alt="Quote" className="mx-auto w-10 mb-4" />
          <p className="text-xl md:text-2xl italic text-gray-700 max-w-3xl mx-auto">
            "This library system changed the way I access books. Fast, simple
            and full of knowledge!"
          </p>
          <p className="mt-4 font-bold text-gray-800">
            — Tim Smith, Book Enthusiast
          </p>
        </motion.div>
      </section>

      {/* FEATURED BOOKS */}
      <section className="container mx-auto py-16 px-4">
        <motion.section
          className="container mx-auto py-16 px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-center mb-10">
            Popular Books
          </h2>
          <BookCarousel />
        </motion.section>
      </section>

      {/* BLOG SECTION */}
      <motion.section
        className="bg-white py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Library News</h2>
          <FeaturedBlogs />
        </div>
      </motion.section>
    </div>
  );
};

const StatBox = ({
  icon,
  number,
  label,
}: {
  icon: React.ReactNode;
  number: string;
  label: string;
}) => (
  <div>
    <div className="text-green-500 text-3xl mb-2">{icon}</div>
    <h3 className="text-xl font-bold">{number}</h3>
    <p className="text-gray-600">{label}</p>
  </div>
);

export default LibraryLandingPage;
