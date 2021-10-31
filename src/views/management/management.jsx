import "./management.css"
import photo1 from "../../assets/photo1.png";
import symbol1 from "../../assets/symbol1.png";

const Management = () => {
  return <div className="management">
    <div className="management__section">
      <div className="management__section-left">
        <h1>Kim jesteśmy?</h1>
        <img alt="photo1" src={photo1}/>
      </div>
      <div className="management__section-right">
        <img alt="symbol1" src={symbol1} height="48" />
        Koło naukowe
        Politechniki Gdańskiej
        to zespół, który tworzą ludzie pasjonujący się cyber-bezpieczeństwem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue erat interdum, sollicitudin massa at, pulvinar lectus. Phasellus tincidunt feugiat vehicula. Sed pulvinar in enim ut elementum.
      </div>
    </div>
    <div className="clearfix" />
  </div>
}

export default Management;