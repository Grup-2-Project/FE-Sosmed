import { Link, useNavigate } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Computer, Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/theme-provider";
import logo from "@/assets/img/logo2.jpg";
import SearchBoxUser from "./search-box-user";
import { useToken } from "@/context/token-provider";

const Navbar = () => {
  const { user, token } = useToken();
  const { setTheme } = useTheme();
  const navigate = useNavigate();
  const handlelogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/login");
  };
  return (
    <div className="sticky top-0 w-full bg-white/90 p-2 dark:bg-black/90">
      <div className="container top-0 flex w-full items-center justify-between">
        <span>
          <Link to="/">
            <section className="h-[40px] bg-lime-500 rounded-full overflow-hidden">
              <img src={logo} alt="async logo" className="h-full w-full" />
            </section>
          </Link>
        </span>

        <SearchBoxUser />

        <div className="flex h-full items-center">
          <DropdownMenu>
            <DropdownMenuTrigger className="h-full">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {token && (
                <>
                  <DropdownMenuLabel>Hi, {user.FirstName}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <Link to={"/user"}>
                    <DropdownMenuItem className="hover:cursor-pointer">
                      Profile
                    </DropdownMenuItem>
                  </Link>
                  <Link to={"/user/settings"}>
                    <DropdownMenuItem className="hover:cursor-pointer">
                      Settings
                    </DropdownMenuItem>
                  </Link>
                </>
              )}
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <span>Theme</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem onClick={() => setTheme("light")}>
                      <Sun className="mr-2 h-4 w-4" />
                      <span>Light</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                      <Moon className="mr-2 h-4 w-4" />
                      <span>Dark</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("system")}>
                      <Computer className="mr-2 h-4 w-4" />
                      <span>System</span>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuSeparator />
              {token ? (
                <Link to={"/login"} onClick={() => handlelogout()}>
                  <DropdownMenuItem className="hover:cursor-pointer">
                    Logout
                  </DropdownMenuItem>
                </Link>
              ) : (
                <>
                  <Link to={"/login"}>
                    <DropdownMenuItem className="hover:cursor-pointer">
                      Login
                    </DropdownMenuItem>
                  </Link>
                  <Link to={"/register"}>
                    <DropdownMenuItem className="hover:cursor-pointer">
                      Register
                    </DropdownMenuItem>
                  </Link>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
