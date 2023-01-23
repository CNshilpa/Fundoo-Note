import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import DashBoard from '../dashboard/DashBoard'
import SignIn from '../signin/Signin'
import SignUp from '../signup/SignUp'

function RouterOne() {
  return (
    <div>
        <Router>
            <Routes>
                <Route exact path='/' element={<SignIn/>}/>
                <Route path='/signup' element={<SignUp/>}/>
                <Route path='/dashboard' element={<DashBoard/>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default RouterOne