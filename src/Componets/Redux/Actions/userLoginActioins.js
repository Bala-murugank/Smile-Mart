const  USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST"
const  USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS"




const userLoginRequest =()=>{
    return{
        type: USER_LOGIN_REQUEST
    }
}

const userLoginSuccess = (userLogin)=>{
      return{
        type : USER_LOGIN_SUCCESS,
        payload : userLogin
      }
}




const userLoginAction = (isLogin)=>{
    return (dispatch) =>{
        dispatch(userLoginRequest())
        dispatch(userLoginSuccess(isLogin))
    }
}

export {USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,userLoginAction}
