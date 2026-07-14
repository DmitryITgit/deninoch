import "./Rules.css"

function Rules() {

  return (

    <main className="rules">

      <div className="rules-box">

        <h1>Правила проживания</h1>

        <p className="subtitle">
          Пожалуйста, ознакомьтесь с условиями проживания перед бронированием.
        </p>

        <div className="rule">
          <span>🏡</span>
          <p>Студия сдается <strong>посуточно и почасово.</strong></p>
        </div>

        <div className="rule">
          <span>📄</span>
          <p>При заселении необходимо предоставить <strong>паспорт.</strong></p>
        </div>

        <div className="rule">
          <span>💳</span>
          <p>
            <strong>Страховой депозит — 3000 ₽.</strong>

            Возвращается после выезда, осмотра квартиры и проведения уборки при соблюдении правил проживания.
          </p>
        </div>

        <div className="rule">
          <span>🔞</span>
          <p>Гости <strong>младше 23 лет</strong> не заселяются.</p>
        </div>

        <div className="rule">
          <span>🚭</span>
          <p>Курение в квартире <strong>запрещено.</strong></p>
        </div>

        <div className="rule">
          <span>🎉</span>
          <p>
            Проведение вечеринок, шумных мероприятий и нарушение режима тишины
            после <strong>22:00</strong> не допускаются.
          </p>
        </div>

        <div className="rule">
          <span>🐾</span>
          <p>Проживание с домашними животными <strong>не предусмотрено.</strong></p>
        </div>

        <div className="welcome">

          ❤️ Будем рады видеть вас в числе наших гостей!

          



          Мы постарались создать уютную атмосферу, чтобы ваше пребывание было максимально комфортным и приятным.

        </div>

      </div>

    </main>

  )

}

export default Rules