
"NO match Route"

'suppose when we dont had any such url exist then it is no match route'



// app.js 

import {Routes,Route} from 'react-router-dom'
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Order from './components/Order';
import Nomatch from './components/Nomatch'

function App() {
  return (
  <>
  <Navbar/>
  <Routes>
    <Route  path ="/" element={<Home/>}/>
    <Route  path ="/about" element={<About/>}/>
    <Route path="/order" element={<Order/>}/>
    <Route path="*" element={<Nomatch/>}/>
    {/* 
    * - default link 
    when there is no such link present then it will go to this link 
    and then display the content in it 
    example like 
    localhost:3000/users 
    localhost:3000/nodadagadf
     */}
  </Routes>
  </>
  );
}

export default App;


'--------------------'
// Nomatch.js 


//rafc
import React from 'react'

const Nomatch = () => {
  return (  
    <div>Page not found</div>
  )
}
export default Nomatch


'======================================'

// adding nested links or Routes 

import {Routes,Route} from 'react-router-dom'
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Order from './components/Order';
import Nomatch from './components/Nomatch'
import Product from './components/Product'

function App() {
  return (
  <>
  <Navbar/>
  <Routes>
    <Route  path ="/" element={<Home/>}/>
    <Route  path ="about" element={<About/>}/>
    <Route path="order" element={<Order/>}/>
    <Route path="*" element={<Nomatch/>}/>
    <Route path ="products" element={<Product/>}/>
    {/* 
    here we are declaring the 
    element path and name for the path 
     */}
  </Routes>
  </>
  );
}

export default App;


'-----------------'

// Navbar.js

//rafc
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const navLinkSytle= ({isActive}) =>{
        return{
            fontWeight :isActive ? 'bold' : 'none',
            textDecoration : isActive ? 'none': 'underline',
        }
    }
  return (
    <nav>
        <NavLink style={navLinkSytle} to='/'> Home</NavLink>
        <NavLink style={navLinkSytle} to="/about"> About</NavLink>
        <NavLink style={navLinkSytle} to="/products"> Products</NavLink>
        {/* this here is used to style and add a new component here  */}
    </nav>
  )
}

export default Navbar


'-------------------------------------'

// Products.js 


import React from 'react'

const Product = () => {
  return (
    <div>
        <input type="search"  placeholder='search products'/>
    </div>
    // in the product page we just added a search bar to search the products 
  )
}

export default Product

'================================='

// nested Routes 

// App.js 


import {Routes,Route} from 'react-router-dom'
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Order from './components/Order';
import Nomatch from './components/Nomatch'
import Product from './components/Product'
import Featuredprod from './components/Featuredprod'
import Newprod from './components/Newprod'

function App() {
  return (
  <>
  <Navbar/>
  <Routes>
    <Route  path ="/" element={<Home/>}/>
    <Route  path ="about" element={<About/>}/>
    <Route path="order" element={<Order/>}/>
    <Route path="*" element={<Nomatch/>}/>

    {/* this is how the adding of nested Routes in reactjs  */}
    <Route path ="products" element={<Product/>}>
      <Route  path="featured" element={<Featuredprod/>}/>
      <Route path ="new" element={<Newprod/>}/>
    </Route>
  </Routes>
  </>
  );
}
export default App;


'--------------------------------'

// Products.js 

import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <>
    <div>
        <input type="search"  placeholder='search products'/>
    </div>
    {/* adding two more routes in the product route  */}
    <nav>
        <Link to ="featured">Featured</Link>
        <Link to ="new"> New </Link>
    </nav>
    <Outlet/>
    {/* 
    outlet is used to render the child component  
    without outlet 
    we can't able to see the content of the featured and the new component
    still the url changes to that particualar link 
    */}
    </>
  )
}

export default Product

'-------------------------'

// Navbar.js 

import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const navLinkSytle= ({isActive}) =>{
        return{
            fontWeight :isActive ? 'bold' : 'none',
            textDecoration : isActive ? 'none': 'underline',
        }
    }
  return (
    <nav className='primary-nav'>
        <NavLink style={navLinkSytle} to='/'> Home</NavLink>
        <NavLink style={navLinkSytle} to="/about"> About</NavLink>
        <NavLink style={navLinkSytle} to="/products"> Products</NavLink>
    </nav>
  )
}

export default Navbar

'-----------------------------------'

// Newprod.js 

import React from 'react'

const Newprod = () => {
  return (
    <div>List of new products</div>
  )
}

export default Newprod


'----------------------------'

// Featuredprod.js 
'new component in the product Route'

import React from 'react'

const Featuredprod = () => {
  return (
    <div>List of featured products</div>
  )
}

export default Featuredprod


'---------------------------'

// index.css 


.primary-nav{
    background-color: aliceblue;
    padding : 16px 32px;
  }

'========================================================='
'========================================================= '
'here in the output we didnt get the either '
'New or featured in the component by default'
'to get one of the Router by default we use the Index '

return(

<Routes>
    <Route  path ="/" element={<Home/>}/>
    <Route  path ="about" element={<About/>}/>
    <Route path="order" element={<Order/>}/>
    <Route path="*" element={<Nomatch/>}/>
    <Route path ="products" element={<Product/>}>
      <Route  path="/" element={<Featuredprod/>}/>
      {/* this here wont work  */}
      <Route path ="new" element={<Newprod/>}/>
    </Route>
  </Routes>
)


// Index Route 

import {Routes,Route} from 'react-router-dom'
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Order from './components/Order';
import Nomatch from './components/Nomatch'
import Product from './components/Product'
import Featuredprod from './components/Featuredprod'
import Newprod from './components/Newprod'

function App() {
  return (
  <>
  <Navbar/>
  <Routes>
    <Route  path ="/" element={<Home/>}/> 
    <Route  path ="about" element={<About/>}/>
    <Route path="order" element={<Order/>}/>
    <Route path="*" element={<Nomatch/>}/>
    <Route path ="products" element={<Product/>}>
      <Route index element={<Featuredprod/>}/>
      {/* with this we will get the featured Route default when we
      go into the product Route 
       */}
      <Route  path="featured" element={<Featuredprod/>}/>
      <Route path ="new" element={<Newprod/>}/>
    </Route>
  </Routes>
  </>
  );
}
export default App;


'==============================================='