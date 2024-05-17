
import style from './cardbutton.module.css';


function CardButton({ children }) {
  return (
    <div className={style.CardButton}>
        {children}
    </div>
  )
}

export default CardButton