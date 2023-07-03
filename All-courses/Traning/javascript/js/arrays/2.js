


// for loop with arrays

var nums=[]
nums[0]=5
nums[99]=9
console.log(nums)

//[ 5, <98 empty items>, 9 ]

'here we can see that 98 elements are empty'

'--------'

var nums=[]
nums[2]=5
nums[99]=9
console.log(nums)

//[ <2 empty items>, 5, <96 empty items>, 9 ]


var nums=[]
nums[1]=5
nums[99]=9
console.log(nums)

'[ <1 empty item>, 5, <97 empty items>, 9 ]'

'---------'

// for loop (for of loop)

'of loop will access elements directly'

var nums=[]
nums[2]=5
nums[10]=9

for (i of nums){
    console.log(i);
}

/*
undefined
undefined
5
undefined
undefined
undefined
undefined
undefined
undefined
undefined
9
*/

'---------------'

var nums=[4,2,2,4,6,7,8,9,1]

for (i of nums){
    console.log(i);
}


/*
4
2
2
4
6
7
8
9
1
*/

'---------------'

// for in loop

var nums=[4,2,2,4,6,7,8,9,1]

for (i in nums){
    console.log(nums[i]);
}

'here we access elements with index number'

'----------------------------------------------------'


var nums=[4,2,2,4,6,7,8,9,1]

for (i in nums){
    console.log(i);
}

/*
0
1
2
3
4
5
6
7
8
*/


'---------------------'

var nums=[]
nums[1]=7
nums[5]=8

for (i in nums){
    console.log(i)
}

/*
1
5
*/

'we can see difference bw for in and for of'

'-----------------------'


// this is the way to assign multiple values at a time


var nums=[5,3,2,1]
var [a,b,c,d]=nums;  
'here we need to declare it with in squares and var also should be use'

console.log(a,b,c,d)//5 3 2 1


// =================================================================

var value=[2,2]
var [a,b]=value
console.log(a,b)

/*
Output:

2 2*/

// =================================================================

var value=[2,2]
var a,b=value
console.log(a)
console.log(b)
console.log(a,b)

/*
Output:

undefined
[ 2, 2 ]
undefined [ 2, 2]
 
*/


// =================================================================




'we can also use this way '
var nums=[5,3,2,1]
var [a,,,d]=nums;  

console.log(a,d)//5 1


'----------'


var nums=[5,3,2,1]
var [a,d]=nums;  

console.log(a,d) // 5 3 

'here we can see first two values get assigned and remaining didnt'

'----------------------------'
var nums=[5,3,2,1]
var [,,,d]=nums;  
console.log(d)  //1 



//program to swap two variables

a,b=7,9;
console.log(a);

/*
a,b=7,9;
^

ReferenceError: a is not defined
*/


a,b=[8,9]   // even this wont work
var [c,d]=[a,b]
console.log(c,d)

/*
a,b=7,9
^

ReferenceError: a is not defined
*/

'---------------'

a=9,b=8
var [c,d]=[a,b]
console.log(c,d)// 9 8

'------------'

var [a,b]=[8,9]
var [c,d]=[a,b]
console.log(c,d) // 8 9

'-------------'

// this also don't work
var a,b=[8,9]
var [c,d]=[a,b]
console.log(c)
console.log(d)

/*output:

undefined
[ 8, 9 ]

*/

'--------------------------------'



var words='my name is reddy'.split()
console.log(words)
//[ 'my name is reddy' ]



var words='my name is reddy'.split(' ')
console.log(words)
//[ 'my', 'name', 'is', 'reddy' ]




var words='my name is reddy'.split(' ')
var [a,b,c,d]=words
console.log(a,b,c) // my name is

'-------------'

var words='my name is reddy i am from andhra'.split(' ')
var [a,b,...d]=words
console.log(d)

//[ 'is', 'reddy', 'i', 'am', 'from', 'andhra' ]


'-------------'

'this wont work'
var words='my name is reddy i am from andhra'.split(' ')
var [a,b,...e,d]=words
console.log(d)

// says syntax error: rest element must be last element


'----------------------------'





