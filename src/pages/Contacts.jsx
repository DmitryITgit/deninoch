import "./Contacts.css"

import {
  Send,
  MessageCircle,
  Phone,
  Mail,
  Clock3
} from "lucide-react"

function Contacts() {

  return (

    <main className="contacts">

      <h1>
        Свяжитесь с нами
      </h1>

      <p className="subtitle">
        Мы всегда готовы помочь с бронированием квартиры
        или ответить на любые вопросы.
      </p>

      <div className="contacts-grid">

        <a

          className="contact-item"

          href="https://t.me/deni_noch73"

          target="_blank"

          rel="noreferrer"

        >

          <Send />

          <h3>
            Telegram
          </h3>

          <span>
            @DENiNOCH73
          </span>

        </a>

        <a

          className="contact-item"

          href="https://max.ru/u/f9LHodD0cOLnB5TX3HY9Cjlg1MyvL9CVSbcupyK5lO-iXGDkxar6XajG6XY"

          target="_blank"

          rel="noreferrer"

        >

          <MessageCircle />

          <h3>
            Max
          </h3>

          <span>
            Написать
          </span>

        </a>

        <a

          className="contact-item"

          href="tel:+79539836853"

        >

          <Phone />

          <h3>
            Позвонить
          </h3>

          <span>
            +7 (953) 983-68-53
          </span>

        </a>

        <a

          className="contact-item"

          href="https://wa.me/79539836853"

        >

          <Mail />

          <h3>
            WhatsApp
          </h3>


        </a>

      </div>

      <div className="work-time">

        <Clock3 />

        <h2>
          Время работы
        </h2>

        <p>
          Ежедневно с <strong>07:00</strong> до <strong>23:00</strong>
        </p>

      </div>

    </main>

  )

}

export default Contacts