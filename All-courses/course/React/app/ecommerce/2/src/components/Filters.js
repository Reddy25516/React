import React from 'react'
import { useEffect } from 'react';

const Filters = (props) => {

    const { posts, setPosts ,filterAll} = props;
    const rangePrice = document.querySelectorAll(".range-price input");

    const rangeInput = document.querySelectorAll(".range-input input");

    const priceFilter = () => {
        let a = parseInt(rangePrice[0].value);
        let b = parseInt(rangePrice[1].value);
        console.log(a,b);
        setTimeout(() => {    
            let new_data = []
            for (let i = 0; i < posts.length; i++) {
                if (posts[i]['price'] >= a && posts[i]['price'] <= b) {
                    new_data = [...new_data, posts[i]]
                };
            }
            console.log(new_data)
            setPosts([...new_data]);
        });
    }

    let rangeMin = 100;
    const range = document.querySelector(".range-selected");


    rangeInput.forEach((input) => {
        input.addEventListener("input", (e) => {
            let minRange = parseInt(rangeInput[0].value);  
            let maxRange = parseInt(rangeInput[1].value);  
            if (maxRange - minRange < rangeMin) {  
                if (e.target.className === "min") {
                    rangeInput[0].value = maxRange - rangeMin;
                } else {
                    rangeInput[1].value = minRange + rangeMin;
                }
            } else {
                rangePrice[0].value = minRange;
                rangePrice[1].value = maxRange;
                rangeInput[0].value = minRange;
                rangeInput[1].value = maxRange;
                range.style.left = (minRange / rangeInput[0].max) * 100 + "%";
                range.style.right = 100 - (maxRange / rangeInput[1].max) * 100 + "%";
            }
            priceFilter();
        });
    });
    
    let angle_down= document.getElementsByClassName("fa-angle-down");
    let price_show =document.getElementsByClassName("price-show");
    const angle_function=()=>{
        for(let i=0;i<angle_down.length;i++){
            angle_down[i].addEventListener("click", function (e) {
                console.log("angle button clikced");
                e.target.classList.toggle("rotate");
                price_show[i].classList.toggle("show");
            })
        }
    }
        
    useEffect(() => {
        angle_function();
        // price_function();
      },[]);
    return (
        <>
            <section className='filters border col-3'>
                <div className="d-flex filter-sty  one border">
                    <div>Filters</div>
                    <div>Clear All</div>
                </div>
                <div className='price border'>
                    <div className='d-flex filter-sty'>
                        <div> Price</div>
                        <i className="fa-solid fa-angle-down"></i>
                    </div>
                    <div className="range price-show show">
                        <div className="range-slider">
                            <span className="range-selected"></span>
                        </div>
                        <div className="range-input">
                            <input type="range" className="min" min="0" max="1300" value="300" step="50" />
                            <input type="range" className="max" min="0" max="1300" value="900" step="50" />
                        </div>
                        <div className="range-price">
                            <label for="min">Min</label>
                            <input type="number" name="min" value="300" />
                            <label for="max">Max</label>
                            <input type="number" name="max" value="900" />
                        </div>
                    </div>
                </div>

                <div className="brand angle_down_fn border">
                    <div className='d-flex filter-sty'>
                        <div> Brand</div>
                        <i className="fa-solid fa-angle-down "></i>
                    </div>
                    <div className="price-show show">
                        <div className='brand_data'>
                            <div className='col-5'>
                                <input className="brand_check" value="apple" onClick={filterAll} type="checkbox" />
                                <label for="">Apple</label>
                            </div>
                            <div className='col-5'>
                                <input className="brand_check" value="samsung" onClick={filterAll} type="checkbox" />
                                <label for="">Samsung</label>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Filters
