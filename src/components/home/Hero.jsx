import { Link } from "react-router-dom"
import "./Hero.css"

function Hero() {
  return (
    <section className="hero">
      <picture>
        <source media="(max-width: 700px)" srcSet="/hero-mobile.jpg" />
        <img
          className="hero-image"
          src="/hero.jpg"
          alt="Интерьер элитной квартиры"
          fetchPriority="high"
          decoding="async"
        />
      </picture>

      <div className="hero-overlay" />
      <div className="hero-glow" />

      <div className="hero-content">
        <p className="section-kicker">Ульяновск · День и ночь</p>
        <h1>
          Квартиры, в которых
          <br />
          хочется остаться
        </h1>
        <p className="hero-lead">
          Тихие интерьеры, свежее бельё и заселение по коду —
          без ожидания ключей и лишней суеты.
        </p>
        <div className="hero-actions">
          <Link to="/apartments" className="btn-gold-fill">
            Выбрать квартиру
          </Link>
          <a href="tel:+79539836853" className="btn-gold">
            Позвонить
          </a>
        </div>
      </div>

      <div className="hero-bar">
        <span>20 квартир</span>
        <span>Круглосуточно</span>
        <span>Заселение по коду</span>
      </div>
    </section>
  )
}

export default Hero
