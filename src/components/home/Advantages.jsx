import "./Advantages.css"

function Advantages() {
  return (
    <section className="advantages">

      <h2>
        Комфорт, которому можно доверять
      </h2>

      <p className="advantages-subtitle">
        Мы создаем условия, чтобы ваше проживание
        было максимально удобным и приятным.
      </p>

      <div className="advantages-grid">

        <div className="advantage-card">

          <div className="advantage-icon">
            🏠
          </div>

          <h3>
            Элитные квартиры
          </h3>

          <p>
            Современный интерьер, качественная техника
            и всё необходимое для комфортного проживания.
          </p>

        </div>

        <div className="advantage-card">

          <div className="advantage-icon">
            🧺
          </div>

          <h3>
            Свежее белье
          </h3>

          <p>
            Перед каждым заселением предоставляем
            чистое постельное белье и полотенца.
          </p>

        </div>

        <div className="advantage-card">

          <div className="advantage-icon">
            ✨
          </div>

          <h3>
            Идеальная чистота
          </h3>

          <p>
            Квартиры проходят тщательную уборку
            перед каждым гостем.
          </p>

        </div>

        <div className="advantage-card">

          <div className="advantage-icon">
            🎥
          </div>

          <h3>
            Видеоинструкции
          </h3>

          <p>
            Покажем как пользоваться техникой
            и всем оборудованием в квартире.
          </p>

        </div>

      </div>

    </section>
  )
}

export default Advantages