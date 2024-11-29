import TextField from "../ui/text_field";
import { useState } from "react";
import AppIcon, { AppIcons } from "../ui/app_icon";
import classes from './subscription.module.scss'

export default function SubscriptionInput() {

    const [value, setValue] = useState("");


    const handleInputChange = (newValue: string) => {
        setValue(newValue);
    };
    return (
        <div className={`${classes.input} w400f20`}>
            <TextField
                type="text"
                value={value}
                placeholder="Введите вашу эл. почту"
                required={true}
                onChange={handleInputChange}
                prevIcon={<AppIcon icon={AppIcons.mail} size={32} />}
            />

        </div>
    )
}
