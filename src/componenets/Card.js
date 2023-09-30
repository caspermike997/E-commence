import React from 'react'
import {AiFillStar} from "react-icons/ai"
import {BsFillBagCheckFill} from "react-icons/bs"

const Card = ({img, title, star, reviews, newPrice, prevPrice }) => {
  return (
    <section className="card">
        <img 
        src= {img}
        alt="Shoe"
        className='card-img' 
        />
        <div className="card-details">
          <h3 className='card-title'>{title}</h3>
        </div>
        <section className="card-reviews">
          <AiFillStar  className='rate-star'/> 
          <AiFillStar  className='rate-star'/> 
          <AiFillStar  className='rate-star'/> 
          <AiFillStar  className='rate-star'/> 
          <AiFillStar  className='rate-star'/>
          <span className="total-reviews">{reviews}</span>
        </section>

        <section className="card-price">
          <div className='price'>
            <del>{prevPrice}</del> {newPrice}
          </div>

          <div className="bag">
            <BsFillBagCheckFill  className="bag-icons" />
          </div>
        </section>
      </section>
  )
}

export default Card