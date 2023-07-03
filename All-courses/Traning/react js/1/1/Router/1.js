"npx create-react-app react-router-demo "

"npm install react-router-dom@6"
<!-- // to install the react-router-dom package  -->

"localhost:3000  "
// this is the home page 

'localhost:3000/about '
// this is the about page 


'====================================================='

// for to use routes we should have files like this 

// index.js 
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
//it is necessary to work with Routes 
// make sure that it enclosed in braces 
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  {/* we here need to enclose this in the BrowserRouter  */}
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


'--------------------------------------------'

import {Routes,Route} from 'react-router-dom'
//  we need to import both this 
import './App.css';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
  <Routes>
    {/* we need to enclose this in the Routes  */}
    <Route  path ="/" element={<Home/>}/>
    {/* this is the way of providing the link and the switching bw the links 
*/}
    <Route  path ="/about" element={<About/>}/>
  </Routes>
  );
}

export default App;

/*
here in the output it is only displayed with 
home page content because the url gives only the home page 
if we change the url to /about then the about page content will be displayed 
*/

'--------------------------'

// About.js

import React from 'react'

const About = () => {
  return(
    <div>
      About page 
    </div>
  )
}

export default About

'--------------------'

// Home.js 



// rafc  
import React from 'react'

const Home = () => {
  return (
    <div>
      Home page 
    </div>
  )
}

export default Home


'----------------------'




  

'============================================================'

// here we are tyring to add the navbar that contains about and home page 


import {Routes,Route} from 'react-router-dom'
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
  <>
  <Navbar/>
  <Routes>
    <Route  path ="/" element={<Home/>}/>
    <Route  path ="/about" element={<About/>}/>
  </Routes>
  </>
  );
}

export default App;



'------------------------'

//rafc
import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
        <Link to='/'> Home</Link>
        <Link to="/about"> About</Link>
    </nav>
  )
}

export default Navbar

'here we will be having '
'home and about name'
'whenever we click on it it will navigate to the home and about page '

'here home and about takes side by side if the row gets completed then it enter the next row'

 '---------------'

 
// index.css

nav{
    background-color: aliceblue;
    padding : 16px 32px;
}

/*
here in the padding : 16px (down and up) 32px(left and right )
*/
  
nav a{
  margin-right: 16px;
  background-color: black;
  color: blanchedalmond;
}
    /*
her nav a indicates that the components present in the nav bar 
here margin-right will provide the margin of 16px on its right 

background-color here will take over the text (home about ) 
*/
'============================================================='

// Active links 
// here we are adding style to the current page 
// using nav a.active (it means the current page in the browser)

//rafc

// we changed Link to NavLink here
import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
        <NavLink to='/'> Home</NavLink>
        <NavLink to="/about"> About</NavLink>
    </nav>
  )
}

export default Navbar


'-------------'

// index.css 

nav a.active{
    text-decoration: none;
    font-weight: bold;
  }


'========================================================='


// using styles in the react code it self 

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
    </nav>
  )
}

export default Navbar

'here we can see that active path will be in '
' bold and the inactive path will be in underline '

'====================================='


"Placing an order "


// order .js 

import React from 'react'

const Order = () => {
  return (
    <div>
      order confirmed! 
    </div>
  )
}

export default Order

'-------------------------'


//App.js 

import {Routes,Route} from 'react-router-dom'
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Order from './components/Order';

function App() {
  return (
  <>
  <Navbar/>
  <Routes>
    <Route  path ="/" element={<Home/>}/>
    <Route  path ="/about" element={<About/>}/>
    <Route path="/order" element={<Order/>}/>
    {/* we are creating a path for the order.js */}
  </Routes>
  </>
  );
}
export default App;


'----------------------------'

// Home.js 


// rafc  
import React from 'react'
import {useNavigate} from 'react-router-dom';
const Home = () => {
  const navigate= useNavigate()
  return (
    <>  
    {/* here we are wrapping with fragment */}

    <div>Home page </div>
    <button onClick={()=>navigate('order')}>Place order </button>
    {/* 
    here whenever we click on the place order button 
    it will navigate to the Order page 
     */}
    </>
  )
}

export default Home


'======================================================================'

"Adding the back button to the site "

'whenever we click on the place order in the home button '
'it will navigate to the Order page'
'here we just want to go back to the Home page'

// Order.js 

import React from 'react'
import { useNavigate } from 'react-router-dom'

const Order = () => {
    const navigate= useNavigate()

  return (
    <>
    <div>  order confirmed! </div>
    <button onClick={() =>navigate(-1)}>Go back</button>
    </>
  )
}

export default Order


'==============================================================='

// going back all the way instead of the home page 

//Home.js 

'this will take all the way to back '

// rafc  
import React from 'react'
import {useNavigate} from 'react-router-dom';
const Home = () => {
  const navigate= useNavigate()
  return (
    <>
    <div>Home page </div>
    <button onClick={()=>navigate('order',{replace : true})}>Place order </button>
    </>
  )
}

export default Home


'------------------------'

// Order.js 

import React from 'react'
import { useNavigate } from 'react-router-dom'

const Order = () => {
    const navigate= useNavigate()

  return (
    <>
    <div>  order confirmed! </div>
    <button onClick={() =>navigate(-1)}>Go back</button>
    </>
  )
}

export default Order


'==================================================================='