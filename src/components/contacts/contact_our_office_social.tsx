import AppIcon, { AppIcons } from "../ui/app_icon"
import classes from './contact.module.scss'

export default function ContactOurOfficeSocial() {
    return(
        <div className={classes.social}>
            <AppIcon icon={AppIcons.insta} size={36}/>
            <AppIcon icon={AppIcons.twitter} size={36}/>
            <AppIcon icon={AppIcons.linkedin} size={36}/>
            <AppIcon icon={AppIcons.facebook} size={36}/>
        </div>
    )
}