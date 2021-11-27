import './gallery.css';
import GalleryImage from '../../components/galleryImage/galleryImage';
import {useEffect, useState} from "react";
const Gallery = () => {
  const [state, setState] = useState([])
  useEffect(() => {
    fetch("/api/v1/photos.php", {mode:"no-cors"}).then(
        res => setState(res.data)
    ).catch(e => console.log(e))
  })
  return (
        <div className="gallery">
          <div className="gallery__info">
            <h1>Galeria. Tu zobaczysz jak działamy</h1>
          </div>
          <div className="gallery__grid">
              <div className="gallery__left">
                  {
                      /*state.map( (a, i) =>
                          i % 2 === 0 ? <GalleryImage imgUrl={a.path} content={a.description} /> : ""
                      )*/
                  }
              </div>
              <div className="gallery__right">
                  {/*
                      state.map( (a, i) =>
                          i % 2 === 1 ? <GalleryImage imgUrl={a.path} content={a.description} /> : ""
                      )
                  */}
              </div>
          </div>
        </div>
        )
}

export default Gallery;