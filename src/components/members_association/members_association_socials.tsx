import AppIcon, { AppIcons } from "../ui/app_icon"


export default function MembersAssociationSocials () {

    return(
        <>
            <div className='flex justify-evenly'>
            <AppIcon icon={AppIcons.insta} size={32} />
            <AppIcon icon={AppIcons.telegram} size={32} />
            <AppIcon icon={AppIcons.whatsApp} size={32} />
            </div>
        </>
    )
}