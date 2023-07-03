

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

'--------------------------------'
// using const function of above 

const Greet=(props)=> {
  console.log(props)
  return <h1>Hello {props.name}</h1>
}

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
            {/* 
            here with props.children we got the action button without this we wont get the output  
            here we should always wrap this elements in the single tag while returning 
            the output 
            
            */}
    </div>
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

"state"

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



//******************************************************



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



'------------------------------------------'

// any many dynamic elements 


import React from 'react'

function Hello(props){
    return <h1>Hello {props.name} and lover is {props.lover}</h1>
}

export default  Hello


'--------'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Learn name="reddy" lover="teju"/>
        <Learn name="teju" lover ="reddy"/> 
        <Learn name="sree" lover="reddy"/>

      </header>
    </div>
  );
}

/*
web-content :

Hello reddy and lover is teju
Hello teju and lover is reddy
Hello sree and lover is reddy

*/

'***************************************************'