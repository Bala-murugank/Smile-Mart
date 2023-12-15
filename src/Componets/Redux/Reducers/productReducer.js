
import { FETCH_PRODUCT_FAILURE,FETCH_PRODUCT_SUCCESS,FETCH_PRODUCT_REQUEST } from "../Actions/productActions";


const initialProductsList = {
    loading : false,
    productsList : [],
    error : '' 
}



const fetchProductReducer = (state = initialProductsList, action) =>{

    switch(action.type){
        case FETCH_PRODUCT_REQUEST : return {...state, loading : true}

        case FETCH_PRODUCT_SUCCESS : return {...state, loading : false, productsList : action.payload}

        case FETCH_PRODUCT_FAILURE : return {...state, error : action.payload}

        default : return state
    }
}


export {fetchProductReducer}