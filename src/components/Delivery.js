import DeliveryImg from "../images/delivery.svg"
import CheckMark from "../images/check-mark.svg"
const INPOST = "inpost"
const DHL = "dhl"
const DPD = "dpd"
const POCZTEX = "pocztex"
const DELIGOO = "deligoo"
const XPRESS = "xpress delivery"
const Delivery = () => {
  return (
    <div class="delivery">
      <h2 className="delivery__title">
        {" "}
        Dogodny <span>czas dostawy</span>{" "}
      </h2>
      <p className="delivery__description">
        Jeśli zależy Ci na czasie, możesz przyspieszyć transport zleconej
        paczki. Z Furgonetką nadasz najszybsze przesyłki krajowe. Wystarczy, że
        dobierzesz odpowiednią usługę dodatkową w zależności od przewoźnika:
      </p>
      <div className="delivery__options">
        <img src={DeliveryImg} alt="delivery" className="delivery__image" />
        <div className="delivery__options-container">
          <DeliveryOption text="Paczka w Weekend" couriers={INPOST} />
          <DeliveryOption
            text="Doręczenie przesyłki w sobotę "
            couriers={[DHL, INPOST, DPD]}
          />
          <DeliveryOption text="Doręczenie do danej godziny" couriers={DPD} />
          <DeliveryOption text="Doręczenie na drugi dzień" couriers={DPD} />
          <DeliveryOption
            text="Doręczenie we wskazany dzień"
            couriers={POCZTEX}
          />
          <DeliveryOption
            text="Przesyłka ekspresowa "
            couriers={[DELIGOO, XPRESS]}
          />
        </div>
      </div>
    </div>
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
      <Courier />
    </div>
  )
}

const Courier = () => {
  return
}
