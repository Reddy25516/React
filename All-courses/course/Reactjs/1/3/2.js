
// Refs in React 

import React, { Component } from 'react'
class Refsdemo extends Component {
  render() {
    return (
      <div>
        <input type="text"/>
      </div>
    )
  }
}
export default Refsdemo

/*
here it gives an input box
but the cursor is not in that box
we want that input field to be focused 
*/


'----------------------------'

'with the below code the cursor now is focused to the input box '
'we can also access the entered value by using the below code '
import React, { Component } from 'react'

class Refsdemo extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef()
    }
    componentDidMount(){
        this.inputRef.current.focus()
    }
    
    // this is useed to access the entered value when click 
    // this here show the value in a pop up alert
    clickHandler=()=>{
        alert(this.inputRef.current.value)
    }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}/>
        <button onClick={this.clickHandler}>click</button>
      </div>
    )
  }
}

export default Refsdemo

'=============================================='

// call back ref 

import React, { Component } from 'react'

class Refsdemo extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef()
      this.cbref=null 
      this.setcbref = element => {
        this.cbref=element 
      }
    }
    componentDidMount(){
      if( this.cbref){
        this.cbref.focus()
      }
        // this.inputRef.current.focus()
    }
    
    clickHandler=()=>{
        alert(this.inputRef.current.value)
    }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}/>
        <input type="text" ref={this.setcbref}/>
        <button onClick={this.clickHandler}>click</button>
      </div>
    )
  }
}

export default Refsdemo

/* here the focus shift to the second box not to the first box
*/

'========================================================='

// Refs with class component 




import React, { Component } from 'react'

class Refsdemo extends Component {
  constructor(props) {
    super(props)
    this.inputRef= React.createRef() 
  }
  
  focusInput(){
    this.inputRef.current.focus()
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}></input>
      </div>
    )
  }
}

export default Refsdemo

'----------------------'

import React, { Component } from 'react'
import Refsdemo from './Refsdemo'

class FocusInput extends Component {
    constructor(props) {
      super(props)
        this.componentRef = React.createRef()
    }
    
    clickHandler =()=>{
        this.componentRef.current.focusInput()
    }
    // focus input is defined in the Refsdemo.js 

  render() {
    return (
      <div>
        <Refsdemo ref ={this.componentRef}/> 
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FocusInput


'=============================================================='


// Portals 

//index.js 

<!DOCTYPE html>
<html lang="en">
  <head>
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
    {/* when ever we write a content it will assign to the id =root 
    if we dont need to do this then we have to use 
    below line this will write the content in the portal-root section 
    not in the root section  */}
    <div id="portal-root"></div>
  </body>
</html>

'---------------'
import React from 'react'
import { ReactDOM } from 'react-dom'

function PortalDemo() {
  return ReactDOM.createPortal(
    <h1>Portal demo </h1>,
    document.getElementById('portal-root')
  )
}
export default PortalDemo

'======================================================='
