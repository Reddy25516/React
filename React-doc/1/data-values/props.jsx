
// note

'****************************************'

'way of passing props from one file to another file'

import Greet from './Greet';
function App() {
  return (
    <div>
      <Greet name="Reddy"/>
    </div>
  );
}
export default App;

__________________ 

'this is the way of receiving props from another file'
// using function 
import React from 'react'

function Greet(props){
  return <h1> hello {props.name}</h1>
}
export default Greet ;

// we get hello reddy as output
__________________

// using const function  

import React from 'react'

const Greet = (props) => {
  return (
    <div>Hello {props.name}</div>
    )
  }
  
  export default Greet;
  
  // we get hello reddy as output
  
  '******************************************'
  '******************************************'
  
  // way of passing multiple props 
  
  
  import Greet from './Greet';
  function App() {
    return (
      <div>
      <Greet name="Reddy" message="Welcome"/>
    </div>
  );
}
export default App;


__________________

import React from 'react'

const Greet = (props) => {
  return (
    <div> {props.message} {props.name} </div>
    )
  }
  
  export default Greet
  
  // Output
  'Welcome Reddy'
  
'props cant be chnaged by the child component'


'*************************************'

// destructuring inside the function params
// below way also works fine

function Banner({name,age}){
  return (
    <h1> {name} {age} </h1>
  )
}

'********************************'

// destructuring using a const variable 

// here we also used react.fragment so that we can give class name for the main element that is given 

function Banner(props){
  const {name,age}= props
  return (
      <React.Fragment class="main">
          <h1> {name} {age} </h1>
      </React.Fragment>
  )
}

'*******************************'


// These is the way to pass props 
// here we could able to change the props that we passed

import React, {useState} from "react";
import Greet from './Greet';
const App = () => {
  const [state,setState]=useState(0);
  console.log(state)
	return(
		<Greet state={state} setState={setState} />
	);
}
export default App;


__________________________

import React from 'react'

const Greet = (props) => {
  const updateState=()=>{
    props.setState(props.state+1)
  }
  return(
    <>
    <h1>FOrm component {props.state} </h1>
    <button onClick={updateState}>Updata state </button>
    </>
  )
}

export default Greet


'********************************************'



'********************************************'
'********************************************'
'********************************************'
'********************************************'
'********************************************'
'********************************************'
'********************************************'
'********************************************'

