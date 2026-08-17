import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Apartments from "./pages/Apartments"
import Apartment from "./pages/Apartment"
import Contacts from "./pages/Contacts"
import ScrollTop from "./components/ScrollTop"
import Faq from "./pages/Faq"
import Rules from "./pages/Rules"
import Admin from "./pages/Admin"
import Cooperation from "./pages/Cooperation"

function AppShell() {
  const { pathname } = useLocation()
  const isAdmin = pathname.startsWith("/admin")

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }, [pathname])

  return (
    <>
      {!isAdmin && <Header />}
      <div className={isAdmin ? undefined : "page-fade"} key={pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apartments" element={<Apartments />} />
          <Route path="/apartments/:id" element={<Apartment />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/cooperation" element={<Cooperation />} />
        </Routes>
      </div>
      {!isAdmin && <Footer />}
      {!isAdmin && <ScrollTop />}
    </>
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
