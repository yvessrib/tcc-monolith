import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/login";
import { StorePage } from "./pages/store";
import { CoffeesProvider } from "./contexts/CoffeeContext";

export default function App() {

  return (
    <>
      <BrowserRouter>
      <CoffeesProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
            <Route path="/store" element={<StorePage />} />
        </Routes>
        </CoffeesProvider>
      </BrowserRouter>
    </>
  )
}
