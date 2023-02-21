import React from 'react'
import themeStyle from './theme.module.css'
export const ThemeToggle = ({onclick,check}) => {
  return (
    <div style={{direction:'rtl'}}>
        <label className={`${themeStyle['switch']}`}>
          <input type="checkbox" checked={check} onClick={onclick}/>
          <span className={`${themeStyle['slider']} ${themeStyle['round']}`}></span>
        </label>
    </div>
  )
}