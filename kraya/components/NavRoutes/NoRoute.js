import React from 'react'
import norouteimg from '../../images/noroute.PNG';
import '../../css/display.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const NoRoute = () => {
    const navigate = useNavigate();
  return (
    <div className='noroute'>
        <div className='main d-flex'>
            <div className='col-6'>
                <img  className="col-8 img-fluid " src={norouteimg} alt="no route"></img>
            </div>
            <div className='col-6'>
                <button onClick={() => navigate(-1)}>Go Back</button>
                <Link to="/">
                    <button> Go to Home page</button>
                </Link>
            </div>
        </div>
    </div>
  )
}
export default NoRoute
