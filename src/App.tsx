import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/login";
import { StorePage } from "./pages/store";

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/store" element={<StorePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
