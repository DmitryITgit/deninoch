import "./Rules.css"

import {
  House,
  BadgeCheck,
  WalletCards,
  UserRoundX,
  CigaretteOff,
  VolumeX,
  PawPrint,
  Heart
} from "lucide-react"

function Rules() {

  return (

    <main className="rules">

      <div className="rules-box">

        <h1>
          Правила проживания
        </h1>

        <p className="subtitle">
          Пожалуйста, ознакомьтесь с условиями проживания перед бронированием.
        </p>

        <div className="rule">

          <House />

          <p>
            Студия сдается <strong>посуточно и почасово.</strong>
          </p>

        </div>

        <div className="rule">

          <BadgeCheck />

          <p>
            При заселении необходимо предоставить <strong>паспорт.</strong>
          </p>

        </div>

        <div className="rule">

          <WalletCards />

          <p>
            <strong>
              Страховой депозит — 3000 ₽.
            </strong>

            


            Возвращается после выезда, осмотра квартиры и проведения уборки
            при соблюдении правил проживания.
          </p>

        </div>

        <div className="rule">

          <UserRoundX />

          <p>
            Гости <strong>младше 23 лет</strong> не заселяются.
          </p>

        </div>

        <div className="rule">

          <CigaretteOff />

          <p>
            Курение в квартире <strong>запрещено.</strong>
          </p>

        </div>

        <div className="rule">

          <VolumeX />

          <p>
            Проведение вечеринок, шумных мероприятий и нарушение режима тишины
            после <strong>22:00</strong> не допускаются.
          </p>

        </div>

        <div className="rule">

          <PawPrint />

          <p>
            Проживание с домашними животными <strong>не предусмотрено.</strong>
          </p>

        </div>

        <div className="welcome">

          <Heart />

          <p>
            Будем рады видеть вас в числе наших гостей!
          </p>

          <span>
            Мы постарались создать уютную атмосферу, чтобы ваше пребывание
            было максимально комфортным и приятным.
          </span>

        </div>

      </div>

    </main>

  )

}

export default Rules