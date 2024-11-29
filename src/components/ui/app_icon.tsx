import * as Icons from '~/src/core/assets/icons';

export enum AppIcons {
  balance = 'BalanceIcon',
  calendar = 'CalendarIcon',
  close = 'CloseIcon',
  clock = 'ClockIcon',
  down = 'DownIcon',
  dryer = 'DryerIcon',
  phone = 'PhoneIcon',
  economic = 'EconomicIcon',
  facebook = 'FacebookIcon',
  filePdf = 'FilePdfIcon',
  file = 'FileIcon',
  filter = 'FilterIcon',
  growth = 'GrowthIcon',
  heartActive = 'HeartActiveIcon',
  heartInActive = 'HeartInActveIcon',
  heartRed = 'HeartRedIcon',
  insta = 'InstIcon',
  iron = 'IronIcon',
  kitchen = 'KitchenIcon',
  ligth = 'LightIcon',
  linkedin = 'LinkedinIcon',
  loca = 'LocaIcon',
  machine = 'MachineIcon',
  mail = 'MailIcon',
  minus = 'MinusIcon',
  mountain = 'MountainIcon',
  play = "PlayIcon",
  plus = "PlusIcon",
  search = 'SearchIcon',
  share = 'ShareIcon',
  tableLamp = 'TableLampIcon',
  telegram = 'TelegramIcon',
  thermometr = 'ThermometrIcon',
  tv = 'TvIcon',
  twitter = "TwitterIcon",
  walkingOutline = 'WalkingOutlineIcon',
  whatsApp = 'WhatsAppIcon',
  wifi = 'WifiIcon',
  women = 'WomenIcon',
  logo = 'LogoIcon',
}

interface AppIconProps {
  icon: AppIcons;
  size?: number;
  color?: string;
}

const AppIcon: React.FC<AppIconProps> = ({ icon, size = 24, color='currentColor' }) => {
  const IconComponent = Icons[icon];

  if (!IconComponent) {
    console.error(`Icon "${icon}" not found`);
    return null;
  }

  return (
    <IconComponent
      width={size}
      height={size}
      style={{color}}
    />
  );
};

export default AppIcon;
