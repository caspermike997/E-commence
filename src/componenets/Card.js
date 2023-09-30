import React from 'react'
import {AiFillStar} from "react-icons/ai"
import {BsFillBagCheckFill} from "react-icons/bs"

const Card = () => {
  return (
    <section className="card">
        <img 
        src="https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c25lYWtlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" 
        alt="Shoe"
        className='card-img' 
        />
        <div className="card-details">
          <h3 className='card-title'>Shoe</h3>
        </div>
        <section className="card-reviews">
          <AiFillStar  className='rate-star'/> 
          <AiFillStar  className='rate-star'/> 
          <AiFillStar  className='rate-star'/> 
          <AiFillStar  className='rate-star'/> 
          <AiFillStar  className='rate-star'/>
          <span className="total-reviews">5</span>
        </section>

        <section className="card-price">
          <div className='price'>
            <del>$200</del> $150
          </div>

          <div className="bag">
            <BsFillBagCheckFill  className="bag-icons" />
          </div>
        </section>
      </section>
  )
}

export default Card