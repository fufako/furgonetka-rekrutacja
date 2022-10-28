import FurgonetkaLogo from "../images/menu/logo.svg"
const Menu = () => {
  return (
    <>
      <section className="menu">
        <div className="menu__container">
          <img
            src={FurgonetkaLogo}
            alt="furgonetka-logo"
            className="menu__logo"
          />
        </div>
      </section>
    </>
  )
}

export default Menu
