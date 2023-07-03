
//object is like a dictionary in python

let a={}
console.log(typeof(a))  //object

'when something declard with in curly brackets then it is a object'


let a={
    name: 'navin',
    tech:'js'
}
console.log(typeof(a))  
console.log(a)   // { name: 'navin', tech: 'js' }


'------------------------------------------------------------------'


// here we use dot(.) operator to fetch the value 
let a={
    name: 'navin',
    tech:'js'

}

console.log(a.name)  
console.log(a.tech)

'navin'
'js'
'here we also can access the values inside it'

// we can also fetch using square brackets

console.log(a['name'])  
console.log(a['tech'])


'----------------------------------'


let a={
    name:"reddy",
    number: 630025
    }
console.log(a['number'])
console.log(a['name'])

/*
630025
reddy
*/


'----------------------------------'

input='name'
let a={
    name: 'navin',
    tech:'js',
    'work exp':6

}

console.log(a[name])  
/*output:
console.log(a[name])  
              ^

ReferenceError: name is not defined
*/

'----------------------------------------------------'

// this also works or we can simply use underscore

let a={
    name: 'navin',
    tech:'js',
    'work exp':6
}

console.log(a['work exp'])    // 6

'here we seperated using comman operator'
'here a is an object'


'==================================================================='


input='name'

let a={
    name: 'navin',
    tech:'js',
    'work exp':6

}

console.log(a[input])  // navin
console.log(a.input)  // undefined
'we cant use dot operator for the inputed things'

'-----------------------------------------------------------------'

input='name'
let a={
    name: 'navin',
    tech:'js',
}
console.log(a)

'even this works when we forget to remove the comma it works'


'----------------------------------------'

// we can also have object inside an object 


let a={

    name: 'navin',
    tech:'js',
    laptop : {
        cpu: 'i7',
        ram : 4,
        brand: 'Asus'
    }
}
console.log(a)

/*outut;

{
  name: 'navin',
  tech: 'js',
  laptop: { cpu: 'i7', ram: 4, brand: 'Asus' }
}

*/
'here it prints the entire object'

'-------------------------------------------------------'
// accessing  nested objects

let a={
    name: 'navin',
    tech:'js',
    laptop : {
        cpu: 'i7',
        ram : 4,
        brand: 'Asus'
    }
}
console.log(a.laptop)

//{ cpu: 'i7', ram: 4, brand: 'Asus' }

'----------------------------------------------'
'even these works getting a value inside a nested object'

let a={
    name: 'navin',
    tech:'js',
    laptop : {
        cpu: 'i7',
        ram : 4,
        brand: 'Asus'
    }
}
console.log(a.laptop.brand)  // Asus


'======================================================'

'we can also fetch using square brackets'

let a={
    name: 'navin',
    tech:'js',
    laptop : {
        cpu: 'i7',
        ram : 4,
        brand: 'Asus'
    }
}
console.log(a['laptop']['brand'])   //Asus



'=================================================='


'to find the length  we use length keyword'

let a = {
    name: 'navin',
    tech:'js',
    laptop : {
        cpu: 'i7',
        ram : 4,
        brand: 'Asus'
    }
}

console.log(a['laptop']['brand'].length)   //4
console.log(a.laptop.brand.length)  // even this works


'============================================'

console.log(length(a['laptop']['brand']))  

'when we writ this we will get an error'

/*

console.log(length(a['laptop']['brand']))  
        ^

ReferenceError: length is not defined

so we should not prefer these way
*/
'============================================'

let a={
    name: 'navin',
    tech:'js',
    laptop : {
        cpu: 'i7',
        ram : 4,
        brand: 'Asus'
    }
}
console.log(a.value)  //undefined

'when the object is not availble then we get output as undefined'

'============================================'

'but when u want to find length on it if shows error'


let a={
    name: 'navin',
    tech:'js',
    laptop : {
        cpu: 'i7',
        ram : 4,
        brand: 'Asus'
    }
}
console.log(a.value.length)  

/*
console.log(a.value.length)  
                    ^

TypeError: Cannot read properties of undefined (reading 'length')

*/
'============================================'

let a={
    name: 'navin',
    tech:'js',
    laptop : {
        cpu: 'i7',
        ram : 4,
        brand: 'Asus'
    }
}
if (a.value===undefined)
    console.log('hey we caught the error')

if (a.value==undefined)
    console.log('hey we caught the error once')

/*
hey we caught the error
hey we caught the error once
*/

'here we can either using === or =='

'but we need to make sure that undefined here is a keyword '
'dont write it as string that throws u error'


'here it doesnt print  anything bcoz if is not true'

if (a.value==='undefined')
    console.log('hey we caught the error')


'============================================'

// length 

let a={
    name: 'navin',
    tech:'js',
    laptop : {
        cpu: 'i7',
        ram : 4,
        brand: 'Asus'
    }
}
console.log(a['tech'].length)   //2



// using question mark (?) 

let a={
    name: 'navin',
    tech:'js',
    laptop : {
        cpu: 'i7',
        ram : 4,
        brand: 'Asus'
    }
}
console.log(a.name?.length)  ///5



'here it will print only if name available'


'=================================='


let a={
    name: 'navin',
    tech:'js',
    laptop : {
        cpu: 'i7',
        ram : 4,
        brand: 'Asus'
    }
}
console.log(a.nam.length)  




/*
console.log(a.nam.length)  
                  ^

TypeError: Cannot read property 'length' of undefined
*/


let a={
    name: 'navin',
    tech:'js',
    laptop : {
        cpu: 'i7',
        ram : 4,
        brand: 'Asus'
    }
}
console.log(a.name.first_name?.length)  //undefined




'============================================'


let a={
    name: 'navin',
    tech:'js',
    laptop : {
        cpu: 'i7',
        ram : 4,
        brand: 'Asus'
    }
}
console.log(a?.value?.length)  

'here if anything not availbe then it print undefined'

'====================================='

// to delete a property

let a={
    name: 'navin',
    tech:'js',
    laptop : {
        cpu: 'i7',
        ram : 4,
        brand: 'Asus'
    }
}
delete a.laptop
console.log(a)


//{ name: 'navin', tech: 'js' }

'============================================'


// we can also delete using square brackets

let a={
    name: 'navin',
    tech:'js',
    laptop : {
        cpu: 'i7',
        ram : 4,
        brand: 'Asus'
    }
}
delete a['laptop']
console.log(a)  


'we can use delete keyword to delete a property'

delete a

'but we cant delete the object '

'============================================'


// for in loop

// this is the way to get the keys in the laptop

let a={
    name: 'navin',
    tech:'js',
    laptop : {
        cpu: 'i7',
        ram : 4,
        brand: 'Asus'
    }
}

for (i in a){
    console.log(i)
}

/*

name
tech
laptop

*/

'here name tech and laptop are the keys '
'here we dont get the keys of the laptop'

'============================================'


for (i in a){
    console.log(i,a.i)
}

'if we run these we will get output as '
/*
name undefined
tech undefined
laptop undefined
*/

'============================================'

// in these case we only need to use square bracket not a dot operator

for (i in a){
    console.log(i,a[i])
}

/*
name navin
tech js
laptop { cpu: 'i7', ram: 4, brand: 'Asus' }
*/

'============================================'

// to get the keys of the laptop 


for (i in a.laptop){
    console.log(i,a.laptop[i])
}
'this is how it works' 


for (i in a['laptop']){
    console.log(i,a.laptop[i])
}

for (i in a['laptop']){
    console.log(i,a['laptop'][i])
}

'all these ways will work'

/*

cpu i7
ram 4
brand Asus

*/

'============================================'




