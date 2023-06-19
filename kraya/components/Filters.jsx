import React from 'react'
import '../css/filters.css'
import MultiRangeSlider from "multi-range-slider-react";
import { useEffect } from 'react';
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const Filters = (props) => {
    const { filterAll} = props;

    useEffect(() => {
        const mql = window.matchMedia("(max-width: 768px)");
        mql.onchange = (e) => {
          let filterDiv = document.querySelector(".filters");
          if (e.matches) {
              filterDiv.style.display="none"
            } else {
              filterDiv.style.display="block";
          }
        };
      },[]);

    return (
        <>
            <section className='filters border col-12'>
                <div className="filters-top">
                    <span>Filters</span>
                    <span>Clear All</span>
                </div>

                {/* 
                    Accordian for mutli range slider 
                */}
                <Accordion>
                    <AccordionSummary 
                            expandIcon={<ExpandMoreIcon />} 
                            id="panel1a-header"
                    >
                        <Typography>Price</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        <div className="range">
                            <MultiRangeSlider
                                min={0} max={1000} step={50}
                                label={true}
                                ruler={false}
                                minValue={0} maxValue={1000}
                                onChange={filterAll}
                                barInnerColor="blue"
                                thumbLeftColor="lime" thumbRightColor="lime"
                            />
                        </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                {/*  
                    Accordian for brand values 
                */}
                <Accordion>
                    <AccordionSummary 
                            expandIcon={<ExpandMoreIcon />} 
                            id="panel1a-header"
                    >
                        <Typography>Brand</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <div className='brand_data'>
                                <div className='col-5'>
                                    <input className="brand_check" value="apple"  onClick={filterAll} type="checkbox" />
                                    <label htmlFor="">Apple</label>
                                </div>
                                <div className='col-5'>
                                    <input className="brand_check" value="samsung"  onClick={filterAll} type="checkbox" />
                                    <label htmlFor="">Samsung</label>
                                </div>
                            </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </section>
        </>
    )
}

export default Filters
