

// props 

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

'with arrow function '

import React from 'react';

const Learn =props=> {
    return <h1>Hello {props.name}</h1>
}
export default Learn



'================================'

// app.js
function App() {
  return (
    <div className="App">
      <Greet name='REDDY' age='22' >
        {/* we can have mutliple attributes  */}
        <button> action </button>
        <h1>this is child props</h1>
        {/* here we added a button inside of the Greet method 
        to access the children of the Greet we need to import it like 
        props.children while accessing else it wont work */}
      </Greet>
    </div>
  );
}
export default App;


'------------'
//Greet.js

import React from 'react'

function Greet(props){
    return (
    <div>
        <h1> hello {props.name}</h1>
        {props.children}  
        {/* here with props.children we got the action button without this we wont get the output  
       
        
        */}
    </div>
    //  here we should always wrap this elements in the single tag while returning 
    // the output 
    )
}
export default Greet 

/*
hello REDDY
action
this is child props
*/

'=============================================='


// props for class componenet 

import React,{Component} from 'react'

class Welcome extends Component {
    render(){
        return(
        <div>
            <h1>class {this.props.name}</h1>
        </div>
      )
    }
}
export default Welcome


'=============================================================='


Props 
'props get passed to the component'
'function parameters'
'props are immutable'
'props - functional component, this.props class component'

State 
'state is managed within the component '
'variables declared in the function body'
'state can be changed '
'useState Hook - functional componnet ,  this.state  - class component'


// **********************************************************************

state 

'Using state in class component '


import React,{Component} from 'react'

class Message extends Component {

    // we defined a constructor name here 
    constructor(){
        super()
        this.state= {  // we defined properties 
            message : "welcome visitor",
            age : 22
        }
    }


    render(){
        return(
            <div>        
                <h1>{this.state.message}</h1>
                <h1>the visitors age is {this.state.age}</h1>
            </div>
        )
    }
}

export default Message 



'======================================================'

//props 

// hello.js

import React from 'react'

function Hello(props){
    return <h1>Hello {props.name}</h1>
}  // here we used props.name bcox in app.js we given  name="reddy"

export default  Hello


'---------'

import Learn from './components/Hello'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Learn name="reddy"/>
        <Learn name="teju"/>
        <Learn name="sree"/>

      </header>
    </div>
  );
}


'==============================================='


// any many dynamic elements 


import React from 'react'

function Hello(props){
    return <h1>Hello {props.name} and frd is {props.frd}</h1>
}

export default  Hello


'--------'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Learn name="reddy" frd="teju"/>
        <Learn name="teju" frd ="reddy"/> 
        <Learn name="sree" frd="reddy"/>

      </header>
    </div>
  );
}

/*
web-content :

Hello reddy and frd is teju
Hello teju and frd is reddy
Hello sree and frd is reddy

*/

'============================================================'



'State'

// App.js

<div className="App">
      <header className="App-header">
        <Learning/>
      </header>
    </div>

'-----'

// Learning.js
import React,{Component} from 'react'

class Learning extends Component{
    state ={
        fruits:[
            {name: "Mango" , weight: '120gms'},
            {name: "Orange" , weight: '170gms'},
            {name: "Apple" , weight: '190gms'},
        ]
    }
    render(){
        return <h1> Fruit name is {this.state.fruits[0].name}</h1>
    }
}
export default Learning 

/*
web-output:

Fruit name is Mango


-----

return <h1> Fruit name is {this.state.fruits[0].name}</h1>
if we change this like  to 
-------------------------- this.state.fruits[0]
to this 

we wont get any output 

*/

'-------------------'


'this is the way of returning many lines in react js'

import React,{Component} from 'react'

class Learning extends Component{
  constructor(props){  // this is the way of creating a constructor
    super(props)
    this.state ={ // here this should be written 
        fruits:[
            {name: "Mango" , weight: '120gms'},
            {name: "Orange" , weight: '170gms'},
            {name: "Apple" , weight: '190gms'},
            ]
        }
    }
    render(){
        return (  // parenthesis
        <div>
            {/* we should always return it in a  sinlge tag
            so we used div tag as a whole and inside we used other tags
             */}
            <h1> Fruit name is {this.state.fruits[0].name}</h1>
            <h1> Fruit name is {this.state.fruits[1].name}</h1>
            <h1> Fruit name is {this.state.fruits[2].name}</h1>
        </div>
        )
    }
}
export default Learning 


'==============================================================='



//states in functional component

import React,{useState} from 'react';

const Learn =props=> {
    
    // const name= useState('reddy');
    'above also works'

    var name= "reddy", age=22;
    // or we can directly declare varaibles in a fn component 

    return (
    <div> 
        <div>name is {name}</div>
        <div> age is {age}</div>
    </div>
    )
}
export default Learn

//we can't declare states directly in class component
// ***********************************************************

'this is the proper way of delcaring variables in class component '

import React,{Component} from 'react'

class Learn extends Component{
    state ={
        name:"reddy",
        age :20,
    }
    render(){
        return (  
        <div>
            <h1>name is {this.state.age}</h1>
        </div>
        )
    }
}

export default Learn


// *************************************************************