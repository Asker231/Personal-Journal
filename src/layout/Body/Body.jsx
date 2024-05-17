import { useState } from 'react';
import Button from '../../components/Button/Button';
import style from './body.module.css';
import cn from 'classnames'
import arh from '../../assets/Archive.svg'
import Calendar from '../../assets/Calendar.svg'
import Folder from '../../assets/Folder.svg'
import CardButton from '../../components/CardButton/CardButton.jsx'


function Body() {
  const[focusarea,setFocusArea] = useState(false)
  const[focus,setFocus] = useState(false)

  let date = Intl.DateTimeFormat('ru-RU').format(new Date())

  const FocuArea = ()=>{
    setFocusArea(focussrea => !focussrea)
  }

  const BlurArea = () =>{
    setFocusArea(focussrea=>!focussrea)
  }

  const submitForm = (e)=>{
    e.preventDefault()
    console.log(e);
  }
  return (
    <div className={style.body}>
      <form className={style.form}  onSubmit={submitForm}>
      <div className={style.topHstack}>
        <input
        onFocus={()=>setFocus(focus => !focus)}
        onBlur={()=>setFocus(focus=>!focus)}
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
       <div className={style.vstack}>
       <div className={style.date}>
          <div className={style.hstackOne}>
          <img src={Calendar} alt="Calendar"/>
          <span>Дата</span>
          </div>
          <span>{date}</span>
         </div>
        <Divider/>
         <div className={style.map}>
          <div className={style.hstackmap}>
          <img src={Folder} alt="Folder"/>
          <span>Метки</span>
          </div>
          <span>Спорт</span>
         </div>
         <Divider/>
        <textarea  
           onFocus={FocuArea}
           onBlur={BlurArea} 
           className={cn(style["textarea"], focusarea && style["textActive"])} 
           rows={25} 
           cols={30}/>
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