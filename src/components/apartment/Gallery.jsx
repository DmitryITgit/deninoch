import { useState } from "react"
import "./Gallery.css"

function Gallery({ photos = [] }) {

  const [activePhoto, setActivePhoto] = useState(null)

  const [showAllPhotos, setShowAllPhotos] = useState(false)

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

  console.log("Пришло фотографий:", photos.length)

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

          {photos.slice(1,5).map((photo,index)=>(

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

          ))}

          <button

            className="show-all"

            onClick={() => setShowAllPhotos(true)}

          >

            <strong>
              Показать ещё
            </strong>

            <span>
              Все {photos.length} фото
            </span>

          </button>

        </div>

      </section>

      {showAllPhotos && (

        <div

          className="all-photos"

          onClick={() => setShowAllPhotos(false)}

        >

          <div

            className="all-photos-box"

            onClick={(e)=>e.stopPropagation()}

          >

            <button

              className="close-all"

              onClick={() => setShowAllPhotos(false)}

            >

              ×

            </button>

            <h2>
              Все фотографии ({photos.length})
            </h2>

            <div className="photos-grid">

              {photos.map((photo,index)=>(

                <div

                  key={index}

                  className="all-photo-item"

                  onClick={() => {

                    setActivePhoto(index)

                    setShowAllPhotos(false)

                  }}

                >

                  <img

                    src={photo}

                    alt={`Фото ${index + 1}`}

                  />

                </div>

              ))}

            </div>

          </div>

        </div>

      )}

      {activePhoto !== null && (

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

      )}

    </>

  )

}

export default Gallery