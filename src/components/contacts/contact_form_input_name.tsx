import TextField from "../ui/text_field";


export default function ContactFormInputName() {
  return (
    <>
      <TextField
        type="text"
        value={""}
        onChange={() => ""}
        placeholder="Введите имя"
        required={true}
      />
    </>
  );
}