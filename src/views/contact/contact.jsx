import './contact.css'

import map from '../../assets/map.png'

const Contact = () => {
  return <div className="contact">
    <div>
      <h1>Napisz do nas</h1>
      <div>
        <h3>aby dołączyć do Koła,</h3>
        <h3>aby nawiązać współpracę,</h3>
        <h3>aby nas lepiej poznać.</h3>
      </div>

      <div>
        <h3>mail: ping@ping.com</h3>
        <h3>FB: Ping PG</h3>
        <h3>tel: 123 345 789</h3>
      </div>
    </div>
    <hr className="contact__separator"></hr>

    <div>
      <h3>Tu jesteśmy!</h3>
      <img alt="map" src={map}/>
    </div>
  </div> 
}

export default Contact;