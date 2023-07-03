
"styling the css in react "

import React from 'react'
import './Style.css'

function Sheet() {
  return (
    <div>
      <h1 className='primary'>Style sheet</h1>
    </div>
  )
}

export default Sheet

'--------------'

.primary{
    color :aqua;
}


'========================================='


import './App.css';
import React ,{Component} from 'react'
import Sheet from './Components/Sheet';


function App() {
  return (
    <div className="App">
      <Sheet primary={false}/>
      {/* here we set it to false  */}
    </div>
  );
}
export default App;

'----------'

import React from 'react'
import './Style.css'

function Sheet(props) {
    let className =props.primary ? "primary": ''
    //  so here class name takes nothing since primary is fasle 
    return (
    <div>
      <h1 className={className}>Style sheet</h1>
    </div>
  )
}

export default Sheet



'=================================================='

// Style.css

.primary{
    color :aqua;
}
.font-xl{
    font-size : 72px;
}

'-------'

function Sheet(props) {
    let className =props.primary ? "primary": ''
    return (
    <div>
      <h1 className={`${className} font-xl `}>Style sheet</h1>
    </div>
  )
}

export default Sheet

// we get output in aqua and in large text 


'==========================================='

// Inline styling 


import React from 'react'

const heading ={
    fontSize : '72px', // here it should be written in quotes 
    color : 'blue'
}
export default function Inline() {
  return (
    <div style={heading}>
      i am reddy
    </div>
  )
}

'here we get the text with color blue and size 72 px'

'==================================='

'style.css is a regualar style sheet'
'style.module.css is a module style sheet'


// these are the ways to import regualr and module css 

import './Style.css'
import styles from './Style.module.css'

'-----------'


import './App.css';
import React ,{Component} from 'react'
import './Components/Style.css'
import sty from './Components/Style.module.css'
// this is the way of getting module.css files 


function App() {
  return (
    <div className="App">
      <h1 className='error'>Error</h1>
      <h1 className={sty.success}>success</h1>
      {/*  this is the way of accessing the module styles  */}
    </div>
  );
}
export default App;

'-------------------'
// style.css


.error{
  color :red ;
}


'-----------------'
// Style.module.css

.success{
  color : yellow,
}

'====================================================================='

// what is the difference between both the styles 
// normal styles will be apply even to the child components 
// whereas modules styles only apply to that particular component 
//it will not apply to child components 



'*************************************************************************'


// inline styling 


import React from 'react'
import { userContext} from '../App';
import { useContext } from 'react';

const Home = (props) => {

    const mystyle={
        backgroundImage: 'url("https://images.pexels.com/photos/891252/pexels-photo-891252.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")',
        backgroundPosition: "center",
        backgroundOrigin: "content-box",
        backgroundRepeat: 'no-repeat',
        backgroundSize:' cover',
        minHeight: '100vh'
    }
    
    const [context,setContext,handleSubmit,handleChange,postData,formValues]= useContext(userContext);
    
    return (
      <body style={mystyle}>  
    <div class="box">
        <form onSubmit={handleSubmit}>
            <span class="text-center">Happy Journey</span>
            <div class="input-container">
                <input type="text" required="" name="source" onChange={handleChange} value={formValues.source}/>
                <label>Enter Source</label>
            </div>
            <div class="input-container">		
                <input type="mail" required="" name="destination" onChange={handleChange} value={formValues.destination}/>
                <label>Enter Destination</label>
            </div>
            <button type="sumbit" class="btn">Book Tikcets</button>
        </form>	
    </div>
      </body>
    )
  }
export default Home


'*********************************************************'

