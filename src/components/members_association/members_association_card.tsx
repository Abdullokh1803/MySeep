import MembersAssociationTitle from "./members_association_title"
import MembersAssociationImage from './members_association_image'
import classes from './members_association.module.scss'
import MembersAssociationSocials from "./members_association_socials"


export default function MembersAssociationCard() {

    return (
        <>
            <div className={classes.card}>
                <MembersAssociationImage />
                <MembersAssociationTitle />
                <MembersAssociationSocials />
            </div>
        </>
    )
}