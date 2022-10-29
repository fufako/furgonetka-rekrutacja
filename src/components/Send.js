import SendImage from "../images/send/client.svg"

const Send = () => (
  <section className="send">
    <img src={SendImage} alt="user-using-a-laptop" className="send__image" />
    <div className="send__right-container">
      <h2 className="send__title">
        Furgonetka – tu znajdziesz <span>najtańsze przesyłki krajowe</span>
      </h2>
      <p className="send__description">
        Skorzystaj z bezpłatnego formularza i zamów wysyłkę swojej paczki w
        niskiej cenie.{" "}
      </p>
      <button className="send__button">NADAJ PRZESYŁKĘ</button>
    </div>
  </section>
)

export default Send
