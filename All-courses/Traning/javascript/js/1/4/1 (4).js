


class Student{
    // this is the way of creating constructor in js 
    constructor(name,roll, age){
        this.name= name;
        this.age=age;
        this.roll=roll;
    }
    // way of creating a method in class
    callname(){
        return ("I am"+ this.name);
    }
    callage(){
        return("my age is"+this.age);
    }
}
var Reddy =new Student("Reddy",18121009,22);
console.log(Reddy)



' herew we can see that the actual output is just the first 4 lines 
'and remaining are the prototype

/*
Student {name: 'Reddy', age: 22, roll: 18121009}
age: 22
name: "Reddy"
roll: 18121009

[[Prototype]]: Object
callage: ƒ callage()
callname: ƒ callname()
constructor: class Student
[[Prototype]]: Object
*/

"there are 4 prototypes"

callname 
callage 
constructor 
object prototype

'===================================='

//  console -- way 
Reddy.callage()
'my age is22'

' this is written in the console page we get the output as like this '

'==========================================='


"Static methods in js "


class Student{
    constructor(name,roll, age){
        this.name= name;
        this.age=age;
        this.roll=roll;
    }

    static add(a,b){
        return a+b
    }
}

console.log(Student.add(8,7))

'this is the waay of creating a static method '
'for this we dont need anything like a contructor or object to call the static methods '



'=============================================='

'Inheritance with Class'


class Student{
    constructor(name,roll, age){
        this.name= name;
        this.age=age;
    }
    callname(){
        return ("I am"+ this.name);
    }
    callage(){
        return("my age is"+this.age);
    }

    static add(a,b){
        return a+b
    }
}

// this is the way of creating an inherited class 

class Second extends Student{
    // naming all the parameters
    constructor(name,age,language,year){

        //super is used only for the main class parameters 
        super(name,age);
        this.language=language;
        this.year= year;
    }
}

var Reddy =new Second("Reddy",18121009,"python",2022);
console.log(Reddy)
console.log(Second.add(8,37));
'we can also access static method with this way '


/*
Second {name: 'Reddy', age: undefined, language: 'python', year: 2022}
age: undefined
language: "python"
name: "Reddy"
year: 2022


[[Prototype]]: Student

constructor: class Second
[[Prototype]]: Object
callage: ƒ callage()
callname: ƒ callname()
constructor: class Student
[[Prototype]]: Object

*/
