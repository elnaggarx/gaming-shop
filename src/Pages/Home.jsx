import React from 'react'
import Landing from "../components/Landing/Landing";
import Flashes from "../components/Flashes/Flashes";
import Categories from "../components/Categories/Categories";
import BestSelling from "../components/BestSelling/BestSelling";
import SaleBanner from "../components/SaleBanner/SaleBanner";
import OurProducts from "../components/OurProducts/OurProducts";
import NewArrival from "../components/NewArrival/NewArrival";
import Advantages from "../components/Advantages/Advantages";
const Home = () => {
  return (
    <div>
        <Landing></Landing>
        <Flashes></Flashes>
        <div className="divider-container">
          <hr className="divider"/>
        </div>
        <Categories></Categories>
        <div className="divider-container">
          <hr className="divider"/>
        </div>
        <BestSelling></BestSelling>
        <SaleBanner></SaleBanner>
        <OurProducts></OurProducts>
        <NewArrival></NewArrival>
        <Advantages></Advantages>
    </div>
  )
}

export default Home
