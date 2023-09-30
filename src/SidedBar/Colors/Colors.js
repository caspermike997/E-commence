import React from 'react'
import "./Colors.css"
import Input from '../../componenets/Input'

const Colors = ({handleChange}) => {
  return (
    <div>
        <h2 className='sidebar-title color-title'>Colors</h2>

        <label className="sidebar-label-container">
        <input type="radio" onChange={handleChange} value="" name='test2' />
        <span className="checkmark"></span> All
      </label>


      <Input  
      handleChange={handleChange}
      value="black"
      name="test1"
      title="Black"
      color="black"
      />

    <Input  
      handleChange={handleChange}
      value="blue"
      name="test1"
      title="Blue"
      color="blue"
      />

<Input  
      handleChange={handleChange}
      value="red"
      name="test1"
      title="Red"
      color="red"
      />

<Input  
      handleChange={handleChange}
      value="green"
      name="test1"
      title="Green"
      color="green"
      />


      <label className="sidebar-label-container">
        <input 
        type="radio" 
        onChange={handleChange} 
        value="white" 
        name='test1' />
        <span 
        className="checkmark"
        style={{background:"white", border:"2px solid black"}}
        ></span> White
      </label>

    </div>
  )
}

export default Colors