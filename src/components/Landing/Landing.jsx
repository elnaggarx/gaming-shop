import React from 'react'
import Carousel from './Carousel/Carousel'
import "./landingStyles.css"
const Landing = () => {
  return (
    <div className='landing'>
          <aside className="category-list">
            <ul>
              <li className="category-w-arrow">
                <p>Woman's Fashion</p>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.95 11.636L8 6.68597L9.414 5.27197L15.778 11.636L9.414 18L8 16.586L12.95 11.636Z" fill="black"/>
                </svg>
              </li>
              <li className="category-w-arrow">
                <p>Man's Fashion </p>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.95 11.636L8 6.68597L9.414 5.27197L15.778 11.636L9.414 18L8 16.586L12.95 11.636Z" fill="black"/>
                </svg>
              </li>
              <li><p>Electronics </p></li>
              <li><p>Home & Lifestyle </p></li>
              <li><p>Medicine </p></li>
              <li><p>Sports & Outdoor </p></li>
              <li><p>Baby's & Toys </p></li>
              <li><p>Groceries & Pets </p></li>
              <li><p>Health & Beauty </p></li>
            </ul>
          </aside>
          <Carousel></Carousel>
    </div>
  )
}

export default Landing
