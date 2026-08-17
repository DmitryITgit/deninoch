import "./Advantages.css"

function Advantages() {
  const items = [
    {
      num: "01",
      label: "Пространство",
      title: "Элитные квартиры",
      text: "Современный интерьер, качественная техника и всё необходимое для спокойного проживания."
    },
    {
      num: "02",
      label: "Сервис",
      title: "Свежее бельё и чистота",
      text: "Перед каждым заселением — чистое бельё, полотенца и тщательная уборка. Вы заходите в готовое пространство."
    },
    {
      num: "03",
      label: "Забота",
      title: "Видеоинструкции",
      text: "Покажем, как пользоваться техникой и всем оборудованием в квартире — без лишних вопросов."
    }
  ]

  return (
    <section className="advantages">
      <div className="wrap advantages-intro reveal">
        <p className="kicker">Почему мы</p>
        <h2>Комфорт, которому можно доверять</h2>
      </div>

      <div className="wrap">
        {items.map((item) => (
          <article className="advantage-row reveal" key={item.num}>
            <div>
              <span>{item.num}</span>
              <p>{item.label}</p>
            </div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Advantages
