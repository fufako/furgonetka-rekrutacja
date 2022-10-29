import "./styles/dist/main.css"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Promotion from "./components/Promotion"
import DomesticShipments from "./components/DomesticShipments"
import ShippingTools from "./components/ShippingTools"
import Delivery from "./components/Delivery"
import Partners from "./components/Partners"

const App = () => (
  <>
    {/* TODO: change to navbar */}
    <Navbar />
    <Header />
    <Promotion />
    <DomesticShipments />
    <ShippingTools />
    <Delivery />
    <Partners />
  </>
)

export default App
