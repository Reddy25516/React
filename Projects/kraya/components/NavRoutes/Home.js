import React, { useEffect,useMemo } from 'react'
import { userContext } from '../../App';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { displayContext } from '../Display';
import {useSelector,useDispatch} from "react-redux";
import { setSearchData } from '../../action';
import { motion } from "framer-motion";
import Cards from './Cards';

function Home() {
  const values =useSelector(state=>state)
  const dispatch =useDispatch();
  

  function setSearch(){
    setSearchData(values.data)
  }
  let navData = values.navData
  
  const  [addToCart, load_rating, addToWishList,] = useContext(userContext);
  const [b,setB]= useContext(displayContext);

  setB(navData.length);
  useEffect(() => {
    load_rating();
  },);

  
  return (
    <>
     <Cards data={navData} addToWishList={addToWishList} addToCart={addToCart}/>
    </>
  )
}
export default Home

