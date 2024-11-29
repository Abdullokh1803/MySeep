import classes from "./contact.module.scss";
import ContactTitleForm from "./contact_title_form";
import ContactTitleOurOffice from "./contact_title_our_office";
import ContactForm from "./contact_form";
import ContactOurOffice from "./contact_our_office";

export default function Contacts() {
  return (
      <div className={classes.contacts}>
        <div className={classes.sectionForm}>
          <ContactTitleForm />
          <ContactForm />
        </div>
        <div className={classes.sectionOurOffice}>
          <ContactTitleOurOffice />
          <ContactOurOffice />
        </div>
      </div>
  );
}
