
import React,{Component} from 'react'

class Message extends Component {

    constructor(){
        super()
        this.state= {
            message : "welcome visitor",
            age : 22
        }
    }
    // we are defining a change on click method 
    // when we click on a button it automatically chnage the content what we want 

    changeMessage(){
        this.setState({
            message : "thanking for visiting "
        })
    }

    render(){
        return(
            <div>        
                <h1>{this.state.message}</h1>
                {/* here onClick method is written which calls the method chnage */}
                <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}
export default Message 


'========================================================='

// here the whole code is same as above but only change is there is not function call 
// only function is used in onClick 

import React, { Component } from 'react'

class Hello extends Component {
    constructor(){
        super()
        this.state= {
            message : "welcome visitor",
            age : 22
        }
    }
    // we are defining a change on click method 
    // when we click on a button it automatically chnage the content what we want 

    changeMessage(){
        this.setState({
            message : "thanking for visiting "
        })
    }

    render(){
        return(
            <div>        
                <h1>{this.state.message}</h1>
                {/* here onClick method is written which calls the method chnage */}

                <button onClick={()=>this.changeMessage}>Subscribe</button>
            </div>
        )
    }
}
export default Hello

'whenever you click the output will not be changed for the above'



'========================================================'


"SetState"

'when we type rce and enter we get the full structure of class component'
'rce - react class export compnent'

// sniffet - rce 

/*
import React, { Component } from 'react'

export class 1 extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default 1
*/
'here in the above 1 is the name of the file '

// sniffet - rconst

'we get this with rconst '
/*
constructor(props) {
  super(props)

  this.state = {
     
  }
}

*/


'============================================================'
'setState counter '

import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
      super(props)
      this.state = {
        count : 0 
      }
    }
    //with this way increment function will work but the increment 5 will not work 

    increment(){
        this.setState(
            {count : this.state.count + 1}
        )
    }
    /*
    increment(){
        this.state.count = this.state.count+1 
    }
    */
   // the above increment function will just update the value in the console update not in the web browser  
   
   incrementFive(){
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
   }
    render() {
    return (
      <div>
        <h1> the value of count is {this.state.count}</h1>
        <button onClick= {()=> this.increment()}> Increment</button><br></br>
        <button onClick= {()=> this.incrementFive()}> Increment Five</button>
        {/* incrementFIve() -- will not work  */}
        
      </div>
    )
    }
}
'===================================================================='

// above code 

import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
      super(props)
      this.state = {
        count : 0 
      }
    }
    // this is the way to write first function when we are calling it with counter 

    increment(){
      // here we also implemented props attribute
      this.setState( (prevState,props) =>(
        // here we converted addvalue (string) to int 
          {count : prevState.count + parseInt(props.addvalue)}
          )
      )
   }

   incrementFive(){
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
   }
    render() {
    return (
      <div>
        <h1> the value of count is {this.state.count}</h1>
        <button onClick= {()=> this.increment()}> Increment</button><br></br>
        <button onClick= {()=> this.incrementFive()}> Increment Five</button>
        
      </div>
    )
    }
}


'-----------------'

function App() {
  return (
    <div className="App">
      <Counter addvalue='2'/>  
      {/* here we cant able to give the number directly */}
    </div>
  );
}
export default App;


'==============================================================================='


//onClick

import React,{Component} from 'react'

class Message extends Component {

    constructor(){
        super()
        this.state= {
            message : "welcome visitor",
            age : 22
        }
    }
    // we are defining a change on click method 
    // when we click on a button it automatically chnage the content what we want 

    changeMessage(){
        this.setState({
            message : "thanking for visiting "
        })
    }
    render(){
        return(
            <div>        
                <h1>{this.state.message}</h1>
                {/* here onClick method is written which calls the method chnage */}

                <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}
export default Message 

'==========================================================='

constructor(){
  super()
  this.state= {
      message : "welcome visitor",
      age : 22
  }
}

changeMessage=()=>{
  // changeMessage(){    // or even we have this it works same 
  this.setState({
      message : "thanking for visiting "
  })
}

'-----------'

<div>        
<h1>{this.state.message}</h1>
{/* here onClick method is written which calls the method chnage */}

<button onClick={this.changeMessage()}>Subscribe</button>
</div>


/*
when we have this type thanks for visiting message will be printed 
without any click boc here we used the process to call the function 
*/

'======================='


constructor(){
        super()
        this.state= {
            message : "welcome visitor",
            age : 22
        }
    }
    // we are defining a change on click method 
    // when we click on a button it automatically chnage the content what we want 

    changeMessage=()=>{
        this.setState({
            message : "thanking for visiting "
        })
    }


<button onClick={this.changeMessage}>Subscribe</button>

// this works fine whenever we click on it message will change 


'======================================================'

constructor(){
  super()
  this.state= {
      message : "welcome visitor",
      age : 22
  }
}
// we are defining a change on click method 
// when we click on a button it automatically chnage the content what we want 

changeMessage(){
  this.setState({
      message : "thanking for visiting "
  })
}


<button onClick={this.changeMessage}>Subscribe</button>

// here the first welcome visitor will be printed even we click on it 
// it wont work 


'================================================'





