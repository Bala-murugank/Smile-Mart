import { fetchProductReducer } from "../Reducers/productReducer";
import {createStore,combineReducers}from  'redux'
import { applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { addToCartReducer } from "../Reducers/addTocartReducer";
import userReducer from "../Reducers/employeeReducer";
import { userLoginReducer } from "../Reducers/userLoginReducer";

const rootReducer = combineReducers({fetchProduct : fetchProductReducer, addToCart : addToCartReducer, employee : userReducer, userLogin : userLoginReducer})

const smileSmartStore = createStore(rootReducer, applyMiddleware(thunk,logger) )


export {smileSmartStore}