import { useState } from "react"
import "./Booking.css"

function Booking({ price }) {

  const [phoneOpen, setPhoneOpen] = useState(false)

  return (

    <section className="booking">

      <div className="booking-card">

        <h2>

          {price} ₽

          <span>
            / сутки
          </span>

        </h2>

        <p className="booking-text">

          Свяжитесь с нами, чтобы уточнить
          свободные даты и забронировать квартиру.
          В пятницу, в выходные и праздничные цена отличается.

        </p>

        <div

          className={`phone-flip ${phoneOpen ? "active" : ""}`}

          onClick={() => setPhoneOpen(!phoneOpen)}

        >

          <div className="phone-inner">

            <div className="phone-front">

              📞

              <span>
                Позвонить и забронировать
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


        <p className="booking-note">

          После обращения мы подтвердим
          доступность квартиры и расскажем
          все детали заселения.

        </p>

      </div>

    </section>

  )

}

export default Booking