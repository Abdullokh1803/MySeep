import classes from "./contact.module.scss";
import ContactFormPoliticks from "./contact_form_politicks";
import ContactFormTextarea from "./contact_form_textarea";
import Button from "./../ui/button";
import ContactFormInputName from "./contact_form_input_name";
import ContactFormInputEmail from "./contact_form_input_email";

export default function ContactForm() {
  return (
    <form className={classes.form}>
      <div className={classes.inp}>
        <ContactFormInputName />
        <ContactFormInputEmail />
        <ContactFormTextarea />
      </div>
      <ContactFormPoliticks />
      <div className={classes.btns}>
        <Button className={classes.button}>Отправить сообщение</Button>
        <Button className={classes.button} variant="outline">
          Обратный звонок
        </Button>
      </div>
    </form>
  );
}
