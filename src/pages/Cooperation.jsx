import { Link } from "react-router-dom"
import "./Cooperation.css"

function Cooperation() {
  return (
    <main className="cooperation">
      <section className="cooperation-hero">
        <div className="cooperation-hero-text">
          <p className="section-kicker">Собственникам</p>
          <h1>Доход от квартиры без ежедневных хлопот</h1>
          <p>
            Доверительное управление в Ульяновске: мы берём сдачу посуточно
            и все организационные вопросы на себя.
          </p>
        </div>
        <img
          src="/cooperation.jpg"
          alt="Сотрудничество"
          loading="lazy"
          decoding="async"
        />
      </section>

      <section className="cooperation-block">
        <h2>Вам знакомы эти ситуации?</h2>
        <ul>
          <li>Квартира простаивает и не приносит доход</li>
          <li>Вы оплачиваете коммунальные услуги или ипотеку самостоятельно</li>
          <li>Нет времени заниматься заселением гостей</li>
          <li>Пробовали сдавать самостоятельно и столкнулись со сложностями</li>
        </ul>
      </section>

      <section className="cooperation-block">
        <h2>Что такое доверительное управление?</h2>
        <p>
          Мы берём вашу квартиру в управление и полностью занимаемся организацией
          посуточной аренды.
        </p>
        <p>
          Вы получаете дополнительный доход, а вопросы с гостями и обслуживанием
          берём на себя.
        </p>
      </section>

      <section className="cooperation-columns">
        <div>
          <h3>От собственника</h3>
          <ul>
            <li>Квартира</li>
            <li>Ремонт (евро или косметический)</li>
            <li>Подготовка жилья к сдаче</li>
          </ul>
        </div>
        <div>
          <h3>От нас</h3>
          <ul>
            <li>Работа с квартирой</li>
            <li>Заселение и выселение гостей</li>
            <li>Общение с гостями</li>
            <li>Организация работы горничных</li>
            <li>Работа с площадками бронирования</li>
            <li>Закупка расходных материалов</li>
            <li>Ежемесячный отчёт доходов и расходов</li>
          </ul>
        </div>
      </section>

      <section className="cooperation-final">
        <h2>Хотите получать доход от своей квартиры?</h2>
        <p>
          Свяжитесь с нами — расскажем об условиях сотрудничества.
        </p>
        <a className="btn-gold" href="tel:+79539836853">
          +7 (953) 983-68-53
        </a>
        <Link className="btn-gold" to="/contacts">
          Написать нам
        </Link>
      </section>
    </main>
  )
}

export default Cooperation
