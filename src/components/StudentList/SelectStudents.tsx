import React from 'react'
import { useQuery, useQueryClient } from 'react-query';
import { useMutation } from 'react-query';

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Box, Paper, Typography,Button,Modal,Grid,TextField } from '@mui/material'
import { callApi } from '../../apiServices/apiservices';
function SelectStudents() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [open2, setOpen2] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const queryClient = useQueryClient();
  
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'emailId',
      headerName: 'Email Id',
      width: 150,
      editable: true,
    },
    {
      field: 'phoneNumber',
      headerName: 'Mobile No',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: "actions",
      headerName: "Action",
      width: 190,
      align:"center",
      headerAlign: "center",
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params: any): any => {
        return (
          <>
          <Button sx={{marginLeft:"10%"}} onClick={() => { setOpen(true);setEmail(params.row.emailId);setPhone(params.row.phoneNumber) }} variant='contained'>Edit</Button>
            {/* <IconButton onClick={(event) => {
              setAnchorEl(event.currentTarget);
              setSelectedClient({
                ...params.row,
                  uniqueClientId: params.row.uniqueClientId,
                  clientName: params.row.clientName,
                  defaultAssignees: params.row.assignees,
                  defaultReviewers: params.row.reviewers
              })
            }}>
              <MoreVertIcon />
            </IconButton> */}
            <Button onClick={()=>{setOpen2(true)}} sx={{marginLeft:"10%"}} color="error" variant='contained'>Delete</Button>

          </>

        );
      },
    },
    
   
  ];
  const [userData, setUserData] = React.useState([{}]);



  useQuery(
    ["getUser"],
    async () => {
      return await callApi({
        method: "get",
        relativePath: "/users"
      })
        .then((res) => res?.data);
    },
    {
      onSuccess: async (data) => {
        console.log(data)
        setUserData(data)
       
     
      },
    },

  );

  const updatedPeople = userData?.map((person,index )=> {
    return {
      ...person,  // Spread the existing properties of the person object
      id: index+1 // Add a new property based on a condition
    };
  });

  const { mutate: updateUser } = useMutation({
    mutationKey: ["UpdatedUser"],
    mutationFn: async(clientData)=>{
      const res = await callApi({
        method:"patch",
        relativePath:"/users", 
        data: clientData,
      });
      return res?.data;

    },
    onSuccess: () => {
      console.log("sucess")
      setOpen(false)
      queryClient.invalidateQueries("getUser")
      
      // queryClient.invalidateQueries("ClientPanUpdate");
      // setPanNumber("")
      // setSucess(true)
    }
  })

  
  const { mutate: deleteUser } = useMutation({
    mutationKey: ["DeleteUser"],
    mutationFn: async(clientData)=>{
      const res = await callApi({
        method:"delete",
        relativePath:`/users?emailId=${email}`, 
        data: clientData,
      });
      return res?.data;

    },
    onSuccess: () => {
      console.log("sucess")
      setOpen(false)
      queryClient.invalidateQueries("getUser")
      
      // queryClient.invalidateQueries("ClientPanUpdate");
      // setPanNumber("")
      // setSucess(true)
    }
  })

  const handleChange=async function () {

    
      
     
    const UserObj={
      uniqueClientId:{
        emailId:email
        },
        phoneNumber:phone,
        emailId:email

    }
    console.log(UserObj)
    updateUser(UserObj)
  }
  const handleDelete=async function (){
 
    deleteUser()

  }


  return (
<>
<Box sx={{height:"700px",width:"1510px",marginLeft:"1%",marginTop:"0.5%"}} component={Paper}>
  <Typography fontWeight={800} sx={{fontSize:"25px",display:"flex",justifyContent:"center",marginTop:"3%"}}>Student Table</Typography>
  <Box sx={{ height: 400, width: '52%' ,display:"flex",justifyContent:"center",marginTop:"2%",marginLeft:"25%"}}>
      <DataGrid
        rows={updatedPeople}
        columns={columns}
        
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  
</Box>
{open &&(
  <Modal
  open={open}
  onClose={()=>{setOpen(false)}}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={{height:"250px",width:"700px",marginLeft:"30%",marginTop:"7%"}} component={Paper}>
  <Box sx={{ paddingLeft: "10%" }}>
  
        <Typography
          variant="h5"
          component="h2"
          sx={{
            fontFamily: "Lato",
            fontWeight: "50px",
            marginTop: "10%",
            paddingLeft: "20%",
            paddingBottom: "5px",
            paddingTop: "30px",
          }}
        >
         Edit Personal Information
        </Typography>

        <Grid container sx={{ paddingTop: "25px" }} spacing={2}>
          <Grid item xs={5}>
            <Typography gutterBottom>Email </Typography>
            <TextField
              id="option1"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              size="small"
              variant="outlined"
              fullWidth
              value={email}
            />
          </Grid>

          <Grid item xs={6}>
            <Typography gutterBottom>Phone No</Typography>
            <TextField
              id="option1"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              size="small"
              variant="outlined"
              fullWidth
              value={phone}
            />
          </Grid>
        </Grid>

       

        <Grid
          container
          item
          xs={2}
          direction="row"
          alignItems={"center"}
          justifyContent={"center"}
          style={{ width: "1000px", padding: "20px", marginLeft: "250px" }}
        >
          <Button
          onClick={handleChange}
            sx={{
              marginRight: "50%",
              "@media(max-width:1400px)": { marginRight: "100%" },
            }}
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </Grid>
  
    </Box>

  </Box>
  </Modal>
 
)}
{open2 &&(
  <Modal
  open={open2}
  onClose={()=>{setOpen2(false)}}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={{height:"200px",width:"500px",marginLeft:"30%",marginTop:"12%"}} component={Paper}>
  <Box sx={{ paddingLeft: "5%" }}>
      
        <Typography
          variant="h5"
          component="h2"
          sx={{
            fontFamily: "Lato",
            fontWeight: "50px",
            
            paddingLeft: "20%",
            paddingBottom: "5px",
            paddingTop: "30px",
          }}
        >
         Are you sure want to delete
        </Typography>

        <Grid container sx={{ paddingTop: "25px",marginTop:"2%",display:"flex",gap:"10rem",marginLeft:"15%" }} spacing={2}>
          <Button onClick={handleDelete} size='large' color='success' variant='contained'>Yes</Button>
       
           <Button onClick={()=>{setOpen2(false)}} size='large' color='error' variant='contained'>No</Button>
       
        </Grid>

       

        <Grid
          container
          item
          xs={2}
          direction="row"
          alignItems={"center"}
          justifyContent={"center"}
          style={{ width: "1000px", padding: "20px", marginLeft: "250px" }}
        >
         
        </Grid>
  
    </Box>

  </Box>
  </Modal>
 
)}

</>
  )
}

export default SelectStudents