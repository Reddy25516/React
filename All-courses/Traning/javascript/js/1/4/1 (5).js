
'array object Destructuring'

function greeting(user){
    console.log("hello",user.name,"you know that u are" ,user.age,"old")
    
}
const user ={
    name : 'reddy',
    age : 22,
}

console.log(greeting(user))

//hello reddy you know that u are 22 old
//undefined



'destructuring:'

function greeting(user){
    const {name,age}= user; // this is the way of destructuring

    console.log("hello",name,"you know that u are" ,age,"old")
    
}
const user ={
    name : 'reddy',
    age : 22,
}

console.log(greeting(user))
//hello reddy you know that u are 22 old
//undefined



'==============================================================================='


