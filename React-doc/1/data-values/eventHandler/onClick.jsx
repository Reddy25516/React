




// onclick for functional component 
// this is the correct way 

import React from 'react'

function FunClick() {
  function clickHandler(){
      console.log("button clicked")
  }
  return (
    <div>
      <button onClick={clickHandler} >Button</button>
    </div>
  )
}
export default FunClick

// whenever we  clik on the button in the console we are getting button clicked 
//here in the above we are not using the parenthesis to call function 

___________________________________________


// wrong way
import React from 'react'

function Hello() {
    function clickHandler(){
        console.log("button clicked")
    }
  return (
    <div>
      <button onClick={clickHandler()} >Click Me</button>
    </div>
  )
}

export default Hello

// here we had parenthesis 
// Here without clicking the button , the output will be printed because we are calling the function
// when you click on it you will see the action for it 

// here it should be a function reference not a function call 

'====================================================='



