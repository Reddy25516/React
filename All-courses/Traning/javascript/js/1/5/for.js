
//for loop

let i

for (i = 0; i < 10; i++) {
    console.log('prit')
}





//for loop
'this also work'

let i = 0

for (; i < 5; i++) {
    console.log('prit')
}



'this shows error'
let i = 0

for (i < 5; i++) {
    console.log('prit')
}

/*
for (i<10;i++){
             ^

SyntaxError: Unexpected token ')'
*/


'even this also works'
//for loop

let i = 0

for (; i < 5;) {
    console.log('prit')
    i++
}




// we can also use this

for (let i = 0; i < 10; i++) {
    console.log('prit')
}







let nums=[42,51,24,98]
nums.forEach((n)=> {console.log(n)})

/*
42
51
24
98

*/

let nums=[42,51,24,98]
nums.forEach((n)=> {console.log(n**2)})

'we can also find square as above'

'-----------'

let nums=[42,51,24,98]
nums.forEach((n,i,nums)=> {console.log(n,i,nums)})


/*

42 0 [ 42, 51, 24, 98 ]
51 1 [ 42, 51, 24, 98 ]
24 2 [ 42, 51, 24, 98 ]
98 3 [ 42, 51, 24, 98 ]

*/




let nums=[42,51,24,98]
nums.forEach((n,i,nums)=> {console.log(i,n,nums)})

'here i takes index and n takes values'
/*

0 42 [ 42, 51, 24, 98 ]
1 51 [ 42, 51, 24, 98 ]
2 24 [ 42, 51, 24, 98 ]
3 98 [ 42, 51, 24, 98 ]

*/



let nums=[42,51,24,98,65]
nums.filter(n => n%2===0).forEach(n=>{console.log(n)});

// output:
// 42
// 24
// 98







//for loop
for(let i=0;i<=3;i++){
    for(j=0;j<=3;j++){
        console.log('hello',j)
    }
    console.log('hi',i)
}


/*
hello 0
hello 1
hello 2
hello 3
hi 0
hello 0
hello 1
hello 2
hello 3
hi 1
hello 0
hello 1
hello 2
hello 3
hi 2
hello 0
hello 1
hello 2
hello 3
hi 3

*/