import { Box,TextField,Button,Typography} from '@mui/material'
import { Link} from "react-router-dom";
import React from 'react'
import Grid from "@mui/material/Grid";
import Paper from '@mui/material/Paper/Paper'
import { callApi } from '../../apiServices/apiservices';
import { useNavigate } from 'react-router-dom';
function SignUp() {
  const navigate = useNavigate();

    const [dateofbirth, setDateOfBirth] = React.useState("");
    const [name, setName] = React.useState("");
    const [age, setAge] = React.useState("");
    const [phoneNumber, setPhoneNumber] = React.useState("");
    const [permanentAddress,setPermanentAddress] = React.useState("");
    const [guardian, setGuardian] = React.useState("");
    const [guardianPhNo, setGuardianPhNo] = React.useState("");

    const [emailId, setEmailId] = React.useState("");
    const [intrest, setIntrest] = React.useState("");
  
 
    // const [password, setPassword] = React.useState("");
    // async function loginUser() {
        
    //     const userDetails = {
    //       userName:userName ,
    //       password: password,
    //     };
    
    //     if (userDetails.password.length < 8) {
    //       alert("Incorrect Password");
    //       return;
    //     }
    
    //     await mutate(userDetails);
    //   }

    
  async function registerClient(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const registerClientObj= {
     name:name,
     dateofbirth:dateofbirth,
     age:age,
     phoneNumber:phoneNumber,
     permanentAddress:permanentAddress,
     guardian:guardian,
     guardianPhNo:guardianPhNo,
     emailId:emailId,
     intrest:intrest
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
    <Box component={Paper} sx={{height:"1100px",width:"1000px",marginLeft:"20%",marginTop:"5%"}}>
{/*    
        <Box sx={{display:"flex",flexDirection:"column",gap:"3rem",width:"60%",marginLeft:"20%",paddingTop:"15%"}}>
            <Typography sx={{fontWeight:"800",fontSize:"20px",paddingLeft:"25%"}}>Mentor Mentee</Typography>
        <TextField onChange={(e:any)=>{setUserName(e.target.value)}} id="outlined-basic" label="Enter UserName" variant="outlined" />
        <TextField onChange={(e:any)=>{setPassword(e.target.value)}} id="outlined-basic" label="Enter Password" variant="outlined" />
        <Button onClick={loginUser}>Login</Button>  
        </Box>
       <Link to={"/signUp"}> <Typography sx={{fontSize:"10px",marginLeft:"43%"}}>Create Account </Typography></Link> */}
<Box sx={{ paddingLeft: "10%" }}>
    
        <Typography
          variant="h5"
          component="h2"
          sx={{
            fontFamily: "Lato",
            fontWeight: "50px",
            marginTop: "1%",
            paddingLeft: "30%",
            paddingBottom: "5px",
            paddingTop: "30px",
          }}
        >
         Mentor-Mentee
        </Typography>
        <form onSubmit={registerClient}>
        <Grid container sx={{ paddingTop: "25px" }} spacing={2}>
          <Grid item xs={5}>
            <Typography gutterBottom>Name</Typography>
            <TextField
              id="option1"
              onChange={(e) => {
                setName(e.target.value);
              }}
              size="small"
              variant="outlined"
              fullWidth
              value={name}
              required
            />
          </Grid>

          <Grid item xs={6}>
            <Typography gutterBottom>Phone No</Typography>
            <TextField
              id="option1"
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
              size="small"
              variant="outlined"
              fullWidth
              value={phoneNumber}
            />
          </Grid>
        </Grid>

        <Grid container sx={{ paddingTop: "25px" }} spacing={2}>
          <Grid item xs={5}>
            <Typography gutterBottom>Date of Birth</Typography>
            <TextField
              id="option1"
              onChange={(e) => {
                setDateOfBirth(e.target.value);
              }}
              size="small"
              variant="outlined"
              fullWidth
              value={dateofbirth}
            />
          </Grid>

          <Grid item xs={6}>
            <Typography gutterBottom>Email Id</Typography>
            <TextField
              id="option1"
              onChange={(e) => {
                setEmailId(e.target.value);
              }}
              size="small"
              variant="outlined"
              fullWidth
              value={emailId}
            />
          </Grid>
        </Grid>

        <Grid container sx={{ paddingTop: "25px" }} spacing={2}>
          <Grid item xs={5}>
            <Typography gutterBottom>Age</Typography>
            <TextField
              id="option1"
              onChange={(e) => {
                setAge(e.target.value);
              }}
              size="small"
              variant="outlined"
              fullWidth
              value={age}
            />
          </Grid>

          <Grid item xs={6}>
            <Typography gutterBottom>Intrest</Typography>
            <TextField
              id="option1"
              onChange={(e) => {
                setIntrest(e.target.value);
              }}
              size="small"
              variant="outlined"
              fullWidth
              value={intrest}
            />
          </Grid>
        </Grid>

        <Grid container sx={{ paddingTop: "25px" }} spacing={2}>
          <Grid item xs={5}>
            <Typography gutterBottom>Guardian Name</Typography>
            <TextField
              id="option1"
              onChange={(e) => {
                setGuardian(e.target.value);
              }}
              size="small"
              variant="outlined"
              fullWidth
              value={guardian}
            />
          </Grid>

          <Grid item xs={6}>
            <Typography gutterBottom>Guardian Phone No</Typography>
            <TextField
              id="option1"
              onChange={(e) => {
                setGuardianPhNo(e.target.value);
              }}
              size="small"
              variant="outlined"
              fullWidth
              value={guardianPhNo}
            />
          </Grid>
        </Grid>

        <Grid container sx={{ paddingTop: "25px" }} spacing={2}>
          <Grid item xs={5}>
            <Typography gutterBottom>Address</Typography>
            <TextField
              id="option1"
              onChange={(e) => {
                setPermanentAddress(e.target.value);
              }}
           
              variant="outlined"
              fullWidth
              multiline
              rows={3}

              value={permanentAddress}
            />
          </Grid>
        </Grid>

        {/* <Grid
          container
          item
          xs={2}
          direction="row"
          alignItems={"center"}
          justifyContent={"center"}
          style={{ width: "1000px", padding: "20px", marginLeft: "250px" }}
        > */}
        <Box sx={{display:"flex",justifyContent:'center',marginTop:"3%",marginLeft:"22%"}}>
          <Button
            sx={{
              marginRight: "50%",
              "@media(max-width:1400px)": { marginRight: "100%" },
             
            }}
            variant="contained"
            type="submit"
          >
       
            Sign Up
          </Button>
          </Box>
          </form>
          <Link to={"/logIn"}> <Typography sx={{fontSize:"10px",marginLeft:"35%"}}>Already have a Account </Typography></Link>
        {/* </Grid> */}

    </Box>
    </Box>
  )
}

export default SignUp