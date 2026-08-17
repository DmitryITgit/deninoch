import { Link, useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { ChevronLeft } from "lucide-react"
import { navLinks } from "../data/nav"
import "./Header.css"

function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [menuPath, setMenuPath] = useState(location.pathname)
  const [scrolled, setScrolled] = useState(false)
  const isHome = location.pathname === "/"
  const solid = scrolled || !isHome || open

  if (menuPath !== location.pathname) {
    setMenuPath(location.pathname)
    setOpen(false)
  }

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  function goBack() {
    if (location.pathname.startsWith("/apartments/")) {
      navigate("/apartments")
      return
    }
    navigate("/")
  }

  return (
    <>
      <header className={`site-header ${solid ? "is-solid" : "is-clear"}`}>
        <div className="site-header-inner">
          <div className="header-left">
            {!isHome && (
              <button
                type="button"
                className="header-back"
                onClick={goBack}
                aria-label="Назад"
              >
                <ChevronLeft size={20} strokeWidth={1.6} />
                Назад
              </button>
            )}
            <Link className="brand" to="/" onClick={() => setOpen(false)}>
              <span>День и ночь</span>
              <small>Ульяновск</small>
            </Link>
          </div>

          <nav className="desk-nav" aria-label="Основное меню">
            {navLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={location.pathname === item.to ? "is-active" : ""}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-side">
            <a className="header-phone" href="tel:+79539836853">
              Позвонить
            </a>
            <button
              type="button"
              className={`menu-toggle ${open ? "is-open" : ""}`}
              aria-label={open ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <div className={`full-menu ${open ? "is-open" : ""}`}>
        <button
          type="button"
          className="full-menu-close"
          onClick={() => setOpen(false)}
          aria-label="Закрыть меню"
        >
          Закрыть
        </button>
        <nav>
          {navLinks.map((item, index) => (
            <Link key={item.to} to={item.to} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <a className="btn btn-fill" href="tel:+79539836853">
          Позвонить
        </a>
      </div>
    </>
  )
}

export default Header
