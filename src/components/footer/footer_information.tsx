import classes from './footer.module.scss';
import AppIcon, { AppIcons } from '../ui/app_icon';

export default function FooterInformation() {
    return (
        <div className={`${classes.info} w400f22`}>
            <div className={classes.contact}>
                <div className={classes.item}>
                    <AppIcon icon={AppIcons.mail} size={40} />
                    <span>contact@company.com</span>
                </div>
                <div className={classes.item}>
                    <AppIcon icon={AppIcons.loca} size={30} />
                    <span>Город Ош, ул. Мичурин 28, 64002</span>
                </div>
                <div className={classes.item}>
                    <AppIcon icon={AppIcons.phone} size={30} />
                    <span>(0555) 555-666-777</span>
                </div>
                <div className={classes.social}>
                    <AppIcon icon={AppIcons.insta} size={40} />
                    <AppIcon icon={AppIcons.twitter} size={40} />
                    <AppIcon icon={AppIcons.linkedin} size={40} />
                    <AppIcon icon={AppIcons.facebook} size={40} />
                </div>
            </div>
        </div>
    );
}
