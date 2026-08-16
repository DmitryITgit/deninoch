import "./Contacts.css"

import {
  Send,
  MessageCircle,
  Phone,
  ArrowUpRight
} from "lucide-react"

const channels = [
  {
    label: "Телефон",
    value: "+7 (953) 983-68-53",
    href: "tel:+79539836853",
    icon: Phone,
    external: false
  },
  {
    label: "Telegram",
    value: "@DENiNOCH73",
    href: "https://t.me/deni_noch73",
    icon: Send,
    external: true
  },
  {
    label: "WhatsApp",
    value: "Написать в чат",
    href: "https://wa.me/79539836853",
    icon: MessageCircle,
    external: true
  },
  {
    label: "Max",
    value: "Написать",
    href: "https://max.ru/u/f9LHodD0cOLnB5TX3HY9Cjlg1MyvL9CVSbcupyK5lO-iXGDkxar6XajG6XY",
    icon: MessageCircle,
    external: true
  }
]

function Contacts() {
  return (
    <main className="contacts">
      <section className="contacts-hero">
        <div className="contacts-intro">
          <p className="section-kicker">Ульяновск</p>
          <h1>
            Мы рядом,
            <br />
            когда вы выбираете дом
          </h1>
          <p className="contacts-lead">
            Подскажем свободные даты, расскажем о заселении
            и ответим за несколько минут.
          </p>
          <a className="contacts-number" href="tel:+79539836853">
            +7 (953) 983-68-53
          </a>
          <p className="contacts-hours">
            Ежедневно · 07:00 — 23:00
          </p>
        </div>

        <div className="contacts-photo">
          <img
            src="/gallery2.jpg"
            alt="Интерьер квартиры"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      <section className="contacts-channels">
        <div className="contacts-channels-head">
          <p className="section-kicker">Связь</p>
          <h2>Выберите удобный способ</h2>
        </div>

        <div className="contacts-list">
          {channels.map((item) => {
            const Icon = item.icon

            return (
              <a
                key={item.label}
                className="contacts-row"
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
              >
                <span className="contacts-row-label">
                  <Icon size={18} />
                  {item.label}
                </span>
                <span className="contacts-row-value">{item.value}</span>
                <ArrowUpRight size={18} />
              </a>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default Contacts
