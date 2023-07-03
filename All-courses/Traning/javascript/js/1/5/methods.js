

/*

Object Methods
Objects can also have methods.

Methods are actions that can be performed on objects.

Methods are stored in properties as function definitions
*/


// this is the way of calling a object function in js 

let person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
  console.log(person.fullName())   // John Doe 
  console.log(person.fullName)   // [Function: fullName]


/*
In the example above, this refers to the person object.

I.E. this.firstName means the firstName property of this.

I.E. this.firstName means the firstName property of person.

*/


'================================================================================'


"JSON format data "


const user={
  name : 'reddy',
  age : 22
}
console.log(user)


// { name: 'reddy', age: 22 }




"stringify will convert the key here age to 'age' "

const user={
  name : 'reddy',
  age : 22
}
console.log(user)


const json_user =JSON.stringify(user);
console.log(json_user)

/*
{ name: 'reddy', age: 22 }
{"name":"reddy","age":22}
*/



'parse here will again convert it into normal format'


const user={
  name : 'reddy',
  age : 22
}
console.log(user)


const json_user =JSON.stringify(user);
console.log(json_user)
console.log(JSON.parse(json_user))


'========================================================================'

