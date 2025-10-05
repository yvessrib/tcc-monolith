export interface Coffee {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  categories: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  token: string;
}

export interface Cart {
  cartId: string;
  createdAt: string;
  items: CartItem[];
  status: string;
  userId: string;
}

export interface CartItem {
  productId: number;
  productName: string;
  quantity: number;
  price: number;
  image: string;
}