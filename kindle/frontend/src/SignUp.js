import * as React from 'react';
import {Box} from '@mui/material';
import {Grid} from '@mui/material';
import {Link} from '@mui/material';
import { Field, Form, FormSpy } from 'react-final-form';
import { useState,useEffect } from 'react';
import AppAppBar from './modules/views/AppAppBar';
import AppForm from './modules/views/AppForm';
import RFTextField from './modules/form/RFTextField';
import FormButton from './modules/form/FormButton';
import FormFeedback from './modules/form/FormFeedback';
import withRoot from './modules/withRoot';
import { Typography } from '@mui/material';
import  axios  from 'axios';
import "./components/Book/style.css"
import { useNavigation } from 'react-router-dom';
function SignUp() {
  const [sent, setSent] = useState(false);

    const googleAuth = () => {
      console.log("google auth");
      window.open(
        "http://localhost:5000/auth/google/callback",
        "_self"
      );
      
  };
  const [inputs,setInputs] = useState({
    name:'',
    password:''
  })
    const handleChange=(e)=>{
      setInputs((prev) => ({
          ...prev,[e.target.name]:e.target.value
      }));
  }
  const sendRequest = async()=>{
    await axios.post("http://localhost:5000/user",{
        name:String(inputs.name),
        password:String(inputs.password)
  }).then(res=>res.data)};

  const handleSubmit=(e)=>{
    if (e && e.preventDefault) {
    e.preventDefault();//reloads
    }
    sendRequest().then('/user')
    alert("Response Sent")
  }

  return (
    
    <React.Fragment>
     
      <AppAppBar />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Sign Up
          </Typography>
          <Typography variant="body2" align="center">
            <Link href="/signin" underline="always">
              Already have an account?
            </Link>
          </Typography>
        </React.Fragment>
        <Form
          onSubmit={handleSubmit}
          subscription={{ submitting: true }}
          
        >
          {({ handleSubmit: handleSubmit2, submitting }) => (
            <Box component="form" onSubmit={handleSubmit2} noValidate sx={{ mt: 6 }} display="grid" padding= "20px" gap="20px">
              <Grid>
                <label htmlFor="name">Name:</label>
                <input
                    style={{width: "100%", height: "36px",border:"none", position: "relative", padding:"10px",borderBottom:"2px solid black"}}
                    
                  
                    label="Email"
                   
                    name="name"
                    onChange={handleChange}
                    required
                  />
              </Grid>
              <label htmlFor="email">Email</label>
              <input
                    style={{width: "100%", height: "36px",border:"none", position: "relative", padding:"10px",borderBottom:"2px solid black"}}
                    label="Email"
                    name="email"
                    required
                  />
              <label htmlFor="password">Password</label>
               <input
                  style={{width: "100%", height: "36px",border:"none", position: "relative", padding:"10px", borderBottom:"2px solid black"}}
                 
  
                  required
                  name="password"
                  label="Password"
                  type="password"
                  onChange={handleChange}
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
                {submitting || sent ? 'In progress…' : 'Sign Up'}
                
              </FormButton>
              <p className="text">or</p>
              <button className="google" onClick={googleAuth}>
                  <img src="google.png" alt="Google"></img>
                  <span>Sign Up with Google</span>
              </button>
            </Box>
          )}
        </Form>
      </AppForm>
    
    </React.Fragment>
  );
}

export default withRoot(SignUp);