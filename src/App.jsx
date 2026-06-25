import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Favorites from "./pages/Favorites";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <Routes>
      
      <Route path="/favorites" element={<Favorites />} />

      <Route path="/" element={<Home />} />

      <Route path="/mv01" element={<Product />} />

      <Route path="/checkout" element={<Checkout />} />

    </Routes>
  );
}

export default App;