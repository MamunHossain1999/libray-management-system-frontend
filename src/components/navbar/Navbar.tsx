import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, User } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full bg-green-200 mx-auto">
      <nav className="flex justify-between container mx-auto items-center p-4">
        <Link to="/" className="text-xl font-bold cursor-pointer">
          📚 My Library
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          <NavLink to="/" end>
            {({ isActive }) => (
              <Button
                variant="ghost"
                className={`cursor-pointer ${isActive ? "bg-green-500 text-white" : ""}`}
              >
                All Books
              </Button>
            )}
          </NavLink>

          <NavLink to="/create-book">
            {({ isActive }) => (
              <Button
                variant="ghost"
                className={`cursor-pointer ${isActive ? "bg-green-500 text-white" : ""}`}
              >
                Add Book
              </Button>
            )}
          </NavLink>

          <NavLink to="/borrow-summary">
            {({ isActive }) => (
              <Button
                variant="ghost"
                className={`cursor-pointer ${isActive ? "bg-green-500 text-white" : ""}`}
              >
                Summary
              </Button>
            )}
          </NavLink>

          

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="cursor-pointer">
                <User className="w-5 h-5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link to="/profile" className="cursor-pointer w-full">
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/logout" className="cursor-pointer w-full">
                  Logout
                </Link>
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
                <NavLink to="/" end>
                  {({ isActive }) => (
                    <Button
                      variant="ghost"
                      className={`cursor-pointer w-full ${
                        isActive ? "bg-green-500 text-white" : ""
                      }`}
                    >
                       All Books
                    </Button>
                  )}
                </NavLink>

                <NavLink to="/create-book">
                  {({ isActive }) => (
                    <Button
                      variant="ghost"
                      className={`cursor-pointer w-full ${
                        isActive ? "bg-green-500 text-white" : ""
                      }`}
                    >
                      Add Book
                    </Button>
                  )}
                </NavLink>

                <NavLink to="/borrow-summary">
                  {({ isActive }) => (
                    <Button
                      variant="ghost"
                      className={`cursor-pointer w-full ${
                        isActive ? "bg-green-500 text-white" : ""
                      }`}
                    >
                      Summary
                    </Button>
                  )}
                </NavLink>

                

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="cursor-pointer flex justify-center mt-4">
                      <User className="w-5 h-5" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                      <Link to="/profile" className="cursor-pointer w-full">
                        Profile
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/logout" className="cursor-pointer w-full">
                        Logout
                      </Link>
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
