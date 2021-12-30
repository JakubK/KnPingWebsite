import "./about.css"
import photo1 from "../../assets/photo1.png";
import photo2 from "../../assets/photo2.png";
import symbol1 from "../../assets/symbol1.png";

const About = () => {
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
        Koło naukowe PING Politechniki Gdańskiej to zespół tworzony przez ludzi, których łączy zamiłowanie do cyberbezpieczeństwa. Pasję dzielimy nie tylko ze studentami wydziału ETI, ale także z ludźmi z całej Polski, w tym z hobbystami i z profesjonalistami z branży cybersecurity.
        Zarząd koła stanowią:
        <p>⚫ Aleksander Chotecki</p>
        <p>⚫ Krzysztof Domagalski</p>
        <p>⚫ Tomasz Dąbrowski</p>
        Nie musisz być studentem PG, by dołączyć do koła. Wystarczy, że napiszesz do nas na <a className="link" href="https://www.facebook.com/pingetipg" target="_blank" rel="noreferrer">Fanpage'u</a>.
        Zajęcia prowadzimy w każdy czwartek o 19:00 w formie otwartego spotkania. Zapraszamy!
      </div>
    </div>
    <div className="clearfix" />
    <div className="management__section">
      <div className="management__section-left">
        <h1>Nasza historia</h1>
        <img alt="photo2" src={photo2}/>
      </div>
      <div className="management__section-right">
        <div className="management__symbol-container">
          <img alt="symbol1" src={symbol1} height="58" />
        </div>
        Nasze koło naukowe działa w odnowionej formie od lutego 2020 roku.  Organizowane spotkania dotyczą zarówno tematów technicznych jak i nietechnicznych, jednak zawsze są związane z dziedziną cyberbezpieczeństwa. Po dołączeniu otrzymasz od nas przygotowane materiały oraz dostęp do nagrań ze wszystkich spotkań, które odbyły się do tej pory. Nieważne czy dopiero zaczynasz przygodę  z cyberbezpieczeństwem, czy też znasz się na rzeczy to z pewnością rozwiniesz swoje zdolności działając w naszym kole.  Wierzymy, że aktywność w ramach społeczności to najlepszy sposób na udoskonalenie własnych umiejętności. Dołącz do nas już <a className="link" rel="noreferrer" href="https://www.facebook.com/pingetipg" target="_blank">dziś</a>!
      </div>
    </div>
    <div className="clearfix" />
  </div>
}

export default About;