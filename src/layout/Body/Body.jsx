import { useState } from 'react';
import Button from '../../components/Button/Button';
import style from './body.module.css';
import cn from 'classnames'
import arh from '../../assets/Archive.svg'
import CardButton from '../../components/CardButton/CardButton.jsx'


function Body() {
  const[focus,setFocus] = useState(false)
  const submitForm = (e)=>{
    e.preventDefault()
  }
  return (
    <div className={style.body}>
      <form className={style.form}  onSubmit={submitForm}>
      <div className={style.topHstack}>
        <input
        onFocus={()=>setFocus(focus => !focus)}
        name='title' 
        className={cn(
          style["title"],
          focus ?
          style["active"]
          :
          null
        )} 
        type="text" 
        placeholder='Введите заголовок....'/>
      <CardButton>
      <img className={style.arh} src={arh} alt="archive" />
      </CardButton>
      </div>  
        <Button text={"Сохранить"}/>
      </form>
    </div>
  )
}

export default Body


const Divider = () =>{
  return <div style={{width:"100%",height:"0.5px",backgroundColor:"#292929"}}></div>
}