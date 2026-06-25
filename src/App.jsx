import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Favorites from "./pages/Favorites";
import Checkout from "./pages/Checkout";
import MVClub from "./pages/MVClub";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/mv01" element={<Product />} />

        <Route path="/favorites" element={<Favorites />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/club" element={<MVClub />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;