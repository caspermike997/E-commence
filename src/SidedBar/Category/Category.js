import React from 'react'
import "./Category.css"

const Category = () => {
  return (
    <div className='sidebar-title'>
      <h2>Category</h2>

      <div>

        <label  className="sidebar-label-container">
          <input type="radio" name='test' />
          <span className="checkmark"></span>All
        </label>

        <label  className="sidebar-label-container">
          <input type="radio" name='test' />
          <span className="checkmark"></span>Sneakers
        </label>

        <label  className="sidebar-label-container">
          <input type="radio" name='test' />
          <span className="checkmark"></span>Sandals
        </label>

        <label  className="sidebar-label-container">
          <input type="radio" name='test' />
          <span className="checkmark"></span>Slippers
        </label>

        <label className="sidebar-label-container">
          <input type="radio" name='test' />
          <span className="checkmark"></span>Hills
        </label>

      </div>
    </div>
  )
}

export default Category