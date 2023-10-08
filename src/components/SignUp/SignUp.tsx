import { Box, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper/Paper";
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { callApi } from '../../apiServices/apiservices';
import "./signup.css";




function SignUp(prop:any) {
  
  const navigate = useNavigate();

  //Declaring State of Objects.

  const [name, setName] = React.useState("");
  const [emailId, setEmailId] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmpassword, setConfirmPassword] = React.useState("");

  //Handling Form

  async function registerClient(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const registerClientObj= {
      name:name,
      phoneNumber:phoneNumber,
      emailId:emailId,
      password:password
     };

     const response = await callApi({
      method: "post",
      data: registerClientObj,
      relativePath: "/users",
    });

    if (response?.data === "Email id is already taken") {
      alert("Email id already taken")
    } else {
      navigate("/")
    }

  }

  const validatePassword = () => {
    if (password !== confirmpassword) {
      // Return an error message
      return 'Passwords must match.';
    }
  
    // Return null if there are no errors
    return null;
  };
  
  const handleConfirmPasswordChange = (e:any) => {
    setConfirmPassword(e.target.value);
  
    // Validate the password
    const errorMessage = validatePassword();
  
    // Display the error message if there is one
    if (errorMessage) {
      // Display the error message
      alert(errorMessage)
    }
  };

  return (
    <div className="bg">
      <Box component={Paper} elevation={15} className="signup__border">
        <h3 className="signup__heading">Mentor Mantee</h3>
        <form onSubmit={registerClient}>
          <TextField
            className="signup__textfeild"
            id="outlined-basic"
            label="Name"
            required
            value={name}
            variant="outlined"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
          value={emailId}
           onChange={(e) => {
            setEmailId(e.target.value);
          }}
          required
            className="signup__textfeild"
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
          />
          <TextField
          value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            className="signup__textfeild"
       required
            id="outlined-basic"
            label="Mobile Number"
            variant="outlined"
          />
          <TextField
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
            className="signup__textfeild"
            type="password"
            id="outlined-basic"
            required
            label="Password"
            variant="outlined"
          />
          <TextField
          value={confirmpassword}
           onChange={(e) => {
            handleConfirmPasswordChange(e)
          }}
            className="signup__textfeild"
            type="password"
            id="outlined-basic"
            required
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
