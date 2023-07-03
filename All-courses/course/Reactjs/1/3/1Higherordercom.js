
// Higher order component is used to share the functionality bw two different component 

// this is the program to find the click counter 

import React, { Component } from 'react'

class Higherordercom extends Component {
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

export default Higherordercom

/*
output :
Clicked 0 times 

when we click on the button the count will increased by one 

*/


'======================================================='

"HOVER COUNTER :"
// Hover count program 

import React, { Component } from 'react'

class HoverCounter extends Component {
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
    return <button onMouseOver={this.incrementCount}>Hovered {count} times</button>
    // on mouseOver is the only thing we need to change from onClick 
  }
}

export default HoverCounter

/*
Hovered 7 times

here when we hover above the button the hover count will increases by one 

*/

return <h2 onMouseOver={this.incrementCount}>Hovered {count} times</h2>
// we can also write like this 
// when ever we are over the words its increases by one

'================================================='

// Higher order component 

import React from "react";

const UpdatedComponent = OriginalComponent =>{
    class NewComponent extends React.Component{
        render(){
            return <OriginalComponent name="reddy"/>
        }
    }
    return NewComponent
}
export default UpdatedComponent

'-----------------'



import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

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
    return <button onClick={this.incrementCount}>
        {this.props.name} Clicked {count} times</button>
  }
}

export default UpdatedComponent(ClickCounter) // here we are passing like a function 

/*
reddy Clicked 0 times

*/

'similarly hover counter works the same '

'=============================================================='

// Another way to do the same 
// we get the same output as above 


import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class ClickCounter extends Component {
   
  render() {
    const {count,incrementCount} =this.props 
    return( <button onClick={incrementCount}>
         Clicked {count} times
         </button>
    )
  }
}

export default UpdatedComponent(ClickCounter)

'---------------------'


import React from "react";

const UpdatedComponent = OriginalComponent =>{
    class NewComponent extends React.Component{
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
        render(){
            return <OriginalComponent count={this.state.count}
            incrementCount={this.incrementCount}/>
        }
    }
    return NewComponent
}
export default UpdatedComponent

'========================================================='

// Passing props to HOC


import './App.css';
import React ,{Component} from 'react'
import HoverCounter from './Components/HoverCounter';
import ClickCounter from './Components/ClickCounter';


function App() {
  return (
    <div className="App">
    <ClickCounter name="reddy"/>
    </div>
  );
}
export default App;

'--------------------'


import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class ClickCounter extends Component {
   
  render() {
    const {count,incrementCount} =this.props 
    return( <button onClick={incrementCount}>
         {this.props.name} Clicked {count} times
         </button>
    )
  }
}

export default UpdatedComponent(ClickCounter)

'---------------'

import React from "react";

const UpdatedComponent = OriginalComponent =>{
    class NewComponent extends React.Component{
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
        render(){
            return (<OriginalComponent count={this.state.count}
            incrementCount={this.incrementCount}
            {...this.props}/>
        )}
    }
    return NewComponent
}
export default UpdatedComponent


// outut
// reddy clicked 0 times 


'======================================================='