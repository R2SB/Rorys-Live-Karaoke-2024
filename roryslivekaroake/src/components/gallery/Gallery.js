import React, { useState} from "react"
import image1 from "../../assets/photos/RorysLK image1.png"
import image2 from "../../assets/photos/RorysLK image2.png"
import image3 from "../../assets/photos/RorysLK image3.png"
import image4 from "../../assets/photos/RorysLK image4.png"
import image5 from "../../assets/photos/RorysLK image5.png"
import prevArrow from "../../assets/photos/prev arrow.png"
import nextArrow from "../../assets/photos/next arrow.png"
import "./gallery.css"

const Gallery = () => {

  const photos = [image1, image2, image3, image4, image5, image1];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [computerIndex, setComputerIndex] = useState(0);

  const nextPhotoPhone = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const previousPhotoPhone = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };
  
  const nextPhotoComputer = () => {
    setComputerIndex((prevIndex) => (prevIndex + 3) % photos.length);
  };

  const previousPhotoComputer = () => {
    setComputerIndex((prevIndex) => (prevIndex - 3 + photos.length) % photos.length);
  };
  
  return (
    <div className="gallery">
        <div className="computer__gallery">
          <div className="gallery__grid">
            {[0, 1, 2].map((offset) => {
              const index = (computerIndex + offset) % photos.length;
              return (
                <div key={index} className="gallery__grid-item">
                  <img src={photos[index]} className="gallery__photo" alt={`Gallery image ${index + 1}`} />
                </div>
              );
            })}
          </div>
          <div className="gallery__buttons">
              <button onClick={previousPhotoComputer} className="gallery__button">
                <img src={ prevArrow } alt="Previous" /> 
              </button>
              <button onClick={nextPhotoComputer} className="gallery__button">
                <img src={ nextArrow } alt="Next"/> 
              </button>
          </div>
        </div>

        <div className="phone__gallery">
          <div className="gallery__photo">
            <img src={photos[currentIndex]} alt="" id="phone__image"></img>
          </div>
          <div className="gallery__buttons">
              <button onClick={previousPhotoPhone} className="gallery__button">
                <img src={ prevArrow } alt="" /> 
              </button>
              <button onClick={nextPhotoPhone} className="gallery__button">
                <img src={ nextArrow } alt=""/> 
              </button>
            </div>
        </div>
    </div>
  )
}

export default Gallery