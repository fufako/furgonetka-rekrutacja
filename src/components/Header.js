import HeaderImage from "../images/header-image.svg"
const Header = () => {
  return (
    <div className="header">
      <div className="header__left-container">
        <div className="header__subtitle">FURGONETKA</div>
        <h1 className="header__title">Przesyłki krajowe z furgonetką</h1>
        <div className="header__description">
          Nadawaj przesyłki krajowe o różnych gabarytach ze sprawdzonymi
          przewoźnikami – z dostawą pod drzwi, do punktów odbioru i automatów
          paczkowych.{" "}
        </div>
        <button className="header__button"> NADAJ PRZESYŁKĘ</button>
      </div>
      <img src={HeaderImage} alt="workers" />
    </div>
  )
}

export default Header
