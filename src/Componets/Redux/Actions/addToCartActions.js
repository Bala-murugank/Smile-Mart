const ADD_TO_CART_ADD_REQUEST = 'ADD_TO_CART_ADD_REQUEST'
const ADD_TO_CART_ADD_SUCCESS ='ADD_TO_CART_ADD_SUCCESS'
const ADD_TO_CART_REMOVE_REQUEST ='ADD_TO_CART_REMOVE'
const ADD_TO_CART_REMOVE_SUCCESS = 'ADD_TO_CART_REMOVE_SUCCESS'

const FETCH_CART_PRODUCTS_REQUEST = "FETCH_CART_PRODUCTS_REQUEST"
const FETCH_CART_PRODUCTS_SUCCESS ="FETCH_CART_PRODUCTS_SUCCESS"

const CART_PRODUCT_PRICE_DETAILS = "CART_PRODUCT_PRICE_DETAILS"

const CART_PRODUCT_QUANTITY_INCREMENT = "CART_PRODUCT_QUANTITY_INCREMENT"
const CART_PRODUCT_QUANTITY_DECREMENT = "CART_PRODUCT_QUANTITY_DECREMENT"

const CART_PRODUCT_EMPTY ="CART_PRODUCT_EMPTY"


const GET_CART_PRICE = "GET_CART_PRICE"
const GET_CART_OFFER_PRICE ="GET_CART_OFFER_PRICE"
const GET_CART_TOTAL_PRICE = "GET_CART_TOTAL_PRICE"


const addToCartAddRequest = () =>{
    return{
        type : ADD_TO_CART_ADD_REQUEST
    }
}

const addToCartAddSuccess = (addToCartAddItem) =>{
    return{
        type : ADD_TO_CART_ADD_SUCCESS,
        payload: addToCartAddItem
    }
}

const addTocartRemoveRequest = () =>{
    return{
        type:ADD_TO_CART_REMOVE_REQUEST,
        
    }
}

const addToCartRemoveSucess = (addTocartRemoveItem)=>{
    return{
        type:ADD_TO_CART_REMOVE_SUCCESS,
        payload : addTocartRemoveItem
    }
}


const fetchCartProductsRequest = ()=>{
    return{
        type : FETCH_CART_PRODUCTS_REQUEST
    }
}

const fetchCartProductSuccess = () =>{
    return {
        type: FETCH_CART_PRODUCTS_SUCCESS
    }
}


const cartProductPriceDetails = ()=>{
    return {
        type : CART_PRODUCT_PRICE_DETAILS
    }
}

const cartProductQuantityIncrement = (productID)=>{
    return {
        type : CART_PRODUCT_QUANTITY_INCREMENT,
        payload : productID
    }
}

const cartProductQuantityDecrement = (productID)=>{
    return {
        type : CART_PRODUCT_QUANTITY_DECREMENT,
        payload : productID
    }
}

const cartproductEmpty = () =>{
    return{
        type : CART_PRODUCT_EMPTY
    }
}




const addToCartAddAction = (addProduct_Item)=>{
    return (dispatch)=>{
         dispatch(addToCartAddRequest())
         dispatch(addToCartAddSuccess(addProduct_Item))
    }
}

const addToCartRemoveAction = (removeProduct_Item) =>{
    return (dispatch) =>{
        dispatch(addTocartRemoveRequest())
        dispatch(addToCartRemoveSucess(removeProduct_Item))
    }
}

const fetchCartProductsAction = ()=>{
    return (dispatch) =>{
        dispatch(fetchCartProductsRequest())
        dispatch(fetchCartProductSuccess())
        
    }
}


const getCartPrice = (cartItem)=>{
     return{
        type: GET_CART_PRICE,
        payload : cartItem
     }
}

const getCartOfferPrice = () =>{
    return{
        type : GET_CART_OFFER_PRICE,
        
    }
}

const getCartTotalPrice = () =>{
    return {
        type : GET_CART_TOTAL_PRICE,
       
    }
}



export {ADD_TO_CART_ADD_REQUEST,ADD_TO_CART_ADD_SUCCESS,
ADD_TO_CART_REMOVE_REQUEST,ADD_TO_CART_REMOVE_SUCCESS,addToCartAddAction,
addToCartRemoveAction,FETCH_CART_PRODUCTS_REQUEST,FETCH_CART_PRODUCTS_SUCCESS,
fetchCartProductsAction,CART_PRODUCT_PRICE_DETAILS,cartProductPriceDetails,
CART_PRODUCT_QUANTITY_DECREMENT,CART_PRODUCT_QUANTITY_INCREMENT,
cartProductQuantityDecrement,cartProductQuantityIncrement,CART_PRODUCT_EMPTY,cartproductEmpty,
GET_CART_OFFER_PRICE,GET_CART_PRICE,GET_CART_TOTAL_PRICE,getCartOfferPrice,getCartPrice,getCartTotalPrice}