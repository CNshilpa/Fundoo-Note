import React from 'react'
import './Signin.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { loginApi } from '../../services/UserService';
import { useNavigate } from 'react-router-dom';
import { Paper } from '@mui/material';
import { Box } from '@mui/system';

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function SignIn() {

  const [signInObj,setsignInObj] = React.useState({email : "",password : ""})

  const [regexObj,setregexObj] = React.useState({
      emailBorder : false , emailHelper : "",passwordBorder : false ,passwordHelper : ""
  })
  const takeEmail = (event) =>
  {
     console.log(event.target.value)
     setsignInObj((prevState) =>({...prevState,email : event.target.value}))
  }

  const takePassword = (event) =>
  {
      setsignInObj((prevState) =>({...prevState,password : event.target.value}))
      
  }

  const navigate = useNavigate()
  const submit = () =>
  {
      console.log("submit",signInObj)
      let emailText = emailRegex.test(signInObj.email)
      let passwordText = passwordRegex.test(signInObj.password)
      if(emailText === false)
      {
          setregexObj((prevState) => ({...prevState,emailBorder : true,emailHelper :"Enter correct email"}))
      }
      else if(emailText === true)
      {
          setregexObj((prevState) => ({...prevState,emailBorder : false,emailHelper :""}))
      }

      if(passwordText === false)
      {
          setregexObj((prevState) => ({...prevState,passwordBorder : true,passwordHelper :"Enter correct password"}))
      }
      else if(passwordText === true)
      {
          setregexObj((prevState) => ({...prevState,passwordBorder : false,passwordHelper :""}))
      }

      if(emailText === true && passwordText === true)
      {
          loginApi(signInObj).then((response) =>{console.log(response); 
            localStorage.setItem('token', response.data.id);
            navigate('/dashboard')
          })
            .catch((error) => {console.log(error)})

      }
  }
  const createAccount = () =>{
    navigate('/signup')
  }
  return (
    <Paper className='main' id='mainId'>
      <Box className='image'>
        <img src="https://download.logo.wine/logo/Google/Google-Logo.wine.png"alt="" width="120" height="80" />
      </Box>
      <Box className='signin'>Sign In</Box>
      <Box className='google'>Use your Google Account</Box>
      <Box className='email'>
        <TextField
          fullWidth
          id="outlined-required"
          label="Email" size='small' onChange={takeEmail}
          error={regexObj.emailBorder} helperText={regexObj.emailHelper}/>
      </Box>
      <Box className='pass'>
        <TextField type='password'
          fullWidth
          id="outlined-required"
          label="Password" size='small' onChange={takePassword}
          error={regexObj.passwordBorder} helperText={regexObj.passwordHelper}/>
      </Box> 
      <Box className='button'><Button >Forgot password</Button></Box>
        <p className='p'>Not your computer? Use Guest mode to sign in privately</p>
        <Box className='learn'>
        <Button>Learn more</Button></Box>
      <Box className='btn2'><Button onClick={createAccount}>Create account</Button></Box>
      <Box className='btn3'><Button variant="contained" onClick={submit} >Submit</Button></Box>
    </Paper>
  )
}

export default SignIn