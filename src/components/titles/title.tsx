import classes from '~/src/components/titles/titles.module.scss'

export default function Title({children}){
    return(
        <h1 className={classes.title}>{children}</h1>
    )
}