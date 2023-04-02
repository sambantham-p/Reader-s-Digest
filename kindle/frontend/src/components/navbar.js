import React, { useEffect, useState } from 'react'
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import {AppBar,InputBase,styled, Toolbar, Typography,Badge, Menu, MenuItem, Tabs, Tab} from "@mui/material"
import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/icons-material/AccountCircle';
import Favorite from '@mui/icons-material/Favorite';
import {Link, NavLink} from 'react-router-dom';
import axios from 'axios';
import Grade from '@mui/icons-material/Grade';
import Books from './Book/Books';
import './Book/style.css'
import { SearchInput } from './search';

export const Navbar = () => {

	const logout = () => {
        
		// window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
		window.open(`http://localhost:3000`, "_self");
	};
  const Profile = () => {
      <Link to='/profile'></Link>
  };
  const [open,setOpen] = useState(false)
  // const [searchTerm, setSearchTerm] = useState('');
  // const [results, setResults] = useState([]);
  const Nav = styled(Toolbar)({
        display: 'flex',
        justifyContent: 'space-between',
  });

  const Icon = styled('div')(({theme})=>({

    borderRadius: theme.shape.borderRadius,
    gap:"20px",
    
    
  }));
  // useEffect(() => {
  //   const fetchData = async () => {
  //     if(searchTerm){
  //     const res = await axios.get(`http://localhost:5000/search?q=${searchTerm}`);
  //     setResults(res.data);}
  //   };

  //   fetchData();
  // }, [searchTerm]);
  // const handleSearch = (e) => {
    
  //   e.preventDefault();
    
  //   setSearchTerm(e.target.value);
  // };
  const[value,setValue]=useState();
  // console.log(results);
  return (
    <div>
      <AppBar position='sticky'>
        
        <Nav>
            <Typography sx={{display:{xs:"none", sm:"block"},fontFamily:"cursive"}}>Kindle</Typography>
            <PedalBikeIcon sx={{display:{xm:"block", sm:"none"}}}/>
            {/* <input style={{borderRadius:"10px", height:"20px",paddingLeft:"5px"}}
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}  /> */}
            <SearchInput/>
            <Tabs textColor="inherit" indicatorColor='secondary' value={value} onChange={(e,val)=>setValue(val)}>
                <Tab LinkComponent={NavLink} to="/about" label="About Us"></Tab>
                <Tab LinkComponent={NavLink} to="/books" label="Books"></Tab>
                <Tab LinkComponent={NavLink} to="/add" label="Add Book"></Tab>
            </Tabs>
            <Icon sx={{display:{xs:"none", sm:"flex"}}}>
                <Badge badgeContent={4} color="error">
                    <MailIcon />
                </Badge>
                <Badge badgeContent={4} color="error">
                    <Favorite/>
                </Badge>
                <Badge>
                    <Avatar onClick={e=>setOpen(true)}></Avatar>
                </Badge>
            </Icon>
           
            <Badge  sx={{display:{xs:"flex", sm:"none"}}}>
                <Avatar onClick={e=>setOpen(true)}></Avatar>
            </Badge>
            <Menu 
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e)=>{setOpen(false)}}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
            >
                <MenuItem onClick={Profile}>Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
        </Nav>
        </AppBar>
        {/* <div >
                   
            {results.books && results.books.map((result)=>(
              <div className="card" key={result._id}>
                  <img src={result.image} alt={result.name} height="300px" width="250px"/>
                  <article>By {result.author}</article>
                  <h2>{result.name}</h2>
                  <div className="Rating">
                    <h3>Rs {result.price}</h3>
                    <h3 className='Grade'><Grade/>{result.rating}</h3>
                  </div>
                </div>
            )) } 
            
        </div> */}
      </div>
  )
}

export default Navbar; 