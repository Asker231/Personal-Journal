import React from 'react'
import style from './list.module.css';
import JournalItem from '../JournalItem/JournalItem';
import CardButton from '../CardButton/CardButton';

const JournalList = () => {
    let arr = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div className={style.list}>
        {
            arr.map((el)=>{
            return  <CardButton><JournalItem/></CardButton>
            })

        }
    </div>
  )
}

export default JournalList