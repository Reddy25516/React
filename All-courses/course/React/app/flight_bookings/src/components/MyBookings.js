import React from 'react'
import { useLocation } from 'react-router-dom';
import { userContext} from '../App';
import { useContext } from 'react';
function MyBookings(props) {
  const [context,setContext,handleSubmit,handleChange,postData,
    formValues,bookTicket,bookings,formErrors,cancelTicket]= useContext(userContext);
  return (
    <>
    <div>
       <h1>Below are you bookings</h1>
    </div>
    {console.log("my bookings are ",bookings)}
    <div class="flight">
       {bookings.map((item,index)=>(
                  <>
                    <div class="flight_box" key={index}> 
                      <div class="name"> <div class="left">Ticket id is  </div>:
                                  &nbsp;&nbsp;&nbsp;&nbsp;{item.bookingId} </div>
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
                      <button class="btn" onClick={()=>cancelTicket(item)}>Cancel Ticket</button>
                    </div>
                  </>
                ))}
        </div>
    </>
  )
}
export default MyBookings
