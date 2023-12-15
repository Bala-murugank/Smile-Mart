import React from "react";
import { Form, Button } from "react-bootstrap";
import "./login.css";
import { useSelector, useDispatch } from "react-redux";
import { userLoginAction } from "../Redux/Actions/userLoginActioins";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const autherizedEmployee = useSelector((state) => state.employee.users);
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  //const [errors, setErrors] =useState({})
  const isLogin = true;

  const loginSubmit = (data) => {
    if (
      autherizedEmployee.some(
        (Item) => Item.name === data.uname && Item.password === data.password
      )
    ) {
      dispatch(userLoginAction(isLogin));
      navigateTo("/");
      
    } else {
      console.log("false");
    }

    //setErrors(validation(loginUservalue, autherizedEmployee))
    //setAuth(autherizedEmployee.some((Item) => (Item.name === loginUservalue.userName) && (Item.password === loginUservalue.password)))
  };

  // useEffect(() => {
  //   if (
  //     loginUservalue.userName !== "" &&
  //     loginUservalue.password !== "" &&
  //     errors.auth
  //   ) {
  //     dispatch(userLoginAction());
  //     navigateTo("/");
  //   }
  // }, [errors]);

  return (
    <>
      <div className="login-page">
        <div className="login-form">
          <div className="login-form-company-logo">
            <img
              src={require("../../images/eCommarceLogo.png")}
              alt="smile smart logo"
            ></img>
          </div>
          <div className="login-form-inputs">
            <Form
              className="d-flex flex-column gap-3"
              onSubmit={handleSubmit((data) => loginSubmit(data))}
            >
              <Form.Group>
                <Form.Label>User Name:</Form.Label>

                <Form.Control
                  type="text"
                  placeholder="User name"
                  {...register("uname", {
                    required: "User name can't be empty",
                  })}
                />
                {errors?.uname && (
                  <p className="error-message">{errors.uname.message}</p>
                )}
              </Form.Group>

              <Form.Group>
                <Form.Label>Password:</Form.Label>

                <Form.Control
                  type="password"
                  placeholder="password"
                  {...register("password", {
                    required: "password can't be empty",
                    minLength: {
                      value: 8,
                      message: "phone number should be 8 digit",
                    },
                  })}
                />
                {errors?.password && (
                  <p className="error-message">{errors.password.message}</p>
                )}
              </Form.Group>

              <Form.Group className="login-form-submit-button">
                <Button variant="info" type="submit">
                  Sumbit
                </Button>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
