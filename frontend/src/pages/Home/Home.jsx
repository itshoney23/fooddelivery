import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/header/header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
// import TopBrands from '../../components/TopBrands/TopBrands'
 
const Home = () => {
  const[category,setCategory] = useState("All")

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      {/* <TopBrands/> */}
      <AppDownload/>
    </div>
  )
}

export default Home;
