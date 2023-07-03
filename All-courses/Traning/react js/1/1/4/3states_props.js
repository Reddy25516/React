


// states in class component 

import React from "react";

class App extends React.Component{
  state={
    name: "reddy",
    age : 22,
    data :[3,2,2,21,3]
  } 
  render(){
    
    return(
      <div>
        <center>
          <h3>
            my name is {this.state.name} and my age is {this.state.age}
            and the array is {this.state.data}
          </h3>
        </center>
      </div>
    )
  }
}
export default App 

/*my name is reddy and my age is 22and the array is 322213
*/
'here the array way is different it just prints the number in it '

'=========================================='

import React from "react";

class App extends React.Component{
    // we can also name is differently not just the state its upto us 
    // but when we are try to change its values using setState it gives us an error 
  sta={
    name: "reddy",
    age : 22,
    data :[3,2,2,21,3]
  } 
  render(){
    
    return(
      <div>
        <center>
          <h3>
            my name is {this.sta.name} and 
          
          </h3>
        </center>
      </div>
    )
  }
}
export default App 


'==========================================================='


// props in class component 

// App.js  component ( this file is called a component in react js )
import React from "react";
import Test from './Test'

class App extends React.Component{
  sta={
    name: "reddy",
    age : 22,
    data :[3,2,2,21,3]
  } 
  render(){
    
    return(
      <div>
        <center>
        <Test name={this.sta.name} age={this.sta.age}/>
        </center>
      </div>
    )
  }
}
export default App 


'---------------------'

// Test.js(component)

import React from 'react';

class Test extends React.Component{
    render(){
        return(
            <div>
                <center>
                    <h2> Name is {this.props.name} and age is {this.props.age}</h2>
                </center>
            </div>
        )
    }
}
export default Test 

'================================'




// states in functional component 

import React,{useState} from 'react'
//  here we need to import useState 

const App = () => {
  const [name,setName]= useState("reddy");
//   here first parameter takes reddy 
// second parameter can be used to change the name 
  return (
    <div>
      <center>
        <h1>hello {name}</h1>
      </center>
    </div>
  )
}
export default App

'==================================================='
// declaring multiple variable  in func component 

import React,{useState} from 'react'

const App = () => {
  const [data,setName]= useState({
    name : "reddy",
    age: 22

  });
  return (
    <div>
      <center>
        <h1>hello {data.name} are you {data.age}</h1>
      </center>
    </div>
  )
}

export default App
'-------------------------------------'

// destructing the above varaibles 

import React,{useState} from 'react'

const App = () => {
  const [data,setName]= useState({
    name : "reddy",
    age: 22

  });
  const {name,age} =data ;
  // destructuring the variables 

  return (
    <div>
      <center>
        <h1>hello {name} are you {age}</h1>
      </center>
    </div>
  )
}

export default App

'============================='

// rafce 

import React from 'react'

const Test = () => {
  return (
    <div>
      
    </div>
  )
}

export default Test

'---------------'
//rfce 


import React from 'react'

function Test() {
  return (
    <div>
      
    </div>
  )
}

export default Test


'========================================='


// props - the method of sending data from one component to the other component

// props in functional component 

// App.js  

import React,{useState} from 'react'
import Test from './Test'
const App = () => {
  const [data,setName]= useState({
    name : "reddy",
    age: 27

  });
  const {name,age} =data ;
  return (
    <div>
      <center>
        <Test name={name} age={age}/> 
      </center>
    </div>
  )
}

export default App


'-------------'
// rface
// Test.js 


import React from 'react'

const Test = (props) => {
  return (
    <div>
      <center>
        <h2>name is {props.name} and age is {props.age}</h2>
      </center>
    </div>
  )
}

export default Test


'======================================================='

// props  in functional component 

//app.js 
import './App.css';
import React ,{Component} from 'react'
import Greet from './Components/Greet'

function App() {
  return (
    <div className="App">
      <Greet name='REDDY'/>
    </div>
  );
}
export default App;


'------------------'

import React from 'react'

function Greet(props){
    return <h1> hello {props.name}</h1>
}
export default Greet 

//we get an output Hello REDDY

'================================'