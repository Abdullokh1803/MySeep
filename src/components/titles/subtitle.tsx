import classes from '~/src/components/titles/titles.module.scss'

export default function Subtitle({children}:{ children: React.ReactNode }){
    return(
        <h1 className={classes.subtitlee}>{children}</h1>
    )
}