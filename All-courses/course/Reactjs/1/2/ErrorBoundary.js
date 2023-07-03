

// Error Handling 

import React from 'react'

function Hero({heroName}) {
    if (heroName==="Joker"){
        throw new Error("NOt a hero!")
    }
  return (
    <div>
      {heroName}
    </div>
  )
}

export default Hero

'-----------'

import './App.css';
import React ,{Component} from 'react'

import Hero from './Components/Hero';

function App() {
  return (
    <div className="App">
    <Hero heroName="batman"/>
    {/* here there is no error it executes successfully only if the below content not accept any errors 
    if the below joker encouters an error batman is not shown in the webpage */}
    <Hero heroName="Joker"/>
    </div>
  );
}
export default App;

'==========================================='

// Error Boundary 

import React from 'react'

function Hero({heroName}) {
    if (heroName==="Joker"){
        throw new Error("NOt a hero!")
    }
  return (
    <div>
      {heroName}
    </div>
  )
}

export default Hero

'----------------'

import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError : false
      }
    }

    static getDerivedStateFromError(error){
        return{
            hasError: true
        }
    }
    
  render() {
    if(this.state.hasError){
        return <h1>Something went wrong </h1>
    }
    
    // if there is no error it will be executed 
    return this.props.children
  }
}


'------------------'


import './App.css';
import React ,{Component} from 'react'
import Hero from './Components/Hero';
import ErrorBoundary from './Components/ErrorBoundary';

function App() {
  return (
    <div className="App">
    <ErrorBoundary>
      <Hero heroName="batman"/>
      <Hero heroName="Joker"/>
    </ErrorBoundary>
    </div>
  );
}
export default App;

/*
now the output we get is something went wrong 
*/

'here still we didnt get the batman output so we have to do like this '


import './App.css';
import React ,{Component} from 'react'
import Hero from './Components/Hero';
import ErrorBoundary from './Components/ErrorBoundary';

function App() {
  return (
    <div className="App">
    <ErrorBoundary>
      <Hero heroName="batman"/>
    </ErrorBoundary>
    <ErrorBoundary>
      <Hero heroName="Joker"/>
    </ErrorBoundary>
    
    </div>
  );
}
export default App;
/* 
here the output is
batman
something went wrong 
*/

'---------------'

function App() {
  return (
    <div className="App">
    <ErrorBoundary>
      <Hero heroName="batman"/>
    </ErrorBoundary>
    <ErrorBoundary>
      <Hero heroName="Joker"/>
    </ErrorBoundary>
    <ErrorBoundary>
      <Hero heroName="superman"/>
    </ErrorBoundary>
    
    </div>
  );

'output:'

/*
batman
Something went wrong
superman
*/
'============================================'