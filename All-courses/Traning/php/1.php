


<!DOCTYPE html> 
<html> 
<head> 
<style> 
.error {color: #FF0001;} 
<!--link rel="stylesheet" href="css/php_checkbox.css" -->
</style> 
</head> 
<body>   
<?php 
// define variables to empty values 
$nameErr = $emailErr = $mobilenoErr = $genderErr = $websiteErr = $imgErr= $agreeErr = "";
$name = $email = $mobileno = $gender = $doj = $agree = $place = "";
$html= $js =$css = $jquery = $php ="";
if ($_SERVER["REQUEST_METHOD"] == "POST") { 
   if (empty($_POST["name"])) { 
        $nameErr = "Name is required <br>";
   }
   else{ 
       $name = $_POST["name"]; 
      // check if name only contains letters and whitespace 
      if (!preg_match("/^[a-zA-Z ]*$/",$name)) { 
            $nameErr = "Only alphabets and white space are allowed"; 
      } 
   }
   //Email Validation  
   if (empty($_POST["email"])) { 
           $emailErr = "Email is required"; 
   } else { 

           $email =$_POST["email"]; 

           // check that the e-mail address is well-formed 

           if (!filter_var($email, FILTER_VALIDATE_EMAIL)) { 

               $emailErr = "Invalid email format"; 

           } 

    } 





    //Number Validation 

   if (empty($_POST["mobileno"])) { 

           $mobilenoErr = "Mobile no is required"; 



   } else { 

       $mobileno = $_POST["mobileno"]; 

           // check if mobile no is well-formed 

   if (!preg_match ("/^[0-9]*$/", $mobileno) ) { 

      $mobilenoErr = "Only numeric value is allowed."; 



   } 

   } 



       //check mobile no length should not be less and greator than 10 

   if (strlen ($mobileno) != 10) { 

      $mobilenoErr = "Mobile no must contain 10 digits."; 



   } 







   //Empty Field Validation 

   if (empty($_POST["gender"])) { 

           $genderErr = "Gender is required"; 

   } else { 

           $gender = $_POST["gender"]; 

   } 



   // Date of joining 

   if (!empty($_POST["doj"])) {   

           $doj = $_POST["doj"]; 

   }



   // place of joining 

   if (!empty($_POST["place"])) {   

           $place = $_POST["place"]; 

   }







   //Checkbox Validation 

   if (!isset($_POST['agree'])){ 

           $agreeErr = "Accept terms of services before submit."; 

           echo $agreeErr; 

   }

}

?>



<h2>Registration Form</h2> 

<span class = "error">* required field </span> 

<br><br> 



<form method="post" action="" >



   Name:  

   <input type="text" name="name" required value="<?= $name ?>" > 

   <span class="error">*

   <?php echo "<br> $nameErr";?>

   </span> 

   <br><br>



   E-mail:  

   <input type="text" name="email" required value="<?= $email ?>"> 

   <span class="error">*<?php echo "<br> $emailErr"; ?></span> 

   <br><br>



   Mobile No:  

   <input type="text" name="mobileno" required value="<?= $mobileno ?>"> 

   <span class="error">*<?php echo "<br> $mobilenoErr"; ?></span> 

   <br><br>



   Gender: 

   <input type="radio" name="gender" value="male" checked> Male 

   <input type="radio" name="gender" value="female"> Female 

   <input type="radio" name="gender" value="other"> Other 

   <span class="error">*<?php echo "<br> $genderErr"; ?></span> 

  <br><br> 





   <label >Date of Joining:</label>

   <input type="date" name="doj" max="<?php echo date("Y-m-d"); ?>" value="<?= $doj ?>" >



   <br><br>



    <!-- dropdown to select place of joining -->

   <label> Place of Joining </label>

   <select name="place">

    <option >Hyderabad</option>

    <option >Gurgaon</option>

    <option >Jammu</option>

   </select>

   <br><br>





   select technologies :<br>

   <input type="checkbox" name="tech[]" value="html">

   <label > HTML</label>

   <input type="checkbox" name="tech[]" value="css">

   <label > CSS</label>

   <input type="checkbox" name="tech[]" value="php">

   <label > Php</label> 

   <input type="checkbox" name="tech[]" value="js">

   <label > Js</label> 

   <input type="checkbox" name="tech[]" value="jquery">

   <label >Jquery</label> <br><br>







   <lable> Upload an image </label>



    <input type="file" name="file" accept="image/*" />

   <br><br>







   Agree to Terms of Service: 

   <input type="checkbox" name="agree" required> 

   <span class="error">*<?php echo "<br> $agreeErr"; ?></span> 

   <br>        



   <input type="submit" name="submit" value="submit">  

   <br>



</form> 



<?php 



if(isset($_POST['submit'])) { 

   if($nameErr == "" && $emailErr == "" && $mobilenoErr == "" && $genderErr == "" && $websiteErr == "" && $agreeErr == "" && $imgErr=="") { 







       echo "<h3 color = #FF0001> <b>You have sucessfully registered.</b> </h3>"; 





      include 'practice.php';





       echo "<h2>Your Input:</h2>"; 

       echo "Name: " .$name; 

       echo "<br>"; 

       echo "Email: " .$email; 

       echo "<br>"; 

       echo "Mobile No: " .$mobileno; 

       echo "<br>"; 

       echo "date of joining is : $doj"; 

       echo "<br>"; 

       echo "Gender: " .$gender;

      echo "<br>";

      echo "place of joining is  $place"; 

       echo "<br>"; 



      echo "the tehcnologies selecte are : ";



      foreach($_POST['tech'] as $selected){

         echo $selected." ";

      }



   } else { 

       echo "<h3> <b>You didn't filled up the form correctly.</b> </h3>"; 

   } 

} 

?> 

</body> 

</html>
