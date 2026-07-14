import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="header-container">

          <Link 
            className="logo" 
            to="/"
          >

            <div className="logo-title">
              День и ночь
            </div>

            <div className="logo-subtitle">
              Элитные квартиры в Ульяновске
            </div>

          </Link>

          {/* Меню для компьютера */}

          <nav className="nav">

            <Link to="/" onClick={scrollTop}>
              Главная
            </Link>

            <Link to="/apartments" onClick={scrollTop}>
              Квартиры
            </Link>

            <Link to="/faq" onClick={scrollTop}>
              FAQ
            </Link>

            <Link to="/contacts" onClick={scrollTop}>
              Контакты
            </Link>

            <Link to="/rules">
              Правила
            </Link>

          </nav>

          {/* Бургер */}

          <button
            className={`burger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >

            <span></span>
            <span></span>
            <span></span>

          </button>

        </div>
      </header>

      {/* Затемнение */}

      <div
        className={`overlay ${menuOpen ? "show" : ""}`}
        onClick={closeMenu}
      ></div>

      {/* Мобильное меню */}

      <aside className={`mobile-menu ${menuOpen ? "show" : ""}`}>

        <div className="mobile-top">

          <h2>День и ночь</h2>

          <p>
            Посуточная аренда квартир
            
          </p>

        </div>

        <nav className="mobile-nav">

          <Link
            to="/"
            onClick={scrollTop}
          >
            🏠 Главная
          </Link>

          <Link
            to="/apartments"
            onClick={scrollTop}
          >
            🏢 Квартиры
          </Link>

          <Link
            to="/faq"
            onClick={scrollTop}
          >
            ❓ FAQ
          </Link>

          <Link
            to="/contacts"
            onClick={scrollTop}
          >
            📞 Контакты
          </Link>

          <Link
            to="/rules"
            onClick={scrollTop}
          >
            📜 Правила
          </Link>

          

        </nav>

      </aside>
    </>
  );
}

export default Header;