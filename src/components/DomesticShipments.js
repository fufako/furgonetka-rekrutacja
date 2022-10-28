import ShipmentTypes from "./ShipmentTypes"
const DomesticShipments = () => {
  return (
    <section className="domestic-shipments">
      <h2 className="domestic-shipments__title">
        Szeroki wybór <span>przesyłek krajowych</span>
      </h2>
      <ShipmentTypes />
    </section>
  )
}

export default DomesticShipments
