import { Box,Button, FormLabel, TextField } from '@mui/material'
import { Axios } from 'axios';
import React, { Component, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";


export const Login = ()=>{
  const history = useNavigate();
  const [result,setResult] = useState('');
  const [user,SetUser] = useState('');
  const [password,SetPassword] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      // if(searchTerm){
      
      const res = await Axios.get("http://localhost:5000/user");
      setResult(res.data);}
    // };

    fetchData();
},[]);
  
   return(
      
      <form >
          <Box display="flex" flexDirection="column" justifyContent={"center"} maxWidth={700} alignContent={"center"} marginLeft={"auto"} margin={"auto"} paddingTop="45px">
              <FormLabel>User Name</FormLabel>
              <TextField  margin='normal' fullWidth variant='outlined' name="name" onChange={(e)=>{SetUser(e.target.value)}} />
              <FormLabel>Password</FormLabel>
              <TextField  margin='normal' fullWidth variant='outlined' name="author"  onChange={(e)=>{SetPassword(e.target.value)}} />
              <Button variant="contained" height="20px" type="Submit" onClick = {()=>history('/home')} >Submit</Button>
          </Box>
      </form>
    )

}
export default Login;