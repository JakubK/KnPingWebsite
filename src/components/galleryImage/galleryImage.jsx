import './galleryImage.css';

const galleryImage = (props) => {
  return <div className="gallery-image">
    <img src={props.imgUrl} alt={props.content}/>
    <div className="gallery-image__label">
      {props.content}
    </div>
  </div>
}

export default galleryImage;