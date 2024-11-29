import Link from 'next/link';
import AppIcon, { AppIcons } from '../ui/app_icon';
import classes from './header.module.scss';
import colors from '~/src/app/[locale]/styles/variables.module.scss';

export default function HeaderTop() {
  return (
    <div className="flex items-start  mt-4 ">
      <AppIcon icon={AppIcons.logo} size={117} />
      <div className={`text-center self-start flex items-center justify-center gap-2 ${classes.phone}`}>
        <AppIcon size={32} icon={AppIcons.phone} color={colors.skyLightColor} />
        <Link
          className={`w400f22`}
          href=""
        >
          (0555) 555-666-777
        </Link>
      </div>
    </div>
  );
}
