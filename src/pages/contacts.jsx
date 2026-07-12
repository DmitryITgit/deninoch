import "./Contacts.css";

function Contacts() {
  return (
    <main className="contacts">

      <h1>Свяжитесь с нами</h1>

      <p className="subtitle">
        Мы всегда готовы помочь с бронированием квартиры
        или ответить на любые вопросы.
      </p>

      <div className="contacts-grid">

        <a
          className="contact-item"
          href="https://t.me/deni_noch"
          target="_blank"
          rel="noreferrer"
        >
          📩
          <h3>Telegram</h3>
          <span>@DENiNOCH73</span>
        </a>

        <a
          className="contact-item"
          href="https://wa.me/79991234567"
          target="_blank"
          rel="noreferrer"
        >
          💬
          <h3>Max</h3>
          <span>Написать</span>
        </a>

        <a
          className="contact-item"
          href="tel:+79539836853"
        >
          📞
          <h3>Позвонить</h3>
          <span>+7 (953) 983-68-53</span>
        </a>

        <a
          className="contact-item"
          href="mailto:info@rentapart.ru"
        >
          ✉️
          <h3>Email</h3>
          <span>info@rentapart.ru</span>
        </a>

      </div>

      <div className="work-time">
        <h2>Время работы</h2>

        <p>
          Ежедневно с <strong>07:00</strong> до <strong>23:00</strong>
        </p>
      </div>

    </main>
  );
}

export default Contacts;