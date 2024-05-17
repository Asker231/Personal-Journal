import React from 'react'
import style from './createButton.module.css';
import Add from '../../assets/Add.svg'

function CreateButton() {
  return (
    <div className={style.CreateButton}>
        <img className={style.image} src={Add} alt="create post" />
        <p>Новое воспоминание</p>
    </div>
  )
}

export default CreateButton
