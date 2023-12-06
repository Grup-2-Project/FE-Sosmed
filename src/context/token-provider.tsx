/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "@/components/ui/use-toast";
import axiosWithConfig, { setAxiosConfig } from "@/lib/apis/axiosWithConfig";
import { getUser } from "@/lib/apis/user/api";
import { Profile } from "@/lib/apis/user/types";
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface TokenProviderProps {
  children: ReactNode;
}
interface Context {
  token: string;
  user: Partial<Profile>;
  changeToken: (token?: string, username?: string) => void;
}
const initialState = {
  token: "",
  user: {},
  changeToken: () => {},
};
const TokenContext = createContext<Context>(initialState);

export const TokenProvider = ({ children }: Readonly<TokenProviderProps>) => {
  const [token, setToken] = useState(localStorage.getItem("token") ?? "");
  const [user, setUser] = useState<Partial<Profile>>({});
  const [username, setUsername] = useState(
    localStorage.getItem("username") ?? "",
  );

  useEffect(() => {
    setAxiosConfig(token);
    token !== "" && fetchProfile(username);
  }, [token]);

  axiosWithConfig.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401) {
        changeToken();
      }

      return Promise.reject(error);
    },
  );

  const fetchProfile = useCallback(
    async (param: string) => {
      try {
        const result = await getUser(param ?? 1);
        setUser(result);
      } catch (error: any) {
        toast({
          title: "Oops! Something went wrong.",
          description: error.message.toString(),
          variant: "destructive",
        });
      }
    },
    [token],
  );

  const changeToken = useCallback(
    (token?: string, username?: string) => {
      const newToken = token ?? ""; // const newToken = token ? token : "";
      setToken(newToken);
      setUsername(username ?? "");
      if (token) {
        localStorage.setItem("token", newToken);
        localStorage.setItem("username", username ?? "");
      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        setUser({});
      }
    },
    [token],
  );

  const tokenContextValue = useMemo(
    () => ({
      token,
      user,
      changeToken,
    }),
    [token, user, changeToken],
  );

  return (
    <TokenContext.Provider value={tokenContextValue}>
      {children}
    </TokenContext.Provider>
  );
};

export function useToken() {
  const context = useContext(TokenContext);

  if (context === undefined) {
    throw new Error("ERROR, useToken must be used within TokenContext");
  }

  return context;
}
