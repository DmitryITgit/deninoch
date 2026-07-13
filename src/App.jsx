import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Home from "./pages/Home"
import Apartments from "./pages/Apartments"
import Apartment from "./pages/Apartment"
import Contacts from "./pages/Contacts";
import ScrollTop from "./components/ScrollTop"
import Faq from "./pages/Faq";

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>

        <Route 
          path="/" 
          element={<Home />} 
        />

        <Route 
          path="/apartments" 
          element={<Apartments />} 
        />
        <Route
          path="/apartments/:id"
          element={<Apartment />}
        />
        <Route
          path="/contacts"
          element={<Contacts />}
        />

        <Route 
          path="/faq" 
          element={<Faq />} 
        />

      </Routes>
      
      <ScrollTop />

    </BrowserRouter>
  )
}

export default App