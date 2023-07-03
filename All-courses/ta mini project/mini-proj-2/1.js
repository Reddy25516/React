obj = {
    "status": true,
    "message": "Success",
    "timestamp": 1662275995178,
    "data": {
      "general": [
        {
          "classType": "3A",
          "fare": 505,
          "breakup": [
            {
              "title": "Base Charges",
              "key": "baseFare",
              "cost": 441
            },
            {
              "title": "Reservation Charges",
              "key": "reservationCharges",
              "cost": 40
            },
            {
              "title": "GST",
              "key": "serviceTax",
              "cost": 24
            },
            {
              "title": "Total Amount",
              "key": "total",
              "cost": 505
            }
          ]
        },
        {
          "classType": "SL",
          "fare": 175,
          "breakup": [
            {
              "title": "Base Charges",
              "key": "baseFare",
              "cost": 155
            },
            {
              "title": "Reservation Charges",
              "key": "reservationCharges",
              "cost": 20
            },
            {
              "title": "Total Amount",
              "key": "total",
              "cost": 175
            }
          ]
        },
        {
          "classType": "2A",
          "fare": 710,
          "breakup": [
            {
              "title": "Base Charges",
              "key": "baseFare",
              "cost": 626
            },
            {
              "title": "Reservation Charges",
              "key": "reservationCharges",
              "cost": 50
            },
            {
              "title": "GST",
              "key": "serviceTax",
              "cost": 34
            },
            {
              "title": "Total Amount",
              "key": "total",
              "cost": 710
            }
          ]
        },
        {
          "classType": "2S",
          "fare": 105,
          "breakup": [
            {
              "title": "Base Charges",
              "key": "baseFare",
              "cost": 90
            },
            {
              "title": "Reservation Charges",
              "key": "reservationCharges",
              "cost": 15
            },
            {
              "title": "Total Amount",
              "key": "total",
              "cost": 105
            }
          ]
        }
      ],
      "tatkal": [
        {
          "classType": "3A",
          "fare": 1105,
          "breakup": [
            {
              "title": "Base Charges",
              "key": "baseFare",
              "cost": 712
            },
            {
              "title": "Reservation Charges",
              "key": "reservationCharges",
              "cost": 40
            },
            {
              "title": "GST",
              "key": "serviceTax",
              "cost": 53
            },
            {
              "title": "Tatkal Charges",
              "key": "tatkalCharges",
              "cost": 300
            },
            {
              "title": "Total Amount",
              "key": "total",
              "cost": 1105
            }
          ]
        },
        {
          "classType": "SL",
          "fare": 395,
          "breakup": [
            {
              "title": "Base Charges",
              "key": "baseFare",
              "cost": 275
            },
            {
              "title": "Reservation Charges",
              "key": "reservationCharges",
              "cost": 20
            },
            {
              "title": "Tatkal Charges",
              "key": "tatkalCharges",
              "cost": 100
            },
            {
              "title": "Total Amount",
              "key": "total",
              "cost": 395
            }
          ]
        },
        {
          "classType": "2A",
          "fare": 1540,
          "breakup": [
            {
              "title": "Base Charges",
              "key": "baseFare",
              "cost": 1016
            },
            {
              "title": "Reservation Charges",
              "key": "reservationCharges",
              "cost": 50
            },
            {
              "title": "GST",
              "key": "serviceTax",
              "cost": 74
            },
            {
              "title": "Tatkal Charges",
              "key": "tatkalCharges",
              "cost": 400
            },
            {
              "title": "Total Amount",
              "key": "total",
              "cost": 1540
            }
          ]
        },
        {
          "classType": "2S",
          "fare": 190,
          "breakup": [
            {
              "title": "Base Charges",
              "key": "baseFare",
              "cost": 160
            },
            {
              "title": "Reservation Charges",
              "key": "reservationCharges",
              "cost": 15
            },
            {
              "title": "Tatkal Charges",
              "key": "tatkalCharges",
              "cost": 15
            },
            {
              "title": "Total Amount",
              "key": "total",
              "cost": 190
            }
          ]
        }
      ]
    }
  }
  arr=JSON.stringify(obj);
  data_array= JSON.stringify(obj.data);
  // console.log(data_array);
  data_arr=JSON.parse(data_array);
  // console.log(data_arr);
  
  // console.log(obj.data.tatkal);
  
  // for (const [key, value] of Object.entries(obj.data.general)) {
  //   console.log(key);
  //   // 
  //   // console.log(value)
  //   console.log(value.classType);
  //   console.log(value.fare);
    
    
  // }
  general_arr= obj.data.general;
  // console.log(data_arr);
  for (const [key, value] of Object.entries(data_arr)){
    console.log(value);
  }