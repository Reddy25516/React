
import React from 'react';

import './App.css'
import './css/header.css'
import { Routes, Route ,Navigate} from 'react-router-dom'

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Product from './components/Product';
import Cart from './components/Cart';
import './css/filters.css'

import Header from './components/Header';
import Display from './components/Display';
import Phones from './components/NavRoutes/Phones';
import Laptops from './components/NavRoutes/Laptops';
import Groceries from './components/NavRoutes/Groceries';
import Fragrances from './components/NavRoutes/Fragrances';
import Home from './components/NavRoutes/Home';
import SkinCare from './components/NavRoutes/SkinCare';
import HomeDecoration from './components/NavRoutes/HomeDecoration';
import Wish from './components/Wish';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Account from './components/Accounts/Account';
import Details from './components/Accounts/Details';
import OrderHistory from './components/Accounts/OrderHistory';
import Payment from './components/Accounts/Payment';
import WishList from './components/Accounts/WishList';
import NoRoute from './components/NavRoutes/NoRoute';
import Checkout from './components/Checkout';
import Success from './components/Success';

import {useDispatch,useSelector} from "react-redux";
import { changeData, toggleWish,changeCartCount,changeNavData } from './action';

export const userContext = React.createContext();
function App() {
   const dispatch =useDispatch();
   const values =useSelector(state=>state)
    // console.log(values);
   let posts = values.data
   let cartCount= values.cart.cartCount;
   let wishCount=values.cart.wishCount
   let myAccount= values.myAccount

  const load_rating = () => {
    let vars = document.getElementsByClassName('ratings');
    for (let i = 0; i < vars.length; i++) {
      var val = parseInt(vars[i].id)
      var nodeList = vars[i].childNodes
      for (let j = 0; j < nodeList.length; j++) {
        if (j < val) {
          nodeList[j].classList.add("red");
        }
      }
    }
  }


  const addToCart = (e) => {
    let id = e.target.name;
    let obj = posts;
    for(let i=0;i<obj.length;i++){
      if(obj[i].id===parseInt(id)){
        if (obj[i]['cart_count'] === 0) {
          obj[i]['cart_count'] = 1;
          dispatch(changeCartCount(cartCount+1))
        } else {
          obj[i]['cart_count'] += 1
        }
        dispatch(changeData([...obj]))
      }
    }
    console.log(obj);
  }
  
  const addToWishList = (e) => {
    let id = e.target.name
    e.target.classList.toggle("red");
    e.target.classList.toggle("fa-solid");
    e.target.classList.toggle("fa-regular");
    let obj = posts;
    for(let i=0;i<obj.length;i++){
      if(obj[i].id===parseInt(id)){
        if (obj[i]['wish'] === false) {
          obj[i]['wish'] = true;
          dispatch(toggleWish(wishCount+1))
        } else {
          obj[i]['wish'] = false;
          dispatch(toggleWish(wishCount-1))
        }
      }
    }
    dispatch(changeData([...obj]))
  }
  
  const filterAll=(e)=>{
    let data=values.data 
    let sortItems= document.querySelectorAll('.sortOrder');
    sortItems.forEach((item)=>{
      if(item.classList.contains('sort-item')){ 
        data=filterBySortOrder(data,item.id)
      }
    })
    data=filterByBrands(data); 
    data= filterBySearch(data)
    data=priceFilter(data)
    dispatch(changeNavData([...data]))
  }
  
  
  const priceFilter = (data) => {
    let minRangeValue= document.querySelector('.input-type-range-min').value;
    let maxRangeValue= document.querySelector('.input-type-range-max').value;
    let new_data = []
    for (let i = 0; i < data.length; i++) {
        if (data[i]['price'] >= minRangeValue && data[i]['price'] <= maxRangeValue) {
            new_data = [...new_data, data[i]]
        };
    }
    return [...new_data]
    // return [...data]
}
 
const filterBySearch =(data)=>{
  var val=document.getElementById("searchinput").value;
  let new_data=[];
  if(val!==""){
    val = val.toLowerCase();
    for(let i=0;i<data.length;i++){
      let text=data[i]['title'].toLowerCase();
      if(text.includes(val)){
        new_data=[...new_data,data[i]]
      }
    }
    return [...new_data]
  }else{
    return data
  }
}

  const filterBySortOrder=(data,sortOrder)=>{
      if(sortOrder==="price"){
          data.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      }else{
          data.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
      }
    return [...data]
  }

  const filterByBrands=(data)=>{
    const rating_checked_elements = document.getElementsByClassName("brand_check");
    let brand_checked_array = []
    for (let i = 0; i < rating_checked_elements.length; i++) {
        if (rating_checked_elements[i].checked === true) {
            brand_checked_array.push(rating_checked_elements[i].value);
        }
    }

    let new_data = []
    if(brand_checked_array.length!==0){
        for (let i = 0; i < data.length; i++) {
            let brand = data[i].brand.toLowerCase();
            if (brand_checked_array.includes(brand)) {
                new_data = [...new_data, data[i]];
            }
        }
    }else{
      new_data=[...data]
    }
    return [...new_data]
  }




  useEffect(() => {
      
  }, [])
  
  return (
    <userContext.Provider 
    value={[addToCart, load_rating, addToWishList,filterAll]}>
      <>
        <Header filterAll={filterAll} />
        
        <main className='main_page'>
          <Routes>
            <Route index element={<Navigate to="home"/>} />
            <Route path="" element={<Display />} >
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="phones" element={<Phones />} />
              <Route path="laptops" element={<Laptops />} />
              <Route path="groceries" element={<Groceries />} />
              <Route path="fragnaces" element={<Fragrances />} />
              <Route path="skincare" element={<SkinCare />} />
              <Route path="homedecoration" element={<HomeDecoration />} />
            </Route>
            <Route path="*" element={<NoRoute/>}/>
            <Route path="product/:userId" element={<Product />} />
            <Route path="cart" element={<Cart />} />
            <Route path="wish" element={<Wish />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="user" element={<Account />} >
              <Route index element={<Navigate to="details"/>} />
              <Route path="details" element={<Details/>} />
              <Route path='orderHistory' element={<OrderHistory/>} />
              <Route path="payment" element={<Payment />}/>
              <Route path="wishlist" element={<WishList />}/>
            </Route>
            <Route path="success" element={<Success/>}></Route>
          </Routes>
        </main>
      </>
    </userContext.Provider>
  )
}
export default App;


