import React from 'react'
import Category from "./Category/Category"
import Colors from "./Colors/Colors"
import Price from "./Price/Price"
import "./Sidebar.css"


const Sidebar = () => {
  return (
    <div>
      <section className="side-bar">
        <div className='logo-container'>
          <h1>LOGO</h1>
        </div>

        <Category />
        <Colors />
        <Price />
      </section>
    </div>
  )
}

export default Sidebar