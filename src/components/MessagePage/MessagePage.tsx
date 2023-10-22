import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
function MessagePage() {
  return (
    <>
   
   
<Box sx={{height:"700px",width:"1500px",marginTop:"1%",marginLeft:"1%"}} component={Paper}>
<Typography sx={{marginTop:"1%",marginLeft:"5%"}}>Message</Typography>
<TextField sx={{marginLeft:"1%",marginTop:"1%"}} rows={5} multiline/>
<Button sx={{display:"flex",marginTop:"1%",marginLeft:"5%"}}>Send</Button>
</Box>
    </>
   
  )
}

export default MessagePage