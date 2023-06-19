import React from 'react'
import img from '../images/success.PNG';
import '../css/checkout.css';
import { userContext} from '../App';
import { useContext } from 'react';
import {useDispatch,useSelector} from "react-redux";

const Success = () => {
  const values =useSelector(state=>state)
  let myAccount= values.myAccount

  const [addToCart, load_rating, addToWishList,filterAll]  
  =useContext(userContext);


  let name= myAccount.firstName? myAccount.firstName :"user"

 
  return (
    <div className='success container col-5'>
      <div className='img1 d-flex'>
        <img src={img} alt="imga1"></img>
      </div>
      <div className='two'>
        <p className='d-flex'> Thank You {name}</p>
        <p>Woot! Your order has been placed successfully</p>
        <p> We received your payment and wrapping yp your stuff for shipping</p>
      </div>
    </div>
  )
}

export default Success




