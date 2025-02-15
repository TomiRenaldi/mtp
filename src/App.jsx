import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import Home from "./pages/Home"
import Contact from "./pages/Contact"

function App() {
  return (
    <Router>
      <div className="relative flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
