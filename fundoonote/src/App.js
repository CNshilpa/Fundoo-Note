import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import TakeNote1 from './components/note/TakeNote1';
import TakeNote2 from './components/note/TakeNote2';
import TakeNote3 from './components/note/TakeNote3';
import DashBoard from './components/dashboard/DashBoard';
import SignIn from './components/signin/Signin';
import SignUp from './components/signup/SignUp';
import Header1 from './components/fundooHeader/Header1'
import { Provider } from 'react-redux';
import store from './components/redux/store';
import RouterOne from './components/router/router';

function App() {
  return (
    <div className="App">
       {/* <SignIn/>       */}
         {/* <SignUp/>    */}
          {/* <Header/>       */}
           {/* <TakeNote1/> 
           <TakeNote2/>
           <TakeNote3/>   */}
            <Provider store={store}>
           {/* <DashBoard/>  */}
            <RouterOne/>
           </Provider>    
           
           {/* <Header1/>   */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
