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

export const userContext = React.createContext();

function App() {
    const navigate= useNavigate()
    const [postData,setPostData] =useState([]);
    const initialValues = {source:"", destination:""};
    const [formValues,setFormValues] =useState(initialValues);
    const [context, setContext] = useState("default context value");

    const [bookings,setBookings] =useState([])
    const [bookingId,setBookingId]= useState(1);
  
    const handleChange =(e) =>{
      const {name,value} =e.target;
      setFormValues({...formValues,[name]:value});
    }
    
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log('form submitted');
        getPostData(formValues.source,formValues.destination)
        console.log(postData);
        navigate('/flights')
    }

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
    setPostData(post_data);
    }

    const bookTicket =(item)=>{
      setBookings([...bookings,item])
      console.log(bookings)
      console.log(item.flight_id)
      console.log("ticket booked");
    }

  return (
    <userContext.Provider 
    value={[context,setContext,handleSubmit,handleChange,postData,formValues,bookTicket,bookings]}>
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




import React from 'react'
import { userContext} from '../App';
import { useContext } from 'react';

const Home = (props) => {
    const [context,setContext,handleSubmit,handleChange,postData,formValues]= useContext(userContext);
    
    return (
      <>  
    <h1> Happy Journey</h1>
    <form onSubmit={handleSubmit}> 
        <label> Enter Source</label>
        <input type="text" name="source" onChange={handleChange} value={formValues.source}></input>
        <label> Enter Destination</label>
        <input type="text" name="destination" onChange={handleChange} value={formValues.destination}></input>
        <br></br>
        <button  type="submit">Book tickets</button>
    </form>
      <div>Home page </div>
      </>
    )
  }
export default Home




import React from 'react'
import { userContext} from '../App';
import { useContext } from 'react';

function Flights() {

  const [context,setContext,handleSubmit,handleChange,postData,formValues,bookTicket]= useContext(userContext);
  return (
    <>
       <h1>You are in flights page</h1>
       <form onSubmit={handleSubmit}> 
          <label> Enter Source</label>
          <input type="text" name="source" onChange={handleChange} value={formValues.source}></input>
          <label> Enter Destination</label>
          <input type="text" name="destination" onChange={handleChange} value={formValues.destination}></input>
          <button  type="submit">Book tickets</button>
      </form>
       {postData.map((item,index)=>(
                  <>
                    <div key={index}>
                        <div>Source Country is : {item.source_country}   </div>
                        <div>Destination Country is :{item.destination_country}   </div>
                        <div>Flight Id is : {item.flight_id}</div>
                        <div>Arrival Time is : {item.Arrival_time}</div>
                        <div>Departure Time is : {item.Departure_time}</div>
                        <div>Source Airport is : {item.source_airport}</div>
                        <div>Destination Airport is :{item.destination_airport}</div>
                    </div>
                    <button onClick={()=>bookTicket(item)}>Book TIcket</button>
                    <h1>******************************</h1>
                  </>
                ))}
    </>
  )
}
export default Flights




import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  {/* we here need to enclose this in the BrowserRouter  */}
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
