import axios from 'axios'

const FETCH_PRODUCT_REQUEST = "FETCH_PRODUCT_REQUEST"
const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS"
const FETCH_PRODUCT_FAILURE = "FETCH_PRODUCT_FAILURE"


const fetchProductRequest = () =>{
    return{
        type: FETCH_PRODUCT_REQUEST
    }
}

const fetchProductSuccess = (products_data) =>{
    return{
        type : FETCH_PRODUCT_SUCCESS,
        payload : products_data
    }
}

const fetchProductFailure = (product_error) =>{
   return{
    type : FETCH_PRODUCT_FAILURE,
    payload : product_error
   }
}



const fetchProductActionDispatch = () =>{
    return (dispatch) =>{
        dispatch(fetchProductRequest())

         axios.get(`https://dummyjson.com/products`)
         .then(response => dispatch(fetchProductSuccess(response.data.products)))
         .catch(error => dispatch(fetchProductFailure(error.message)))
    }
}


export {FETCH_PRODUCT_FAILURE,FETCH_PRODUCT_REQUEST,FETCH_PRODUCT_SUCCESS,fetchProductActionDispatch}