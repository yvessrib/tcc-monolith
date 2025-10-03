import type { User } from "@/types";
import  { createContext, useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface UserContextType {
  user: User | null;
  loginUser: (email: string, password: string) => Promise<void>;
  loading: boolean;
  error: string | null;
}

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true);

  const navigate = useNavigate();

  async function loginUser(email: string, password: string) {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("http://localhost:3333/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password
        }),
      });

      const data = await response.json();
      setUser(data.user);

      console.log(data.user);
      navigate("/store");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Erro desconhecido ao buscar cafés");
      }
    } finally {
      setLoading(false);
    }
  }


  return (
    <UserContext.Provider value={{ user, loading, error, loginUser }}>
      {children}
    </UserContext.Provider>
  );
};