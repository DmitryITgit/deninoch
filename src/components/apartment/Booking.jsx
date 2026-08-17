import "./Booking.css"

function Booking({ price }) {
  return (
    <section className="booking wrap">
      <div>
        <p className="kicker">Бронирование</p>
        <h2>
          {price} ₽ <span>/ сутки</span>
        </h2>
        <p>
          Свяжитесь с нами, чтобы уточнить свободные даты.
          В пятницу, в выходные и праздничные дни цена отличается.
        </p>
      </div>
      <div className="booking-actions">
        <a className="btn btn-fill" href="tel:+79539836853">
          Позвонить и забронировать
        </a>
        <a className="btn" href="https://t.me/deni_noch73" target="_blank" rel="noreferrer">
          Написать в Telegram
        </a>
        <p>
          После обращения подтвердим доступность и расскажем детали заселения.
        </p>
      </div>
    </section>
  )
}

export default Booking
