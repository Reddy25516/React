import React from 'react'
import '../css/display.css';
import singInImg1 from '../images/login.png'
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom"
import { userContext } from '../App';
import { useContext } from 'react';
import { useState } from 'react'
import { data } from 'jquery';

const SignIn = () => {

    const navigate = useNavigate();
    var [posts, addToCart, jsonData, setPosts, load_rating,
        cartCount, setCartCount, addToWishList,setWishCount,wishCount,filterAll,setIsSigned,isSigned] = useContext(userContext);

    const [loginErr,setLoginErr]=useState("");
    let value  ={
        email : "",
        password:""
    }

    const [values,setValues] = useState(value);

    const Changedata=(e)=>{
        let val= e.target.name ;  
        values[val]=e.target.value;
        setValues(values);
    }

    function getWholeData(new_data,posts){
        for(let i=0;i<new_data.length;i++){
            new_data[i].cart_count+=posts[i].cart_count;
            if(new_data[i].wish || posts[i].wish){
                new_data[i].wish=true;
            }
        }
        return new_data;
    }

    function getCountData(new_data,posts){
        let wish_count=0
        let cart_count=0
        for(let i=0;i<new_data.length;i++){
            if(new_data[i].wish==true){
                wish_count+=1
            }
            if(new_data[i].cart_count>=1){
                cart_count+=1
            }
        }
        setWishCount(wish_count);
        setCartCount(cart_count);
    }

    const clickSignIn=()=>{
        values.password="Reddy111@";
        if(values.email.length==0||values.password.length==0){
            setLoginErr("please enter the credentials");
        }
        else{
            let data=JSON.parse(localStorage.getItem("accounts"));
            let match=0;
            let index=0

            for (let i=0;i<data.length;i++){
                if(values.email==data[i].email && values.password==data[i].password1){
                    console.log("matched successfully");
                    index=i;
                    match=1
                }
            }

            if(match==1){
                setLoginErr("");
                setIsSigned(true);
                let myAccount=[data[index]];
                myAccount[0].id=index;
                var navLinks = document.getElementsByClassName("nav-link")
                navLinks[4].classList.add("active");
                let new_data=data[index].data;
                new_data=getWholeData(new_data,posts);
                getCountData(new_data);
                myAccount[0].data=new_data;
                data[index].data=new_data;
                localStorage.setItem("accounts",JSON.stringify(data));
                localStorage.setItem("myAccount",JSON.stringify(myAccount[0]));
                setPosts(new_data);
                navigate("/");
            }
            else{
                setLoginErr("invalid Credentials");

            }
        }
    }
  return (
    <body>
    <div className='d-flex container login'>
        <div className='col-5 img1'>
            <div><img className='img-fluid' src={singInImg1}></img></div>
        </div>
        <div className='col-5 right border'>
           <h3 className='heading1'>SIGN INTO YOUR ACCOUNT AND START EXPLORING</h3>  

            <label>User Email</label><br/>
            <input className='col-9' type="email" name="email" onChange={Changedata}></input><br/>

            <label>Password</label><br/>
            <input className='col-9' type="password" name="password" onChange={Changedata}></input><br/>

            <a>Forgot password ?</a>
            { loginErr.length>1 && (<p style={{color : "red",margin:"0px"}}>{loginErr}</p>)}
            <button  className='signin col-9' onClick={clickSignIn}>
                Sign In 
                <i className="fa-solid fa-arrow-right white"></i>
            </button>
            <div className="d-flex signup">
                <h5>Don't have an account ?</h5> 

                <Link className='signINbtn' to='/signup'  >
                    <a >Sign Up</a>
                </Link>

            </div>
        </div>
    </div>
    </body>
  )
}

export default SignIn

