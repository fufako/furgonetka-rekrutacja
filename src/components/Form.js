import { useForm } from "react-hook-form"
const Form = ({ setIsFormSend }) => {
  const methods = useForm()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods
  const onSubmit = () => {
    setIsFormSend(true)
  }

  const mailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const nameRegex = /^[a-zA-Z]/

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="contact__form">
        <Input
          label="Twój number telefonu"
          name="phoneNumber"
          config={{
            required: { value: true, message: "Pole nie może być puste" },
            minLength: {
              value: 9,
              message:
                "Niepoprawny numer telefonu (może zawierać od 9 do 14 cyfr)",
            },
            maxLength: {
              value: 14,
              message:
                "Niepoprawny numer telefonu (może zawierać od 9 do 14 cyfr)",
            },
          }}
          methods={methods}
        />
        <Input
          label="Twoje imię"
          name="firstName"
          config={{
            required: { value: true, message: "Pole nie może być puste" },
            pattern: {
              value: nameRegex,
              message: "Imię może składać się tylko z liter",
            },
            minLength: { value: 2, message: "Podane imię jest za krótkie" },
            maxLength: { value: 45, message: "Podane imię jest za długie" },
          }}
          methods={methods}
        />
        <Input
          label="Twoje nazwisko / nazwa firmy"
          name="lastName"
          config={{
            required: { value: true, message: "Pole nie może być puste" },
            minLength: { value: 2, message: "Podana wartość jest za krótka" },
            maxLength: { value: 120, message: "Podana wartość jest za długa" },
          }}
          methods={methods}
        />
        <Input
          label="Twój adres e-mail"
          name="mail"
          config={{
            required: { value: true, message: "Pole nie może być puste" },
            pattern: {
              value: mailRegex,
              message: "Podany e-mail jest niepoprawny",
            },
          }}
          methods={methods}
        />

        <label htmlFor="message" className="contact__form-label">
          Wiadomość (opcjonalnie)
        </label>
        <textarea
          name={"message"}
          type={"text"}
          className="contact__form-textarea"
          {...register("message")}
        />
        {errors.message && (
          <p className="contact__form-error-message">
            {errors.message.message}
          </p>
        )}
        <button type="submit" className="contact__form-button">
          WYŚLIJ SWÓJ KONTAKT
        </button>
      </form>
    </>
  )
}

export default Form

const Input = ({ label, name, config, type, methods }) => {
  const {
    register,
    formState: { errors },
  } = methods
  const errorMessage = errors[name]?.message

  return (
    <>
      <label htmlFor={name} className="contact__form-label">
        {label}
      </label>
      <input
        {...register(name, config)}
        className={`contact__form-input ${
          errorMessage ? "contact__form-input--error" : ""
        }`}
        type={type}
      />
      {errorMessage && (
        <p className="contact__form-error-message">{errorMessage}</p>
      )}
    </>
  )
}
