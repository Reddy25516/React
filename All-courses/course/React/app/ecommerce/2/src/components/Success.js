import React from 'react'
import img from '../images/success.PNG';
import '../css/checkout.css';
import { userContext} from '../App';
import { useContext } from 'react';

const Success = () => {

  const [posts, addToCart, jsonData, setPosts, load_rating,
    cartCount, setCartCount, addToWishList,setWishCount,wishCount,filterAll,setIsSigned,isSigned,myAccount,setMyAccount,setLocal] = useContext(userContext);


  let name= myAccount.firstName? myAccount.firstName :"user"
 
  return (
    <div className='success container col-5'>
      <div className='img1 d-flex'>
        <img src={img} ></img>
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




