import { Link } from "react-router-dom"
import "./Footer.css"

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <p className="section-kicker">Ульяновск</p>
          <Link to="/" className="footer-logo">
            День и ночь
          </Link>
          <p className="footer-tagline">
            Элитные квартиры для отдыха и командировок.
            Тишина, чистота и заселение без ожидания ключей.
          </p>
        </div>

        <div className="footer-col">
          <p className="footer-label">Навигация</p>
          <Link to="/apartments">Квартиры</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/rules">Правила</Link>
          <Link to="/cooperation">Сотрудничество</Link>
        </div>

        <div className="footer-col">
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
      </div>

      <div className="footer-bottom">
        <span>День и ночь</span>
        <span>Посуточная аренда в Ульяновске</span>
      </div>
    </footer>
  )
}

export default Footer
