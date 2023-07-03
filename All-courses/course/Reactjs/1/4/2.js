
npm install create-react-app 

npx create-react-app testapp 

cd testapp

code . 
// this cmd let u open the vsc in u r laptop 

// '============================================'


//App.js 
// this is a functional component 

const App= () =>{
    return (
      <div>
        <center>
          <h3>Hello world</h3>
          {/* here center will let the hello world to be in center of the page
          without center it will be on the left side of the page 
           */}
        </center>
      </div>
    )
  }
  export default App;

'here we just changed the content in app.js '

/*
there are 2 types of exports 

default export 
named export 

above is the default export 

*/

'---------------------'

// index.js 

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

'----------------------------------------'

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

'============================================='

'when ever we use  js in html code then it is JSX '

// this is the way of declaring a variable and accessing it in the html content

// App.js 

const App= () =>{
    let name="reddy";
    return (
      <div>
        <center>
          <h3>Hello {name}</h3>
        </center>
      </div>
    )
  }
  export default App;
  

  '======================================='

// class component 

import React from "react";

class App extends React.Component{
render(){
    return(
    <div>
        <center>
        <h3>`this is a class component
            we should always extend a class component with React.Component
            we should always include an export without it we get an error 
            `
        </h3>
        </center>
    </div>
    )
}
}
export default App 

'==================================================='

// declaring varible in class component



import React from "react";

class App extends React.Component{
  render(){
    let name ="reddy";
    return(
      <div>
        <center>
          <h3>
            my name is {name}
            {/* wrapping with braces  */}
          </h3>
        </center>
      </div>
    )
  }
}
export default App 


'==============================================='



