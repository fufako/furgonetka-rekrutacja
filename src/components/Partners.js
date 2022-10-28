import AmbroExpress from "../images/partners/AmbroExpress.svg"
import Deligoo from "../images/partners/Deligoo.svg"
import DHL from "../images/partners/DHL.svg"
import DPD from "../images/partners/DPD.svg"
import FedEx from "../images/partners/FedEx.svg"
import GLS from "../images/partners/GLS.svg"
import InPost from "../images/partners/InPost.svg"
import Meest from "../images/partners/MEEST.svg"
import Orlen from "../images/partners/Orlen.svg"
import Pallex from "../images/partners/Pallex.svg"
import Pocztex from "../images/partners/Pocztex.svg"
import Ups from "../images/partners/UPS.svg"
import XpressDelivery from "../images/partners/XpressDelivery.svg"

const Partners = () => {
  return (
    <div className="partners">
      <h2 className="partners__title">
        Przesyłki krajowe – <span>DHL, FedEx, DPD, InPost i inni</span>
      </h2>
      <p className="partners__description">
        Za pośrednictwem Furgonetki nadasz przesyłki krajowe z DHL, FedEx, DPD,
        InPost, UPS, GLS, Pocztex, ORLEN Paczka, Ambro Express, DeliGoo, Xpress
        Delivery i PallEx. Porównuj oferty najtańszych kurierów krajowych i
        wybierz usługę, którą potrzebujesz.
      </p>
      <div className="partners__container-main">
        <div className="partners__container-upper"></div>
        <div className="partners__container-lower"></div>
      </div>
    </div>
  )
}

export default Partners
