import "./Contacts.css"
import { ArrowUpRight } from "lucide-react"

const channels = [
  {
    label: "Телефон",
    value: "+7 (953) 983-68-53",
    href: "tel:+79539836853"
  },
  {
    label: "Telegram",
    value: "@DENiNOCH73",
    href: "https://t.me/deni_noch73"
  },
  {
    label: "WhatsApp",
    value: "Написать в чат",
    href: "https://wa.me/79539836853"
  },
  {
    label: "Max",
    value: "Написать",
    href: "https://max.ru/u/f9LHodD0cOLnB5TX3HY9Cjlg1MyvL9CVSbcupyK5lO-iXGDkxar6XajG6XY"
  }
]

function Contacts() {
  return (
    <main className="contacts">
      <section className="wrap contacts-top">
        <div>
          <p className="kicker">Ульяновск</p>
          <h1>
            Мы рядом,
            <br />
            когда вы выбираете дом
          </h1>
          <p>
            Подскажем свободные даты, расскажем о заселении
            и ответим за несколько минут.
          </p>
          <a className="contacts-phone" href="tel:+79539836853">
            +7 (953) 983-68-53
          </a>
          <p className="contacts-hours">Ежедневно · 07:00 — 23:00</p>
          <a className="btn btn-fill" href="tel:+79539836853">
            Позвонить
          </a>
        </div>

        <div className="contacts-map">
          <iframe
            title="Карта Ульяновска"
            src="https://yandex.ru/map-widget/v1/?ll=48.3946%2C54.3142&z=12&l=map"
            loading="lazy"
          />
        </div>
      </section>

      <section className="wrap contacts-list">
        {channels.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
          >
            <span>{item.label}</span>
            <strong>{item.value}</strong>
            <ArrowUpRight size={18} />
          </a>
        ))}
      </section>
    </main>
  )
}

export default Contacts
