
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



'Using state in class component '


import React,{Component} from 'react'

class Message extends Component {

    // constructor(){
    //     super()
    //     this.state= {  // we defined properties 
    //         message : "welcome visitor",
    //         age : 22
    //     }
    // }

    state= { 
        message : "welcome visitor",
        age : 22
    }
    // both above ways will work 
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

