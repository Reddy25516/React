
import data from './data.json'

let originalData= data;

let initialData={
    jsonData :originalData,
    cart : {
        cartCount : 0,
        wishCount : 0,
        totalPrice : 0
    },
    navData: originalData,
    data : originalData, 
    sortOrder : "",
    myAccount :  {},
    accounts : JSON.parse(localStorage.getItem("accounts")) || []
}

export const reducerData =(state=initialData,action)=>{

    let new_state=state;
    switch(action.type){
        case "TOOGLE_WISH":
            new_state.cart.wishCount= action.count
            return {...new_state}

        case "CART_COUNT":
            new_state.cart.cartCount= action.count
            return {...new_state}
        
        case "CHANGE_DATA":
            new_state.data= action.data
            if(new_state.myAccount.email){
                new_state.myAccount.data=action.data
                let index=new_state.myAccount.id
                new_state.accounts[index]=new_state.myAccount
                localStorage.setItem("accounts",JSON.stringify(new_state.accounts));
            }
            return {...new_state}

        case "MY_ACCOUNT":
            new_state.myAccount= action.data
            if(action.data.email){
                let index=action.data.id 
                new_state.accounts[index]=action.data
                localStorage.setItem("accounts",JSON.stringify(new_state.accounts));
            }
            return {...new_state}

        case "ACCOUNTS":
            new_state.accounts= action.data
            localStorage.setItem("accounts",JSON.stringify(action.data));
            return {...new_state}
        
        case "NAV_DATA":
            new_state.navData= action.data 
            return {...new_state}
            
        case "SORT_ORDER":
            console.log("here we are")
            new_state.sortOrder= action.data 
            return {...new_state}
        default:
            return state;
    }
}


