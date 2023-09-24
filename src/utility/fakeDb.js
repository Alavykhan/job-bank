// add data to local storage 

const addToDb= id =>{
    let jobCart={};
    // get previous data from local storage
    const storedJob = localStorage.getItem('job-cart');
    if(storedJob){
        jobCart = JSON.parse(storedJob);
    }
    //add quantity 
    const quantity = jobCart[id]
    if(quantity){
        const newQuantity = quantity + 1;
        jobCart[id]= newQuantity
    }else{
        jobCart[id]=1
    }
    localStorage.setItem('job-cart', JSON.stringify(jobCart))
} 

//get data from local storage
const getStoredCart =()=>{
    let jobCart = {};

    const storedJob = localStorage.getItem('job-cart');
    if(storedJob){
        jobCart= JSON.parse(storedJob);
    }
    return jobCart
} 

export {addToDb, getStoredCart};