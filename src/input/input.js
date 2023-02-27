import React, { useState } from 'react'

export const Input = (props) => {
const[valueInput,setValueInput]=useState('')
const[ivValidInput,setIsValidInput]=useState(false)

const onchangeHandler=(e)=>{
setValueInput(e.target.value)
setIsValidInput(true)
}
  return (
    <div>
        {props.element==='input' ?(
        <input className={`${props.className} ${ivValidInput ? 'success' : 'error'}`} type={props.type} value={valueInput} id={props.id} placeholder={props.placeholder} onChange={onchangeHandler}/>
        ) : (
        <textarea className={props.className} value={valueInput}  placeholder={props.placeholder}/>    
        )}
    </div>
  )
}
