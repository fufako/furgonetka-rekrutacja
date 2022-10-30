import { useState } from "react"
import Form from "./Form"
import Success from "./Success"

const Contact = () => {
  const [isFormSend, setIsFormSend] = useState(false)

  return (
    <section className="contact">
      {isFormSend ? (
        <Success />
      ) : (
        <>
          <h2 className="contact__title">
            Zapytaj o <span>ofertę indywidualną</span>
          </h2>
          <p className="contact__description">
            Nadajesz dużo przesyłek kurierskich krajowych? Napisz do nas, a
            oddzwonimy, żeby porozmawiać o indywidualnej ofercie.
          </p>
          <Form setIsFormSend={setIsFormSend} />
        </>
      )}
    </section>
  )
}

export default Contact
