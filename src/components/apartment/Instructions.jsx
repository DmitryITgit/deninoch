import "./Instructions.css"

function Instructions({ instructions }) {

  if (!instructions) return null

  return (

    <section className="instructions">

      <h2>
        Видеоинструкции
      </h2>

      <div className="instruction-grid">

        {
          instructions.map((item,index)=>(

            <div

              className="instruction-card"

              key={index}

            >

              <video

                controls

                src={item.video}

              />

              <h3>

                {item.title}

              </h3>

            </div>

          ))
        }

      </div>

    </section>

  )

}

export default Instructions