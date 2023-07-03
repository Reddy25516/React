// Relative links 




import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <>
    <div>
        <input type="search"  placeholder='search products'/>
    </div>
    <nav>
        <Link to ="featured">Featured</Link>
        <Link to ="new"> New </Link>
    </nav>
    <Outlet/>
    </>
  )
}

export default Product


'these are relative links'
'when we click on the featured then the url changes to '
http://localhost:3000/products/featured

'and similarly for new '
'so we will get the site we required '



// absolute links 


import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import Profile from '../../reactapp/src/components/Profile'

const Product = () => {
  return (
    <>
    <div>
        <input type="search"  placeholder='search products'/>
    </div>
    <nav>
        <Link to ="/featured">Featured</Link>
        {/* here we can see that the 
        /featured for absolute link
        when ever we click on the featured then the url changes to 
        http://localhost:3000/featured
        
        we can see that difference between the absolute and relative url 
        
        */}
        <Link to ="/new"> New </Link>
    </nav>
    <Outlet/>
    </>
  )
}

export default Product


'===================================================================='

// Authentication and protected 

'here we are creating a profile page '
'it contains username and login '
'when we login then it dispalys'
'welcome user and logout button '

//steps :

"1.create a Profile.js "
"2.create a name(profile)  and the  name of path to profile in navabar.js "
'3.create a new Route and define the path name for it  in App.js '


// Profile.js 
import React from 'react'

const Profile = () => {
  return (
    <div>Profile page </div>
  )
}

export default Profile


'-----------------------'

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
    <nav className='primary-nav'>
        <NavLink style={navLinkSytle} to='/'> Home</NavLink>
        <NavLink style={navLinkSytle} to="/about"> About</NavLink>
        <NavLink style={navLinkSytle} to="/products"> Products</NavLink>
        <NavLink style={navLinkSytle} to="/profile">Profile</NavLink>
    </nav>
  )
}

export default Navbar


'---------------------'

// App.js 



import About from './components/About';
import Order from './components/Order';
import Nomatch from './components/Nomatch'
import Product from './components/Product'
import Featuredprod from './components/Featuredprod'
import Newprod from './components/Newprod'

import {Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Admin from './components/Admin';
import Profile from './components/Profile';

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

    
    <Route path="users" element={<Users/>}>
      <Route path=":userId" element={<UserDetails/>}/>
      <Route path="admin" element ={<Admin/>}/>
    </Route>
    <Route path="profile" element={<Profile/>}/>
    </Routes>
    
  </>
  );
}
export default App;


'here we displayed with a new profile page '
'that contains profile page (text)'

'====================================================================='


Steps: 
'1.create a Auth provider'
'2.wrap App content in the AuthProvider '
'create login.js and add the navigation '
'navbar.js create a login button this should show only when user not logged in '
'add Route in the app.js '
'change profile.js '



//App.js 


import About from './components/About';
import Order from './components/Order';
import Nomatch from './components/Nomatch'
import Product from './components/Product'
import Featuredprod from './components/Featuredprod'
import Newprod from './components/Newprod'

import {Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Admin from './components/Admin';
import Profile from './components/Profile';
import { AuthProvider } from './components/auth';
import Login from './components/Login';
import { RequireAuth } from './components/RequireAuth'; 

function App() {
  return (
    <AuthProvider>
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

    
    <Route path="users" element={<Users/>}>
      <Route path=":userId" element={<UserDetails/>}/>
      <Route path="admin" element ={<Admin/>}/>
    </Route>
    <Route path="profile" element={<RequireAuth><Profile/></RequireAuth>}/>
    <Route path="login" element={<Login/>}/>
    </Routes>
    
  </>
  </AuthProvider>
  );
}
export default App;


'---------------------'

// AUth.js 

import {useState, createContext, Children, useContext} from 'react'

const AuthContext = createContext(null)

export const AuthProvider =({children}) =>{
    const [user,setUser] = useState(null)

    const login =(user)=>{
        setUser(user)
    }
    const logout =()=>{
        setUser(null) 
    }
    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {Children}
        </AuthContext.Provider>
    )
}

export const useAuth =()=>{
    return useContext(AuthContext)
}


'---------------------------------------'

// Login.js 


import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './auth'

const Login = () => {
    const [user, setUser] =useState('')
    const auth =useAuth()
    const navigate =useNavigate()

    const handlelogin =()=>{
        auth.login(user)
        navigate('/')
    }
  return (
    <div>
      <label>
        Username :{''}
        <input type="text" onChange={(e)=>setUser(e.target.value)}/>
      </label>
    </div>
  )
}

export default Login



'--------------------------------'

// Navbar.js 


//rafc
import React from 'react'
import { useAuth } from './auth'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const navLinkSytle= ({isActive}) =>{
        return{
            fontWeight :isActive ? 'bold' : 'none',
            textDecoration : isActive ? 'none': 'underline',
        }
    }  
    const auth = useAuth()
  return (
    <nav className='primary-nav'>
        <NavLink style={navLinkSytle} to='/'> Home</NavLink>
        <NavLink style={navLinkSytle} to="/about"> About</NavLink>
        <NavLink style={navLinkSytle} to="/products"> Products</NavLink>
        <NavLink style={navLinkSytle} to="/profile">Profile</NavLink>
        {
          !auth.user && (<NavLink style={navLinkSytle} to="/login">Login</NavLink>)
        }
    </nav>
  )   
}

export default Navbar

'--------------------------------'

// profile.js 

import React from 'react'
import { useAuth } from './auth'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const auth= useAuth()
  const navigate =useNavigate()
  const handlelogout =()=>{
    auth.logout()
    navigate('/')
  }
  return (
    <div>
      Welcome {auth.user}
      <button onClick={handlelogout}>Logout</button>
    </div>
  )
}

export default Profile


'===================================================================='

