import { Link } from "react-router-dom";
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
    <div className="w-full md:container mx-auto">
      <nav className="flex justify-between items-center p-4">
        <Link to="/" className="text-xl font-bold cursor-pointer">
          My Library
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost" className="cursor-pointer">Home</Button>
          </Link>
          <Link to="/create-book">
            <Button variant="ghost" className="cursor-pointer">AddBooks</Button>
          </Link>
          <Link to="/borrow-summary">
            <Button variant="ghost" className="cursor-pointer">Summary</Button>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="cursor-pointer">
                <User className="w-5 h-5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link to="/profile" className="cursor-pointer w-full">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/logout" className="cursor-pointer w-full">Logout</Link>
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
                <Link to="/">
                  <Button variant="ghost" className="cursor-pointer w-full">Home</Button>
                </Link>
                <Link to="/books">
                  <Button variant="ghost" className="cursor-pointer w-full">Books</Button>
                </Link>
                <Link to="/borrow-summary">
                  <Button variant="ghost" className="cursor-pointer w-full">Summary</Button>
                </Link>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="cursor-pointer flex justify-center mt-4">
                      <User className="w-5 h-5" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                      <Link to="/profile" className="cursor-pointer w-full">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/logout" className="cursor-pointer w-full">Logout</Link>
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
