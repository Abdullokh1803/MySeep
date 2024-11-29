import classes from "./contact.module.scss";

export default function ContactFormPoliticks() {
  return (
    <p className={classes.politick}>
      Нажимая на кнопку, я подтверждаю, что я прочел(-ла) и принимаю{" "}
      <span>Условия оказания услуг</span> и{" "}
      <span>Политику конфиденциальности</span>
    </p>
  );
}
