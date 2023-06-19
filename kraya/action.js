
export const toggleWish=(count)=>{
    return{
        type: "TOOGLE_WISH",
        count
    }
}

export const changeCartCount=(count)=>{
    return{
        type: "CART_COUNT",
        count
    }
}

export const changeData=(data)=>{
    return{
        type: "CHANGE_DATA",
        data
    }
}

export const changeMyAccount=(data)=>{
    return{
        type: "MY_ACCOUNT",
        data
    }
}

export const setAccountsData=(data)=>{
    return{
        type: "ACCOUNTS",
        data
    }
}

export const changeNavData=(data)=>{
    return{
        type : "NAV_DATA",
        data
    }
}

export const setSearchData=(data)=>{
    return{
        type : "SEARCH_DATA",
        data
    }
}

export const updateSortOrder=(data)=>{
    return{
        type : "SORT_ORDER",
        data
    }
}


// import {useDispatch,useSelector} from "react-redux";
// import {changeData, toggleWish,changeCartCount, changeMyAccount,setAccountsData,setNavData} from './action';

// const dispatch =useDispatch();
// const values =useSelector(state=>state)

// let posts = values.data
// let cartCount= values.cart.cartCount;
// let wishCount=values.cart.wishCount
// let jsonData= values.jsonData
// let sortBy= values.sortBy
// let navData= values.data 
// let myAccount= values.myAccount

// dispatch(changeCartCount(cartCount))
// dispatch(changeData([...obj]))
// dispatch(toggleWish(wishCount+1))
// dispatch(changeMyAccount(account))
// dispatch(setAccountsData(data))


// [addToCart, load_rating, addToWishList,filterAll,setLocal] 