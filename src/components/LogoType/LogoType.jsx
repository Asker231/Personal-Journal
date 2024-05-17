import React from 'react'
import style from './logotype.module.css';
import Logo from '../../assets/Logo.svg'
const LogoType = () => {
  return (
    <div className={style.LogoType}>
        <img src={Logo} alt="logo" />   
    </div>
  )
}

export default LogoType