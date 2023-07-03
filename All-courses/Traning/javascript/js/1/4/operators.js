
// <!-- JavaScript Arithmetic -->

// As with algebra, you can do arithmetic with JavaScript variables, using operators like = and +:

let x = 5 + 2 + 3;

output:
8


// modulus operator to get remainder
x=5%2
console.log(x)  //1


x=true+true
console.log(x)    //2


num=4
num+=5




num=4
num+=5  // num= num+5
console.log(num)    //9

num++  // num=num+1  increment

num--

++num   // pre increment

--num   //post increment






num=6
x=num++      // here it first get assigned and then incremented
console.log(x,num)// 6 7

num=6
x=num--
console.log(x,num)  //6 5

num=6
x=--num // here it decrement first and then assigned
console.log(x,num)  //5 5


num=6
x=++num
console.log(x,num) // 7 7 




'here we dont need to import any modules '

x=Math.pow(4,3)
console.log(x) //64



x=math.pow(4,3)
console.log(x) 

/*
x=math.pow(4,3)
^

ReferenceError: math is not defined
*/

// this also works
console.log(4**3)




// relational operators



let a
console.log(7>6)  //true

a=7>4
console.log(a)   //true

a=6<=6
console.log(a)  //true



'here p greater than b so ascii value of p is greater than b '
a='pen'>'book'
console.log(a)      //true


console.log('pen'>'pencil') //false
'bcoz c take major role then nothing'


a= '2'>2
console.log(a)   //false

'here string getting converted to int'
a='3'>2
console.log(a)  //true

console.log('3'==3)  //true

'here we used triple === to do the task so better use === '
console.log('3'===3)   //false



'double equal to only check data'
'triple === check both data type and data '



// ternary operator ( ?: )

'program to even or odd number'

let a , res
a=8
res= a%2===0 ? "even":'odd'
console.log(res)


let a , res
a=8
res= (a%2==0 ? "even":'odd')
console.log(res)

// above both works ( either double equal or triple equal to )
'this is one of the easy way to find the even or odd'
