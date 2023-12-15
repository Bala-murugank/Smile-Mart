import React from 'react'

import Dropdown from 'react-bootstrap/Dropdown';
import {FaRegUserCircle } from "react-icons/fa";
import { userLoginAction } from "../Redux/Actions/userLoginActioins";
import { useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { cartproductEmpty } from '../Redux/Actions/addToCartActions';
const UserMenu = () => {

  const navigateTo = useNavigate();
  const dispatch = useDispatch();


  const userLogOut = (event) =>{
    event.preventDefault()
     dispatch(userLoginAction(false));
     dispatch(cartproductEmpty())
      navigateTo("/");
  }
  return (
    <> 
    <Dropdown>
      <Dropdown.Toggle >  
          
               <FaRegUserCircle style={{width:70, height :40,textAlign:'center'}}/>
         
         
      </Dropdown.Toggle>

      <Dropdown.Menu style={{backgroundColor:'rgba(0, 0, 0, 0.5)'}}>
        
        <Dropdown.Item>Welcome</Dropdown.Item>
        
          <Dropdown.Item>
            <button style={{border:'none',outline:'none'}} onClick={(event)=> userLogOut(event)}>log out</button>
            </Dropdown.Item>  
       
      </Dropdown.Menu>
    </Dropdown>
    </>
  )
}

export default UserMenu
