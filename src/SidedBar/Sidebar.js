import React from 'react'
import Category from "./Category/Category"
import Colors from "./Colors/Colors"
import Price from "./Price/Price"
import "./Sidebar.css"


const Sidebar = ({handleChange}) => {


  return (
    <div>
      <section className="side-bar">
        <div className='logo-container'>
          <h1>LOGO</h1>
        </div>

        <Category handleChange ={handleChange} />
        <Colors handleChange ={handleChange} />
        <Price handleChange ={handleChange} />
      </section>
    </div>
  )
}

export default Sidebar