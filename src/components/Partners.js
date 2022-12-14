import DhlLogo from "../images/partners/DHL.svg"
import FedExLogo from "../images/partners/FedEx.svg"
import GlsLogo from "../images/partners/GLS.svg"
import PocztexLogo from "../images/partners/Pocztex.svg"
import OrlenLogo from "../images/partners/Orlen.svg"
import DeligooLogo from "../images/partners/Deligoo.svg"

import DpdLogo from "../images/partners/DPD.svg"
import UpsLogo from "../images/partners/UPS.svg"
import InPostLogo from "../images/partners/InPost.svg"
import MeestLogo from "../images/partners/MEEST.svg"
import AmbroExpressLogo from "../images/partners/AmbroExpress.svg"
import XpressDeliveryLogo from "../images/partners/XpressDelivery.svg"
import PallexLogo from "../images/partners/Pallex.svg"

const partners = [
  DhlLogo,
  FedExLogo,
  GlsLogo,
  PocztexLogo,
  OrlenLogo,
  DeligooLogo,
  DpdLogo,
  UpsLogo,
  InPostLogo,
  MeestLogo,
  AmbroExpressLogo,
  XpressDeliveryLogo,
  PallexLogo,
]

const Partners = () => {
  return (
    <section className="partners">
      <h2 className="partners__title">
        Przesyłki krajowe – <span>DHL, FedEx, DPD, InPost i inni</span>
      </h2>
      <p className="partners__description">
        Za pośrednictwem Furgonetki nadasz przesyłki krajowe z DHL, FedEx, DPD,
        InPost, UPS, GLS, Pocztex, ORLEN Paczka, Ambro Express, DeliGoo, Xpress
        Delivery i PallEx. Porównuj oferty najtańszych kurierów krajowych i
        wybierz usługę, którą potrzebujesz.
      </p>
      <div className="partners__container">
        {partners.map((partner) => (
          <img src={partner} alt="partner-logo" key={partner}></img>
        ))}
      </div>
    </section>
  )
}

export default Partners
