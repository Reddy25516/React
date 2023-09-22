

// ****************************************************************
// *****************************************************************

// this is the way of fetching the online data 
// with axios 

useEffect(()=>{
    axios.get('https://dummyjson.com/products')
    .then(res =>{
        setPosts(res.data.products);
        setJsonData(res.data.products);
    })
    .catch(err =>{
        console.log(err)
    })
    // setPosts(data);
    // setJsonData(data);
},[])


// **************************************************************