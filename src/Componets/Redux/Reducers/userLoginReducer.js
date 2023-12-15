import { USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS } from "../Actions/userLoginActioins";


const authentication = {
    loading : false,
    Auth : false
}


const userLoginReducer = (state = authentication, action)=>{
    switch(action.type){
        case USER_LOGIN_REQUEST : return {...state, loading : true}

        case USER_LOGIN_SUCCESS : return {...state, loading:false, Auth : action.payload}

        default : return state
    }
}


export {userLoginReducer}