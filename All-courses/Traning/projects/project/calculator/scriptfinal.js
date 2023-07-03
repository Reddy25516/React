window.onload = function () {
  // global delcaration of variables

  variable = {
    operator: "",
    button: 0,
    a: "",
    b: "",
  };

  input1 = document.getElementById("input1");
  input2 = document.getElementById("input2");
  output = document.getElementById("output");

  //   when clicking on the radio1 first button is clicked
  radio1 = document.getElementById("radio1");
  radio1.addEventListener("click", function () {
    variable.button = 1;
  });

  //   when clicking on the radio1 second button is clicked
  radio2 = document.getElementById("radio2");
  radio2.addEventListener("click", function () {
    variable.button = 2;
  });

  
function validate() {
    arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    for (var i = 0; i < variable.a.length; i++) {
      if (arr.indexOf(variable.a[i].toString()) == -1) {
        console.log("it encounters a string")
          k=1;
          break;
      }
    }
    for (var i = 0; i < variable.b.length; i++) {
      if (arr.indexOf(variable.b[i].toString()) == -1) {
        k=1;
        break;
      }
    }
  }


  //   when we are clicking on the it performs validation and also performs the
  //	calculation operation

  const enter = document.getElementById("enter");
  enter.addEventListener("click", function () {
    variable.a = input1.value;
    variable.b = input2.value;

    // if any of the variable is not declard then it shows this output
    k = 0;
    validate();
    if (k==1) {
      window.alert("please insert only numbers");
    } 
    else if (variable.a == "" || variable.b == "") {
      window.alert("insert the variable first");
    }
    // if the operator is not entered then it shows below
    else if (variable.operator == "") {
      window.alert("click operator");
    } else {
      c = variable.a + `${variable.operator}` + variable.b;
      string = eval(c);
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

  // whenever we try to change the code in input then its value gets assigned to variable (a or b)
  input1.addEventListener("keyup", function () {
    variable.a = input1.value;
  });

  input2.addEventListener("keyup", function () {
    variable.b = input2.value;
  });

  // we are grouping the the elements with class num
  var nums = [];
  nums = document.getElementsByClassName("num");
  for (let i = 0; i < nums.length; i++) {
    // whenever we click on particular button (numbers)
    // then this below code executes
    nums[i].addEventListener("click", function () {
      // if radio button 1 is choosen then it adds value in the variable a
      if (variable.button == 1) {
        variable.a = variable.a + nums[i].value;
        input1.value = variable.a;
      }
      // if button 2 is clicked it add value in the variable b
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
  // the number last index value gets out
  const backspace = document.getElementById("back");
  backspace.addEventListener("click", function (event) {
    if (variable.button == 1) {
      variable.a = variable.a.slice(0, -1);
      input1.value = variable.a;
    } else if (variable.button == 2) {
      variable.b = variable.b.slice(0, -1);
      input2.value = variable.b;
    } else {
      window.alert("choose a button first");
    }
  });
};






