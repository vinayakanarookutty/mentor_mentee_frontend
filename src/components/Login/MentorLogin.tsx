import { Box, TextField, Button,  } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import Paper from "@mui/material/Paper/Paper";
import { callApi } from "../../apiServices/apiservices";
import { useNavigate } from 'react-router-dom';
import {
 
  useMutation,

} from 'react-query'
import "./login.css";
// import { useMutation } from "react-query";
function MentorLogin(prop:any) {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  // const { mutate, isLoading } = useMutation(authenticate.loginUser, {
  //     onSuccess: ({ data, status }) => {
  //       console.log(data);
  //       if (status === 201) {
  //         alert("You are banned from anywhere");
  //         return;
  //       }
  //       localStorage.setItem("anywhere-user", JSON.stringify(data));
  //       setUser(data.username);
  //       navigate("/");
  //     },
  //   });

  const { mutate: login } = useMutation({
    mutationKey: ["AuthorisationOfuser"],
    mutationFn: async (data: any) => {
      const response = await callApi({
        relativePath: `/mentors`,
        method: "post",
        data,
      });
      return response;
    },
    onSuccess: (response:object) => {
      console.log(response)
      if (response && response.status === 200) {
        navigate("/");
        prop.setUser(response.data);
      } else if(response.status ==202)
      {
        alert("Email does not exist")
      }
      else {
        alert("Password is wrong")
      }
    
    }
  });

  async function loginUser() {
    const userDetails = {
      status:"Login",
      userName: userName,
      password: password,
    };

login(userDetails)
  
  }
  return (
    <div className="bg">
      <Box component={Paper} elevation={15} className="login__border">
        <h2 className="login__heading ">Welcome Back User</h2>
        <form action="">
          <TextField
            onChange={(e: any) => {
              setUserName(e.target.value);
            }}
            className="login__textfield"
            id="outlined-basic"
            label="Enter Username"
            variant="outlined"
          />
          <TextField
            onChange={(e: any) => {
              setPassword(e.target.value);
            }}
            type="password"
            id="outlined-basic"
            className="login__textfield"
            label="Enter Password"
            variant="outlined"
          />
          <Button className="login__button" variant="contained" size="large" onClick={loginUser}>Login</Button>
        </form>
        <div className="login__signup">
          <Link to={''} className="login__link"><p className="login__passreset">Reset your Password</p></Link>
          <Link to={'/signUp'} className="login__link"> <p> Signup Now</p></Link>
        </div>
      </Box>
    </div>


  );
}

export default MentorLogin;
