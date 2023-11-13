
// this is the way to use the currency formatter 
import React from 'react'
import CurrencyFormat from 'react-currency-format';
const Sample = () => {
  return (
    <div>
        <CurrencyFormat value={2456981} displayType={'text'} thousandSeparator={true} prefix={'$'} />


        <CurrencyFormat value={2456981} displayType={'text'} thousandSeparator={false} prefix={'$'} />
    </div>
  )
}
export default Sample


'************************************'



const Sample1 = () => {
    return (
      <div>

        {/*  thousand seperator to be false  */}
          <CurrencyFormat value={2456981} displayType={'text'} thousandSeparator={false} prefix={'$'} />

        {/* 
            with this line of codes you will get getting the hundred seperator 
            here both the thousand separator and the thousand spacing exist
        */}
          <CurrencyFormat value={2456981} displayType={'text'} thousandSeparator={true} thousandSpacing={'2'} prefix={'$'} />

        {/* adding the suffix for a money */}
          <CurrencyFormat value={56981} displayType={'text'} thousandSeparator={true}  prefix={'$'}  suffix ={'/-'}/>
      </div>
    )
  }






//   currency converter on change  function 

  const Sample2 = () => {

    const [val,setVal]=useState(72625);
    return (
      <div>
  <CurrencyFormat value={val}  thousandSeparator={true}  prefix={'$'} displayType={'input'} onValueChange={(values) => {
      const {formattedValue, value} = values;
      setVal(formattedValue)
      }}
  />
      </div>
    )
  }

//   the values array will have below values 

    floatValue: 7262
    formattedValue: "$7,262"
    value: "7262"



'********************************************'


// card type number formatting

const Sample3 = () => {

    const [val,setVal]=useState('');
    return (
      <div>
  <CurrencyFormat value={val}   displayType={'input'}  format="#### #### #### ####" onValueChange={(values) => {
      const {formattedValue, value} = values;
      setVal(formattedValue)
      }}
  />
      </div>
    )
  }

export default Sample


'**************************************'


import React, { useState } from 'react'
import CurrencyFormat from 'react-currency-format';

// var CurrencyFormat = require('react-currency-format');

const Sample = () => {

    const [val,setVal]=useState('');

    function limit(val, max) {
        if (val.length === 1 && val[0] > max[0]) {
          val = '0' + val;
        }
      
        if (parseInt(val) > max) {
            val = max;
          }
        return val;
      }
      
      function cardExpiry(val) {
        let month = limit(val.value.substring(0, 2), '12');
        let year = val.value.substring(2, 4);
      
        let value= month + (year.length ? '/' + year : '');
        setVal(value);
      }
      
    //   <CurrencyFormat format={cardExpiry}/>

    return (
      <div>
  <CurrencyFormat value={val} format="##/##" placeholder="MM/YY" mask={['M', 'M', 'Y', 'Y']}   displayType={'input'} onValueChange={cardExpiry}/>
      </div>
    )
  }

export default Sample




