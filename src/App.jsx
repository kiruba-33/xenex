import { Suspense, lazy, useEffect } from "react";
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

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Solutions = lazy(() => import("./pages/Solutions/Solutions"));
const Industries = lazy(() => import("./pages/Industries/Industries"));
const Manufacturing = lazy(
  () => import("./pages/Manufacturing/Manufacturing")
);
const Gallery = lazy(() => import("./pages/Gallery/Gallery"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

const PageLoader = () => {
  return (
    <div
      className="flex min-h-[60vh] items-center justify-center"
      aria-label="Loading page"
    >
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-neutral-300 border-t-neutral-900" />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-neutral-900">
        <Navbar />

        <Suspense fallback={<PageLoader />}>
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
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </Suspense>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;