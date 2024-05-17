import React from 'react'
import style from './item.module.css';

const JournalItem = () => {
    let date = new Intl.DateTimeFormat('ru-Ru').format(new Date())
  return (
    <div className={style.item}>
        <h2>Подготовка к обновлению курсов</h2>
        <div className={style.hstack}>
            <span>{date}</span>
            <p>Сегодня провёл весь день за...</p>
        </div>
    </div>
  )
}

export default JournalItem