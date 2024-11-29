import ContactOurOfficeEmail from './contact_our_office_email';
import ContactOurOfficeLocation from './contact_our_office_location';
import ContactOurOfficePhone from './contact_our_office_phone';
import ContactOurOfficeSocial from './contact_our_office_social';
import classes from './contact.module.scss'

export default function ContactOurOffice() {

    return(
        <div className={classes.ourOffice}>
            <ContactOurOfficeEmail />
            <ContactOurOfficeLocation />
            <ContactOurOfficePhone />
            <ContactOurOfficeSocial />
        </div>
    )
}