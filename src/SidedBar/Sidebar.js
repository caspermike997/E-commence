import React from 'react'
import Category from "./Category/Category"
import Colors from "./Colors/Colors"
import Price from "./Price/Price"
import "./Sidebar.css"
import logo from "../img/logo.png"



const Sidebar = ({handleChange}) => {


  return (
    <div>
      <section className="side-bar">
        <div className='logo-container'>
          {/* <img src="src\img\logo.png" alt="Logo" /> */}
        </div>

        <Category handleChange ={handleChange} />
        <Price handleChange ={handleChange} />
        <Colors handleChange ={handleChange} />
        
      </section>
    </div>
  )
}

export default Sidebar