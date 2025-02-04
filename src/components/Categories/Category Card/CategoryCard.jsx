import React from 'react'
const CategoryCard = (props) => {
  return (
    <div className='category-card'>
        <img src={props.icon} alt="error" />
        <p>{props.name}</p>
    </div>
  )
}

export default CategoryCard
