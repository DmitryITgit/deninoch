import { Link } from "react-router-dom"
import { navLinks } from "../data/nav"
import "./Footer.css"

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <p className="kicker">День и ночь</p>
        <h2>
          Будем рады
          <br />
          вашему приезду.
        </h2>

        <div className="footer-grid">
          <div>
            <p className="footer-label">Навигация</p>
            {navLinks.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </div>
          <div>
            <p className="footer-label">Связь</p>
            <a href="tel:+79539836853">+7 (953) 983-68-53</a>
            <a href="https://t.me/deni_noch73" target="_blank" rel="noreferrer">
              Telegram
            </a>
            <a href="https://wa.me/79539836853" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <Link to="/contacts">Все контакты</Link>
          </div>
          <div>
            <p className="footer-label">Город</p>
            <p>Ульяновск</p>
            <p>Ежедневно 07:00 — 23:00</p>
            <Link to="/rules">Правила проживания</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>День и ночь</span>
          <span>Посуточная аренда квартир</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
