import Image from "next/image"
import { IImage } from "~/src/core/assets/i-image"
import classes from './members_association.module.scss'

export default function MembersAssociationImage() {

    return (
        <>
            <div className={classes.image}>
                <Image src={IImage.cardImg} alt={IImage.cardImg} width={284} height={360} />
            </div>
        </>
    )
}
