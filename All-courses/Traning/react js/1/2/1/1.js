

// https://jscomplete.com/playground

function Hello(){
    return <div>Hello React </div>;
  }
  
  ReactDOM.render(
    <Hello/>,
    document.getElementById('mountNode'),
  );


//  this will print Hello React at output 

// ******************************************************************


function Button(){
    return <button>Click</button>;
    //  here semicolon should be written  
  }
  
  ReactDOM.render(
    <Button/>,
    document.getElementById('mountNode'),
  );


// **************************************************


' the function here always starts with the capital letter else gives us empty'
function utton(){
    return <button>Click</button>;
  }

// **********************************************


//  whenever we click on the button the value increases to one 


function Button(){
    const [counter,setCounter] =useState(0);
    
    return <button onClick={()=> setCounter(counter+1)}>{counter}</button>;
  }
  
  ReactDOM.render(
    <Button/>,
    document.getElementById('mountNode'),
  );


  '----------------------------------'

function Button(){
const [counter,setCounter] =useState(5);
// const handleClick= ()=> setCounter(counter+1);
function handleClick(){
    setCounter(counter+1);
}
return(
<button onClick = {handleClick}>
    {counter}
</button>
);
}

ReactDOM.render(
<Button/>,document.getElementById('mountNode'),
);


// *****************************************************