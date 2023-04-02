import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/navbar';
import Login from './login';
import About from './About';
import React, { useState,useEffect } from 'react';
import Books from './components/Book/Books';
import { Navigate, Route,Routes } from 'react-router-dom';
import { BrowserRouter as Router} from "react-router-dom";
import AddBook from './components/AddBook';
import { Search } from './components/SearchResults';
import LandingPage from './LandingPage';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Profile from './components/profile';
import axios from 'axios';
function App() {
  const [user,setUser] = useState('');
  const getUser = async () => {
    try{
      const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
      const {data} = await axios.get(url,{withCredentials:true});
      setUser(data.user._json);
    }
    catch(err){
      console.log(err);
    };
  }
  useEffect(()=>{
    getUser();
  },[]); 
  return (
    <React.Fragment>
      <header>
        <Navbar/>
      </header> 
      <main>
        <Routes>
          <Route path='/' element={<LandingPage/>} exact />
          <Route path='/home' element={<Home/>} exact />
          <Route path='/signup' element={<SignUp/>} exact />
          <Route path='/signin' element={<SignIn/>} exact />
          <Route path='/books' element={<Books/>} exact />
          <Route path='/add' element={<AddBook/>} exact />
          <Route path='/about' element={<About/>} exact />
          <Route path='/search' element={<Search/>} exact />
          <Route path='/profile' element={<Profile user={user}/>} exact />
        </Routes>
        
      </main>
    </React.Fragment>
  );
}

export default App;
