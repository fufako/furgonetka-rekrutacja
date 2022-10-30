import { useForm } from "react-hook-form"
const Form = () => {
  const methods = useForm()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods
  const onSubmit = (data) => {
    console.log(data)
  }
  const emptyMessage = "Pole nie może być puste"
  const phoneLengthMessage =
    "Niepoprawny numer telefonu (może zawierać od 9 do 14 cyfr)"

  const nameLettersMessage = "Imię może składać się tylko z liter"
  const nameLongMessage = "Podane imię jest za długie"
  const nameShortMessage = "Podane imię jest za krótkie"
  //Dodać do name validacje do np. "aaaaaa" - Niepoprawny ciąg znaków

  const lastNameLongMessage = "Podana wartość jest za długa"
  const lastNameShortMessage = "Podana wartość jest za krótka"

  const mailMessage = "Podany e-mail jest niepoprawny"

  const mailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const nameRegex = /^[a-zA-Z]/

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact__form">
      <label htmlFor="phoneNumber" className="contact__form-label">
        Twój number telefonu
      </label>
      <input
        name="phoneNumber"
        type={"number"}
        // {...(errors.phoneNumber && {className:"contact__form-input"})}
        className={`contact__form-input ${
          errors.phoneNumber ? "contact__form-input--error" : ""
        }`}
        {...register("phoneNumber", {
          required: { value: true, message: emptyMessage },
          minLength: { value: 9, message: phoneLengthMessage },
          maxLength: { value: 14, message: phoneLengthMessage },
        })}
      />
      {errors.phoneNumber && (
        <p className="contact__form-error-message">
          {errors.phoneNumber.message}
        </p>
      )}

      <label htmlFor="firstName" className="contact__form-label">
        Twoje imię
      </label>
      <input
        name={"firstName"}
        type={"text"}
        className="contact__form-input"
        {...register("firstName", {
          required: { value: true, message: emptyMessage },
          pattern: { value: nameRegex, message: nameLettersMessage },
          minLength: { value: 2, message: nameShortMessage },
          maxLength: { value: 45, message: nameLongMessage },
        })}
      />
      {errors.firstName && (
        <p className="contact__form-error-message">
          {errors.firstName.message}
        </p>
      )}

      <label htmlFor="lastName" className="contact__form-label">
        Twoje nazwisko / nazwa firmy
      </label>
      <input
        name={"lastName"}
        type={"text"}
        className="contact__form-input"
        {...register("lastName", {
          required: { value: true, message: emptyMessage },
          minLength: { value: 2, message: lastNameShortMessage },
          maxLength: { value: 120, message: lastNameLongMessage },
        })}
      />
      {errors.lastName && (
        <p className="contact__form-error-message">{errors.lastName.message}</p>
      )}

      <label htmlFor="mail" className="contact__form-label">
        Twój adres e-mail
      </label>
      <input
        name={"mail"}
        type={"text"}
        className="contact__form-input"
        {...register("mail", {
          required: { value: true, message: emptyMessage },
          pattern: {
            value: mailRegex,
            message: mailMessage,
          },
        })}
      />
      {errors.mail && (
        <p className="contact__form-error-message">{errors.mail.message}</p>
      )}

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
        <p className="contact__form-error-message">{errors.message.message}</p>
      )}
      <button type="submit" className="contact__form-button">
        WYŚLIJ SWÓJ KONTAKT
      </button>
    </form>
  )
}

export default Form

const Input = ({ name, config, className, type, register, errors }) => {
  const error = errors[name]?.message

  return (
    <>
      <input
        className={`${className} ${error ? `${className}--error` : ""}`}
        type={type}
        {...register(name, config)}
      />
      {error && <p className="contact__form-error-message">{error}</p>}
    </>
  )
}
