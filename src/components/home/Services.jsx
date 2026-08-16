import "./Services.css"

function Services() {
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

  return (
    <section className="services">
      <div className="services-head">
        <p className="section-kicker">Сервис</p>
        <h2>Дополнительные услуги</h2>
        <p>Сделаем пребывание ещё спокойнее — если понадобится что-то сверх обычного заселения.</p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <img
              src={service.image}
              alt={service.title}
              loading="lazy"
              decoding="async"
            />
            <div className="service-overlay">
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
