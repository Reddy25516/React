import React, { useEffect, useState } from 'react'
import Home from './NavRoutes/Home';
import Phones from './NavRoutes/Phones';
import Laptops from './NavRoutes/Laptops';
import Fragrances from './NavRoutes/Fragrances';
import Groceries from './NavRoutes/Groceries';
import SkinCare from './NavRoutes/SkinCare';
import HomeDecoration from './NavRoutes/HomeDecoration';
import { Route,Routes } from 'react-router-dom';
import Filters from './Filters';
import { userContext} from '../App';
import { useContext } from 'react';
import '../css/display.css';
import SortOrder from './SortOrder';

export const displayContext = React.createContext();

const Display = () => {
  const [posts, addToCart, jsonData, setPosts, load_rating,
    cartCount, setCartCount, addToWishList,setWishCount,wishCount,filterAll]= useContext(userContext);
  const [b,setB]=useState(0);
  
  useEffect(()=>{
    // console.log("show values in display",showValues);
  },[]);
  

  return (
    <div className='display-page'>
      <displayContext.Provider value={[b,setB]}>
        <div>
             <SortOrder posts={posts} setPosts={setPosts} filterAll={filterAll} b={b} setB={setB} />
        </div>
        <div className='d-flex'>
          <div className='col-2 border filters'>
            <Filters posts={posts} setPosts={setPosts} filterAll={filterAll}/>
          </div>
          <Routes>
            <Route  path ="/" element={<Home/>} /> 
            <Route  path ="/phones" element={<Phones/>}/>
            <Route path="/laptops" element={<Laptops/>} />
            <Route path="/groceries" element={<Groceries/>} />
            <Route path="/fragnaces" element={<Fragrances/>} />
            <Route path="/skincare" element={<SkinCare/>} />
            <Route path="/homedecoration" element={<HomeDecoration/>} />
          </Routes>
        </div>
        </displayContext.Provider>
    </div>
  )
}

export default Display
