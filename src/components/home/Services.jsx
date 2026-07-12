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
      title: "Отчетные документы",
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

      <h2>
        Дополнительные услуги
      </h2>

      <p className="services-subtitle">
        Сделаем ваше пребывание еще комфортнее
      </p>

      <div className="services-grid">

        {services.map((service, index) => (

          <div 
            className="service-card"
            key={index}
          >

            <img 
              src={service.image}
              alt={service.title}
            />

            <div className="service-overlay">

              <h3>
                {service.title}
              </h3>

              <p>
                {service.text}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Services