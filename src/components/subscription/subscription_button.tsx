import Button from "../ui/button";
import classes from './subscription.module.scss'

export default function SubscriptionButton() {
  return (
    <div className="flex items-center w700f22">
      <Button
        variant="default"
        size="medium"
        onClick={() => console.log("Подписка оформлена!")}
        className={classes.button}
      >
        Оформить подписку
      </Button>
    </div>
  )
}
