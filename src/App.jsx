import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { ReactLenis, useLenis } from "lenis/react"
import "lenis/dist/lenis.css"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Apartments from "./pages/Apartments"
import Apartment from "./pages/Apartment"
import Contacts from "./pages/Contacts"
import ScrollTop from "./components/ScrollTop"
import SmoothCursor from "./components/SmoothCursor"
import Faq from "./pages/Faq"
import Rules from "./pages/Rules"
import Admin from "./pages/Admin"
import Cooperation from "./pages/Cooperation"

const lenisOptions = {
  autoRaf: true,
  lerp: 0.09,
  duration: 1.2,
  smoothWheel: true,
  wheelMultiplier: 0.9
}

function RouteScroll() {
  const { pathname } = useLocation()
  const lenis = useLenis()

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
      return
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }, [pathname, lenis])

  return null
}

function PublicShell() {
  const { pathname } = useLocation()

  return (
    <>
      <SmoothCursor />
      <RouteScroll />
      <Header />
      <div className="page-fade" key={pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apartments" element={<Apartments />} />
          <Route path="/apartments/:id" element={<Apartment />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/cooperation" element={<Cooperation />} />
        </Routes>
      </div>
      <Footer />
      <ScrollTop />
    </>
  )
}

function AppShell() {
  const { pathname } = useLocation()
  const isAdmin = pathname.startsWith("/admin")
  const [reducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches
  )

  if (isAdmin) {
    return (
      <>
        <RouteScroll />
        <Routes>
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </>
    )
  }

  if (reducedMotion) {
    return <PublicShell />
  }

  return (
    <ReactLenis root options={lenisOptions}>
      <PublicShell />
    </ReactLenis>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}

export default App
