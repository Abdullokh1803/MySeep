import classes from "./contact.module.scss";

export default function ContactFormTextarea() {
  return (
    <textarea
      className={classes.textarea}
      placeholder="Введите ваше сообщение"
      rows={6}
    ></textarea>
  );
}
