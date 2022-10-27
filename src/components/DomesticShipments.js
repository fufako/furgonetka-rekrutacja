import ShipmentTypes from "./ShipmentTypes"
const DomesticShipments = () => {
  return (
    <div className="domestic-shipments">
      <h2 className="domestic-shipments__title">
        Szeroki wybór <span>przesyłek krajowych</span>
      </h2>
      <ShipmentTypes />
    </div>
  )
}

export default DomesticShipments
