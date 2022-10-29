import StandardShipmentImg from "../images/shipping-types/standard.svg"
import PalletShipmentImg from "../images/shipping-types/palette.svg"
import CityShipmentImg from "../images/shipping-types/city.svg"
import UnusualShipmentImg from "../images/shipping-types/unusual.svg"

const shipmentsTypes = [
  {
    title: "Przesyłki standardowe",
    description:
      "Nadajesz przesyłki drobnicowe krajowe do różnych miast w Polsce? Wysyłaj koperty DOX (np. z dokumentami) i przesyłki kurierskie (nawet do 70 kg) – prywatnie i biznesowo za pomocą naszego serwisu. ",
    image: StandardShipmentImg,
  },
  {
    title: "Wysyłka palet",
    description:
      "Potrzebujesz przetransportować duże gabaryty lub ładunki złożone z wielu mniejszych elementów? Nadawaj przesyłki paletowe krajowe. W naszej ofercie znajdziesz wysyłkę europalet i półpalet euro, a także palet i półpalet przemysłowych.",
    image: PalletShipmentImg,
  },
  {
    title: "Przesyłki miejskie",
    description:
      "Chcesz skorzystać z usługi dostawy paczki na terenie swojego miasta? Nadawaj przesyłki ekspresowe w kilkudziesięciu miejscowościach w Polsce z doręczeniem nawet w 40 minut. Współpracujemy z dwoma przewoźnikami miejskimi.",
    image: CityShipmentImg,
  },
  {
    title: "Przesyłki nietypowe",
    description:
      "Masz do wysłania coś nietypowego (np. meble, części samochodowe, motor, sprzęt AGD)? Zlecaj przesyłki gabarytowe krajowe i korzystaj z usług firm transportowych z całej Polski za pośrednictwem platformy Furgonetka Giełda. ",
    image: UnusualShipmentImg,
  },
]

const ShipmentTypes = () => {
  return (
    <>
      {shipmentsTypes.map(({ title, description, image }) => (
        <div className="domestic-shipments__shipment" key={title}>
          <div className="domestic-shipments__shipment-info-container">
            <h3 className="domestic-shipments__shipment-title">{title}</h3>
            <p className="domestic-shipments__shipment-description">
              {description}
            </p>
          </div>
          <img
            src={image}
            alt={title}
            className="domestic-shipments__shipment-image"
          />
        </div>
      ))}
    </>
  )
}

export default ShipmentTypes
