import { lazy, Suspense } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navigation from "./components/Navigation"

// Lazy Load Pages
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const OurPartners = lazy(() => import('./pages/OurPartners'))
const Leader = lazy(() => import('./pages/Leader'))
const ContactUs = lazy(() => import('./pages/ContactUs'))

export default function App()
{
  return (
    <Router>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/OurPartners" element={<OurPartners />} />
          <Route path="/Leader" element={<Leader />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </Suspense>
    </Router>
  )
}