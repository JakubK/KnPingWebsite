import "./management.css"
import photo1 from "../../assets/photo1.png";
import photo2 from "../../assets/photo2.png";
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
        Koło naukowe PING
        Politechniki Gdańskiej
        to zespół, który tworzą ludzie pasjonujący się cyberbezpieczeństwem.
        Pasję dzielimy nie tylko z wydziałem ETI, ale ze wszystkimi hobbystami i profesjonalistami
        związanymi z cyberbezpieczeństwem!
        Zarząd koła stanowią:
        <p>⚫ Aleksander Chotecki</p>
        <p>⚫ Krzysztof Domagalski</p>
        <p>⚫ Tomasz Dąbrowski</p>
        By dołączyć do koła wystarczy, że napiszesz do nas na <a href="https://www.facebook.com/pingetipg" target="_blank">Fanpage'u</a>.
        Zajęcia prowadzimy w każdy czwartek w formie otwartego spotkania, także zapraszamy!
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
        Nasze koło naukowe działa odnowione od <b>lutego 2020 roku</b>. Od początku dbamy o profesjonalizm i rzetelność.
        Spotkania prowadzimy w bardzo zróżnicowanym stopniu merytorycznym, więc nieważne czy dopiero zaczynasz przygodę
        z cyberbezpieczeństwem, czy też znasz się już na rzeczy - na pewno czegoś nowego się nauczysz i nie pożałujesz.
        Spotkania nagrywamy, by były dostępne dla nowych członków koła i dla każdego, kto chciałby powtórzyć sobie jakiś
        temat.
      </div>
    </div>
    <div className="clearfix" />
  </div>
}

export default Management;