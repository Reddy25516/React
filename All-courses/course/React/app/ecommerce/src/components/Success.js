import React from 'react'
import img from '../images/success.PNG';
import '../css/checkout.css';

const Success = () => {

  let account_data=JSON.parse(localStorage.getItem("myAccount"));
  // let name= account_data[0].firstName+" "+ account_data[0].lastName
  let name ="User"
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




