import { Link } from "react-router-dom"
import "./Header.css"

function Header() {

  const scrollTop = () => {

    window.scrollTo({

      top:0,

      behavior:"smooth"

    })

  }

  return (

    <header className="header">

      <div className="header-container">

        <Link

          className="logo"

          to="/"

          onClick={scrollTop}

        >

          День и ночь

        </Link>

        <nav className="nav">

          <Link

            to="/"

            onClick={scrollTop}

          >

            Главная

          </Link>

          <Link to="/apartments">

            Квартиры

          </Link>

          <Link to="/contacts">

            Контакты

          </Link>

        </nav>

      </div>

    </header>

  )

}

export default Header