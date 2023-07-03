import React from 'react';
import {Routes,Route} from 'react-router-dom'
import './App.css';
import Flights from './components/Flights';
import Home from './components/Home';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import data from './data.json';
import MyBookings from './components/MyBookings';
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';

export const userContext = React.createContext();

function App() {
    const navigate= useNavigate()
    const [postData,setPostData] =useState([]);
    const initialValues = {source:"", destination:""};
    const [formValues,setFormValues] =useState(initialValues);
    const [context, setContext] = useState("default context value");

    const [formErrors,setFormErrors] =useState({});

    const [isSubmit,setIsSubmit]= useState(false);

    const [bookings,setBookings] =useState([])
    const [ticketId,setTicketId]= useState(1);

  
    const handleChange =(e) =>{
      const {name,value} =e.target;
      setFormValues({...formValues,[name]:value});
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(validate(formValues)){
          if(getPostData(formValues.source,formValues.destination)){
            setIsSubmit(true);
          } 
          else{
            setIsSubmit(false);
            console.log("you have errors in it");
            console.log(formErrors);
          }
      }else{
        setIsSubmit(false)
        console.log("you have errors in it");
        console.log(formErrors);
      }
    }

    const validate=(values)=>{
      const errors ={};
      var name = /^[a-zA-Z ]+$/;
      if (!values.source){
        errors.source="source is required";
      }
      else if(values.source.length<3){
        errors.source= "source should contain a minimum of 3 letters"
      }else if(!values.source.match(name)){
        errors.source="source should only contains letters and a space"
      }
      
      if (!values.destination){
        errors.destination="destination is required";
      }
      else if(values.destination.length<3){
        errors.destination= "destination should contain a minimum of 3 letters"
      }else if(!values.destination.match(name)){
        errors.destination="destination should only contains letters and a space"
      }

      if(Object.keys(errors).length===0){
        setFormErrors(errors);
        return true
      }
      else{
        setFormErrors(errors);
        return false
      }
    }

    useEffect(()=>{
      console.log("submit button in use effect");
      console.log(formErrors)
      if(Object.keys(formErrors).length===0 && isSubmit){
        console.log("form values");
        console.log(formValues);
        console.log("form submitted successfully");
        navigate('/flights')
      }
    },[formErrors,isSubmit])


    const getPostData=(source,destination)=>{
        let post_data= data.filter(item=>{
            source=source.toLowerCase();
            destination=destination.toLowerCase();
            var item_source=item.source_country.toLowerCase();
            var item_destinaton=item.destination_country.toLowerCase();
            if(item_source.includes(source) && item_destinaton.includes(destination)){
            return item;
          }
      })
      if(post_data.length==0){
        let errors={};
        errors.match="no flights found on that route"
        setFormErrors({...errors});
        return false;
      }
      else{
        setPostData(post_data);
        return true;
      }
    }

    const cancelTicket =(data)=>{
      console.log("ticket button clikced");
      var new_booknigs=bookings.filter(item=>{if(item.bookingId!==data.bookingId){return item}})
      setBookings(new_booknigs);
    }

    const bookTicket =(item)=>{
      console.log(item)
      item.bookingId= ticketId;
      setTicketId(ticketId+1);
      setBookings([...bookings,item])
      alert("ticket booked successfully");
      console.log(bookings)
      console.log(item.flight_id)
    }

  return (
    <userContext.Provider 
    value={[context,setContext,handleSubmit,handleChange,postData,formValues,bookTicket,bookings,formErrors,cancelTicket]}>
          <>
            <h1></h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/myBookings'> My Bookings </Link>
            </nav>
            <Routes>
              <Route  path ="/" element={<Home/>}/>
              <Route  path ="/flights" element={<Flights/>}/>
              <Route path="/myBookings" element={<MyBookings/>} />
            </Routes>
          </>
  </userContext.Provider>
  );
}

export default App;
