import { Link } from "react-router-dom"
import "./Cooperation.css"

function Cooperation() {
  return (
    <main className="coop">
      <section className="coop-hero">
        <div className="wrap coop-hero-copy">
          <p className="kicker">Собственникам</p>
          <h1>Доход от квартиры без ежедневных хлопот</h1>
          <p>
            Доверительное управление в Ульяновске: мы берём сдачу посуточно
            и все организационные вопросы на себя.
          </p>
        </div>
        <img src="/cooperation.jpg" alt="Сотрудничество" loading="lazy" decoding="async" />
      </section>

      <section className="wrap coop-grid">
        <div>
          <h2>01 · Ситуации</h2>
          <ul>
            <li>Квартира простаивает и не приносит доход</li>
            <li>Вы оплачиваете коммунальные услуги или ипотеку самостоятельно</li>
            <li>Нет времени заниматься заселением гостей</li>
            <li>Пробовали сдавать самостоятельно и столкнулись со сложностями</li>
          </ul>
        </div>
        <div>
          <h2>02 · Управление</h2>
          <p>
            Мы берём вашу квартиру в управление и полностью занимаемся организацией
            посуточной аренды. Вы получаете дополнительный доход, а вопросы с гостями
            и обслуживанием берём на себя.
          </p>
        </div>
      </section>

      <section className="wrap coop-split">
        <div>
          <h2>03 · От собственника</h2>
          <ul>
            <li>Квартира</li>
            <li>Ремонт (евро или косметический)</li>
            <li>Подготовка жилья к сдаче</li>
          </ul>
        </div>
        <div>
          <h2>04 · От нас</h2>
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

      <section className="wrap coop-final">
        <h2>Хотите получать доход от своей квартиры?</h2>
        <p>Свяжитесь с нами — расскажем об условиях сотрудничества.</p>
        <div>
          <a className="btn btn-fill" href="tel:+79539836853">
            +7 (953) 983-68-53
          </a>
          <Link className="btn" to="/contacts">
            Написать нам
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Cooperation
