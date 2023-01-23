import React, { useState } from 'react'
import './TakeNote2.css'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import InputBase from '@mui/material/InputBase';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import Button from '@mui/material/Button';
import ColorPopper from '../colorpopper/ColorPopper';
import { createNoteApi } from '../../services/DataService';
import { Box, Paper } from '@mui/material';
import { grey } from '@mui/material/colors';




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
            props.autoRefresh()
        })
        .catch(error =>
            {
                console.log(error)
            })
       
    }
// const autoRefresh = ()=>{
//     submitNoteTwo()
// }
    const listenToColor = (colour) =>{
      setNoteobj(prevState => ({...prevState,color : colour }))


  }

  const archiveNote = () =>
  {
      setNoteobj(prevState => ({...prevState,isArchived : true}))

  }
  return (
    <Paper className='takeNoteTwoMain'  elevation={4} style={{ backgroundColor : noteobj.color}}>
    <Box className='takeNoteTwo-titles'>
        <InputBase
            sx={{ ml: 1, flex: 1 }}
            onChange={takeTitle} 
            placeholder="Title"
            inputProps={{ 'aria-label': 'Take a note....' }}
        />
        <PushPinOutlinedIcon sx={{ fontSize: 25, color: grey[900] }} />
    </Box>
    <Box className='takeNoteTwo-description'>
    <InputBase
        maxRows
        sx={{ ml: 1, flex: 1 }}
        onChange={takeDescription}
        placeholder="Take a note...."
        inputProps={{ 'aria-label': 'Take a note....' }}

    />
    
    </Box>
    <Box className='takeNoteTwo-icons' >
        <NotificationsNoneOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} />
        <GroupAddOutlinedIcon sx={{ fontSize: 20, color: grey[900] }}  />
        {/* <ColorLensOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} /> */}
        <ColorPopper  listenToColor = {listenToColor}  action="create"/>
        <ImageOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} />
        <ArchiveOutlinedIcon sx={{ fontSize: 20, color: grey[900] }}  onClick={archiveNote}/>
        <MoreVertOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} />
    </Box>
    <Box className='takeNoteTwo-button'>
    <Button  variant="text" sx={{color: grey[900]}} onClick={submitNoteTwo} >Close</Button>
    </Box>
    
</Paper>
);
}

export default TakeNote2