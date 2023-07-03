
"Event Handling"

'rfce function snippet used to get the function component'

import React from 'react'

function 2() {
  return (
    <div>
      
    </div>
  )
}

export default 2

'============================='

//onClick

import React from 'react'

function FunClick() {
    function clickHandler(){
        console.log("button clicked")
    }
  return (
    <div>
      <button onClick={clickHandler} >Click Me</button>
    </div>
  )
}

export default FunClick

// when we clik on the Click Me in console we get button clicked 


'========================================'

// this is using class component 
//rce is used to create class component 
import React, { Component } from 'react'

export class ClassClick extends Component {
    clickHandler(){
        console.log("clicked the button ")
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click on me </button>
      </div>
    )
  }
}

'======================================================='

// rce - class component 
// rfc -function component 
// rfce - fuction component with export 
// rconst - will add a constructor 
// rfcp -- props class component 
'Binding event handler'


// Event Bind 

import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message : "good bye"
      }
    }
    clickHandler(){
        this.setState({
            message : "Hello "
        }
        )
    }    

  render() {
    return (
      <div>
        <div> {this.state.message}</div>
        <button onClick={this.clickHandler.bind(this)}>Click</button>
        {/* without bind(this)  , output wont display  */}
      </div>
    )
  }
}
export default EventBind

'============================================================'


import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message : "good bye"
      }
    }
    clickHandler(){
        this.setState({
            message : "Hello "
        }
        )
    }    
  render() {
    return (
      <div>
        <div> {this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        <button onClick={()=> this.clickHandler()}>Click</button>
      </div>
    )
  }
}

export default EventBind

'--------------------------'

import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message : "good bye"
      }
      this.clickHandler= this.clickHandler.bind(this)
      // we added this 
    }
    clickHandler(){
        this.setState({
            message : "Hello "
        }
        )
    }    
  render() {
    return (
      <div>
        <div> {this.state.message}</div>
        <button onClick={this.clickHandler}>Click</button>
        {/* and changed content of it  */}
      
      </div>
    )
  }
}

export default EventBind

'-------------------------'


import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message : "good bye"
      }
    }
  // even this works 
    clickHandler = () => {
        this.setState({
            message : "Hello "
        }
        )
    }    
  render() {
    return (
      <div>
        <div> {this.state.message}</div>
        <button onClick={this.clickHandler}>Click</button>
      
      </div>
    )
  }
}

export default EventBind


'========================================================================='

"Methods as Pop"
"greet handler"


import './App.css';
import React ,{Component} from 'react'
import Parent from './Components/Parent';

function App() {
  return (
    <div className="App">
      <Parent/>
    </div>
  );
}
export default App;

'---------------------'

import React from 'react'

export default function Child(props) {
  return (
    <div>
      <button onClick={props.greetHandler}>Greet Parent</button>
    </div>
  )
}


'----------------'

import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName : "Parent",
      }
      this.greetParent=this.greetParent.bind(this) 
    }
    greetParent(){
        alert("hello"+this.state.parentName)
    }
    render() {
    return (
      <div>
        <Child greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default Parent

/* after executing the above 3 codes 
we will have a greet parent button 
when we click on it 
hello parent pop up message will be dispalyed 

*/

'==========================================================================='

// Passing parameters for the above code 

// child.js 

import React from 'react'

export default function Child(props) {
  return (
    <div>
      <button onClick={()=>props.greetHandler("reddy")}>Greet Parent</button>
    </div>
  )
}

'--------------'

import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName : "Parent",
      }
      this.greetParent=this.greetParent.bind(this) 
    }
    greetParent(name){
        alert("hello"+this.state.parentName+" "+name)
    }
    render() {
    return (
      <div>
        <Child greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default Parent

'===================================================='


