import FollowToolImg from "../images/st-follow.svg"
import AddressToolImg from "../images/st-address-book.svg"
import TemplatesToolImg from "../images/st-templates.svg"
import LabelToolImg from "../images/st-label.svg"
import CourierToolImg from "../images/st-courier.svg"

const ShippingTools = () => {
  return (
    <div className="shipping-tools">
      <h2 className="shipping-tools__title"> Narzędzia do wysyłki</h2>
      <p className="shipping-tools__description">
        Na platformie Furgonetka.pl nie tylko nadasz tanie przesyłki kurierskie,
        ale także skorzystasz z bezpłatnych narzędzi, które pozwolą Ci pożegnać
        czasochłonne czynności. Wysyłkę ułatwią Ci m.in.:
      </p>
      <div className="shipping-tools__container-upper">
        <ShippingTool image={FollowToolImg} content="Śledzenie przesyłek" />
        <ShippingTool image={AddressToolImg} content="Książka adresowa" />
        <ShippingTool image={TemplatesToolImg} content="Szablony przesyłek" />
      </div>
      <div className="shipping-tools__container-lower">
        <ShippingTool image={LabelToolImg} content="Inne dane na etykiecie" />
        <ShippingTool
          image={CourierToolImg}
          content="Zamówienie paczki bez zlecania podjazdu kuriera"
        />
      </div>
    </div>
  )
}

export default ShippingTools

const ShippingTool = ({ image, content }) => {
  return (
    <div className="shipping-tools__tool">
      <img src={image} alt={content} className="shipping-tools__tool-image" />
      <p className="shipping-tools__tool-content">{content}</p>
    </div>
  )
}
