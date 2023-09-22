import React from 'react'
import { userContext} from '../../App';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { displayContext } from '../Display';
import {useDispatch,useSelector} from "react-redux";
import { setSearchData } from '../../action';
import Cards from './Cards';

function Phones() {
  const dispatch =useDispatch();
  const values =useSelector(state=>state)
  let navData= values.navData
  const  [addToCart, load_rating, addToWishList,filterAll] = useContext(userContext);
  const [b,setB]= useContext(displayContext);
  let newPost = navData.filter((post) => (post.category==="smartphones"));
  // setNavData(newPost)
  // dispatch(setSearchData(values.data.filter((post) => (post.category==="smartphones"))))
  
  setB(newPost.length);
  useEffect(() => {
      load_rating()
  }, [navData]);

  return (
    <>
    <Cards data={navData} addToWishList={addToWishList} addToCart={addToCart}/>
    </>
  )
}
export default Phones
