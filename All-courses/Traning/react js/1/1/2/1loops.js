
"Conditional Rendering :"

import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         islogged : false
      }
    }
    
  render() {
    if(this.state.islogged){
        return <div>welcome guest </div>
    }
    else {
        return <div> u are not allowed </div>
    }
  }
}

export default UserGreeting

/*
if the logged value is true : welocome quest is displayed 
else : u r not allowed will dispalys 

*/

'----------------------------------'

//assing the content to message variable 

import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         islogged : false
      }
    }
    
  render() {
    let message 
    if(this.state.islogged){
        message= <div>welcome guest </div>
    }
    else {
        message= <div> u are not allowed </div>
    }
    return <div>{message}</div>
  }
}

export default UserGreeting


'-----------------------------'

// using ternary operator 

render() {
    return(
        this.state.islogged ? 
        <div>Welcome Vishwas</div>:
        <div>u r not allowed to welcome</div>
    )
  }

'-------------'

render() {
    return(
        this.state.islogged ? 
        (<div>Welcome Vishwas</div>
        ):(
        <div>u r not allowed to welcome</div>
        )
        )
  }

'----------------'

render() {
    return this.state.islogged && <div>welcome</div>
}

/*
when this.state.islogged is true 
then it other side will dispalys else 
nothing displays 
*/

'================================================================================='




