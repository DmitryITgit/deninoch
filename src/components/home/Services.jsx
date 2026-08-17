import { useState } from "react"
import "./Services.css"

const services = [
  {
    image: "/images/service-bed.jpg",
    title: "Дополнительный комплект белья",
    text: "Свежий комплект постельного белья и полотенец по запросу."
  },
  {
    image: "/images/service-clean.jpg",
    title: "Дополнительная уборка",
    text: "Организуем уборку квартиры во время длительного проживания."
  },
  {
    image: "/images/service-doc.jpg",
    title: "Отчётные документы",
    text: "Предоставляем документы для командировок и организаций."
  },
  {
    image: "/images/service-party.jpg",
    title: "Украшение квартиры",
    text: "Подготовим атмосферу для праздника или особого события."
  }
]

function Services() {
  const [active, setActive] = useState(0)

  return (
    <section className="extras">
      <div className="wrap extras-layout">
        <div className="reveal">
          <p className="kicker">Сервис</p>
          <h2>
            Больше,
            <br />
            <em>чем ночёвка.</em>
          </h2>
        </div>

        <div className="extras-visual reveal">
          <img
            src={services[active].image}
            alt={services[active].title}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      <div className="wrap extras-list">
        {services.map((item, index) => (
          <button
            type="button"
            key={item.title}
            className={index === active ? "is-active" : ""}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            onClick={() => setActive(index)}
          >
            <span>0{index + 1}</span>
            <strong>{item.title}</strong>
            <p>{item.text}</p>
          </button>
        ))}
      </div>
    </section>
  )
}

export default Services
