
import React from 'react';
import './App.css'
import './components/header.css'
import axios from 'axios';
import {Routes,Route} from 'react-router-dom'
import { Link } from 'react-router-dom';
import {  useEffect, useState } from 'react';
import Home from './components/Home';
import Phones from './components/Phones';
import Laptops from './components/Laptops';
import Fragrances from './components/Fragrances';
import Groceries from './components/Groceries';
import SkinCare from './components/SkinCare';
import HomeDecoration from './components/HomeDecoration';
import Product from './components/Product';
import Cart from './components/Cart';

export const userContext = React.createContext();
function App() {
    const [posts,setPosts] =useState([])
    const [cart,setCart] =useState([]);
    const [cartData,setCartData]=useState([]);

    const addCart=(e)=>{
      console.log(e.target.name);
      console.log("add to cart button clicked");
      let new_data=[...cart,e.target.name]
      setCart(new_data);
      console.log(new_data)
      console.log("the cart is",cart)
    }

    function loadCartData(){
        let new_cart= cart.map((val)=>parseInt(val));
        const count=(arr,ele)=> arr.filter(element => {
            return element === ele;
          }).length;
          
        let cart_data=posts.filter(myfunction);
        function myfunction(data){
            if(new_cart.includes(data.id)){
                let cou= count(new_cart,data.id)
                data.cart_count=cou;
                return data;
            }
        }
        setCartData(cart_data);
    }

    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        .then(res =>{
            setPosts(res.data.products);
        })
        .catch(err =>{
            console.log(err)
        })
        loadCartData()
    },[cart,cartData])

    return (
      <userContext.Provider value={[posts,addCart,cartData]}>
      <>
        <div className='header1 row'>
          
          <div className='name1 col-3'>
            <span className='flipkart'>FLIPKART</span><br></br>
            <a className="explore" href="/plus">Explore <span className="plus">Plus</span></a>
          </div>

          <div className="search1 col-6">
            <input className="input1" type="text" placeholder='search for products brands and more'></input>
            <button className="search-icon" type="submit">
              <svg width="20" height="20" viewBox="0 0 17 18" xmlns="http://www.w3.org/2000/svg"><g fill="#2874F1" fillRule="evenodd"><path className="_34RNph" d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"></path><path className="_34RNph" d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"></path></g></svg>
            </button>
          </div>
            <div className='cart-icon float-right col-2'>
              <Link to='/cart' >
                <i className="fa-sharp fa-solid fa-cart-shopping cart-icon"></i>
              </Link>
            </div>
        </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
              <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav mr-auto">
                  <li className="nav-item"> <Link className='nav-link' to='/' >Home</Link></li>
                  <li className="nav-item"> <Link className='nav-link' to='/smartphones' > Smart Phones </Link></li>
                  <li className="nav-item"><Link className='nav-link' to='/laptops' > Laptops </Link></li>
                  <li className="nav-item"><Link className='nav-link' to='/groceries' > Groceries </Link></li>
                  <li className="nav-item"><Link className='nav-link' to='/fragnaces' > Fragnaces </Link></li>
                  <li className="nav-item"><Link className='nav-link' to='/skincare' > Skin Care </Link></li>
                  <li className="nav-item"><Link className='nav-link' to='/homedecoration' >Home Decoration </Link></li>
                </ul>
              </div>
            </div>
        </nav>
    
          <Routes>
            <Route  path ="/" element={<Home/>}/> 
            <Route  path ="/smartphones" element={<Phones/>}/>
            <Route path="/laptops" element={<Laptops/>} />
            <Route path="/groceries" element={<Groceries/>} />
            <Route path="/fragnaces" element={<Fragrances/>} />
            <Route path="/skincare" element={<SkinCare/>} />
            <Route path="/homedecoration" element={<HomeDecoration/>} />
            <Route path="/product/:userId" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          </>
    </userContext.Provider>
    )
}
export default App;
