
var test =/[@gmail.com]/g;
var value ="reddy@gmail.com";

if(!value.match(test)){
  console.log("it should contain that value");
}

// in the above we are testing whether it contain or not
// ****************************************************

var usernameRegex = /^[a-zA-Z0-9]+$/;
var value ="reddygmailcom";

if(!value.match(usernameRegex)){
  console.log("it should only contains alphabets and numbers");
}else{
  console.log("you are good to go")
}

// *********************************************

// the password must contains one Capital Letter

var usernameRegex = /^(?=.*[A-Z])[a-zA-Z0-9]+$/;
var value ="reEcom";

if(!value.match(usernameRegex)){
  console.log("it should only contains alphabets and numbers");
}else{
  console.log("you are good to go")
}

// **************************************************

// The password must contain atleast one small letter one capital letter and one number
var usernameRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;
var value ="REDDHY2a";

if(!value.match(usernameRegex)){
  console.log("it should only contains alphabets and numbers");
}else{
  console.log("you are good to go")
}

// **************************************************

// it should atleast contain one special character 

var usernameRegex = /^(?=.*[!@#$%^&*])/;
var value ="REDDHY2@a";

if(!value.match(usernameRegex)){
  console.log("it should only contains alphabets and numbers");
}else{
  console.log("you are good to go")
}

// ****************************************

// it should contains atleast 8 letters 

var usernameRegex = /^(?=.{8,})/;
var value ="REDD";

if(!value.match(usernameRegex)){
  console.log("it should only contains alphabets and numbers");
}else{
  console.log("you are good to go")
}

// ****************************************************


