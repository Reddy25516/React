
// this is in the index.js file 
import './index.css';

// what ever that you apply to the parent will also be used for the child components when you import like above 


'-----------------------'



// way of loading the bootstrap js, bootstrap css , google apis , and font awesome

<html >
  <head>

    {/* this below is the way of inserting a css file in the html file  */}
    <link rel="stylesheet" href="css/globals.css" ></link>

    <link href='https://fonts.googleapis.com/css?family=Work Sans' rel='stylesheet' ></link>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous" ></link>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" >
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/fontawesome.min.css" >
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
  </body>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>

</html>



******************************************

{/* inline styling  */}
return (
     <>
     <h1 style={{fontStyle:"italic"}} > hello </h1>
     <h1 style={{fontStyle:"italic",color:'red'}} > hello </h1>
      </>
   )

************************************

