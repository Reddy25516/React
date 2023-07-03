// Mounting life cycle methods 

'Constructor :'
'a constructor is called whenever a new component is created '
'initilize the states'
'Binding the event handlers'



// Component Mounting Lifecycle 


import React, { Component } from 'react'

export class Lifecycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : "reddy",
      }
      console.log("life cycle constructor ")
    }
    static getDerivedStateFromProps(props,state){
        console.log("Lifecycle getDerivedState from props ")
        return null 
    }
    componentDidMount(){
        console.log("life cycle component Did Mount ")
    }
  render() {
    console.log("lifecycle render ")
    return (
      <div>
        life cyle  
      </div>
    )
  }
}

export default Lifecycle


'this is the order of execution :'
/*
2Lifecycle.js:11 life cycle constructor 
2Lifecycle.js:14 Lifecycle getDerivedState from props 
2Lifecycle.js:21 lifecycle render 
2Lifecycle.js:18 life cycle component Did Mount 

*/

'====================================================='

"Fragment: "


import React from 'react'

function Fragment() {
  return (
    <React.Fragment>
        <h1>Fragment Demo</h1>
        <p> this is the first paragraph </p>
      
    </React.Fragment>
  )
}
export default Fragment
/*
here we can see that in place of div we replaced React.Fragment 
so that it doesnt included a div section 
*/

'======================================================================'

// Table.js 

import React from 'react'
import Column from './Column'
function Table() {
  return (
    <table>
        <tbody>
            <tr>
                <Column/>
            </tr>
        </tbody>
    </table>
  )
}

export default Table


'-------'

//Column.js 

import React from 'react'

function Column() {
  return (
    <div>
        <td>Name</td>
        <td>usernmae</td>
      
    </div>
  )
}

export default Column


/*
we get the output in the web page but when it comes to console there is an error 
error in console
react-dom.development.js:86 Warning: validateDOMNesting(...): <td> cannot appear as a child of <div>.
*/

'----------------------'

import React from 'react'

function Column() {
  return (
    <React.Fragment>
        <td>Name</td>
        <td>usernmae</td>
      
    </React.Fragment>
  )
}

export default Column
/*
//when we replace this 
// in output there wont be any div tag anymore 

'we can also replace React.Fragement as an empty opening tag and an empty closing tag'
<>
</>

like in the below code

*/

import React from 'react'

function Column() {
  return (
    <>
        <td>Name</td>
        <td>usernmae</td>
    </>
  )}
export default Column


'=================================================='

// Pure component 

// Parentcom.js


import React, { Component } from 'react'
import Purecom from './Purecom'
import RegCom from './RegCom'

export class Parentcom extends Component {    
    constructor(props) {
      super(props)
      this.state = {
         name : "reddy",
      }
    }
    componentDidMount(){
        setInterval(()=> {
            this.setState({
                name : "reddy",
            })
        },2000)
    }        
    render() {
        console.log("***Parent Component render ***")
    return (
      <div>
        Pure Component
        <RegCom name={this.state.name}/>
        <Purecom name={this.state.name}/>
      </div>
    )
  }
}
export default Parentcom

'---------------'

// purecom
import React, { PureComponent } from 'react'

class Purecom extends PureComponent {
  render() {
    console.log("***Pure Component render ***")
    return (
      <div>
        pure Component {this.props.name}
      </div>
    )
  }
}
export default Purecom

'--------------'

import React, { Component } from 'react'

class RegCom extends Component {
  render() {
    console.log("***Regular Component render ***")
    return (
      <div>
        Regular Component {this.props.name }
      </div>
    )
  }
}

export default RegCom

'---------------'
'after all the above 3 codes we get the below output '

//weboutput 

/*
Pure Component
Regular Component reddy
pure Component reddy
*/

// console output 

/*
***Parent Component render ***
 ***Parent Component render ***
 ***Regular Component render ***
 ***Regular Component render ***
 ***Pure Component render ***
 ***Pure Component render ***
 'after 2 s it will display '

 ***Parent Component render ***
 ***Parent Component render ***
 ***Regular Component render ***
 ***Regular Component render ***

 ***Parent Component render ***
 ***Parent Component render ***
 ***Regular Component render ***
 ***Regular Component render ***

 ***Parent Component render ***
 ***Parent Component render ***
 ***Regular Component render ***
 ***Regular Component render ***
 ***Parent Component render ***
 ***Parent Component render ***
 ***Regular Component render ***
 ***Regular Component render ***
 ***Parent Component render ***
 ***Parent Component render ***
 ***Regular Component render ***
 ***Regular Component render ***
 ***Parent Component render ***
 ***Parent Component render ***
 ***Regular Component render ***
 ***Regular Component render ***
 ***Parent Component render ***
 ***Parent Component render ***
 ***Regular Component render ***
 ***Regular Component render ***
 ***Parent Component render ***
 ***Parent Component render ***
 ***Regular Component render ***
 ***Regular Component render ***
 ***Parent Component render ***
 ***Parent Component render ***
 ***Regular Component render ***
 ***Regular Component render ***
 ***Parent Component render ***
 ***Parent Component render ***
 ***Regular Component render ***
 ***Regular Component render ***
 ***Parent Component render ***
 ***Parent Component render ***
 ***Regular Component render ***
 ***Regular Component render ***
 ***Parent Component render ***
 ***Parent Component render ***
 ***Regular Component render ***
 ***Regular Component render ***
 ***Parent Component render ***
 ***Parent Component render ***
 ***Regular Component render ***
 ***Regular Component render ***
 ***Parent Component render ***
 ***Parent Component render ***
 ***Regular Component render ***
 ***Regular Component render ***
 ***Parent Component render ***
 ***Parent Component render ***
 ***Regular Component render ***
 ***Regular Component render ***
 ***Parent Component render ***
 ***Parent Component render ***
 ***Regular Component render ***
 ***Regular Component render ***
 ***Parent Component render ***
 ***Parent Component render ***
 ***Regular Component render ***
 ***Regular Component render ***
*/

'========================================================================='


