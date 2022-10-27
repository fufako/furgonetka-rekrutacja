import ShipmentTypes from "./ShipmentTypes"
const DomesticShipments = () => {
  return (
    <div className="domestic-shipments">
      <h2 className="domestic-shipments__title">
        Szeroki wybór przesyłek krajowych
      </h2>
      <ShipmentTypes />
    </div>
  )
}

export default DomesticShipments
