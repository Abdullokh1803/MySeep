import AppIcon, { AppIcons } from "../ui/app_icon"
import classes from './contact.module.scss'

export default function ContactOurOfficeEmail() {
    return(
        <div className={classes.textWithIcon}>
            <AppIcon icon={AppIcons.mail} size={30} />
            <span>conatact@company.com</span>
        </div>
    )
}