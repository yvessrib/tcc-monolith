import type { Cart } from "@/types";
import  { createContext, useState, type ReactNode } from "react";
import { useCallback } from "react";

interface CartContextType {
  getOrCreateCart: (userId: string) => Promise<Cart | null>;
  cart: Cart | null;
  addItemToCart: (userId: string, cartId: string, productId: number, quantity: number) => Promise<void>;
  removeItemFromCart: (itemId: number) => Promise<void>;
  updateItemQuantity: (itemId: number, quantity: number) => Promise<void>;
  error: string | null;
  cartQuantity: number;
}

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext<CartContextType>({} as CartContextType);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Cart | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [cartQuantity, setCartQuantity] = useState<number>(0);

  async function getOrCreateCart(userId: string): Promise<Cart | null> {
    try {
      setError(null);

      const response = await fetch(`http://localhost:3333/cart/${userId}`, {
        method: "GET",
      });

      if (!response.ok) throw new Error("Erro ao buscar ou criar o carrinho");

      const data = await response.json();
      setCart(data);
      setCartQuantity(data.items.length);
      return data;
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Erro desconhecido ao buscar ou criar o carrinho");
      }
      return null;
    } 
  }

  const addItemToCart = useCallback(async (userId: string, cartId: string, productId: number, quantity: number) => {
    if (!cart) {
      setError("Carrinho não encontrado");
      return;
    }

    try {
      setError(null);
      const response = await fetch("http://localhost:3333/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cartId,
          productId,
          quantity,
        }),
      });
      if (!response.ok) throw new Error("Erro ao adicionar item ao carrinho");

      const getData = await fetch(`http://localhost:3333/cart/${userId}`, {
        method: "GET",
      });

      if (!getData.ok) throw new Error("Erro ao buscar ou criar o carrinho");

      const data = await getData.json();
      setCart(data);
      setCartQuantity(data.items.length);

    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Erro desconhecido ao adicionar item ao carrinho");
      }
    }
  }, [cart]);

  const removeItemFromCart = useCallback(async (itemId: number) => {
    if (!cart) {
      setError("Carrinho não encontrado");
      return;
    }

    try {
      const response = await fetch("http://localhost:3333/cart/'${cart.id}/items/${itemId}", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cartId: cart.cartId,
          itemId,
        }),
      });
    
      if (!response.ok) throw new Error("Erro ao remover item do carrinho");

      const getData = await fetch(`http://localhost:3333/cart/${userId}`, {
        method: "GET",
      });

      if (!getData.ok) throw new Error("Erro ao buscar ou criar o carrinho");

      const data = await getData.json();
      setCart(data);
      setCartQuantity(data.items.length);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Erro desconhecido ao remover item do carrinho");
      }
    }
  }, [cart]);

  const updateItemQuantity = useCallback(async (itemId: number, quantity: number) => {
    if (!cart) {
      setError("Carrinho não encontrado");
      return;
    }

    try {
      const response = await fetch("http://localhost:3333/cart/", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cartId: cart.cartId,
          itemId,
          quantity,
        }),
      });
      if (!response.ok) throw new Error("Erro ao atualizar quantidade do item no carrinho");

      const data = await response.json();
      setCart(data.cart);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Erro desconhecido ao atualizar quantidade do item no carrinho");
      }
    }
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, error, getOrCreateCart, addItemToCart, removeItemFromCart, updateItemQuantity, cartQuantity }}>
      {children}
    </CartContext.Provider>
  );
};