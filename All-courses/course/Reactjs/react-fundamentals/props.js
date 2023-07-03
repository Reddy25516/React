
// the value that is obtained from the other components are called props 
// the values that are passed between the components are called props 


'props cant be chnaged by the child component'


// below is the way of passing props
const App = () => {
    return (
      <>
      <div>
       <Banner name="Sara" age="20"/>
     </div>
       </>
    )
 }

'--------------------'

function Banner(props){
    return (
      <h1> {props.name} </h1>
    )
}

'*************************************'

// destructuring inside the function params
// below way also works fine

function Banner({name,age}){
    return (
      <h1> {name} {age} </h1>
    )
}

'********************************'

// destructuring using a const variable 

// here we also used react.fragment so that we can give class name for the main element that is given 
function Banner(props){
    const {name,age}= props
    return (
        <React.Fragment class="main">
            <h1> {name} {age} </h1>
        </React.Fragment>
    )
  }

'*******************************'


