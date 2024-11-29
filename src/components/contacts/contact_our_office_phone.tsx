import AppIcon, { AppIcons } from "../ui/app_icon"
import classes from './contact.module.scss'

export default function ContactOurOfficePhone() {
    return(
        <div className={classes.textWithIcon}>
            <AppIcon icon={AppIcons.phone} size={30} />
            <span>(0555) 555-666-777</span>
        </div>
    )
}