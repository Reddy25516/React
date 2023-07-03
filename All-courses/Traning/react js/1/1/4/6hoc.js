

/*

Higher order component is an advanced technique in React for reusing component logic.

Hoc is a pure function with zero side-effects and doesn't modify the input component. 

hoc is a function that takes a component and returns a new component 
*/

//App.js 
// here we wrapped the app.js wih Hoc.js 

import React from 'react'
import Hoc from './Hoc'

const App = () => {
  return (
    <div>
      <h1> Welcome user! </h1>
      
    </div>
  )
}

export default Hoc(App);

// here it is used to perform some basic level validation to the user like in the below content 


'---------------------------'

import React, { Component } from 'react';

const Hoc=(Component)=>{
    return(
        class extends React.Component{
            render(){
                return(
                    <div>
                        <Component/>
                    </div>
                )
            }
        }
    )
}

export default Hoc;


'==============================================='

// changing Hoc content 

import React, { Component } from 'react';

const Hoc=(Component)=>{
    return(
        class extends React.Component{
            state ={
                auth : false
                // we here set auth to false 

            }
            render(){
                return(
                    <div>
                        {/* if the authentication is true then it 
                        implement component 
                        else it print please login 
                         */}
                        {this.state.auth ?<Component/> : <h1>Please Login</h1>}
                    </div>
                )
            }
        }
    )
}

export default Hoc;


'================================'


// sending data in hoc (props in Hoc )

import React, { Component } from 'react';

const Hoc=(Component)=>{
    return(
        class extends React.Component{
            state ={
                auth : true
            }
            render(){
                return(
                    <div>
                        {this.state.auth ?<Component name="reddy"/> : <h1>Please Login</h1>}
                    </div>
                )
            }
        }
    )
}

export default Hoc;



'------------------'

// App.js 


import React from 'react'
import Hoc from './Hoc'

const App = (props) => {
  return (
    <div>
      <h1> Welcome user! {props.name} </h1>
      
    </div>
  )
}

export default Hoc(App);


'========================================================='