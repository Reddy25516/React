
'Prototype: '
// It is a property in js,
// every object or the method in js contains prototype property 
// even prototype itself contains property prototype 


const myObject = {
    city: "Madrid",
    greet() {
      console.log(`Greetings from ${this.city}`);
    },
  };
  
console.log(Object.getPrototypeOf(myObject));

// Output:
// [Object: null prototype] {}



// *****************************************

'Prototype property is basically an object (also known as Prototype object), where we can attach methods and properties in a prototype object, which enables all the other objects to inherit these methods and properties.'


// ****************************************

'Programiz'

