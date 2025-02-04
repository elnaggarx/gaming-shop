import React from 'react'
import "./categoriesStyles.css"
import pink from "../../assets/pink.png";
import categ from './categ';
import CategoryCard from './Category Card/CategoryCard';
const Categories = () => {
  return (
    <div className='categories'>
        <div className='flex-one'>
            <div>
                <div className='day'>
                    <img src={pink} alt="error" />
                    <p>Categories</p>
                </div>
                <h1>Browse By Category</h1>
            </div>
            <div className='flashes-arrows-container'>
                    <div className='left-arrow-container'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 5L4 12L11 19M4 12H20" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </div>
                
                    <div className='right-arrow-container'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.5 12H20M20 12L13 5M20 12L13 19" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
        </div>
        <div className='category-cards-container'>
            {categ.map((item)=>{
                return <CategoryCard icon={item.icon} name={item.name}></CategoryCard>
            })}
        </div>
    </div>
  )
}

export default Categories
