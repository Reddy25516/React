import React, { useEffect } from 'react'
import singInImg1 from '../images/login.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import '../css/display.css';

import {useDispatch,useSelector} from "react-redux";
import {setAccountsData} from '../action.js';

const SignUp = () => {
    const values =useSelector(state=>state)
    const navigate = useNavigate();
    const dispatch =useDispatch();
    let jsonData= values.jsonData
    let accounts= values.accounts

    let formvalue  ={
        firstName:"",
        lastName: "",
        email : "",
        password1:"",
        password2:"",
    }

    let error={
        name :"",
        email :"",
        password : "",
        exist : false
    }

    const [formValues,setFormValues] =useState(formvalue);
    const [errors,setErrors]=useState(error);

    const Changedata=(e)=>{
        let val= e.target.name ;  
        formValues[val]=e.target.value;
        setFormValues(formValues);
    }

    formValues.password1="Reddy111@";
    formValues.password2="Reddy111@";

    const clickSignUp=()=>{
        let new_errors={name :"",email :"",password : "",exist : false}
        // name validation 
        var name = /^[a-zA-Z ]+$/;
        if(formValues.firstName.length===0 || formValues.lastName.length===0){
            // console.log(formValues.firstName);
            new_errors.name="name is required"
            new_errors.exist=true
        } 
        else if(formValues.firstName.length<4 || formValues.lastName.length<4){
            new_errors.name= "it should contain a minimum of 4 letters";
            new_errors.exist=true
        }
        else if(!formValues.firstName.match(name) || !formValues.lastName.match(name)){
            new_errors.name="it should only contains letters and a space";
            new_errors.exist=true
        }

        // email validation 
        // formValues.email="reddy22516@gmail.com"
        if(formValues.email.length===0){
            new_errors.email="email is required"
            new_errors.exist=true
        }
        else if(!formValues.email.includes("@gmail.com")){
            new_errors.email="it should contain @gmail.com";
            new_errors.exist=true
        }
        
        // password validataion 
        var pass = /^(?=.*[!@#$%^&*])(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/;
        if(formValues.password1.length===0 || formValues.password2.length===0){
            new_errors.password="password is required"   
            new_errors.exist=true
        }
        else if(!formValues.password1.match(pass) || !formValues.password2.match(pass)){
            new_errors.password="it should contain a mininum of 8 letters with atleast one caps , one small letter , one number and one special character";
            new_errors.exist=true
        }
        else if(formValues.password1!==formValues.password2){
            new_errors.password=" Passwords not Matched";
            new_errors.exist=true
        }
        setErrors(new_errors); 

        if(!new_errors.exist){
            // checking whether any matching emails exist with the already exist in the accounts 
            let matched_data=accounts.filter((element)=> element.email===formValues.email.trim())
            // console.log(matched_data)
            
            if(matched_data.length===0){
                formValues.data=jsonData;
                let data=[...accounts,formValues]
                dispatch(setAccountsData(data))
                navigate('/signin');
            }else{
                new_errors.exist="account already exist with the email";
            }
        }
    }

    useEffect(()=>{
        
    },[errors]);

    
  return (
    <div className='signup'>
        <div className='d-flex container login '>
            <div className='col-5 img1'>
                <div><img className='img-fluid' src={singInImg1} alt="image1"></img></div>
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
                { errors.name.length>1 && (<p style={{color : "red"}}>{errors.name}</p>)}

                <div className='email'>
                    <label>Email</label><br/>
                    <input className='' type="email" name="email" onChange={Changedata}></input>
                </div>
                { errors.email.length>1 && (<p style={{color : "red"}}>{errors.email}</p>)}

                <div className='email'>
                    <label>Enter Password</label><br/>
                    <input className='' name="password1" onChange={Changedata} type="text"></input>
                </div>

                <div className='email'>
                    <label>Re-enter Password</label><br/>
                    <input className='' name="password2" onChange={Changedata} type="text"></input>
                </div>
                { errors.password.length>1 && (<p style={{color : "red"}}>{errors.password}</p>)}

                <button  className='signin col-9' onClick={clickSignUp}>Create an Account</button>
                { errors.exist &&(<p className='error-last' style={{color : "red"}}>{errors.exist}</p>)}
                <div className="d-flex signup">
                    <h5>Already have an account ?</h5>
                    <Link className='signINbtn' to='/signin'  >
                        <a>SignIn</a>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp
