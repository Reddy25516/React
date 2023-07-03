import React, { useEffect } from 'react'
import '../../css/account.css'
import { useContext } from 'react';
import { userContext } from '../../App';
import { Link, useNavigate } from 'react-router-dom';
import Details from './Details';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import OrderHistory from './OrderHistory';
import Payment from './Payment';
import WishList from './WishList';
import { useState } from 'react';
import { createContext } from 'react';
import jsonData from '../../components/data.json';
export const accountContext = React.createContext();

const Account = () => {
  const navigate= useNavigate();
  const [posts, addToCart, jsonData, setPosts, load_rating,cartCount, setCartCount, addToWishList,setWishCount,wishCount,
    filterAll,setIsSigned,isSigned,myAccount,setMyAccount,setLocal]  = useContext(userContext);
    
    let data=myAccount;
    const [imageUrl,setImageUrl] =useState(data.image_src?data.image_src :"");
    
  let name1= data.firstName? data.firstName : "" + data.lastName?data.lastName: "";
  var [name,setName]=useState(name1);
  var [phone,setPhone]=useState(data.phone ? data.phone : "******");

  if(!isSigned){
    navigate('/signin');
  }
  
  let email= data.email? data.email : "*****";
  const navs = document.querySelectorAll('.nav-account');
  navs.forEach(ele => {
    ele.addEventListener('click', function handleClick(event) {
      for(let i=0;i<navs.length;i++){
        navs[i].classList.remove("active");
      }
      event.target.classList.add("active");  
    })
  });
  
  useEffect(()=>{
    let logout = document.getElementById("logout");
    logout.addEventListener('click', function(){
      setIsSigned(false);
      setPosts(jsonData);
      setCartCount(0);
      setWishCount(0);
      navigate('/signin')
      setMyAccount({})
    })
  })

  return (
    <div className='account d-flex'>
      <div className='acc-left border'>
        <div className='one'>
          <img src={imageUrl} ></img>
          <div>{name}</div>
          <div>{email}</div>
          <div>{phone}</div>
        </div>
        <div className='two'>
          <div> MY PROFILE</div>
          {/* 
          blob:http://localhost:3000/23c4c90d-1db3-4ec5-8d9c-3282e7a260bb 
          */}
          <div>
            <span ><i className="far fa-user"></i></span>
            <Link to="/account/">
              <span className='active nav-account'>Account Details</span>
            </Link>
          </div>
          <div ><span><i className="fa-solid fa-clock-rotate-left fa-lg"></i> </span>
          <Link to="orderHistory">
            <span className='nav-account'>Order History</span>
          </Link>
          </div>
          <div><span><i className="fa-regular fa-heart fa-lg"></i></span>
          <Link to="wishlist">
            <span className='nav-account'>Wishlist</span>
          </Link>
          </div>
          <div><span><i className="fa-solid fa-location-dot fa-lg"></i></span>
            <span>Manage Addresses</span>
          </div>
          <div ><span><i className="fa-regular fa-credit-card fa-lg"></i></span>
            <Link to="payment">
              <span className="nav-account">Payment Options</span>
            </Link>
          </div>
          <div >
            <span>
              <i  className="fa-solid fa-power-off fa-lg"></i>
            </span>
            <span id="logout">Logout</span>
          </div>
        </div>

      </div>
      <div className='acc-right ms-5 col-9'>
      <accountContext.Provider value={[imageUrl,setImageUrl,name,setName,phone,setPhone,myAccount,setMyAccount]}>
          <Routes>
            <Route path ="/" element={<Details />} /> 
            <Route path ="/orderHistory" element={<OrderHistory />} /> 
            <Route path ="/payment" element={<Payment />} /> 
            <Route path="/wishlist" element={<WishList />}/>
          </Routes>
      </accountContext.Provider>
      </div>
    </div>
  )
}

export default Account
