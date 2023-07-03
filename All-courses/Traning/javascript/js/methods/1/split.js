




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


var nam="my name is reddy"
console.log(nam.split(' '))  // [ 'my', 'name', 'is', 'reddy' ]
console.log(nam.split())  // [ 'my name is reddy' ]

// *********************************************************


var nums="my name is reddy"
var data =nums.split(' ')
console.log(data)   // [ 'my', 'name', 'is', 'reddy' ]

console.log(data.join(' '))  // my name is reddy
