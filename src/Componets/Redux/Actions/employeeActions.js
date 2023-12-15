
import axios from 'axios'

const FETCH_USER_REQUEST = "FETCH_USER_REQUEST"
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS"
const FETCH_USER_FAILURE = "FETCH_USER_FAILURE"

const DELETE_USER_REQUEST = "DELETE_USER_REQUEST"

const EDIT_USER_REQUEST = "EDIT_USER_REQUEST"
const EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS"

const ADD_USER_REQUEST = "ADD_USER_REQUEST"
const ADD_USER_SUCCESS = "ADD_USER_SUCCESS"


const fetchUserRequest=() =>{
     return{
        type : FETCH_USER_REQUEST
     }
}

const fetchUserSuccess = (userData) =>{
    return{
        type : FETCH_USER_SUCCESS,
        data : userData
    }
}

const fetchUserFailure = (error) =>{
    return{
        type: FETCH_USER_FAILURE,
        error : error
    }
}


const deleteUserRequest = () =>{
    return{
        type : DELETE_USER_REQUEST
    }
}



const editUserRequest = () =>{
    return{
        type: EDIT_USER_REQUEST
    }
}

const editUserSucess = () =>{
    return{
        type: EDIT_USER_SUCCESS
    }
}


const addUserRequest = () =>{
    return{
        type: ADD_USER_REQUEST
    }
}

const addUserSuccess = () =>{
    return{
        type: ADD_USER_SUCCESS
    }
}




const fetchUser= () =>{
    return async (dispatch)=>{
        dispatch(fetchUserRequest())

        const response = await axios.get('http://localhost:3001/users')
                               .catch(error => dispatch(fetchUserFailure(error)))

                            
              dispatch(fetchUserSuccess(response.data))
        


    }
}


const deleteUser = (deleteUserID) =>{
    return async (dispatch) =>{
        dispatch(fetchUserRequest())

            await axios.delete(`http://localhost:3001/users/${deleteUserID}`)
             .catch(error => dispatch(fetchUserFailure(error.message)))

         
                dispatch(deleteUserRequest())
                

             
              
    }

}


const editUser = (editUserID, updatedUserData) =>{
    return  (dispatch) =>{
        dispatch(editUserRequest())

        axios.put(`http://localhost:3001/users/${editUserID}`,updatedUserData)
               .then(dispatch(editUserSucess()))
              
              .catch(error => dispatch(fetchUserFailure(error.message)))

             
              
    }

}


const addUser = (addUserData) =>{
    return  (dispatch) =>{
        dispatch(addUserRequest())

        axios.post(`http://localhost:3001/users`, addUserData)
               .then(dispatch(addUserSuccess()))
             
              .catch(error => dispatch(fetchUserFailure(error.message)))

             
              
    }

}






export {fetchUser,fetchUserFailure,fetchUserRequest,fetchUserSuccess, deleteUser, editUser,addUser}
export {FETCH_USER_REQUEST,FETCH_USER_SUCCESS,FETCH_USER_FAILURE, DELETE_USER_REQUEST, EDIT_USER_REQUEST,EDIT_USER_SUCCESS,ADD_USER_REQUEST,ADD_USER_SUCCESS}