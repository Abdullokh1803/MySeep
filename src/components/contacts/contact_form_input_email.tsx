import TextField from "../ui/text_field";
import AppIcon, { AppIcons } from "../ui/app_icon";

export default function ContactFormInputEmail() {
  return (
    <>
      <TextField
          type="email"
          value={""}
          onChange={() => ""}
          placeholder="Введите эл. почту"
          required={true}
          prevIcon={<AppIcon icon={AppIcons.mail} size={32} />}
        />
    </>
  );
}
