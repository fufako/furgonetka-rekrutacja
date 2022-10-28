import "./App.css"
import Menu from "./components/Menu"
import Header from "./components/Header"
import Promotion from "./components/Promotion"
import DomesticShipments from "./components/DomesticShipments"
import ShippingTools from "./components/ShippingTools"
import Delivery from "./components/Delivery"
import Partners from "./components/Partners"
const App = () => {
  return (
    <>
      <Menu />
      <Header />
      <Promotion />
      <DomesticShipments />
      <ShippingTools />
      <Delivery />
      <Partners />
    </>
  )
}

export default App
