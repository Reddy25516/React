
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

'We cannot have if else statements inside the jsx or inside the return'

'----------------------------------'

//above code using variables 
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

// using ternary operator  for the above code 

import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          islogged : false
      }
    }
    render() {
      return(
          this.state.islogged ? 
          <div>Welcome Vishwas</div>:
          <div>u r not allowed to welcome</div>
      )
    }
}

export default UserGreeting

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

// short circuit operator approach

import React, { Component } from 'react'
class Hello extends Component {
   
    state = {
        islogged : true
    }
    render() {
      return this.state.islogged && <div> ywelcome</div>
    }
}
export default Hello


/*
when this.state.islogged is true 
then it other side will dispalys else 
nothing displays 
*/

'================================================================================='




