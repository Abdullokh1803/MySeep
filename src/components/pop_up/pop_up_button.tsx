import Button from "../ui/button";
import classes from './pop_up.module.scss'

export default function PopUpButton() {
  return (
    <div className="flex items-center w700f22">
      <Button
        variant="default"
        size="medium"
        onClick={() => console.log("Подписка оформлена!")}
        className={classes.button}
      >
        Закрыть
      </Button>
    </div>
  )
}
