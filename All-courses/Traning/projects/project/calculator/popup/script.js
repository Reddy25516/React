window.onload = function () {
  // global delcaration of variables

  variable = {
    operator: "",
    button: 0,
    a: "",
    b: "",
  };
  arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  input1 = document.getElementById("input1");
  input2 = document.getElementById("input2");
  output = document.getElementById("output");


  //   when clicking on the radio1 first button is clicked
  //button value is taken as 1
  radio1 = document.getElementById("radio1");
  radio1.addEventListener("click", function () {
    variable.button = 1;
  });


  //   when clicking on the radio1 second button is clicked
  // and the button value is takes as 2
  radio2 = document.getElementById("radio2");
  radio2.addEventListener("click", function () {
    variable.button = 2;
  });


  // when we click on enter this loop executes 
  const enter = document.getElementById("enter");
  enter.addEventListener("click", function () {
    // setting the input1 value to a and similary b 
    variable.a = input1.value;
    variable.b = input2.value;

    // if any of the variable is empty then
    if (variable.a == "" || variable.b == "") {
      window.alert("insert the variable first");
    }

    // if the operator is not entered then
    else if (variable.operator == "") {
      window.alert("please choose an operator");
    } 
    else {
      // assing the value of a nd b and the operator to c 
      c = variable.a + `${variable.operator}` + variable.b;
      string = eval(c);

      // displaying the output
      output.value = string;
      string = "";
    }
  });

  /*
 whenever we click the enter button twice then we 
 all the values get cleared 
*/
  enter.addEventListener("dblclick", function () {
    input1.value = "";
    input2.value = "";
    output.value = "";
    variable.operator = "";
  });


  // whenever we try to change the code in input then its value 
  //gets assigned to input1

  input1.addEventListener("keyup", function () {
    k = input1.value;

    //if the assigned value is not a number then 
    if (arr.indexOf(k[k.length - 1]) == -1) {
      window.alert("please input only number");
      input1.value = k.slice(0, k.length - 1);
    } 
    // if assigned value is a number 
    else {
      variable.a = input1.value;
    }
  });


  // similarly updating the value of input2
  input2.addEventListener("keyup", function () {
    k = input2.value;
    if (arr.indexOf(k[k.length - 1]) == -1) {
      window.alert("please input only number");
      input2.value = k.slice(0, k.length - 1);
    } else {
      variable.b = input2.value;
    }
  });


  // we are grouping the the elements with class num
  var nums = [];
  nums = document.getElementsByClassName("num");
  for (let i = 0; i < nums.length; i++) {
    nums[i].addEventListener("click", function () {

      // if radio button 1 is choosen then it adds value in the variable a(input1)
      if (variable.button == 1) {
        variable.a = variable.a + nums[i].value;
        input1.value = variable.a;
      }

      // if button 2 is clicked it add value in the variable b(input2)
      else if (variable.button == 2) {
        variable.b = variable.b + nums[i].value;
        input2.value = variable.b;
      }
      // if we didnt checked any button then the pop appers as below
      else {
        window.alert("choose a button first");
      }
    });
  }


  // when ever we are clicking any operation then its value gets assigned to the operator
  var ops = [];
  ops = document.getElementsByClassName("oper");
  for (let i = 0; i < ops.length; i++) {
    ops[i].addEventListener("click", function () {
      variable.operator = ops[i].value;
    });
  }


  // this is backspace button whenever we click on it
  // the number last index value gets removed
  const backspace = document.getElementById("back");
  backspace.addEventListener("click", function (event) {

    // choosing whether a or b to be reduced
    if (variable.button == 1) {
      variable.a = variable.a.slice(0, -1);
      input1.value = variable.a;
    } 
    else if (variable.button == 2) {
      variable.b = variable.b.slice(0, -1);
      input2.value = variable.b;
    } 
    // if no button is choosen then 
    else {
      window.alert("choose a button first");
    }
  });
};
