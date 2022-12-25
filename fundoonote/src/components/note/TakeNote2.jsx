import React, { useState } from 'react'
import './TakeNote2.css'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
//import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import Button from '@mui/material/Button';
import ColorPopper from '../colorpopper/ColorPopper';
import { createNoteApi } from '../../services/DataService';




function TakeNote2(props) {
  const [noteobj, setNoteobj] = useState({title : '' , description : '', color : '',isArchived : false})

    const takeTitle = (e) =>
    {
     setNoteobj(prevState => ({...prevState,title : e.target.value}))
    }

    const takeDescription = (e) =>
    {
        setNoteobj(prevState => ({...prevState,description : e.target.value}))

    }

    const submitNoteTwo = () =>
    {
      props.listenToTakeNoteTwo()
        console.log(noteobj)
        createNoteApi(noteobj)
        .then(res =>{
            console.log(res)
        })
        .catch(error =>
            {
                console.log(error)
            })
       
    }

    const listenToColor = (colour) =>{
      setNoteobj(prevState => ({...prevState,color : colour }))


  }

  const archiveNote = () =>
  {
      setNoteobj(prevState => ({...prevState,isArchived : true}))

  }
  return (
    <div className='takeNoteTwoMain'  style={{ backgroundColor : noteobj.color}}>
      <div>
    <input type='text' placeholder="Title" className='takeNoteTwo-title' onChange={takeTitle}/> 
    <input type='text' placeholder="Take a note...." className='takeNoteTwo-takeNote' onChange={takeDescription}/>
    <div className='takeNoteTwo-pin-icon'><PushPinOutlinedIcon/></div>
    </div>
    <div className='takeNoteTwo-icons'>
        <div className='takeNoteTwo-notification-icon'><NotificationsNoneOutlinedIcon/></div>
        <div className='takeNoteTwo-group-icon'> <GroupAddOutlinedIcon/></div>
        <div className='takeNoteTwo-color-icon'><ColorPopper  listenToColor = {listenToColor}  action="create"/></div> 
        <div className='takeNoteTwo-image-icons'> <ImageOutlinedIcon/></div>
        <div className='takeNoteTwo-archive-icon'> <ArchiveOutlinedIcon  onClick={archiveNote}/></div>
        <div className='takeNoteTwo-more-icon'> <MoreVertOutlinedIcon/></div>
        <div className='takeNoteTwo-button'><Button onClick={submitNoteTwo}>Close</Button></div>
    </div>
    </div>
  )
}

export default TakeNote2