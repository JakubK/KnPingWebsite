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
        <div className="management__symbol-container">
          <img alt="symbol1" src={symbol1} height="58" />
        </div>
        Koło naukowe
        Politechniki Gdańskiej
        to zespół, który tworzą ludzie pasjonujący się cyber-bezpieczeństwem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue erat interdum, sollicitudin massa at, pulvinar lectus. Phasellus tincidunt feugiat vehicula. Sed pulvinar in enim ut elementum.
      </div>
    </div>
    <div className="clearfix" />
    <div className="management__section">
      <div className="management__section-left">
        <h1>Nasza historia</h1>
        <img alt="photo1" src={photo1}/>
      </div>
      <div className="management__section-right">
        <div className="management__symbol-container">
          <img alt="symbol1" src={symbol1} height="58" />
        </div>
        Quisque nec magna
        ipsum. Mauris libero
        lorem, fermentum nec consectetur vitae, pharetra eget ipsum. Nunc quis dui maximus nisl sollicitudin aliquet nec tincidunt massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed a iaculis purus, ut dapibus leo. pellentesque enim consequat vitae. Morbi pulvinar feugiat lorem, dictum eleifend velit auctor congue. Aliquam erat volutpat. Aliquam justo massa, pulvinar et lacus feugiat, malesuada commodo lorem. Aenean quis erat sed metus facilisis placerat nec at ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;


      </div>
    </div>
    <div className="clearfix" />
  </div>
}

export default Management;