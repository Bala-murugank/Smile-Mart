import {FETCH_USER_REQUEST,FETCH_USER_SUCCESS, FETCH_USER_FAILURE,DELETE_USER_REQUEST,
EDIT_USER_REQUEST,EDIT_USER_SUCCESS,ADD_USER_REQUEST,ADD_USER_SUCCESS} from '../Actions/employeeActions'


 
const initialUser ={
    loading: false,
    users : [],
    error : ''
}

const userReducer = (state=initialUser, action)=>{

    switch(action.type){
        case FETCH_USER_REQUEST : return{...state, loading:true}

        case FETCH_USER_SUCCESS : return{...state, users : action.data}

        case FETCH_USER_FAILURE : return {...state, error:action.error}

        case DELETE_USER_REQUEST : return {...state, loading : true}

        case EDIT_USER_REQUEST : return {...state, loading: true}

        case EDIT_USER_SUCCESS : return {...state, loading: false}

        case ADD_USER_REQUEST : return{...state,loading:true}

        case ADD_USER_SUCCESS : return{...state, loading: false}

        default : return state
    }

}




export  default userReducer