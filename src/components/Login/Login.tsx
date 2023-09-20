import { Box,TextField,Button,Typography} from '@mui/material'
import { Link} from "react-router-dom";
import React from 'react'
import Paper from '@mui/material/Paper/Paper'
// import { useMutation } from "react-query";
function Login() {

    const [userName, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");

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

    async function loginUser() {
        
        const userDetails = {
          userName:userName ,
          password: password,
        };
    
        if (userDetails.password.length < 8) {
          alert("Incorrect Password");
          return;
        }
    
        // await mutate(userDetails);
      }
  return (
    <Box component={Paper} sx={{height:"500px",width:"500px",marginLeft:"30%",marginTop:"5%"}}>
   
        <Box sx={{display:"flex",flexDirection:"column",gap:"3rem",width:"60%",marginLeft:"20%",paddingTop:"15%"}}>
            <Typography sx={{fontWeight:"800",fontSize:"20px",paddingLeft:"25%"}}>Mentor Mentee</Typography>
        <TextField onChange={(e:any)=>{setUserName(e.target.value)}} id="outlined-basic" label="Enter UserName" variant="outlined" />
        <TextField onChange={(e:any)=>{setPassword(e.target.value)}} id="outlined-basic" label="Enter Password" variant="outlined" />
        <Button onClick={loginUser}>Login</Button>  
        </Box>
       <Link to={"/signUp"}> <Typography sx={{fontSize:"10px",marginLeft:"43%"}}>Create Account </Typography></Link>

    </Box>
  )
}

export default Login