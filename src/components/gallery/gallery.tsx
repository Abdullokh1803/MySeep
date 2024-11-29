import GalleryImages from "./gallery_images";
import classes from './gallery.module.scss'


export default function Gallery() {
    return (
        <div className={classes.gallery}>
            <GalleryImages />
        </div>
    );
};
