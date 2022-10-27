import FurgonetkaLogo from "../images/logo.svg"
const Menu = () => {
  return (
    <>
      <div className="menu">
        <div className="menu__container">
          <img
            src={FurgonetkaLogo}
            alt="furgonetka-logo"
            className="menu__logo"
          />
        </div>
      </div>
    </>
  )
}

export default Menu
