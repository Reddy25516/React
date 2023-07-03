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
    dialog = document.getElementById("Dialog");

    //   when clicking on the radio1  button
    // variable button =1
    radio1 = document.getElementById("radio1");
    radio1.addEventListener("click", function () {
        variable.button = 1;
    });

    //   when clicking on the radio1 button
    // varible button =2
    radio2 = document.getElementById("radio2");
    radio2.addEventListener("click", function () {
        variable.button = 2;
    });


    // Dialog box
    function dialogbox(msg) {
        document.getElementById("dialog-div").innerHTML = msg;
        dialog.show();
    }

    // dialog box close
    const closedialog = document.getElementById("dialog-close");
    closedialog.addEventListener("click", function () {
        dialog.close();
    });

    

    // validation steps when we click on enter

    const enter = document.getElementById("enter");
    enter.addEventListener("click", function () {
        // setting the input1 value to a and  similary intpu2 value b
        variable.a = input1.value;
        variable.b = input2.value;

        // if any of the variable is not entered then
        if (variable.a == "") {
            msg = "please enter the variable a";
            dialogbox(msg);
        } else if (variable.b == "") {
            msg = "please enter the variale b";
            dialogbox(msg);
        }

        // if the operator is not entered then
        else if (variable.operator == "") {
            msg = "please enter the opeartor";
            dialogbox(msg);
        } else {
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

    //input1 keyup operation

    input1.addEventListener("keyup", function () {
        k = input1.value;

        //if the assigned value is not a number then
        if (arr.indexOf(k[k.length - 1]) == -1) {

            if (k.length!=0){
                msg = "please enter only numbers in input1";
                dialogbox(msg);
                input1.value = k.slice(0, k.length - 1);
            }
            else{
                input1.value=k;
            }
        }
        // if assigned value is a number
        else {
            variable.a = input1.value;
        }
    });

    //input2 keyup operation

    input2.addEventListener("keyup", function () {
        k = input2.value;
        if (arr.indexOf(k[k.length - 1]) == -1) {
            if (k.length!=0){
                msg = "please enter only numbers in input1";
                dialogbox(msg);
                input2.value = k.slice(0, k.length - 1);
            }
            else{
                input2.value=k;
            }
        } 
        else {
            variable.b = input2.value;
        }
    });

    
    // numbers and its oncilck operation
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

            // if we didnt checked any button then the dialog box appers as below
            else {
                msg = "choose the radio button to input";
                dialogbox(msg);
            }
        });
    }

    //operators ,and its onclick operation
    var ops = [];
    ops = document.getElementsByClassName("oper");
    for (let i = 0; i < ops.length; i++) {
        ops[i].addEventListener("click", function () {
            variable.operator = ops[i].value;
        });
    }

    // backspace operation
    const backspace = document.getElementById("back");
    backspace.addEventListener("click", function (event) {
        // choosing whether a or b to be reduced
        if (variable.button == 1) {
            variable.a = variable.a.slice(0, -1);
            input1.value = variable.a;
        } else if (variable.button == 2) {
            variable.b = variable.b.slice(0, -1);
            input2.value = variable.b;
        }
        // if no button is choosen then
        else {
            msg = "please choose the button to clear";
            dialogbox(msg);
        }
    });
};
