import { useState, } from "react"
import "./Gallery.css"

function Gallery({ photos }) {

  const [activePhoto, setActivePhoto] = useState(null)

  const nextPhoto = () => {

    setActivePhoto(

      (activePhoto + 1) % photos.length

    )

  }

  const prevPhoto = () => {

    setActivePhoto(

      (activePhoto - 1 + photos.length) % photos.length

    )

  }

  return (

    <>

      <section className="apartment-gallery">

        <div

          className="main-photo"

          onClick={() => setActivePhoto(0)}

        >

          <img

            src={photos[0]}

            alt="Квартира"

          />

        </div>

        <div className="small-photos">

          {
            photos.slice(1,5).map((photo,index)=>(

              <div

                className="gallery-item"

                key={index}

                onClick={() => setActivePhoto(index + 1)}

              >

                <img

                  src={photo}

                  alt="Квартира"

                />

              </div>

            ))
          }

        </div>

      </section>

      {
        activePhoto !== null && (

          <div

            className="photo-modal"

            onClick={() => setActivePhoto(null)}

          >

            <button

              className="close-photo"

              onClick={() => setActivePhoto(null)}

            >

              ×

            </button>

            <button

              className="photo-arrow left"

              onClick={(e)=>{

                e.stopPropagation()

                prevPhoto()

              }}

            >

              ‹

            </button>

            <img

              src={photos[activePhoto]}

              alt="Большое фото"

              onClick={(e)=>e.stopPropagation()}

            />

            <button

              className="photo-arrow right"

              onClick={(e)=>{

                e.stopPropagation()

                nextPhoto()

              }}

            >

              ›

            </button>

            <div className="photo-counter">

              {activePhoto + 1} / {photos.length}

            </div>

          </div>

        )

      }

    </>

  )

}

export default Gallery