import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Product from "./Pages/Product";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/mv01" element={<Product />} />

    </Routes>
  );
}

export default App;