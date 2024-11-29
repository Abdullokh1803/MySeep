import styles from './pop_up.module.scss';
import PopUpText from './pop_up_text';
import PopUpButton from './pop_up_button'

export default function PopUp() {
  return (
    <div className={`${styles.popUp} flex justify-center `}>
      <PopUpText/>
      <PopUpButton/>
    </div>
  )
}

