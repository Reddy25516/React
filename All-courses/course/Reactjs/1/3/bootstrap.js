
'Using boot strap'

//go to boot strap .com 
// documentation 
// copy the content in css 
'<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">'
// go to public/ index.html
"after title add css "



//copy the content in js from the documention (web page)
// go to publi /index.html
// in the body area paste it (from last after div before body)

/*
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>*/


'===================================================='

'with bootstrap we can add css and js style to our code '

import React from 'react'


class App extends React.Component{

  render(){

    const names= [
      {name :"reddy", age:22 , height : 4.8},
      {name :"teju", age:20 , height : 5.4},

    ]
    const items = names.map((item,index) => {
      return <li class ="list-item" key={index}>  
      {/* here class= "list-item " this is from the bootstrap we are accesing through teh link we have given 
       */}
        Name :{item.name} , age :{item.age}, height: {item.height}
        <button class ="btn btn-sm btn-success">Edit</button>  |   
        {/* we also had this type to edit the color of the button 
        here we have success with color - blue 
        danger with color red 
         */}
        <button  class ="btn btn-sm btn-danger">delete</button>
        </li>
    });
    return(
      <div className="App">
      <h1>Students list </h1>

      <ul class="list">
      {items}
      </ul>
      </div>
    )

  }
}
export default App;


'================================================================'

"React bootstrap "
"npm install react-bootstrap bootstrap"


/*
pS C:\Users\DELL\OneDrive\vs_code\courses\react js\newapp>

up to date, audited 1437 packages in 3s

192 packages are looking for funding
  run `npm fund` for details

6 high severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
*/

// copy the link and paste it in app.js (main file)

import 'bootstrap/dist/css/bootstrap.min.css';

// this is used to get the bootstrap buttons
import Button from 'react-bootstrap/Button';

'-----------'
' go to react -bootstrap/components/ navbar'

<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

/*
when ever we add a new component then
add a 
import Navbar from 'react-bootstrap/Navbar'
import link like this 

*/

// after this we will get  an error nav not defined we need to import it 


'==============================================================='



import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Navbar from 'react-bootstrap/Navbar'
import FormControl from 'react-bootstrap/FormControl'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import  Container  from 'react-bootstrap/Container';

/*
above is the way of importing different modules 
some modules found in webpage

inner modules we need to import manually
like the last 4 
*/

class App extends React.Component{

  render(){
    return(
      <div className="App">
  
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


      <div>
<Breadcrumb>
  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
    Library
  </Breadcrumb.Item>
  <Breadcrumb.Item active>Data</Breadcrumb.Item>
</Breadcrumb>

      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
      <Button variant="link">Link</Button>
      </div>

      </div>
    )

  }
}
export default App;

/*
u can see the output what navbar  breadcum and button 
*/

'===================================================='

"routing"

"react native is used for mobile application "
"react dom is used for web applications"




import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Navbar from 'react-bootstrap/Navbar'
import FormControl from 'react-bootstrap/FormControl'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import  Container  from 'react-bootstrap/Container';


class App extends React.Component{

  render(){
    return(
      <div className="App">
  
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">About us</Nav.Link>
        <Nav.Link href="#link">Contact us</Nav.Link>
        <Nav.Link href="#link">Blog</Nav.Link>
        <Nav.Link href="#link">Profile</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


      <div>
<Breadcrumb>
  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
    Library
  </Breadcrumb.Item>
  <Breadcrumb.Item active>Data</Breadcrumb.Item>
</Breadcrumb>
      </div>
      </div>
    )
  }
}
export default App;

/* 
here we removed few things 
and changed the content u can see how it results in the page 
*/


'=================================================================='

"React -rounter DOM"

https://v5.reactrouter.com/web/guides/quick-start
// this is the link to download react router dom

'npm install react-router-dom'
//this cmd will let u install it 

'======================================'

"rounter link load componnent"




import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


// App.js
class App extends React.Component{

  render(){
    return(
      <div className="App">
        <h1> this is our Home component</h1>
      </div>
    )

  }
}
export default App;


//index.js
/*
here in the below we loaded Header from the header.jsx 
*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './header'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>  
    {/* we included Header here  */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// header.jsx

import React,{Component} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default class header extends Component{
    render(){
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">About us</Nav.Link>
                        <Nav.Link href="#link">Contact us</Nav.Link>
                        <Nav.Link href="#link">Blog</Nav.Link>
                        <Nav.Link href="#link">Profile</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

/*
this is our home component is an output 
*/


'======================================================'

import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
// when ever we got switch not found 

/*
So I uninstalled the version 6 of react-router-dom:

npm uninstall react-router-dom
And installed version 5.2.0 of react-router-dom:

npm install react-router-dom@5.2.0
*/

'============================================================='

// App.js


import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <h1> this is our Home component</h1>
      </div>
    )

  }
}
export default App;

'---------------------------'

// header.jsx


import React,{Component} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import App from './App'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import About from './components/about'
import Contact from './components/contact'
import Blog from './components/blog'
import Profile from './components/profile'




export default class header extends Component{
    render(){
        return (
            <Router>
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand ><Link to="/">Easy Learn</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link ><Link to="/about">About us</Link></Nav.Link>
                        <Nav.Link ><Link to="/contact">Contact us</Link></Nav.Link>
                        <Nav.Link ><Link to="/blog">Blog</Link></Nav.Link>
                        <Nav.Link ><Link to="/profile">Profile</Link></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
          {/* with these we are switching through the components 
          in the web page */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          {/* we have given path in the nav bar 
          and the content in the about.js 
          file
          similarly we given for all the components 
          whenever we click that component its
          data will be loaded automatically without refresh 
           */}
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <App />
            {/* calling app.js file */}
          </Route>
        </Switch>
            </Router>
        )
    }
}

'---------------'

// about component 
// similarly all other components are also declared 

import React,{Component} from 'react';

export default class about extends Component{
    render(){
        return(
            <div>
                <h1>this is  about component</h1>
            </div>
        )
    }
}

'================================================================================'