import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, User } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import logo from "@/assets/logo.jpg";
import axios from "axios";
import { toast } from "react-toastify";
import { clearUser } from "@/features/userLogin/authSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  const handleLogout = async () => {
    try {
      await axios.post(`${baseURL}/api/auth/logout`, {}, { withCredentials: true });
      dispatch(clearUser());
      toast.success("Logged out");
      navigate("/loginPage");
      window.location.reload();
    } catch {
      toast.error("Logout failed");
    }
  };

  const menuItems = [
    { to: "/", label: "Home" },
    { to: "/booklist", label: "All Books" },
    { to: "/create-book", label: "Add Book" },
    { to: "/borrow-summary", label: "Summary" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <div className="w-full py-4 bg-green-400">
      <nav className="text-[20px] flex justify-between items-center container mx-auto px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold">
          <img src={logo} alt="logo" className="h-8 w-8 object-contain" />
          <span className="text-[20px]">My Library</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          {menuItems.map((item) => (
            <NavLink key={item.to} to={item.to} end>
              {({ isActive }) => (
                <Button
                  variant="ghost"
                  className={`text-[20px] cursor-pointer ${isActive ? "bg-green-500 text-white" : ""}`}
                >
                  {item.label}
                </Button>
              )}
            </NavLink>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="cursor-pointer">
                <User className="w-5 h-5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {user && (
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="w-full text-[20px]">Profile</Link>
                </DropdownMenuItem>
              )}
              <DropdownMenuItem asChild>
                {user ? (
                  <button
                    onClick={handleLogout}
                    className="w-full text-left text-red-500 text-[20px]"
                  >
                    Logout
                  </button>
                ) : (
                  <Link to="/loginPage" className="w-full text-[20px]">Login</Link>
                )}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger className="cursor-pointer">
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                {menuItems.map((item) => (
                  <NavLink key={item.to} to={item.to} end>
                    {({ isActive }) => (
                      <Button
                        variant="ghost"
                        className={`w-full text-[20px] justify-start ${isActive ? "bg-green-500 text-white" : ""}`}
                      >
                        {item.label}
                      </Button>
                    )}
                  </NavLink>
                ))}

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="mt-4">
                      <User className="w-5 h-5" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {user && (
                      <DropdownMenuItem asChild>
                        <Link to="/profile" className="w-full text-[20px]">Profile</Link>
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuItem asChild>
                      {user ? (
                        <button
                          onClick={handleLogout}
                          className="w-full text-left text-red-500 text-[20px]"
                        >
                          Logout
                        </button>
                      ) : (
                        <Link to="/loginPage" className="w-full text-[20px]">Login</Link>
                      )}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
