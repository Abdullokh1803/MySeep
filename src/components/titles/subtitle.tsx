import classes from '~/src/components/titles/titles.module.scss'

export default function Subtitle({children}){
    return(
        <h1 className={classes.subtitlee}>{children}</h1>
    )
}