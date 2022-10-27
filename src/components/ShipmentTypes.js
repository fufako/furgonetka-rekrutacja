import StandardShipmentImg from "../images/standard.svg"
import PalletShipmentImg from "../images/palette.svg"
import CityShipmentImg from "../images/city.svg"
import UnusualShipmentImg from "../images/unusual.svg"

const STANDARD = {
  title: "Przesyłki standardowe",
  description:
    "Nadajesz przesyłki drobnicowe krajowe do różnych miast w Polsce? Wysyłaj koperty DOX (np. z dokumentami) i przesyłki kurierskie (nawet do 70 kg) – prywatnie i biznesowo za pomocą naszego serwisu. ",
  image: StandardShipmentImg,
}
const PALLET = {
  title: "Wysyłka palet",
  description:
    "Potrzebujesz przetransportować duże gabaryty lub ładunki złożone z wielu mniejszych elementów? Nadawaj przesyłki paletowe krajowe. W naszej ofercie znajdziesz wysyłkę europalet i półpalet euro, a także palet i półpalet przemysłowych.",
  image: PalletShipmentImg,
}
const CITY = {
  title: "Przesyłki miejskie",
  description:
    "Chcesz skorzystać z usługi dostawy paczki na terenie swojego miasta? Nadawaj przesyłki ekspresowe w kilkudziesięciu miejscowościach w Polsce z doręczeniem nawet w 40 minut. Współpracujemy z dwoma przewoźnikami miejskimi.",
  image: CityShipmentImg,
}
const UNUSUAL = {
  title: "Przesyłki nietypowe",
  description:
    "Masz do wysłania coś nietypowego (np. meble, części samochodowe, motor, sprzęt AGD)? Zlecaj przesyłki gabarytowe krajowe i korzystaj z usług firm transportowych z całej Polski za pośrednictwem platformy Furgonetka Giełda. ",
  image: UnusualShipmentImg,
}

const shipments = [STANDARD, PALLET, CITY, UNUSUAL]

const ShipmentTypes = () => {
  return (
    <>
      {shipments.map((shipment) => (
        <div className="domestic-shipments__shipment" key={shipment.title}>
          <div className="domestic-shipments__shipment-info-container">
            <h3 className="domestic-shipments__shipment-title">
              {shipment.title}
            </h3>
            <p className="domestic-shipments__shipment-description">
              {shipment.description}
            </p>
          </div>
          <img
            src={shipment.image}
            alt={shipment.title}
            className="domestic-shipments__shipment-image"
          />
        </div>
      ))}
    </>
  )
}

export default ShipmentTypes
