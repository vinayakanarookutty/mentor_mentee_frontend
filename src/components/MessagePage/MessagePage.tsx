import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
function MessagePage() {
  return (
    <>
<Box sx={{height:"700px",width:"1500px",marginTop:"1%",marginLeft:"1%"}} component={Paper}>
<Typography>Message Page</Typography>
<TextField id="outlined-basic" label="Outlined" variant="outlined"/>

</Box>
    </>
   
  )
}

export default MessagePage