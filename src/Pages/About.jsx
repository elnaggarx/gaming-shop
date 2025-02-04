import React from 'react'
import OurStory from '../components/OurStory/OurStory'
import Numbers from '../components/Numbers/Numbers'
import Team from '../components/Team/Team'
import Advantages from '../components/Advantages/Advantages'

const About = () => {
  return (
    <div>
        <p className='page-title'><span>Home /</span> About</p>
        <OurStory></OurStory>
        <Numbers></Numbers>
        <Team></Team>
        <Advantages></Advantages>
    </div>
  )
}

export default About
