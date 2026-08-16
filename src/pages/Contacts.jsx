import "./Contacts.css"

import {
  Send,
  MessageCircle,
  Phone,
  Clock3
} from "lucide-react"

function Contacts() {
  return (
    <main className="contacts">
      <header className="contacts-head">
        <p className="section-kicker">Связь</p>
        <h1>Свяжитесь с нами</h1>
        <p>
          Поможем выбрать квартиру, подтвердить даты и рассказать о заселении.
        </p>
      </header>

      <div className="contacts-grid">
        <a
          className="contact-item"
          href="https://t.me/deni_noch73"
          target="_blank"
          rel="noreferrer"
        >
          <Send size={22} />
          <h3>Telegram</h3>
          <span>@DENiNOCH73</span>
        </a>

        <a
          className="contact-item"
          href="https://max.ru/u/f9LHodD0cOLnB5TX3HY9Cjlg1MyvL9CVSbcupyK5lO-iXGDkxar6XajG6XY"
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={22} />
          <h3>Max</h3>
          <span>Написать</span>
        </a>

        <a className="contact-item" href="tel:+79539836853">
          <Phone size={22} />
          <h3>Телефон</h3>
          <span>+7 (953) 983-68-53</span>
        </a>

        <a
          className="contact-item"
          href="https://wa.me/79539836853"
          target="_blank"
          rel="noreferrer"
        >
          <Phone size={22} />
          <h3>WhatsApp</h3>
          <span>Написать</span>
        </a>
      </div>

      <div className="work-time">
        <Clock3 size={22} />
        <h2>Время работы</h2>
        <p>
          Ежедневно с 07:00 до 23:00
        </p>
      </div>
    </main>
  )
}

export default Contacts
