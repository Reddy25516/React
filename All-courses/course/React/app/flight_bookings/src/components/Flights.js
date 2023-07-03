import React from 'react'
import { userContext} from '../App';
import { useContext } from 'react';

function Flights() {

  const myStyle={
      backgroundImage : "none",
      backgroundColor: "white",
  };

  const [context,setContext,handleSubmit,handleChange,postData,formValues,bookTicket]= useContext(userContext);
  return (
    <body >
       <h1>You are in flights page</h1>
       <form onSubmit={handleSubmit}> 
          <label> Enter Source</label>
          <input type="text" name="source" onChange={handleChange} value={formValues.source}></input>
          <label> Enter Destination</label>
          <input type="text" name="destination" onChange={handleChange} value={formValues.destination}></input>
          <button  type="submit">Book tickets</button>
      </form>
      <div class="flight">
       {postData.map((item,index)=>(
                  <>
                    <div class="flight_box" key={index}> 
                      <div class="name"> <div class="left">Source Country is  </div>:
                                  &nbsp;&nbsp;&nbsp;&nbsp;{item.source_country} </div>
                      <div class="name"> <div class="left">Destination Country is</div>: 
                                  &nbsp;&nbsp;&nbsp;{item.destination_country}</div> 
                      <div class="name"> <div class="left">Flight Id is  </div>: 
                                  &nbsp;&nbsp;&nbsp;{item.flight_id} </div>
                      <div class="name"> <div class="left">Arrival Time is  </div>: 
                                  &nbsp;&nbsp;&nbsp;{item.Arrival_time} </div>
                      <div class="name"> <div class="left">Departure Time is  </div>: 
                                  &nbsp;&nbsp;&nbsp;{item.Departure_time} </div>
                      <div class="name"> <div class="left">Source Airport is  </div>: 
                                  &nbsp;&nbsp;&nbsp;{item.source_airport} </div>
                      <div class="name"> <div class="left">Destination Airport is </div>: 
                                  &nbsp;&nbsp;&nbsp;{item.destination_airport} </div>
                      <div class="name"> <div class="left">Ticket Price is </div>: 
                                  &nbsp; &nbsp;{item.price} </div>
                      <button class="btn" onClick={()=>bookTicket(item)}>Book TIcket</button>
                    </div>
                  </>
                ))}
        </div>
    </body>
  )
}
export default Flights

