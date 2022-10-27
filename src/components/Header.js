import HeaderImage from "../images/header-image.svg"
const Header = () => {
  return (
    <div className="header">
      <div className="header__left-container">
        <p className="header__subtitle">FURGONETKA</p>
        <h1 className="header__title">
          {" "}
          <span>Przesyłki krajowe </span>z Furgonetką
        </h1>
        <p className="header__description">
          Nadawaj przesyłki krajowe o różnych gabarytach ze sprawdzonymi
          przewoźnikami – z dostawą pod drzwi, do punktów odbioru i automatów
          paczkowych.{" "}
        </p>
        <button className="header__button"> NADAJ PRZESYŁKĘ</button>
      </div>
      <img src={HeaderImage} alt="workers" className="header__image" />
    </div>
  )
}

export default Header
