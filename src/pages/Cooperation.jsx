import { useState } from "react"

import "./Cooperation.css"

function Cooperation() {

  const [phoneOpen, setPhoneOpen] = useState(false)


  return (

    <main className="cooperation">

      <section className="cooperation-hero">


        <div className="cooperation-hero-text">

          <h1>

            Получайте доход от своей квартиры

          </h1>

          <p>

            Доверительное управление квартирой
            в Ульяновске. Мы берём на себя
            сдачу жилья посуточно и все
            организационные вопросы.

          </p>

        </div>

        <img

          src="/cooperation.jpg"

          alt="Сотрудничество"

        />


      </section>

      <section className="cooperation-block">

        <h2>

          Вам знакомы эти ситуации?

        </h2>

        <ul>

          <li>
            Квартира простаивает и не приносит доход
          </li>

          <li>
            Вы оплачиваете коммунальные услуги или ипотеку самостоятельно
          </li>

          <li>
            Нет времени заниматься заселением гостей
          </li>

          <li>
            Пробовали сдавать самостоятельно и столкнулись со сложностями
          </li>

        </ul>

      </section>

      <section className="cooperation-block">

        <h2>

          Что такое доверительное управление?

        </h2>

        <p>

          Мы берём вашу квартиру в управление
          и полностью занимаемся организацией
          посуточной аренды.

        </p>

        <p>

          Вы получаете дополнительный доход,
          а все вопросы с гостями и обслуживанием
          берём на себя.

        </p>

      </section>

      <section className="cooperation-columns">

        <div>

          <h3>

            От собственника

          </h3>

          <ul>

            <li>
              Квартира
            </li>

            <li>
              Ремонт (евро или косметический)
            </li>

            <li>
              Подготовка жилья к сдаче
            </li>

          </ul>

        </div>

        <div>

          <h3>

            От нас

          </h3>

          <ul>

            <li>
              Работа с квартирой
            </li>

            <li>
              Заселение и выселение гостей
            </li>

            <li>
              Общение с гостями
            </li>

            <li>
              Организация работы горничных
            </li>

            <li>
              Работа с площадками бронирования
            </li>

            <li>
              Закупка расходных материалов
            </li>

            <li>
              Ежемесячный отчёт доходов и расходов
            </li>

          </ul>

        </div>

      </section>

      <section className="cooperation-final">

        <h2>

          Хотите получать доход от своей квартиры?

        </h2>

        <p>

          Свяжитесь с нами, и мы расскажем
          подробнее об условиях сотрудничества.

        </p>

        

        <div

          className={`phone-flip ${phoneOpen ? "active" : ""}`}

          onClick={() => setPhoneOpen(!phoneOpen)}

        >

          <div className="phone-inner">

            <div className="phone-front">

              📞

              <span>
                Позвонить
              </span>

            </div>

            <a

              href="tel:+79539836853"

              className="phone-back"

              onClick={(e)=>e.stopPropagation()}

            >

              +7 (953) 983-68-53

              <small>
              </small>

            </a>

          </div>

        </div>

      </section>

    </main>

  )

}

export default Cooperation