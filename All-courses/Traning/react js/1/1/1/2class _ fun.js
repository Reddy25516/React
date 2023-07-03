
'go to index.html'
'edit the div section as like it'

<div id="root"></div>
<h1>Hello world</h1>


// 'u can see that the web app will display this hello world below the web page'

// 'to anything in the web page then write it in the div section (root)'

'==============='

'component'

// profile photos settings (nav bars) (these all are components)
// these are compoents in the web page 

<div id="root"></div>

//this is the mother componenet we can add child components in the mother component

'components types'
/*
functional component 
class components 
*/


'==================='


// go to app.js 
// change the header over there 

<div className="App">
      <header className="App-header">
      <h1>Hello aryan</h1>
      </header>
</div>



/*we removed that section content and added this 
then we can see that our page just displays hello aryan */

'======================'



'for the components we are creating seperate js file for each component'
'THIS IS the code that written in the hello.js'

//Hello.js

import React from 'react'

function Hello(){
    return <h1>Hello Easy Learning</h1>
}

export default  Hello



'--------------------------------------------'
// arrow function 
//  this is same as above function 

const Hello =() => <h1>Hello Easy Learing</h1>
export default Hello;

'else'

export const Hello =() => <h1>Hello Easy Learing</h1>;
// here while you import make sure that you import with same name 

'----------'

// go to app.js

import Learn from  './components/hello'
// here Learn we can write any name as ur wish 

// change the div section to this 

<div className="App">
      <header className="App-header">
      <h1>Hello aryan</h1>
      <Learn></Learn>
      </header>
    </div>

// u can see that the web page Hello Easy Learning

'-----------'

"if u dont write the export default hello in the hello.js" 
'we will get an error like this '

/*
Compiled with problems:X

ERROR in ./src/App.js 20:37-42

export 'default' (imported as 'Learn') was not found in './components/hello' (module has no exports)
*/


'=============================================================='

'Class component'

import React,{Component} from 'react'

class Learning extends Component{
    render(){
        return <h1> Hello Udemy</h1>
    }
}

export default Learning 




// go to app.js

import Learning from './components/learning';


function App() {
    return (
      <div className="App">
        <header className="App-header">
        <Learn></Learn>
        <Learning/>
        </header>
      </div>
    );
  }

  /*
  here <learning/>
  is same as <learning></learning>
  */
// we cant create any div outside that div section 


'=========================================='



// app.js

<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
      <Learn></Learn>
      <Learning/>
      </header>
</div>

// this will add logo to the web page 


'======================================================'



Components

"there are two types of components"
"functional component "


function welcome(props){
    return <h1>hello,{props.name} </h1>
}


'Class component :'

'here class extends component class'
'render method returning html '

class welcome extends React.Component{
    render(){
        return <h1>hello,{this.props.name} </h1>
    }
}


'============================================'



'functional components are javascript functions'
'which contains properties (props) '


// app.js
import './App.css';
import React ,{Component} from 'react'
import Greet from './Components/Greet'
// here we can import it with any name 

function App() {
  return (
    <div className="App">
      <Greet/>
    </div>
  );
}
export default App;

'-----------'
// Greet.js

//we can also write above using arrow function 

export const Greet= () => <h1>Hello reddy</h1>

// but we can also export like these 
//but while importing the name should be same as the Greet function 
'-----'

// index.html

<!DOCTYPE html>
<html lang="en">
  <head>
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>

/* all the above files related to each other to display the output */

'============================='


import React,{Component} from 'react'
// we need to import like this for class component 

// we need to write extends Compoonent to specify it as a react class
class Welcome extends Component {
    // here the name of the class should be file name (Welcome)
    render(){       //render function should be there 

        return <h1>class component</h1>
    }
}
export default Welcome
// we should always write this as  Welcome 
// we cant write any other name than this 

//this is the class component 

'================================='

// this is the 


import React from 'react'

const Hello =()=> {
    return (
        <div>  
            <h1>hello vishwas </h1>
        </div>
    )
}


'------------'

// this is same as above (jsx version) 
import React from 'react'

const Hello =()=> {

    return React.createElement('h1',null,"hello reddy")
    return React.createElement('div',null,<h1>hello reddy</h1>)
    // even this works 
}

export default Hello

'========================='



import React from 'react'

//these below are both equal 

const Hello =()=> {
    // return (
    //     <div className ='dummyClass'>  
    //         <h1>hello vishwas </h1>
    //     </div>
    // )
    return React.createElement(
    'div',
    {id :'Hello', className: 'dummyClass'},
    React.createElement('div',null,<h1>hello Reddy</h1>)
    )
}

export default Hello

'=========================================================='


' Both below are same '

//  this is the jsx format 

import React from 'react';
function Learn(){
    return (
        
        <div>
            <h1>Learn React </h1>
            <div>
                <span> Learn React </span>
                <span> Learn React</span>
            </div>
        </div>
    )
        
}
export default Learn


//  this is html format 

import React from 'react';
function Learn(){
    return React.createElement('div',
        { 
          id: 'hello',
          className :'dummyClass'
        },
        React.createElement('h1',null,"learn React"),
        
        React.createElement('div',null,
            React.createElement('span',null,"learn React "),
            React.createElement('span',null,"learn React"),
        )
    ) 
}
export default Learn


'=========================================================='