
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-emerald-600 to-lime-600 text-white py-10 mt-16 shadow-lg">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Brand / About */}
        <div>
          <h3 className="text-2xl font-bold mb-3">📚 My Library</h3>
          <p className="text-base leading-relaxed">
            Empowering readers with knowledge and resources. Join our growing community of book lovers and learners today!
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-base">
            <li>
              <Link to="/explore" className="hover:underline">📖 Explore Books</Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">ℹ️ About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">📬 Contact</Link>
            </li>
            <li>
              <Link to="/loginPage" className="hover:underline">🔐 Login</Link>
            </li>
            <li>
              <Link to="/registerPage" className="hover:underline">📝 Register</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Contact Info</h4>
          <p className="text-base">✉️ Email: support@mylibrary.com</p>
          <p className="text-base">📞 Phone: +880 1795920956</p>
          <div className="mt-3 flex gap-4">
            <a href="https://facebook.com" target="_blank" className="hover:underline text-sm">Facebook</a>
            <a href="https://linkedin.com" target="_blank" className="hover:underline text-sm">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" className="hover:underline text-sm">Twitter</a>
          </div>
        </div>
      </div>

      <div className="text-center text-base text-white mt-8 border-t border-white/30 pt-4">
        © {new Date().getFullYear()} My Library. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
