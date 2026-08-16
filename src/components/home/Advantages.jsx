import "./Advantages.css"

function Advantages() {
  const items = [
    {
      num: "01",
      title: "Элитные квартиры",
      text: "Современный интерьер, качественная техника и всё необходимое для спокойного проживания."
    },
    {
      num: "02",
      title: "Свежее бельё",
      text: "Перед каждым заселением — чистое постельное бельё, полотенца и порядок в деталях."
    },
    {
      num: "03",
      title: "Идеальная чистота",
      text: "Квартиры проходят тщательную уборку. Вы заходите в готовое пространство."
    },
    {
      num: "04",
      title: "Видеоинструкции",
      text: "Покажем, как пользоваться техникой и всем оборудованием в квартире."
    }
  ]

  return (
    <section className="advantages">
      <div className="advantages-head">
        <p className="section-kicker">Почему мы</p>
        <h2>Комфорт, которому можно доверять</h2>
        <p className="advantages-subtitle">
          Мы создаём условия, чтобы проживание было тихим, удобным и без лишних вопросов.
        </p>
      </div>

      <div className="advantages-grid">
        {items.map((item) => (
          <article className="advantage-card" key={item.num}>
            <span>{item.num}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Advantages
