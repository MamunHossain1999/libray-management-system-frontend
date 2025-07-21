// src/pages/LibraryLandingPage.tsx
import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, Users, Calendar, CreditCard } from "lucide-react";
import bookHero from "@/assets/carouselImg/book1.jpg";
import quoteIcon from "@/assets/carouselImg/book2.jpg";
import BookCarousel from "../carousel/BookCarousel";
import FeaturedBlogs from "../FeaturedBlogs/FeaturedBlogs";
import borrowBook from '@/assets/carouselImg/bookimg.jpg'

const LibraryLandingPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* HERO */}
      <section className="container mx-auto flex flex-col md:flex-row items-center py-20 px-4">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Discover, Borrow & Read your Favorite <span className="text-green-500">Books</span>
          </h1>
          <p className="text-gray-600">
            Join thousands of readers accessing millions of books across genres, all in one modern platform.
          </p>
          <Link
            to="/booklist"
            className="inline-block px-6 py-3 mb-4 md:mb-0 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold"
          >
            Explore Library
          </Link>
        </div>
        <div className="md:w-1/2">
          <img src={bookHero} alt="Library illustration" />
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white py-12">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <StatBox icon={<Users className="mx-auto mb-2" />} number="2M+" label="Members" />
          <StatBox icon={<Calendar className="mx-auto mb-2" />} number="800K+" label="Bookings" />
          <StatBox icon={<BookOpen className="mx-auto mb-2" />} number="46K+" label="Books" />
          <StatBox icon={<CreditCard className="mx-auto mb-2" />} number="1.9M+" label="Payments" />
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="container mx-auto py-20 px-4 grid md:grid-cols-2 items-center gap-12">
        <img src={borrowBook}alt="How it works" className="w-full" />
        <div>
          <h2 className="text-3xl font-bold mb-4">How to borrow books online</h2>
          <p className="text-gray-600 mb-6">
            Sign up, search your desired book, and reserve it in a few clicks. Collect physically or enjoy reading online!
          </p>
          <Link
            to="/borrow"
            className="inline-block px-5 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center px-4">
          <img src={quoteIcon} alt="Quote" className="mx-auto w-10 mb-4" />
          <p className="text-xl md:text-2xl italic text-gray-700 max-w-3xl mx-auto">
            "This library system changed the way I access books. Fast, simple and full of knowledge!"
          </p>
          <p className="mt-4 font-bold text-gray-800">— Tim Smith, Book Enthusiast</p>
        </div>
      </section>

      {/* FEATURED BOOKS */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Popular Books</h2>
        <BookCarousel />
      </section>

      {/* BLOG SECTION */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Library News</h2>
          <FeaturedBlogs />
        </div>
      </section>
    </div>
  );
};

const StatBox = ({ icon, number, label }: { icon: React.ReactNode; number: string; label: string }) => (
  <div>
    <div className="text-green-500 text-3xl mb-2">{icon}</div>
    <h3 className="text-xl font-bold">{number}</h3>
    <p className="text-gray-600">{label}</p>
  </div>
);

export default LibraryLandingPage;
