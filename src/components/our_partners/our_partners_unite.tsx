
import OurPartnersHover from './our_partners_hover';
import OurPartnersImage from './our_partners_image';
import classes from './our_partners.module.scss'


export default function OurPartnersUnite() {
    return (
        <div className={classes.unite}>
            <OurPartnersImage />
            <OurPartnersHover />
        </div>
    )
}