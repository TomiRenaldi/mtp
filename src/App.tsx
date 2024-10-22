import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Nav from "./components/Nav";

// Lazy Load Pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const OurPartners = lazy(() => import("./pages/OurPartners"));
const Leader = lazy(() => import("./pages/Leader"));
const ContactUs = lazy(() => import("./pages/ContactUs"));

export default function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Nav />
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-screen">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/OurPartners" element={<OurPartners />} />
            <Route path="/Leader" element={<Leader />} />
            <Route path="/ContactUs" element={<ContactUs />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}
