import Image from "next/image";
import { IImage } from "~/src/core/assets/i-image";
import classes from './our_partners.module.scss'

const images = IImage.google


export default function OurPartnersImage() {

    return (
        <div className={classes.image}>
            <Image src={images} alt={images} width={176} height={59} />
        </div>
    )
}