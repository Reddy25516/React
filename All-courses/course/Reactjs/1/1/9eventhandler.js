
'Event Handler:'


import React,{Component} from 'react'

class Learning extends Component{
    constructor(props){
    super(props)
    this.state ={
        fruits:[
            {name: "Mango" , weight: '120gms'},
            {name: "Orange" , weight: '170gms'},
            {name: "Apple" , weight: '190gms'},
            ]
        }
    }
    // here we defined a function click handler we call this as a property 

clickHandler =() =>{
    console.log("Hello easy learning");
    alert("welcome udemy")
}
// we also get a window alert and hello easy learning will be displayed in the console in inpect area in the web page 

    render(){
        return (
        <div>
            <button onClick={this.clickHandler}>Click me </button>
            {/* here we can see that we added a button which 
            will call the function clickHandler 
            we used this.click Handler to access constructor files
            */}
            <h1> Fruit name is {this.state.fruits[2].name}</h1>
        </div>
        )
    }
}
export default Learning 

'==============================================='

'State Manipulating: '



import React,{Component} from 'react'

class Learning extends Component{
    constructor(props){
    super(props)
    this.state ={
        fruits:[
            {name: "Mango" , weight: '120gms'},
            {name: "Orange" , weight: '170gms'},
            {name: "Apple" , weight: '190gms'},
            ]
        }
    }
clickHandler =() =>{
    this.setState({  // this is the state manipulating , with this we are changing the state of the content we  are written before 

        fruits:[
            {name: "Realme" , weight: '120gms'},
            {name: "Apple" , weight: '170gms'},
            {name: "Oneplus" , weight: '190gms'},
        ]
    })
}
    render(){
        return (
        <div>
            <button onClick={this.clickHandler}>Click me </button>
            <h1> Fruit name is {this.state.fruits[0].name}</h1>
            <h1> Fruit name is {this.state.fruits[1].name}</h1>
            <h1> Fruit name is {this.state.fruits[2].name}</h1>
        </div>
        )
    }
}
export default Learning 
/*
we get output as 


Click me
Fruit name is Mango
Fruit name is Orange
Fruit name is Apple

when we click it , the output changes to 

Fruit name is Realme
Fruit name is Apple
Fruit name is Oneplus

*/


'======================================================================='


"UseState Hook"

// this works same as above it is using function 
// before we used componenets

import React,{useState} from 'react'

const Hook =props => {
    // here first one is the keyword and the second parameter is the method 

const [FruiteState,setFruiteState]= useState({

        fruits:[
            {name: "Mango" , weight: '120gms'},
            {name: "Orange" , weight: '170gms'},
            {name: "Apple" , weight: '190gms'},
            ]
    });

    // we wrote it as a function not a constructor function 
    const clickHandler =() =>{
        setFruiteState({  // it here used as a method
            fruits:[
                {name: "Realme" , weight: '120gms'},
                {name: "Apple" , weight: '170gms'},
                {name: "Oneplus" , weight: '190gms'},
            ]
        })
    }

    
    return (
        <div>
            <button onClick={clickHandler}>Click me </button> 
            <h1> Fruit name is {FruiteState.fruits[0].name}</h1>      {/* // it acts like this keyword */}
            <h1> Fruit name is {FruiteState.fruits[1].name}</h1>
            <h1> Fruit name is {FruiteState.fruits[2].name}</h1>
        </div>
        )
}
export default Hook 

'========================================='

'two way binding , on change'

'check.js'
import React,{Component} from 'react'

class Check extends Component { // here Check should be same as name

    render(){
        return(
            <div>
                <h1>Hello Easy Learning</h1>
            </div>
        )
    }
}

export default Check 


'app.js'

import Check from './components/Check'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Check/>
      </header>
    </div>
  );
}

export default App;

'--------------------------------------------------------------------'


import React,{Component} from 'react'

class Check extends Component { // here Check should be same as name

    constructor (props){
        super(props);
        this.state={
            men : [
                {name :"reddy"}
            ]
        }
    }
    render(){
        return(
            <div>
                <h1>Hello {this.state.men[0].name}</h1>
            </div>
        )
    }
}
export default Check 

/*
output :
Hello reddy
*/

'---------------------'

import React,{Component} from 'react'

class Check extends Component { // here Check should be same as name

    state={
        name :"reddy"
    }
    render(){
        return(
            <div>
                <input type ='text'></input>
                <h1>Hello {this.state.name}</h1>
            </div>
        )
    }
}
export default Check 
// this is an easy way to create a state and access a state 


'============================================='

import React,{Component} from 'react'

class Check extends Component { // here Check should be same as name

    state_sam={
        name :"reddy"
    }

    changeName= (event) =>{
        this.setState({
            name : event.target.value //this will take input value
        })
    }
    render(){
        return(
            <div>
                <input type ='text' onChange={this.changeName} value={this.state_sam.name}></input>              {/*    here the value is used to display the value of this.state_sam.name from the begining 
                by default it takes hello reddy in the input_text_box 
                we can edit it and change 
                 */}
                <h1>Hello {this.state_sam.name}</h1>
            </div>
        )
    }
}
export default Check 

/*
when we run these we get 

text.input_box
hello reddy

whenever we enter a name in the text_input then the hello reddy changes to hello + name

here we are taking the input directly from the text box and displaying the output 

*/

'================================================'





