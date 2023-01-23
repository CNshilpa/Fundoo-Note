import React from 'react'
import './SignUp.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import accountpic from '../img/account.svg'
import { registerApi } from '../../services/UserService';
import { useNavigate } from 'react-router-dom';


const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const nameRegex =  /^[A-Z]{1}[a-z]{2,}$/;

function SignUp() {

  const [signUpObj,setsignUpObj] = React.useState({Name : "",email : "",password : ""})

  const [regexObj,setregexObj] = React.useState({
      NameBorder : false, NameHelper : "",emailBorder : false , emailHelper : "",passwordBorder : false ,passwordHelper : ""      
    })

    const takeEmail = (event) =>
  {
     console.log(event.target.value)
     setsignUpObj((prevState) =>({...prevState,email : event.target.value}))
  }

  const takePassword = (event) =>
  {
      setsignUpObj((prevState) =>({...prevState,password : event.target.value}))    
  }
  const takeName = (event) =>
  {
      setsignUpObj((prevState) =>({...prevState,Name : event.target.value}))    
  }
  
  const navigateOne = useNavigate()
  const submit = () =>
  {
      console.log("submit",signUpObj)
      let NameText = nameRegex.test(signUpObj.Name)
      let emailText = emailRegex.test(signUpObj.email)
      let passwordText = passwordRegex.test(signUpObj.password)
      if(NameText === false)
      {
          setregexObj((prevState) => ({...prevState,NameBorder : true,NameHelper :"Enter correct Name"}))
      }
      else if(NameText === true)
      {
          setregexObj((prevState) => ({...prevState,NameBorder : false,NameHelper :""}))
      }
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
      if(NameText === true && emailText === true && passwordText === true)
      {
          registerApi(signUpObj).then((response) =>{console.log(response)}).catch((error) => {console.log(error)})
navigateOne('/')
      }
    }
    const signInInstead = ()=>{
      navigateOne('/')
    }
  return (
    <div className='signup-main'>
      <div>
        <div className='signup-image'><img src="https://download.logo.wine/logo/Google/Google-Logo.wine.png"alt="" width="120" height="80"/></div>
        <div className='signup-google'>Create Your Google Account</div>
        <div className='signup-name'><TextField className='signup-fname'
          id="outlined-required"
          label="First name" size='small' onChange={takeName}
          error={regexObj.NameBorder} helperText={regexObj.NameHelper}/> 
          <TextField className='signup-lname'
          id="outlined-required"
          label="Last name" size='small' onChange={takeName}
          error={regexObj.NameBorder} helperText={regexObj.NameHelper}/></div>
          <div className='signup-gmail'><TextField fullWidth
           position="end" placeholder='@gmail.com'
          id="outlined-required"
          label="Username" size='small' onChange={takeEmail}
          error={regexObj.emailBorder} helperText={regexObj.emailHelper}>
          </TextField><p className='signup-p'>You can use letters, numbers & periods</p>
          </div>
          <div className='signup-button'><Button>Use my current email address instead</Button></div>
          <div className='signup-password'><TextField type='password' 
          id="outlined-required"
          label="Password" size='small' onChange={takePassword}
          error={regexObj.passwordBorder} helperText={regexObj.passwordHelper}/> </div>
         <div className='signup-pconfirm'><TextField type='password' 
          id="outlined-required"
          label="Confirm" size='small' onChange={takePassword}
          error={regexObj.passwordBorder} helperText={regexObj.passwordHelper}/>
          </div>
          <p className='signup-p1'>Use 8 or more characters with a mix of letters , numbers & symbols</p>
    <div className='signup-checkbox'><FormControlLabel control={<Checkbox defaultChecked />} label="Show password" /></div>
    <div className='signup-button1'><Button onClick={signInInstead}>Sign in instead</Button></div>
    <div className='signup-button2'><Button variant="contained" onClick={submit}>Next</Button></div>
    </div>
    <div className='signup-image2'><img src={accountpic} alt='' width='250px' height='350px' /></div>
    <p className='signup-p2'>One account. All of Google working for you.</p>
    </div>
  )
}

export default SignUp