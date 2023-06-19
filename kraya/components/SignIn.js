import React from 'react'
import '../css/display.css';
import singInImg1 from '../images/login.png'
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom"
import { useState } from 'react'
import {useDispatch,useSelector} from "react-redux";
import { changeData, toggleWish,changeCartCount,changeMyAccount, changeNavData } from  '../action';


const SignIn = () => {
    const dispatch =useDispatch();
    const values =useSelector(state=>state)

    let posts = values.data
    let accounts= values.accounts

    const navigate = useNavigate();

    const [loginErr,setLoginErr]=useState("");
    const [accountValues,setAccountValues] = useState({email : "",password:""});

    const Changedata=(e)=>{
        let val= e.target.name ;  
        accountValues[val]=e.target.value;
        setAccountValues(accountValues);
    }

    function getWholeData(new_data,posts){
        let wish_count=0
        let cart_count=0
        for(let i=0;i<new_data.length;i++){
            new_data[i].cart_count+=posts[i].cart_count;
            if(new_data[i].cart_count>=1){cart_count++}
            if(new_data[i].wish || posts[i].wish){
                new_data[i].wish=true;
                wish_count++
            }
        }
        dispatch(toggleWish(wish_count))
        dispatch(changeCartCount(cart_count))
        return new_data;
    }

    const clickSignIn=()=>{
        accountValues.password="Reddy111@";
        if(accountValues.email.length===0||accountValues.password.length===0){
            setLoginErr("please enter the credentials");
        }
        else{
            let data=accounts
            let match=false
            let index=0
            
            // checking whether any match in emails and password
            data.forEach((ele,i) => {
                if(accountValues.email===ele.email && accountValues.password===ele.password1){
                    index=i;
                    match=true
                }
            })

            if(match){
                setLoginErr("");
                let account_data=data[index];
                account_data.id=index;
                // combining current unsigned data with already existing data
                let new_data=getWholeData(account_data.data,posts);
                account_data.data=new_data;
                dispatch(changeMyAccount(account_data))
                dispatch(changeData([...new_data]))
                dispatch(changeNavData([...new_data]))
                navigate(-1);
            }
            else{
                setLoginErr("invalid Credentials");
            }
        }
    }
    
  return (
    <>
    <div className='d-flex container login'>
        <div className='col-5 img1'>
            <div><img className='img-fluid' src={singInImg1} alt="signImage"></img></div>
        </div>
        <div className='col-5 right border'>
           <h3 className='heading1'>SIGN INTO YOUR ACCOUNT AND START EXPLORING</h3>  

            <label>User Email</label><br/>
            <input className='col-9' type="email" name="email" onChange={Changedata}></input><br/>

            <label>Password</label><br/>
            <input className='col-9' type="password" name="password" onChange={Changedata}></input><br/>

            {/* <a>Forgot password ?</a> */}
            { loginErr.length>1 && (<p style={{color : "red",margin:"0px"}}>{loginErr}</p>)}
            <button  className='signin col-9' onClick={clickSignIn}>
                Sign In 
                <i className="fa-solid fa-arrow-right white"></i>
            </button>

            <div className="d-flex signup">
                <h5>Don't have an account ?</h5> 
                <Link className='signINbtn' to='/signup'  >
                    <a> Sign Up</a>
                </Link>
            </div>

        </div>
    </div>
    </>
  )
}

export default SignIn

