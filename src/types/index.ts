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