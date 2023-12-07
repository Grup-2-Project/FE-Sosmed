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

import { useToken } from "@/context/token-provider";

const Navbar = () => {
  const { user, token, changeToken } = useToken();
  const { setTheme } = useTheme();
  const navigate = useNavigate();

  const handlelogout = () => {
    changeToken("");

    navigate("/login");
  };

  return (
    <div className="sticky top-0 w-full bg-white/90 p-2 dark:bg-black/90">
      <div className="container top-0 flex w-full items-center justify-between">
        <span>
          <Link to="/">
            <section className="h-[40px] overflow-hidden rounded-full bg-lime-500">
              <img src={logo} alt="async logo" className="h-full w-full" />
            </section>
          </Link>
        </span>

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
                  <Link to={`/user/${user.Username}`}>
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
                <DropdownMenuItem className="hover:cursor-pointer" onClick={() => handlelogout()}>
                  Logout
                </DropdownMenuItem>
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
