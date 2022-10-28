import DeliveryImg from "../images/delivery/delivery.svg"
import CheckMark from "../images/delivery/check-mark.svg"
const INPOST = { name: "InPost", classNameSuffix: "inpost" }
const DHL = { name: "DHL", classNameSuffix: "dhl" }
const DPD = { name: "DPD", classNameSuffix: "dpd" }
const POCZTEX = { name: "Pocztex", classNameSuffix: "pocztex" }
const DELIGOO = { name: "DeliGoo", classNameSuffix: "deligoo" }
const XPRESS = { name: "Xpress Delivery", classNameSuffix: "xpress" }
const Delivery = () => {
  return (
    <section class="delivery">
      <h2 className="delivery__title">
        Dogodny <span>czas dostawy</span>
      </h2>
      <p className="delivery__description">
        Jeśli zależy Ci na czasie, możesz przyspieszyć transport zleconej
        paczki. Z Furgonetką nadasz najszybsze przesyłki krajowe. Wystarczy, że
        dobierzesz odpowiednią usługę dodatkową w zależności od przewoźnika:
      </p>
      <div className="delivery__options">
        <img src={DeliveryImg} alt="delivery" className="delivery__image" />
        <div className="delivery__options-container">
          <DeliveryOption text="Paczka w Weekend" couriers={[INPOST]} />
          <DeliveryOption
            text="Doręczenie przesyłki w sobotę "
            couriers={[DHL, INPOST, DPD]}
          />
          <DeliveryOption text="Doręczenie do danej godziny" couriers={[DPD]} />
          <DeliveryOption text="Doręczenie na drugi dzień" couriers={[DPD]} />
          <DeliveryOption
            text="Doręczenie we wskazany dzień"
            couriers={[POCZTEX]}
          />
          <DeliveryOption
            text="Przesyłka ekspresowa "
            couriers={[DELIGOO, XPRESS]}
          />
        </div>
      </div>
    </section>
  )
}

export default Delivery

const DeliveryOption = ({ text, couriers }) => {
  return (
    <div className="delivery__option">
      <img
        src={CheckMark}
        alt="check-mark"
        className="delivery__option-image"
      />
      <p className="delivery__option-text">{text}</p>
      <Courier couriers={couriers} />
    </div>
  )
}

const Courier = ({ couriers }) => {
  return (
    <>
      <div className="delivery__couriers-container">
        {couriers.map(({ name, classNameSuffix }) => (
          <p className={`delivery__courier-${classNameSuffix}`}>{name}</p>
        ))}
      </div>
    </>
  )
}
