
// Router and router-dom in react js 
// Changing Url to switch bw the components

import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import About from "./Components/About";


//Home.js 

import React from 'react'

const Home = () => {
  return (
    <div>
        <center>
            <h3> Welcome to home page </h3>
        </center>
      
    </div>
  )
}

export default Home

'------------------------------------'
// About.js 

import React from 'react'

const About = () => {
  return (
    <div>
        <center>
            <h3>you are in about page</h3>
        </center>
      
    </div>
  )
}

export default About



'------------------------------------------------'

// Dashboard.js 

import React from 'react'

const Dashboard = () => {
  return (
    <div>
        <center>
            <h3>Welcome to dashboard page</h3>
        </center>
      
    </div>
  )
}

export default Dashboard



'--------------------------------------------------'

//App.js 

const App= () =>{
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        {/* here when the url is at below 
        http://localhost:3000/
        home then Home page is loaded  */}
        <Route path='/dashboard' element={<Dashboard/>}/>
        {/* when the url is below 
        http://localhost:3000/dashboard
        then the dashboard content will be loaded  */}
        <Route path='/about' element={<About/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App 


// at first  output is home page content 
// here we need to change the url to get the content of the page 


'==============================================================='

// click ing on the component name to switch between the components 


// App.js 

import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import About from "./Components/About";


const App= () =>{
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* here we are providing the path to different elements  */}
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/about' element={<About/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App 


'------------------------------------'

// Home.js 


import React from 'react'
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <center>
            <h3> Welcome to home page </h3>
            <Link to="/dashboard">Dashboard</Link>{"   "}
            {/* this last brace will provide the space between the links  */}
            <Link to="/about">About</Link>
        </center>
      
    </div>
  )
}

export default Home

'--------------------------------------'

// About.js 

import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <center>
            <h3>you are in about page</h3>
            <Link to="/dashboard">Dashboard</Link><br/>
            <Link to ="/">Home page</Link>
        </center>
      
    </div>
  )
}

export default About

'---------------------'

// Dashboard.js 


import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
        <center>
            <h3>Welcome to dashboard page</h3>
            <Link to="/about">About</Link><br/>
             
            <Link to ="/">Home page</Link>
        </center>
      
    </div>
  )
}

export default Dashboard


'========================================================================='

// styling the file 


//index.css 


.link{
    text-decoration: none;
    margin: 5px;
    // here margin gives the space bw the two components 
    padding : 10px;
    // is the border or the box of the text written on all sides it increases its width 
    color:white;
    background-color: yellowgreen;
    font-family : serif;
  }


'----------------------'

// Home.js 

import React from 'react'
import {Link} from 'react-router-dom';
import './index.css'
const Home = () => {
  return (
    <div>
        <center>
            <h3> Welcome to home page </h3>
            <Link to="/dashboard" className='link'> Dashboard</Link>{" "}
            <Link to="/about" className='link'>About</Link>
        </center>
      
    </div>
  )
}

export default Home

'here we can see that this gets styled '

'============================================'
 <html>
<style>
    
.link{
  text-decoration:black;
  margin: 1px;
  font-size:20px;
  text-decoration-color: aqua;
  color: blue;
  // this gives the text color 
  font-size: medium;
  font-style: italic;
// above 

  padding : 1px;
  color:white;
  background-color: yellowgreen;
  font-family : serif;


  text-transform: uppercase; // 

  text-decoration-line: underline;
  // above 

  text-decoration-color: black;
  


  border-radius: 20px;
  //this provide a curve on the edges of the border 

}
</style>
</html>



'=============================================================='

// Page Not found creation 



import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Dashboard from "./Dashboard";
import Home from "./Home";
import About from "./About";
import Pagenotfound from "./Pagenotfound";


const App= () =>{
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<Pagenotfound/>}/>
        {/* here the path is * 
        it means default when 
        no above path is used this will implement 
         */}

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App 

'---------------------------'

// Page not found.js 

import React from 'react'

const Pagenotfound = () => {
  return (
    <div>
        <center>
            <h2>Page not found 404 Error</h2>
        </center>
      
    </div>
  )
}

export default Pagenotfound


'============================================================='


