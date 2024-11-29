import AppIcon, { AppIcons } from "../ui/app_icon"
import classes from './contact.module.scss'

export default function ContactOurOfficeLocation() {
    return(
        <div className={classes.textWithIcon}>
            <AppIcon icon={AppIcons.loca} size={30} />
            <span className="w-[359px]">Город Ош, ул. Мичурин 28, 64002</span>
        </div>
    )
}