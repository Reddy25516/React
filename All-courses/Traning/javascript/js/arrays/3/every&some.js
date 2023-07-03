

'every'
'if all the elements here satisfy the condition it return true else false '


var nums=[2,1,3,4,555,11,12,64,6,43,2,3,33]
var even = nums.every(function(num){
    return num>0;
})
console.log(even) // true



var nums=[2,1,3,4,-1]
var even = nums.every(function(num){
    return num>0;
})
console.log(even) // false since there is -1 less than 0




'some'


var nums=[2,1,3,4,-1]
var even = nums.some(function(num){
    return num<0;
})
console.log(even) // true

'there is one element less than 1 so return true'

'================================================================='


var nums=[2,1,3,4,6]
var even = nums.some(function(num){
    return num<0;
})
console.log(even)  // false

'there is no element which is less then 0 so return false'



'================================================================='


//  every 
// if every element satisfy the condition then it returns true 


var nums=[2,1,3,4,6,0,-2]
var even = nums.every(function(num){
  return num<12;
})
console.log(even)


// ***************************************************************************