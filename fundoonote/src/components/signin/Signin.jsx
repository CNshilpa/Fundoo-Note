import React from 'react'
import './Signin.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { loginApi } from '../../services/UserService';

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
          loginApi(signInObj).then((response) =>{console.log(response); localStorage.setItem('token', response.data.id)}).catch((error) => {console.log(error)})
      }
  }
  return (
    <div className='main' id='mainId'>
      <div className='image'>
        <img src="https://download.logo.wine/logo/Google/Google-Logo.wine.png"alt="" width="120" height="80" />
      </div>
      <div className='signin'>Sign In</div>
      <div className='google'>Use your Google Account</div>
      <div className='email'>
        <TextField
          fullWidth
          id="outlined-required"
          label="Email" size='small' onChange={takeEmail}
          error={regexObj.emailBorder} helperText={regexObj.emailHelper}/>
      </div>
      <div className='pass'>
        <TextField type='password'
          fullWidth
          id="outlined-required"
          label="Password" size='small' onChange={takePassword}
          error={regexObj.passwordBorder} helperText={regexObj.passwordHelper}/>
      </div> 
      <div className='button'><Button >Forgot password</Button></div>
        <p className='p'>Not your computer? Use Guest mode to sign in privately</p>
        <div className='learn'>
        <Button>Learn more</Button></div>
      <div className='btn2'><Button >Create account</Button></div>
      <div className='btn3'><Button variant="contained" onClick={submit} >Submit</Button></div>
    </div>
  )
}

export default SignIn