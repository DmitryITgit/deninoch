import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import "./Header.css"

const links = [
  { to: "/", label: "Главная" },
  { to: "/apartments", label: "Квартиры" },
  { to: "/faq", label: "FAQ" },
  { to: "/contacts", label: "Контакты" },
  { to: "/rules", label: "Правила" },
  { to: "/cooperation", label: "Сотрудничество" }
]

function Header() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const isHome = location.pathname === "/"
  const solid = scrolled || !isHome || menuOpen

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [location.pathname])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <>
      <header className={`header ${solid ? "header-solid" : "header-transparent"}`}>
        <div className="header-container">
          <Link className="logo" to="/" onClick={closeMenu}>
            <span className="logo-title">День и ночь</span>
            <span className="logo-subtitle">Ульяновск</span>
          </Link>

          <nav className="nav">
            {links.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={location.pathname === item.to ? "active" : ""}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <a className="header-cta" href="tel:+79539836853">
              Позвонить
            </a>
            <button
              type="button"
              className={`burger ${menuOpen ? "active" : ""}`}
              aria-label="Меню"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`overlay ${menuOpen ? "show" : ""}`}
        onClick={closeMenu}
      />

      <aside className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <p className="section-kicker">Меню</p>
        <nav className="mobile-nav">
          {links.map((item) => (
            <Link key={item.to} to={item.to} onClick={closeMenu}>
              {item.label}
            </Link>
          ))}
        </nav>
        <a className="btn-gold-fill" href="tel:+79539836853" onClick={closeMenu}>
          Позвонить
        </a>
      </aside>
    </>
  )
}

export default Header
