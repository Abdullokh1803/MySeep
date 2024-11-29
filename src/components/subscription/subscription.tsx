import classes from "./subscription.module.scss";
import SubscriptionButton from "./subscription_button";
import SubscriptionInput from "./subscription_input";


export default function Subscription() {


    return (
        <div className={classes.subscription}>
            <div className={classes.inputSubscription}>
                <SubscriptionInput />
            </div>

            <div className={classes.buttonSubscription}>
                < SubscriptionButton/>
            </div>
        </div>
    );
}
