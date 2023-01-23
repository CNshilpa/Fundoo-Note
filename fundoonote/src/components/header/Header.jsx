import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import google from '../img/keep_2020q4_48dp.png'
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {connect} from 'react-redux'

function Header(props) {

  const menuClick = () =>
  {
    props.listenToHeader()
  }
  return (
    <div id='header-main'>
     <div className='headerMenu'><MenuIcon size="2.3em" onClick={menuClick}/></div>
     <div className='header-image'><img src={google}alt='' /></div>
     <div className='header-keep'><h2 >{props.label}</h2></div>
     <div className="header-Searchbar">
      <SearchIcon className="header-SearchIcon" />
          <input
            placeholder="Search"
            className="header-SearchInput"
          /></div>
          <div className="headerOther-icon">
                    <div className="headerRefresh-icon">
                        <RefreshIcon height='50px' width='30px'/>
                    </div>
                    <div className="viewStream-icon">
                        <ViewStreamIcon />
                    </div>
                    <div className="setting">
                        <SettingsIcon />
                    </div>
                    <div className="apps">
                        <AppsIcon />
                    </div>
                    <div className="account-icon">
                      <AccountCircleIcon/>
                    </div>
                    </div>
    </div>
    
  )
}
const mapStateToProps = (state)=>{
return {
  label : state.drawerReducer.label
}
}

export default connect(mapStateToProps)(Header)