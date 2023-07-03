
'set data structure'

let set =new Set();
set.add(100);
set.add(200);
set.add(300);
console.log(set)
//Set(3) { 100, 200, 300 }


'we cant add multiple elements with add '


let set =new Set();
set.add(100);
set.add(200);
set.add(300,400);
console.log(set)
// //Set(3) { 100, 200, 300 }



let set =new Set();
set.add(100);
set.add(200);
set.add(300,400);
console.log(set.length)  // undefined
console.log(set.length())// error


'to find the length we use size'


let set =new Set();
set.add(100);
set.add(200);
set.add(300,400);
console.log(set.size)  //3





'to delete a set element '


let set =new Set();
set.add(100);
set.add(200);
set.add(300);
set.delete(200)
console.log(set)  // Set(2) { 100, 300 }
console.log(set.size)  //2



set.delete(200,300)
'we cant delete mutliple elements at same time'


