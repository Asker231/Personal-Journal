import React from 'react'
import style from './button.module.css'
import cn from 'classnames'
const Button = ({text}) => {
  return <button className={ cn(style["button"],style["active"])}>{text}</button>
}

export default Button