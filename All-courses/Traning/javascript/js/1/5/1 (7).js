
// adding the value to an object 

let user ={
    user_name : "reddy",
    age : 22,
    sex : male ,
}

// adding value to an object 

let user ={
    user_name : "reddy",   // here we used colon to assign
    age : 22,
    sex : "male" ,
}

user.ismarried="no"
user['phone_num']=6300251164;     // here we used = to assign 
console.log(user)


/*
{
  user_name: 'reddy',
  age: 22,
  sex: 'male',
  ismarried: 'no',
  phone_num: 6300251164
}
*/


'updating:'

let user ={
    user_name : "reddy",
    age : 22,
    sex : "male" ,
}

user.ismarried="no"
user['phone_num']=6300251164;

//updating the above values
user.age=23
user['user_name']="reddy_25"
console.log(user)

/*
{
  user_name: 'reddy_25',
  age: 23,
  sex: 'male',
  ismarried: 'no',
  phone_num: 6300251164
}

*/



"delete"

delete user.user_name 

'=============================================================================='


let person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
for ( let i in person ){
  console.log(i, person[i]);
}

/*
firstName John
lastName Doe
id 5566
fullName [Function: fullName]

*/

console.log(Object.keys(person))
//[ 'firstName', 'lastName', 'id', 'fullName' ]



'Object.keys(dict)'
// this will return all the keys of the dictionary

'========================================================'

'Object.values will return the values of a dict '

let person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(Object.values(person))

//[ 'John', 'Doe', 5566, [Function: fullName] ]



let person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

for( let val of Object.values(person)) {
  console.log(val);
  
}
/*
John
Doe
5566
[Function: fullName]
*/


'========================================================'

'Object destructing '

let person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

const {lastName, fullName} =person;

console.log(lastName)  // Doe


'========================================================'


'cloning an user '


let person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  }

const copied_person={};
copied_person.firstName=person.firstName
copied_person.id=person.id
copied_person.lastName= person.lastName

console.log(copied_person);

// { firstName: 'John', id: 5566, lastName: 'Doe' }




'Using Object.assign({},obj)'

let person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  }

const copied_person= Object.assign({},person)
console.log(copied_person);
// { firstName: 'John', lastName: 'Doe', id: 5566 }





