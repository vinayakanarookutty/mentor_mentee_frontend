import { Box, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper/Paper";
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { callApi } from '../../apiServices/apiservices';
import "./signup.css";




function SignUp() {
  const navigate = useNavigate();

  //Declaring State of Objects.

  const [name, setName] = React.useState("");
  const [emailId, setEmailId] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  //Handling Form

  async function registerClient(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const registerClientObj= {
      name:name,
      phoneNumber:phoneNumber,
      emailId:emailId,
     };

     const response = await callApi({
      method: "post",
      data: registerClientObj,
      relativePath: "/users",
    });

    if (response?.data === "Email id is already taken") {
      alert("Email id already taken")
    } else {
      navigate("/home")
    }

  }

  return (
    <div className="bg">
      <Box component={Paper} elevation={15} className="signup__border">
        <h3 className="signup__heading">Mentor Mantee</h3>
        <form onSubmit={registerClient}>
          <TextField
            className="signup__textfeild"
            id="outlined-basic"
            label="Name"
            variant="outlined"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
           onChange={(e) => {
            setEmailId(e.target.value);
          }}
            className="signup__textfeild"
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
          />
          <TextField
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            className="signup__textfeild"
            type="password"
            id="outlined-basic"
            label="Mobile Number"
            variant="outlined"
          />
          <TextField
            className="signup__textfeild"
            type="password"
            id="outlined-basic"
            label="Password"
            variant="outlined"
          />
          <TextField
            className="signup__textfeild"
            type="password"
            id="outlined-basic"
            label="Confirm Password"
            variant="outlined"
          />

          <Button type="submit" className="signup__button" variant="contained" size="large">
            Signup
          </Button>
        </form>
        <div className="signup__login">
          <p>
            Already had an account.
            <Link to={"/login"} className="signup__link">
              Click Here
            </Link>
          </p>
        </div>
      </Box>
    </div>
  );
}

export default SignUp;
