import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/login";
import { StorePage } from "./pages/store";
import { CoffeesProvider } from "./contexts/CoffeeContext";
import { UserProvider } from "./contexts/UserContext";
import { LayoutPage } from "./pages/layout";
import { CartPage } from "./pages/cart";
import { CartProvider } from "./contexts/CartContext";

export default function App() {

  return (
    <>
      <BrowserRouter>
      <UserProvider>
        <CartProvider>
          <CoffeesProvider>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/store" element={<LayoutPage children={<StorePage />} />} />
              <Route path="/cart" element={<LayoutPage children={<CartPage />} />} />
            </Routes>
          </CoffeesProvider>
        </CartProvider>
      </UserProvider>
      </BrowserRouter>
    </>
  )
}
