import "./Dashboard.css"

function Dashboard() {

  return (

    <div className="dashboard">

      <h1>
        Добро пожаловать 👋
      </h1>

      <p className="dashboard-subtitle">
        Управление квартирами и контентом сайта.
      </p>

      <div className="stats">

        <div className="stat-card">

          <h2>
            20
          </h2>

          <p>
            Квартир
          </p>

        </div>

        <div className="stat-card">

          <h2>
            0
          </h2>

          <p>
            Фотографий
          </p>

        </div>

        <div className="stat-card">

          <h2>
            0
          </h2>

          <p>
            Бронирований
          </p>

        </div>

      </div>

    </div>

  )

}

export default Dashboard