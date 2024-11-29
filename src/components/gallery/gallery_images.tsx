'use client'

import Image from 'next/image';
import classes from './gallery.module.scss'
import { IImage } from "~/src/core/assets/i-image";
import clsx from 'clsx';


const images = IImage.default

const GalleryImages = () => {
    return (
        <div className={classes.gallery}>
            <div className={classes.items}>
                <div className={classes.itemsImages}>
                    <Image
                        src={images}
                        alt={images}
                        width={300}
                        height={250}
                    className={classes.image}
                        />
                </div>
                <div className={classes.itemsImages}>
                    <Image
                        src={images}
                        alt={images}
                        width={300}
                        height={250}
                        className={classes.image}
                        />
                </div>
                <div className={ clsx(classes.itemsImages, classes.none)}>
                    <Image
                        src={images}
                        alt={images}
                        width={300}
                        height={250}
                        className={classes.image}
                    />
                </div>
            </div>
            <div className={classes.itemsBottom}>
                <div className={classes.itemsImages}>
                    <Image
                        src={images}
                        alt={images}
                        width={300}
                        height={250}
                        className={classes.image}
                    />
                </div>
                <div className={classes.itemsImages}>
                    <Image
                        src={images}
                        alt={images}
                        width={300}
                        height={250}
                    className={classes.image}
                        />
                </div>
                <div className={ clsx(classes.itemsImages, classes.none)}>
                    <Image
                        src={images}
                        alt={images}
                        width={300}
                        height={250}
                        className={classes.image} 
                    />
                </div>
            </div>
        </div>

    );
};

export default GalleryImages;