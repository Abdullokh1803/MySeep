import classes from './footer.module.scss';

export default function FooterBottom() {
    return (
        <div className={`${classes.bottomInfo} w300f14`}>
            <p>© 2000 - 2024 компания Новатор.</p>
            <p>Все права защищены. Политика конфиденциальности.</p>
        </div>
    );
}