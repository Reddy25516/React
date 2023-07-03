import React, { useEffect } from 'react'
import singInImg1 from '../images/login.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import '../css/display.css';
import { userContext } from '../App';
import { useContext } from 'react';


const SignUp = () => {
    const navigate = useNavigate();

    var [posts, addToCart, jsonData, setPosts, load_rating,
        cartCount, setCartCount, addToWishList,setWishCount,wishCount,filterAll,setIsSigned,isSigned] = useContext(userContext);

    let value  ={
        firstName:"",
        lastName: "",
        email : "",
        password1:"",
        password2:"",
        
    }
    let error={
        name:"",
        email :"",
        password : "",
        exist : false
    }
    const [values,setValues] =useState(value);
    const [errors,setErrors]=useState([error]);


    const Changedata=(e)=>{
        let val= e.target.name ;  
        values[val]=e.target.value;
        setValues(values);
    }
    values.password1="Reddy111@";
    values.password2="Reddy111@";

    const clickSignUp=()=>{
        let new_errors=errors;
        // values.firstName="Narayana"
        // values.lastName="Reddy";
        let error_count=0
        // name validation 
        var name = /^[a-zA-Z ]+$/;
        if(values.firstName.length==0 || values.lastName.length==0){
            console.log(values.firstName);
            new_errors[0].name="name is required"
            error_count=1
        } 
        else if(values.firstName.length<4 || values.lastName.length<4){
            errors[0].name= "it should contain a minimum of 4 letters";
            error_count=1
        }
        else if(!values.firstName.match(name) || !values.lastName.match(name)){
            errors[0].name="it should only contains letters and a space";
            error_count=1
        }else{
            errors[0].name="";
        }


        // email validation 
        // values.email="reddy22516@gmail.com"
        if(values.email.length==0){
            new_errors[0].email="email is required"
            error_count=1
        }
        else if(!values.email.includes("@gmail.com")){
            new_errors[0].email="it should contain @gmail.com";
            console.log("here i am ");
            error_count=1
        }else{
            new_errors[0].email="";
        }
        
        // values.password1="Reddy111@"
        // values.password2="Reddy111@"
        
        // password validataion 
        var pass = /^(?=.*[!@#$%^&*])(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/;
        if(values.password1.length==0 || values.password2.length==0){
            new_errors[0].password="password is required"   
            error_count=1
        }
        else if(!values.password1.match(pass) || !values.password2.match(pass)){
            new_errors[0].password="it should contain a mininum of 8 letters with atleast one caps , one small letter , one number and one special character";
            error_count=1
        }
        else if(values.password1!==values.password2){
            new_errors[0].password=" Passwords not Matched";
            error_count=1
        }
        else{
            new_errors[0].password="";
        }
        setErrors([...new_errors]); 

        if(error_count==0){
            let data= JSON.parse(localStorage.getItem("accounts"));
            data=[];
            // to set the account data for the first time

            for(let i=0;i<data.length;i++){
                if(data[i].email==values.email){
                    new_errors[0].exist=true
                    error_count=1
                }
            }

            if(error_count==0){
                new_errors[0].exist=false;
                values.data=jsonData;
                data=[...data,values]

                // localStorage.setItem("accounts",JSON.stringify([values]));
                // let account_data=JSON.parse(localStorage.getItem("accounts"))
                // account_data[0].email="reddy25516@gmail.com";
                localStorage.setItem("accounts",JSON.stringify(data));
                navigate('/signin');

            }else{
                new_errors[0].exist="account already exist";
            }
        }

    }

    useEffect(()=>{
        console.log("happeing use Effect");
    },[errors]);

  return (
    <body className='signup'>
        <div className='d-flex container login '>
            <div className='col-5 img1'>
                <div><img className='img-fluid' src={singInImg1}></img></div>
            </div>
            <div className='col-5 content border'>
                <h3 className='heading1'>CREATE YOUR ACCOUNT AND START EXPLORING</h3> 
                <div className='d-flex fields'>
                    <div>  
                        <label>First Name</label><br/>
                        <input  type="text" name="firstName" onChange={Changedata} ></input>
                    </div>
                    <div>
                        <label>Last Name</label><br/>
                        <input  type="text" name="lastName" onChange={Changedata} ></input>
                    </div>
                </div> 
                { errors[0].name.length>1 && (<p style={{color : "red"}}>{errors[0].name}</p>)}

                <div className='email'>
                    <label>Email</label><br/>
                    <input className='' type="email" name="email" onChange={Changedata}></input>
                </div>
                { errors[0].email.length>1 && (<p style={{color : "red"}}>{errors[0].email}</p>)}

                <div className='email'>
                    <label>Enter Password</label><br/>
                    <input className='' name="password1" onChange={Changedata} type="text"></input>
                </div>

                <div className='email'>
                    <label>Re-enter Password</label><br/>
                    <input className='' name="password2" onChange={Changedata} type="text"></input>
                </div>
                { errors[0].password.length>1 && (<p style={{color : "red"}}>{errors[0].password}</p>)}

                <button  className='signin col-9' onClick={clickSignUp}>Create an Account</button>
                { errors[0].exist!==false>1 && (<p className='error-last' style={{color : "red"}}>{errors[0].exist}</p>)}
                <div className="d-flex signup">
                    <h5>Already have an account ?</h5>
                    <Link className='signINbtn' to='/signin'  >
                        <a>SignIn</a>
                    </Link>
                </div>
            </div>
        </div>
    </body>
  )
}

export default SignUp
