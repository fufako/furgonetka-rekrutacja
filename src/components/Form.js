import { useForm } from "react-hook-form"
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact__form">
      <label htmlFor="phoneNumber" className="contact__form-label">
        Twój number telefonu
      </label>
      <input
        name="phoneNumber"
        type={"number"}
        className="contact__form-input"
        {...register("phoneNumber", {
          required: { value: true, message: emptyMessage },
          min: { value: 9, message: phoneLengthMessage },
          max: { value: 14, message: "phoneLengthMessage" },
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
          pattern: { value: /^[a-zA-Z]/, message: nameLettersMessage },
          min: { value: 2, message: nameShortMessage },
          max: { value: 45, message: nameLongMessage },
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
          min: { value: 2, message: lastNameShortMessage },
          max: { value: 120, message: lastNameLongMessage },
        })}
      />
      {errors.lastName && (
        <p className="contact__form-error-message">{errors.lastName.message}</p>
      )}

      <label htmlFor="mail" className="contact__form-label">
        Twoje nazwisko / nazwa firmy
      </label>
      <input
        name={"mail"}
        type={"text"}
        className="contact__form-input"
        {...register("mail", {
          required: { value: true, message: emptyMessage },
        })}
      />
      {errors.mail && (
        <p className="contact__form-error-message">{errors.mail.message}</p>
      )}

      <label htmlFor="message" className="contact__form-label">
        Wiadomość (opcjonalnie)
      </label>
      <input
        name={"message"}
        type={"text"}
        className="contact__form-textarea"
        {...register("message")}
      />
      {errors.message && (
        <p className="contact__form-error-message">{errors.message.message}</p>
      )}
      <button type="submit" className="contact__form-button">
        Submit
      </button>
    </form>
  )
}

export default Form
