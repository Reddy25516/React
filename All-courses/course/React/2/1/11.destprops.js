

"destructing props and states:"

//app.js 

import './App.css';
import React ,{Component} from 'react'
import Greet from './Components/Greet';
function App() {
  return (
    <div className="App">
      <Greet name="diana" age="28"/>
    </div>
  );
}
export default App;

'---------------'

// Greet.js 


import React from 'react'

function Greet({name,age}){
    return (
        <div>
    <h1> hello i am {name} and i am {age} old</h1>
    </div>
    )
}
export default Greet 


'----------------'
'wring above with props'

import React from 'react'

function Greet(props){
    return (
        <div>
    <h1> hello {props.name} and i am {props.age}</h1>
    {props.children}
    </div>
    )
}
export default Greet 

'----------------------'

'this is how destructing props works '
import React from 'react'

function Greet(props){
    const {name,age}=props 
    return (
        <div>
    <h1> hello i am {name} and i am {age} old</h1>
    </div>
    )
}
export default Greet 


'=================================='

'props with class function '

import React,{Component} from 'react'

class Welcome extends Component {
    render(){
        return(
        <div>
            <h1>class {this.props.name} and age is {this.props.age}</h1>
        </div>
            )

    }
}
export default Welcome

'-------------'

'destructing props '


class Welcome extends Component {
  render(){
      const {name,age}=this.props 
      return(
      <div>
          <h1>class {name} and age is {age}</h1>
      </div>
    )
  }
}
export default Welcome

'====================================='
