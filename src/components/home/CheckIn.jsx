import "./CheckIn.css"

function CheckIn() {
  const steps = [
    {
      num: "01",
      title: "Выбираете квартиру",
      text: "Подбираете подходящий вариант и удобные даты проживания."
    },
    {
      num: "02",
      title: "Связываетесь с нами",
      text: "Оставляете заявку удобным способом и подтверждаете бронирование."
    },
    {
      num: "03",
      title: "Получаете подтверждение",
      text: "Отправляем доступ к квартире — бесконтактное заселение по коду."
    },
    {
      num: "04",
      title: "Заселяетесь",
      text: "Приезжаете в удобное время и остаётесь в готовой квартире."
    }
  ]

  return (
    <section className="journey">
      <div className="wrap journey-layout">
        <div className="journey-intro reveal">
          <p className="kicker">Заселение</p>
          <h2>Как всё происходит</h2>
          <p>
            От выбора квартиры до входа в дверь — короткий сценарий, без очереди на ключи.
          </p>
        </div>

        <ol className="journey-line">
          {steps.map((step) => (
            <li className="reveal" key={step.num}>
              <span>{step.num}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default CheckIn
