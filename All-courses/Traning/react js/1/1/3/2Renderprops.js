

// Render props  is used to share the functionality bw two different component 

// this is the program for click counter whenever we click on it the value increases in the below output 

import React, { Component } from 'react'

class ClickCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0,
      }  
    }
    incrementCount =()=>{
        this.setState(prevState =>{
            return {count : prevState.count + 1}
        })
    }
  render() {
    const {count} =this.state 
    return <button onClick={this.incrementCount}>Clicked {count} times</button>
  }
}

export default ClickCounter
'---------------------------'

// this is used to increase value on click 

'===================================================='

// same program using HoverCounter 
// when we hover over it the values increases 


import React, { Component } from 'react'

class HoverCounter extends Component {
  
    state = {
         count : 0,
      }  
    
    incrementCount =()=>{
        this.setState(prevState =>{
            return {count : prevState.count + 1}
        })
    }
  render() {
    
    return <button onMouseOver={this.incrementCount}>Clicked {this.state.count} times</button>
  }
}

export default HoverCounter


'---------------------------'

import React from "react";
import HoverCounter from "./HoverCounter";
function App(){
  return (
    <div>
      <center>
      <HoverCounter/>
      </center>
    </div>
  )
}

export default App 

'==========================================================='


// this is the way of called a props when it is a variable 

function App() {
  return (
    <div className="App">
      <User name="vishwas"/>
    </div>
  );
}
export default App;

'-----------'
import React, { Component } from 'react'

class User extends Component {
  render() {
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
}
export default User

'====================================='

// this is the way to access a prop as a function 

function App() {
  return (
    <div className="App">
      <User name={() => "vishwas"}/>
    </div>
  );
}
export default App;


'------------'

import React, { Component } from 'react'

class User extends Component {
  render() {
    return (
      <div>
        {this.props.name()}
        {/* here we passed name just like a function  */}
      </div>
    )
  }
}
export default User

'==============================================='


function App() {
  return (
    <div className="App">
      <User name={(isLoggedIn) => isLoggedIn ? "vishwas" : "Guest"}/>
    </div>
  );
}
export default App;

'-----------'

import React, { Component } from 'react'

class User extends Component {
  render() {
    return (
      <div>
        {this.props.name(false)}
      </div>
    )
  }
}

export default User

/*
here output is Guest 

whenever we provide input as true then it will Vishwas 
else Guest
*/


'=========================================================='

// render Props 
'the term render props is a technique for sharing code between the react components using the prop whose value is a function '


// combing both click counter and hover counter componentn in one single Counter 

// ClickCounter 



import React, { Component } from 'react'

class ClickCounter extends Component {
  
    
  render() {
    const {count,incrementCount}= this.props
    return <button onClick={incrementCount}>Clicked {count} times</button>
  }
}

export default ClickCounter


'---------------------'

// Hover Counter 


import React, { Component } from 'react'

class HoverCounter extends Component {
  
    
  render() {
    const {count,incrementCount}= this.props
    return <h2 onMouseOver={incrementCount}>Clicked {count} times</h2>
  }
}

export default HoverCounter

'-------------------------'

// Counter 


import React, { Component } from 'react'

class Counter extends Component {

    state = {
        count : 0,
     }  
   
   incrementCount =()=>{
       this.setState(prevState =>{
           return {count : prevState.count + 1}
       })
   }

  render() {
    return (
      <div>
        {this.props.render(this.state.count,this.incrementCount)}
      </div>
    )
  }
}

export default Counter


'--------------------------'

// App.js


import React from "react";
import ClickCounter from "./ClickCounter";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import './App.css'

function App(){
  return (
    <div className="App">
      {/* this is for click counter  */}
      <Counter 
      render={(count,incrementCount)=>(
      <ClickCounter count={count} incrementCount={incrementCount} />
      )}
      />

      {/* this is for hover counter  */}
      <Counter 
      render={(count,incrementCount)=>(
      <HoverCounter count={count} incrementCount={incrementCount} />
      )}
      />
    </div>
  )
}

export default App 



'========================================================================='