
import React from 'react';
import './App.css'
import './css/header.css'
import axios from 'axios';
import { Routes, Route } from 'react-router-dom'
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
import json_data from './components/data.json'
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

export const userContext = React.createContext();
function App() {
  const [posts, setPosts] = useState([])
  const [jsonData, setJsonData] = useState([]);
  let [cartCount, setCartCount] = useState(0);
  let [wishCount, setWishCount] = useState(0);
  const [sortBy,setSortBy]=useState("");
  const [myAccount,setMyAccount]=useState({});
  const [isSigned,setIsSigned]=useState(false);
 

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
    if (obj[id - 1]['cart_count'] == 0) {
      obj[id - 1]['cart_count'] = 1;
      console.log(cartCount)
      setCartCount(cartCount + 1);
    } else {
      obj[id - 1]['cart_count'] += 1
    }

    if(isSigned){
      let data=JSON.parse(localStorage.getItem("myAccount"));
      let account_data=JSON.parse(localStorage.getItem("accounts"))
      let id= data.id
      account_data[id].data=obj;
      localStorage.setItem("accounts",JSON.stringify(account_data));
    }
    setPosts([...obj])
  }

  const addToWishList = (e) => {
    let id = e.target.name
    e.target.classList.toggle("red");
    e.target.classList.toggle("fa-solid");
    e.target.classList.toggle("fa-regular");
    let obj = posts;
    if (obj[id - 1]['wish'] == false) {
      obj[id - 1]['wish'] = true;
      setWishCount(wishCount + 1);
    } else {
      obj[id - 1]['wish'] = false;
      setWishCount(wishCount - 1);
    }
    if(isSigned){
      let data=JSON.parse(localStorage.getItem("myAccount"));
      let account_data=JSON.parse(localStorage.getItem("accounts"))
      let id= data.id
      account_data[id].data=obj;
      localStorage.setItem("accounts",JSON.stringify(account_data));
    }
    setPosts(obj);
  }

  
  const filterAll=(e)=>{
    console.log("filter button clicked");
    let data=jsonData;
    if(e.target.id){
      let id=e.target.id;
      if(id=="price"||id=="ratings"){
        if(sortBy==id){
          data=filterBySortOrder(data,2,id)
           console.log(data);
        }
        else{
          data=filterBySortOrder(data,1,id)
          console.log(data)
          console.log("1")
        }
      }
    }
    data=filterByBrands(data);
    for(let i=0;i<data.length;i++){
      console.log(data[i].brand);
    }
    data=filterBySearch(data);
    setPosts([...data]);
    console.log(data);
  }
  
  const filterBySearch =(data)=>{
    var val=document.getElementById("searchinput").value;
    let new_data=[];
    if(val!=""){
      val = val.toLowerCase();
      for(let i=0;i<data.length;i++){
        let text=data[i]['title'].toLowerCase();
        if(text.includes(val)){
         new_data=[...new_data,data[i]]
        }
      }
      return new_data;
    }else{
      return data;
    }
  }

  const filterBySortOrder=(data,key,id)=>{
      if(id=="price"){
        if(key==1){
          data.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
          console.log("price b-a");
        }
        else{
          data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
          console.log("price a-b")
        }
      }else{
        if(key==1){
          data.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
          console.log("ratings b-a");
        }
        else{
          data.sort((a, b) => parseFloat(a.rating) - parseFloat(b.rating));
          console.log("ratings a-b");
        }
      }
    return [...data]
  }

  const filterByBrands=(data)=>{
    const rating_checked_elements = document.getElementsByClassName("brand_check");
    let brand_checked_array = []
    for (let i = 0; i < rating_checked_elements.length; i++) {
        if (rating_checked_elements[i].checked == true) {
            brand_checked_array.push(rating_checked_elements[i].value);
        }
    }

    let new_data = []
    if(brand_checked_array.length!=0){
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
      setPosts(json_data);
      setJsonData(json_data);
  }, [])

  return (
    <userContext.Provider value={
      [posts, addToCart, jsonData, setPosts, load_rating,
       cartCount, setCartCount, addToWishList,setWishCount,wishCount,filterAll,setIsSigned,isSigned,myAccount,setMyAccount]}>
      <>
        <Header jsonData={jsonData} setPosts={setPosts} cartCount={cartCount} wishCount={wishCount} posts={posts} 
        filterAll={filterAll} isSigned={isSigned} setIsSigned={setIsSigned}/>
        <div className='main_page'>
          <Routes>
            <Route path="/" element={<Display />} >
              <Route path='/' element={<Home />} />
              <Route path="/phones" element={<Phones />} />
              <Route path="/laptops" element={<Laptops />} />
              <Route path="/groceries" element={<Groceries />} />
              <Route path="/fragnaces" element={<Fragrances />} />
              <Route path="/skincare" element={<SkinCare />} />
              <Route path="/homedecoration" element={<HomeDecoration />} />
            </Route>
            <Route path="/*" element={<NoRoute/>}/>
            <Route path="/product/:userId" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wish" element={<Wish />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/account" element={<Account />} >
                <Route path='/account/' element={<Details />} />
              <Route path='/account/orderHistory' element={<OrderHistory/>} />
              <Route path="/account/payment" element={<Payment />}/>
              <Route path="/account/wishlist" element={<WishList />}/>
            </Route>
            <Route path="/success" element={<Success/>}></Route>
          </Routes>
        </div>

      </>
    </userContext.Provider>
  )
}
export default App;
