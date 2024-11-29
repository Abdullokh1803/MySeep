import AppIcon, { AppIcons } from '../ui/app_icon';
import Link from 'next/link';
import classes from './footer.module.scss';

export default function FooterNav() {
    return (
        <div className={`${classes. nav} w400f14`}>
            <div className={classes.logo}>
                <AppIcon icon={AppIcons.logo} size={115} />
            </div>
            <nav className={classes.navigation}>
                <div className={classes.column}>
                    <div className={classes.first}>
                        <div className={classes.item}>
                            <Link href="/">Главная</Link>
                        </div>
                        <div className={classes.item}>
                            <Link href="/about">О нас</Link>
                        </div>
                        <div className={classes.item}>
                            <Link href="/news">Новости</Link>
                            <div className={classes.links}>
                                <Link href="/events">Мероприятия</Link>
                                <Link href="/activities">События</Link>
                            </div>
                        </div>
                        <div className={classes.item}>
                            <Link href="/masters">Наши мастера</Link>
                        </div>
                    </div>

                    <div className={classes.second}>
                        <div className={classes.item}>
                            <Link href="/video-lessons">Видео уроки</Link>
                        </div>
                        <div className={classes.item}>
                            <Link href="/services">Услуги</Link>
                            <div className={classes.links}>
                                <Link href="/services/sewing">Швейные цеха</Link>
                                <Link href="/services/handmade">Рукоделие</Link>
                                <Link href="/services/design">Дизайнерские<br /> работы</Link>
                                <Link href="/services/guesthouses">Гостевые дома</Link>
                            </div>
                        </div>
                        <div className={classes.item}>
                            <Link href="/partners">Партнёры</Link>
                        </div>
                        <div className={classes.item}>
                            <Link href="/contacts">Контакты</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
