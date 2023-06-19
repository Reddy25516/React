import React, { useEffect, useState } from 'react'
import Home from './NavRoutes/Home';
import Phones from './NavRoutes/Phones';
import Laptops from './NavRoutes/Laptops';
import Fragrances from './NavRoutes/Fragrances';
import Groceries from './NavRoutes/Groceries';
import SkinCare from './NavRoutes/SkinCare';
import HomeDecoration from './NavRoutes/HomeDecoration';
import { Route,Routes } from 'react-router-dom';
import Filters from './Filters';
import { userContext} from '../App';
import { useContext } from 'react';
import '../css/display.css';
import SortOrder from './SortOrder';
import NoRoute from './NavRoutes/NoRoute';
import {FaBars} from "react-icons/fa";
import { useRef } from "react";
import {AiOutlineClose} from "react-icons/ai"
import { motion,  useCycle } from "framer-motion";

export const displayContext = React.createContext();

const Display = () => {
  const [addToCart, load_rating, addToWishList,filterAll,minRangeValue,maxRangeValue,set_minRangeValue,set_maxRangeValue] = useContext(userContext);
  const [b,setB]=useState(0);
  useEffect(()=>{
    // console.log("show values in display",showValues);
  },[]);

  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef(null);
  
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 768px)");
    mql.onchange = (e) => {
      let motionDiv = document.querySelector(".motion-div");
      let filterDiv = document.querySelector(".filters");
      if (e.matches) {
          motionDiv.style.display = "block";
          setIsOpen(false)
          filterDiv.style.display="none"
        } else {
          motionDiv.style.display="none"
          filterDiv.style.display = "block";
      }
    };
  },[]);

  return (
    <div className='display-page'>
      <displayContext.Provider value={[b,setB]}>
        <div>
             <SortOrder filterAll={filterAll} b={b} setB={setB} />
        </div>

        <div className='d-flex'>

          <motion.div className="motion-div"
            style={{
              width: isOpen?"260px":"45px",
              height: isOpen ? "400px": "45px",
              borderRadius:isOpen?"0%": "50%"
            }}
            >
              <div className="toggle-btn" onClick={() => setIsOpen(!isOpen)} >
              {isOpen?<AiOutlineClose />: <FaBars />}
              </div>
              {isOpen&&
              <div className="content" >
                <Filters  
                filterAll={filterAll} minRangeValue={minRangeValue} maxRangeValue={maxRangeValue}
                set_minRangeValue={set_minRangeValue} set_maxRangeValue={set_maxRangeValue}
                />
              </div>
            }
          </motion.div>

          <Filters className="filter-main"
              filterAll={filterAll} minRangeValue={minRangeValue} maxRangeValue={maxRangeValue}
              set_minRangeValue={set_minRangeValue} set_maxRangeValue={set_maxRangeValue}
          />
          
          <div className='products'>
              <Routes>
                <Route index element={<Home/>} /> 
                <Route path="home" element={<Home />} />
                <Route  path ="phones" element={<Phones/>}/>
                <Route path="laptops" element={<Laptops/>} />
                <Route path="groceries" element={<Groceries/>} />
                <Route path="fragnaces" element={<Fragrances/>} />
                <Route path="skincare" element={<SkinCare/>} />
                <Route path="homedecoration" element={<HomeDecoration/>} />
                <Route path="*" element={<NoRoute />}/>
              </Routes>
          </div>
        </div>
        </displayContext.Provider>
    </div>
  )
}

export default Display


const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};
