import React from 'react'

const Input = ({handleChange, title, name, value, color}) => {
  return (
    <label  className="sidebar-label-container">
    <input type="radio" onChange={handleChange} name={name} value={value} />
    <span className="checkmark" style={{backgroundColor:color}}></span>
    {title}
    </label>
  )
}

export default Input