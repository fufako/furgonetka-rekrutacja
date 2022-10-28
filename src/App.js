import "./App.css"
import Menu from "./components/Menu"
import Header from "./components/Header"
import Promotion from "./components/Promotion"
import DomesticShipments from "./components/DomesticShipments"
import ShippingTools from "./components/ShippingTools"
import Delivery from "./components/Delivery"
const App = () => {
  return (
    <>
      <Menu />
      <Header />
      <Promotion />
      <DomesticShipments />
      <ShippingTools />
      <Delivery />
    </>
  )
}

export default App
