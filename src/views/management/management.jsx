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
        Jesteśmy studentami Politechniki Gdańskiej prowadzącymi kolejną edycją koła naukowego Ping, które wznowiło działalność na uczelni w lutym 2020 roku. Pomimo tego, że zajęcia prowadzone są w formie zdalnej, to staramy się wyciągnąć z tego maksymalnie dużo zysku i przekazywać uczestnikom wiedzę w sposób merytoryczny i rzetelny. Organizowane spotkania dotyczą zarówno tematów bardzo technicznych jak i zupełnie nietechnicznych, jednak zawsze powiązanych z tematyką cyberbezpieczeństwa. Zajęcia odbywają się każdego tygodnia na wewnętrznej platformie politechnicznej, jednak koło jest otwarte na osoby spoza politechniki. Jeśli martwisz się, że nie masz wystarczającej wiedzy z zakresu cyberbezpieczeństwa, lub dopiero zaczynasz swoją przygodę, to nie musisz się obawiać. Po dołączeniu dostaniesz od nas przygotowane przez członków materiały i dostęp do nagrań ze wszystkich spotkań, które odbyły się do tej pory. Dla ludzi, którzy niekoniecznie są zainteresowani udzielaniem się na spotkaniach prowadzimy także sekcję ctf oraz sekcję projektów programistycznych. Jesteśmy pewni, że każdy znajdzie coś dla siebie i z odrobiną zaangażowania będzie mógł dołożyć cegiełkę do budowania społeczności oraz zrobić swoje pierwsze kroki w dziedzinie cyberbezpieczeństwa.
        Zapraszamy wszystkich bez względu na doświadczenie oraz na to czy studiują na Politechnice Gdańskiej. Nasi uczestnicy mają bardzo różne umiejętności i w ramach cotygodniowych spotkań staramy się dzielić wiedzą. Wierzymy, że wspólna praca oraz wzajemna edukacja to najlepszy sposób na rozwój swoich umiejętności nie tylko w tej dziedzinie.
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
        Koło naukowe Ping Politechniki Gdańskiej ma wieloletnią historię działalności i łączy ludzi o zainteresowaniach ukierunkowanych na tematy związane z cyberbezpieczeństwem oraz sieciami komputerowymi. Kolejna edycja koła, ze względu na pandemię, została wznowiona w formie zdalnej na początku 2020 roku, co okazało się strzałem w dziesiątkę. Zaczęliśmy zrzeszać ludzi z różnych wydziałów, a z czasem także z innych części kraju, nawet jeśli nie byli studentami Politechniki Gdańskiej. W miarę upływu kolejnych miesięcy nasze koło zyskało kilkadziesiąt nowych członków, sekcję CTF, sekcję projektów dev’owych, a także prężnie działający fanpejdż na facebooku. Do tej pory zorganizowaliśmy kilkadziesiąt spotkań w tematyce cyberbezpieczeństwa i braliśmy udział jako drużyna w wielu zawodach CTF. W planach mamy zapraszanie znanych prelegentów występujących na konferencjach związanych z cyberbezpieczeństwem, a także większą integrację z biznesem. Chcielibyśmy, aby nasze koło stanowiło trampolinę dla młodych adeptów pentestingu, tak, aby mogli znaleźć zatrudnienie w szeroko pojętej gałęzi bezpieczeństwa. Jeśli jesteś zainteresowany współpracą z naszym kołem, to zachęcamy do przejrzenia pozostałych treści na stronie oraz kontaktu.
      </div>
    </div>
    <div className="clearfix" />
  </div>
}

export default Management;