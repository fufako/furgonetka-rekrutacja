import Form from "./Form"

const Contact = () => {
  return (
    <section className="contact">
      <h2 className="contact__title">
        Zapytaj o <span>ofertę indywidualną</span>{" "}
      </h2>
      <p className="contact__description">
        Nadajesz dużo przesyłek kurierskich krajowych? Napisz do nas,
        a oddzwonimy, żeby porozmawiać o indywidualnej ofercie.
      </p>
      <Form />
    </section>
  )
}

export default Contact
