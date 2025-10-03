import type { Coffee } from "@/types";
import  { createContext, useEffect, useState, type ReactNode } from "react";
import { useCallback } from "react";


// Tipo do contexto
interface CoffeesContextType {
  coffees: Coffee[];
  loading: boolean;
  error: string | null;
  getCoffees: () => Promise<void>;  
}

// Criação do contexto
// eslint-disable-next-line react-refresh/only-export-components
export const CoffeesContext = createContext<CoffeesContextType>({} as CoffeesContextType);

// Provider
export const CoffeesProvider = ({ children }: { children: ReactNode }) => {
  const [coffees, setCoffees] = useState<Coffee[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);



  const getCoffees = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("http://localhost:3333/products");
      if (!response.ok) throw new Error("Erro ao buscar cafés");

      const data = await response.json();
      setCoffees(data.productsComplete);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Erro desconhecido ao buscar cafés");
      }
    } finally {
      setLoading(false);
    }
  }, []); // array de dependências vazio: a função nunca muda

  useEffect(() => {
    getCoffees();
  }, []);

  return (
    <CoffeesContext.Provider value={{ coffees, loading, error, getCoffees }}>
      {children}
    </CoffeesContext.Provider>
  );
};