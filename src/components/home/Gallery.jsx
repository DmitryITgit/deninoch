import "./Gallery.css"

function Gallery() {

  const images = [
    "/gallery1.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg",
    "/gallery5.jpg",
    "/gallery6.jpg",
    "/gallery7.jpg",
    "/gallery8.jpg",
  ]

  return (
    <section className="gallery">

      <h2>
        Атмосфера наших квартир
      </h2>

      <p>
        Комфортные пространства,
        созданные для приятного отдыха.
      </p>

      <div className="gallery-wrapper">

        <div className="gallery-track">

          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Интерьер квартиры"
            />
          ))}

          {images.map((image, index) => (
            <img
              key={"copy-" + index}
              src={image}
              alt="Интерьер квартиры"
            />
          ))}

        </div>

      </div>

    </section>
  )
}

export default Gallery