

// Dynamic Routes 

const Users = () => {
    return (
      <div>
        <h1>User 1</h1>
        <h2>User 2</h2>
        <h3> User 3</h3>
      </div>
    )
  }
  export default Users

// go to web and enter url as  https://localhost:3000/users


'===================================================================='

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
import Users from './components/Users';
import UserDetails from './components/UserDetails';

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
      <Route  path="featured" element={<Featuredprod/>}/>
      <Route path ="new" element={<Newprod/>}/>
    </Route>
    <Route path="users" element={<Users/>}></Route>
    <Route path="users/1" element={<UserDetails/>}/>
    <Route path="users/2" element={<UserDetails/>}/>
    <Route path="users/3" element={<UserDetails/>}/>
  </Routes>
  </>
  );
}
export default App;

// go to browser and enter   3000/user/1   user/2 or user/3 we get the same page at the output 
'in the above we are going to same page for 3 mutliple links '
'to reduce that code of lines we use '

'============================================'

'below works same as above'
'when we have the same pattern it works '
users/100
users/3
users/1000383
users/admin 
users/nam
'it even works for string'
'what if we have a component admin lets see in the below'

'it works for all these url'
// dynamic routes 

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
import Users from './components/Users';
import UserDetails from './components/UserDetails';

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
      <Route  path="featured" element={<Featuredprod/>}/>
      <Route path ="new" element={<Newprod/>}/>
    </Route>
    <Route path="users" element={<Users/>}></Route>
    {/*  this is a dynamic route */}
    <Route path="users/:userId" element={<UserDetails/>}/>
    </Routes>
  </>
  );
}
export default App;


'==============================================================='

// if we have any route matching the above pattern 
//then it will redirect to that route not th userDetaails route 

// here it will first match the matching route 
// if it is not found then it will match the dynamic route

// Admin.js 

'we created admin '
import React from 'react'

const admin = () => {
  return (
    <div> Admin User </div>
  )
}

export default admin


'----------------------------------------'


import {Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Admin from './components/Admin';

function App() {
  return (
  <>
  <Navbar/>
  <Routes>
    <Route  path ="/" element={<Home/>}/>
    
    <Route path="users" element={<Users/>}></Route>
    <Route path="users/:userId" element={<UserDetails/>}/>
    <Route path="users/admin" element ={<Admin/>}/>
    {/* 
    we given the users/admin 
    which follws the pattern users/:userId
    but it doesnt matter when we have such component it takes the component
    when we dont had such component it will go for the default 
     */}
    </Routes>
  </>
  );
}
export default App;

'=================================================='


// using nested Routes 

import {Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Admin from './components/Admin';

function App() {
  return (
  <>
  <Navbar/>
  <Routes>
    <Route  path ="/" element={<Home/>}/>
    
    <Route path="users" element={<Users/>}>
      <Route path=":userId" element={<UserDetails/>}/>
      <Route path="admin" element ={<Admin/>}/>
    </Route>
    </Routes>
  </>
  );
}
export default App;


'----------------------------------'

import React from 'react'
import { Outlet } from 'react-router-dom'
const Users = () => {
  return (
    <div>
      <h1>User 1</h1>
      <h2>User 2</h2>
      <h1> User 3</h1>
      <Outlet/>
    </div>
  )
}
export default Users

'without outlet we wont get the output for users/:userId'


'=============================================================='
'=============================================================='

//  Url params 
// here we are learning how to get the params of a dynamic url 

//UserDetails.js 


import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
  const params = useParams()
  const userId = params.userId
  return (
    // if we call using user/3 
    // then output is Details about user 3 
    <div>Details about user {userId} </div>
  )
}
export default UserDetails

'here we indirectly taking the user url value '


'==================================================='


//  search params 


import { Outlet,useSearchParams } from 'react-router-dom'

const Users = () => {
    const [searchParams,setSearchParams] = useSearchParams()
  return (
    <div>
      <h1>User 1</h1>
      <h2>User 2</h2>
      <h1> User 3</h1>
      <Outlet/>
      <div>
        <button onClick={()=> setSearchParams({filter:"active"})}>Active Users</button>
        <button onClick={()=> setSearchParams()}>Reset Filters</button>
      </div>
    </div>
  )
}
export default Users


'when ever we click the Active Users button then our url changes to '
http://localhost:3000/users?filter=active

'when ever we click on the reset users button then our url get back to its intial state '
http://localhost:3000/users


'==================================================='

// taking the url and working with it 

import { Outlet,useSearchParams } from 'react-router-dom'

const Users = () => {
    const [searchParams,setSearchParams] = useSearchParams()

    const showActiveUsers =searchParams.get('filter')==='active'
    // here if the search url is filer?active then it returns true else false 

  return (
    <div>
      <h1>User 1</h1>
      <h2>User 2</h2>
      <h1> User 3</h1>
      <Outlet/>
      <div>
        <button onClick={()=> setSearchParams({filter:"active"})}>Active Users</button>
        <button onClick={()=> setSearchParams()}>Reset Filters</button>
      </div>
      {/* when ever the showActiveUsers is true 
      then it displas showing active users 
      else it displays 
      showing all users 
       */}
      {showActiveUsers ? (<h2>Showing active Users</h2>)
            : (<h2>Showing all users </h2>)}
    </div>
  )
}
export default Users







