
import React from 'react'
import { userContext} from '../App';
import { useContext } from 'react';
import './home.css';

const Home = (props) => {

    const mystyle={
        backgroundImage: 'url("https://images.pexels.com/photos/891252/pexels-photo-891252.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")',
        backgroundPosition: "center",
        backgroundOrigin: "content-box",
        backgroundRepeat: 'no-repeat',
        backgroundSize:' cover',
        minHeight: '100vh'
    }

    const [context,setContext,handleSubmit,handleChange,postData,formValues,bookTicket,bookings,formErrors]= useContext(userContext);

    return (
      <body style={mystyle}>  
    <div class="box">
        <form onSubmit={handleSubmit}>
            <span class="text-center">Happy Journey</span>
            <div class="input-container">
                <input type="text" required="" name="source" onChange={handleChange} value={formValues.source}/>
                <label>Enter Source</label>
                <p>{formErrors.source}</p>
            </div>
            <div class="input-container">		
                <input type="mail" required="" name="destination" onChange={handleChange} value={formValues.destination}/>
                <label>Enter Destination</label>
               {formErrors&&<div><p>{formErrors.destination}</p></div>}
            </div>
            <p>{formErrors.match}</p>
            <button type="sumbit" class="btn">Book Tikcets</button>
        </form>	
    </div>
      </body>
    )
  }
export default Home


