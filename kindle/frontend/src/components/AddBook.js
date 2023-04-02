import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigation } from 'react-router-dom';
import Navbar from './navbar';


const AddBook = () => {
    const nav = useNavigation;
  const [inputs,setInputs] = useState({
    name:'',
    description:'',
    price:'',
    author:'',
    available:false,
    image:"",
    rating:'',

  });
  const handleChange=(e)=>{
        setInputs((prev) => ({
            ...prev,[e.target.name]:e.target.value
        }));
  }
  const sendRequest = async()=>{
    await axios.post("http://localhost:5000/books",{
        name:String(inputs.name),
        author:String(inputs.author),
        description:String(inputs.description),
        price:String(inputs.price),
        image:String(inputs.image),
        available:String(inputs.available)
    }).then(res=>res.data);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();//reloads
    sendRequest().then('/books')
    console.log(inputs.name)
  }
  return (
   <form onSubmit={handleSubmit}>
       
        <Box display="flex" flexDirection="column" justifyContent={"center"} maxWidth={700} alignContent={"center"} marginLeft={"auto"} margin={"auto"} paddingTop="45px">
            <FormLabel>Name</FormLabel>
            <TextField value={inputs.name} onChange={handleChange} margin='normal' fullWidth variant='outlined' name="name"/>
            <FormLabel>Author</FormLabel>
            <TextField  value={inputs.author} onChange={handleChange} margin='normal' fullWidth variant='outlined' name="author"/>
            <FormLabel>Description</FormLabel>
            <TextField  value={inputs.description} onChange={handleChange}margin='normal' fullWidth variant='outlined' name="description"/>
            <FormLabel>Price</FormLabel>
            <TextField  value={inputs.price} onChange={handleChange} type="number" margin='normal' fullWidth variant='outlined' name="price"/>
            <FormLabel>Image</FormLabel>
            <TextField  value={inputs.image} onChange={handleChange} type="string" margin='normal' fullWidth variant='outlined' name="image"/>
            <FormControlLabel control={<Checkbox defaultChecked/>} label="Available"/>
            <FormLabel>Rating</FormLabel>
            <TextField  value={inputs.rating} onChange={handleChange} type="number" margin='normal' fullWidth variant='outlined' name="rating"/>
            <Button variant="contained" type="submit">Add Book</Button>
        </Box>
   </form>
  )
}

export default AddBook;
