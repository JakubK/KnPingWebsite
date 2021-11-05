import './gallery.css';

import g1 from '../../assets/g1.png'
import g2 from '../../assets/g2.png'
import g3 from '../../assets/g3.png'
import g4 from '../../assets/g4.png'
import g5 from '../../assets/g5.png'
import g6 from '../../assets/g6.png'

import GalleryImage from '../../components/galleryImage/galleryImage';

const Gallery = () => {
  return <div className="gallery">
    <div className="gallery__info">
      <h1>Galeria. Tu zobaczysz jak działamy</h1>
    </div>
    <div className="gallery__grid">
      <GalleryImage imgUrl={g1} content="xd" />
      <GalleryImage imgUrl={g2} content="xd" />
      <GalleryImage imgUrl={g3} content="xd" />
      <GalleryImage imgUrl={g4} content="xd" />
      <GalleryImage imgUrl={g5} content="xd" />
      <GalleryImage imgUrl={g6} content="xd" />
    </div>
  </div> 
}

export default Gallery;