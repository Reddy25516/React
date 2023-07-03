
var utc = new Date()
console.log(utc)  //  2022-10-12T07:02:11.609Z

'here we are getting the current date  and removing the extra part of the date '
var utc = new Date().toJSON().slice(0,10)

console.log(utc);  // 2022-10-12

// ****************************************

//  to get the IST time 

var date = new Date();
console.log("current Time", date);
var ISToffSet = 330; //IST is 5:30; i.e. 60*5+30 = 330 in minutes 
offset= ISToffSet*60*1000;
//  here 1000 is the milli seconds 

var ISTTime = new Date(date.getTime()+offset);
console.log("IST Date",ISTTime);




// ********************************



'same as above , it even doesnt return IST time'
let today = new Date().toISOString().slice(0,10)
console.log(today);



// ********************************************


var d = (new Date()).toString().split(' ').splice(1,3).join(' ');
console.log(d);

//  Oct 12 2022

/*****************************************888 */

var date1 = new Date('December 17, 1995');
console.log(date1); //1995-12-17T00:00:00.000Z


var date1 = new Date('20-09-2022');
console.log(date1)  //Invalid date 


var date1 = new Date('9-19-2022');  //month- date-year
console.log(date1)  // 2022-09-19T00:00:00.000Z


var date1 = new Date('2022-1-19');   // year // month// date
console.log(date1)  // 2022-09-19T00:00:00.000Z


// **************************************


var date1 = new Date('2022-1-19');
console.log(date1)
date1= date1.toString();
console.log(date1); 

'2022-01-19T00:00:00.000Z'
'Wed Jan 19 2022 00:00:00 GMT+0000 (Coordinated Universal Time)'

// **************************************


//  to get the current date in js 

var date1= new Date();
console.log(date1);

// 2022-10-12T06:49:53.075Z
// but the time is not IST


//******************************** */


var birthday = new Date();
var day1 = birthday.getDay();
// Sunday - Saturday : 0 - 6



var birthday = new Date();
var day1 = birthday.getDay();
console.log(day1);   // 3



// ***************************************************


var birthday = new Date('August 19, 1975 23:15:30');
var date1 = birthday.getDate();

console.log(date1);
// expected output: 19

// ***************************************************


var moonLanding = new Date('July 20, 69 00:20:18');

console.log(moonLanding.getFullYear());
// expected output: 1969

// *************************************************************

console.log(birthday.getHours());
console.log(moonLanding.getMonth());


//******************************************************** */


var date = new Date('August 19, 1975 23:15:30');

date.setDate(24);

console.log(date.getDate());
// expected output: 24

date.setDate(32);
// Only 31 days in August!

console.log(date.getDate());
// expected output: 1


// ***************************************************


var event1 = new Date();

event1.setDate(24);
event1.setFullYear(1969);
event1.setMonth(3);
console.log(event1);
//  1969-04-24T07:00:07.396Z

// ***************************************************



