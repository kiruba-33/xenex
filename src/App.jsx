import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Scroll restoration component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname]);

  return null;
};

// Standard eager page imports
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Solutions from "./pages/Solutions/Solutions";
import Industries from "./pages/Industries/Industries";
import Manufacturing from "./pages/Manufacturing/Manufacturing";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-neutral-900">
        <Navbar />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/industries" element={<Industries />} />
              <Route
                path="/manufacturing"
                element={<Manufacturing />}
              />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;