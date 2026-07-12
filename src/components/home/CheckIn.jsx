import "./CheckIn.css"

function CheckIn() {
  return (
    <section className="checkin">

      <h2>
        Как проходит заселение
      </h2>

      <p className="checkin-subtitle">
        Всё просто и удобно — от бронирования
        до комфортного проживания.
      </p>

      <div className="checkin-list">

        <div className="checkin-card">

          <span>01</span>

          <h3>
            Выбираете квартиру
          </h3>

          <p>
            Подбираете подходящий вариант
            и удобные даты проживания.
          </p>

        </div>

        <div className="checkin-card">

          <span>02</span>

          <h3>
            Бронируете
          </h3>

          <p>
            Оставляете заявку удобным способом
            и подтверждаете бронирование.
          </p>

        </div>

        <div className="checkin-card">

          <span>03</span>

          <h3>
            Получаете инструкции
          </h3>

          <p>
            Отправляем доступ к квартире по бесконтактному заселению.
          </p>

        </div>

        <div className="checkin-card">

          <span>04</span>

          <h3>
            Заселяетесь
          </h3>

          <p>
            Приезжаете в удобное время
            и наслаждаетесь отдыхом.
          </p>

        </div>

      </div>

    </section>
  )
}

export default CheckIn