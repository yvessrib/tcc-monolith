import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/login";
import { StorePage } from "./pages/store";
import { CoffeesProvider } from "./contexts/CoffeeContext";
import { UserProvider } from "./contexts/UserContext";

export default function App() {

  return (
    <>
      <BrowserRouter>
      <UserProvider>
        <CoffeesProvider>
          <Routes>
            <Route path="/" element={<LoginPage />} />
              <Route path="/store" element={<StorePage />} />
          </Routes>
        </CoffeesProvider>
      </UserProvider>
      </BrowserRouter>
    </>
  )
}
