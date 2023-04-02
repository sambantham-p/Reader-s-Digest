import * as React from 'react';
import { useState } from 'react';
import { Form, FormSpy } from 'react-final-form';
import {Box} from '@mui/material';
import {Link } from "react-router-dom";
import axios  from 'axios';
import AppAppBar from './modules/views/AppAppBar';
import AppForm from './modules/views/AppForm';
import FormButton from './modules/form/FormButton';
import FormFeedback from './modules/form/FormFeedback';
import withRoot from './modules/withRoot';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import "./components/Book/style.css"
const URL = "http://localhost:5000/user";
function SignIn() {
  const history = useNavigate();
  const [sent, setSent] = React.useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const googleAuth = (e) => {
      e.preventDefault()
      console.log(`${process.env.REACT_APP_API_URL}/auth/google/callback`)
      window.open(
        "http://localhost:5000/auth/google/callback",
        "_self"
      );

  };

  const handleSubmit = async(e) => {
    try{      
      setSent(true)
      const response = await axios.get(URL);
      const user = response.data;
      console.log(user);
      // user.users.map((item) => (
      
      //   (item.name === email && item.password === password)?
      
      //   history('/home') : alert('Incorrect password')
         
      // ))
      if(email != "" && password != "")
      {
      user.users.map((item) => {
      
        if(item.name === email && item.password === password)
        {
          console.log(email);
            history('/home') 
            return(
              alert("Success")
            )
        }
       
      
    })
  }
 
      // for(let i = 0; i < user.length; i++){
      //   const users = user[i];
      //   console.log(users.name)
      //   if (users.name=== email && users.password === password) {
      //     history('/home');
      //   } else {
      //     alert('Incorrect password');
      //   }
      // }
     
    } catch (error) {
      alert(error);
    }
  };

  return (
    <React.Fragment>
      <AppAppBar />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Sign In
          </Typography>
          <Typography variant="body2" align="center">
            {'Not a member yet? '}
            <Link
              to="/signup"
              align="center"
              underline="always"
            >
              Sign Up here
            </Link>
          </Typography>
        </React.Fragment>
        <Form
          onSubmit={handleSubmit}
          subscription={{ submitting: true }}
       
        >
          {({ handleSubmit: handleSubmit2, submitting }) => (
           
            <Box component="form" onSubmit={handleSubmit2} noValidate sx={{ mt: 6 }} display="grid" padding= "20px" gap="20px">
            <input
                style={{width: "100%", height: "36px", position: "relative", padding:"10px",border:"none",borderBottom:"2px solid black"}}
                
                fullWidth
                label="Email"
                
                name="email"
                onChange={(e)=> {setEmail(e.target.value)}}
                required
              />
              <input
                style={{width: "100%", height: "36px", position: "relative", padding:"10px",border:"none",borderBottom:"2px solid black"}}
                fullWidth
              
              
                required
                name="password"
              
                label="Password"
                type="password"
                
                onChange={(e)=>setPassword(e.target.value)}
              />
           <FormSpy subscription={{ submitError: true }}>
                {({ submitError }) =>
                  submitError ? (
                    <FormFeedback error sx={{ mt: 2 }}>
                      {submitError}
                    </FormFeedback>
                  ) : null
                }
              </FormSpy>
              <FormButton
                sx={{ mt: 3, mb: 2 }}
                disabled={submitting || sent}
                color="secondary"
                fullWidth
              
              >
                {submitting || sent ? 'In progress…' : 'Sign In'}
                
              </FormButton>
              <p className="text">or</p>
              <button className="google" onClick={googleAuth}>
                  <img src="google.png" alt='Google'></img>
                  <span>Sign in with Google</span>
              </button>
            </Box>
         
          )}
        </Form>
        <Typography align="center">
          <Link underline="always" href="/premium-themes/onepirate/forgot-password/">
            Forgot password?
          </Link>
        </Typography>
      </AppForm>
  
    </React.Fragment>
  );
}

export default withRoot(SignIn);