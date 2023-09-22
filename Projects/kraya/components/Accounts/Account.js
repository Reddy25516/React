import React, { useEffect } from 'react'
import '../../css/account.css'
import { useContext } from 'react';
import { userContext } from '../../App';
import { Link, useNavigate,NavLink } from 'react-router-dom';
import Details from './Details';
import { Route } from 'react-router-dom';
import { Routes, Navigate } from 'react-router-dom';
import OrderHistory from './OrderHistory';
import Payment from './Payment';
import WishList from './WishList';
import { useState } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useLocation } from 'react-router-dom';
import userData from '../../data.json';
import {useDispatch,useSelector} from "react-redux";
import { changeData ,toggleWish,changeCartCount,changeMyAccount, changeNavData} from '../../action';

export const accountContext = React.createContext();

const Account = () => {
  const dispatch =useDispatch();
  const values =useSelector(state=>state)
  let myAccount= values.myAccount

  const navigate= useNavigate();
  console.log("we entered user while logging in ")
  if(!myAccount.email){
    navigate('/signin');
  }

  let data=myAccount;
  const [imageUrl,setImageUrl] =useState(data.image_src?data.image_src :"");
    
  let name1= data.firstName? data.firstName : "" + data.lastName?data.lastName: "";

  var [name,setName]=useState(name1);
  var [phone,setPhone]=useState(data.phone ? data.phone : "******");


  
  let email= data.email? data.email : "*****";

  useEffect(()=>{
    let logout = document.getElementById("logout");
    logout.addEventListener('click', function(){
      dispatch(changeMyAccount({}))
      dispatch(changeData([...userData]))
      dispatch(changeNavData([...userData]))
      dispatch(changeCartCount(0))
      dispatch(toggleWish(0))
      navigate('/signin')
    })
  })

  return (
    <>
    <div className='breadcrumbs'><BreadCrumbs /></div>
    <div className='account d-flex'>
      <div className='acc-left border'>
        <div className='one'>
          <img src={imageUrl} alt="image1"></img>
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
            <NavLink className={({isActive})=> isActive?"active" : "non-active"} to="details">
              Account Details
            </NavLink>
          </div>
          <div ><span><i className="fa-solid fa-clock-rotate-left fa-lg"></i> </span>
          <NavLink className={({isActive})=> isActive ? "active" : "non-active"} to="orderHistory">
            Order History
          </NavLink>
          </div>
          <div><span><i className="fa-regular fa-heart fa-lg"></i></span>
          <NavLink className={({isActive})=> isActive ? "active" : "non-active"} to="wishlist">
            <span >Wishlist</span>
          </NavLink>
          </div>
          <div><span><i className="fa-solid fa-location-dot fa-lg"></i></span>
            <span className='non-active'>Manage Addresses</span>
          </div>
          <div ><span><i className="fa-regular fa-credit-card fa-lg"></i></span>
            <NavLink className={({isActive})=> isActive ? "active" : "non-active"}  to="payment">
              Payment Options
            </NavLink>
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
      <accountContext.Provider value={[imageUrl,setImageUrl,name,setName,phone,setPhone]}>
          <Routes>
            <Route index element={<Navigate to="details" />} />
            <Route path="details" element={<Details />} /> 
            <Route path ="orderHistory" element={<OrderHistory />} /> 
            <Route path ="payment" element={<Payment />} /> 
            <Route path="wishlist" element={<WishList />}/>
          </Routes>
      </accountContext.Provider>
      </div>
    </div>
    </>
  )
}

export default Account


const BreadCrumbs=()=>{
  const location = useLocation();
  let location_items= location.pathname.split('/')
  location_items= location_items.filter((ele)=> {return ele!==""})
  console.log(location_items);
  return(
    <Breadcrumb className='breadcrumb'>
      {location_items.map((ele,index)=>{
          if(index===(location_items.length-1)){
            return(<Breadcrumb.Item active>{ele}</Breadcrumb.Item>)
          }else{
            return(<Breadcrumb.Item> <Link to={`/${ele}`}> {ele}</Link></Breadcrumb.Item>)
          }
      })}
    </Breadcrumb>
  )
}