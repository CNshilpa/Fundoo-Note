import React from 'react'
import './TakeNote3.css'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
//import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import { updateArchiveApi, updateDeleteApi, updateNoteApi } from '../../services/DataService';
import ColorPopper from '../colorpopper/ColorPopper';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { InputBase } from '@mui/material';
import { useState } from 'react';


function TakeNote3(props) {
  const [inputValue, setInputValue] = useState({noteId : '',title :'', description :''})
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 5,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = (noteDetail) =>{
    console.log(noteDetail)
    setOpen(true);
    setInputValue({noteId : noteDetail.id ,title :noteDetail.title , description :noteDetail.description})
  } 
 
  const handleClose = () => setOpen(false);  
  console.log(props.note)

  const colorUpdate = ()=>
  {
      props.getNote()

  }
  const colorUpdateOne = ()=>
  {
      props.getNote()

  }
  const updateArchive = (id) =>
  {
      let input = {noteIdList : [id], isArchived : true}
      updateArchiveApi(input).then ( res =>
          {
              console.log(res)
          }) 
          .catch(error =>
              {
                  console.log(error)
              })

  }
  const deleteObj =(id)=>
  {
    let input = {noteIdList : [id], isDeleted : true}
     updateDeleteApi(input).then ( res =>
          {
              console.log(res)
          }) 
          .catch(error =>
              {
                  console.log(error)
              })

  }
  const takeTitle = (e) =>
    {
     setInputValue(prevState => ({...prevState,title : e.target.value}))
    }

    const takeDescription = (e) =>
    {
       setInputValue(prevState => ({...prevState,description : e.target.value}))

    }
 const UpdateNote = () =>
 {
  setOpen(false)
  updateNoteApi(inputValue)
  .then(res =>{
    console.log(res)
})
.catch(error =>
    {
        console.log(error)
    })

 }
  return (
        <div className='noteThree-Main'  style={{ backgroundColor: props.note.color }} >
          <div onClick={() => handleOpen(props.note)} className='noteThree-titles'>
        {/* <input type='text' placeholder='Title' className='titles' /> 
       <input type='text' placeholder='Take a note...' className='takeNotes' /> */}
       <p>{props.note.title}</p>
       <p> {props.note.description}</p>
       </div>
        <div className='noteThree-pin-icons'><PushPinOutlinedIcon/></div>
        <div className='noteThree-icon'>
        <div className='noteThree-notification-icons'><NotificationsNoneOutlinedIcon/></div>
        <div className='noteThree-group-icons'> <GroupAddOutlinedIcon/></div>
        {/* <div className='color-icons'><ColorLensOutlinedIcon/></div>  */}
        <div  className='noteThree-color-icons'><ColorPopper action="update" id={props.note.id} colorUpdate = {colorUpdate}/></div>
        <div className='noteThree-image-icons1'> <DeleteIcon onClick={ () => deleteObj(props.note.id)}/></div>
        <div className='noteThree-archive-icons'> <ArchiveOutlinedIcon onClick={ () => updateArchive(props.note.id)} /></div>
        <div className='noteThree-more-icons'> <MoreVertOutlinedIcon/></div>
        </div>
     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style} style={{ backgroundColor: props.note.color }}>
          <div className='subChild-title'>
          <InputBase defaultValue={inputValue.title} onChange={takeTitle}
          /> 
          <InputBase defaultValue={inputValue.description} onChange={takeDescription}
          />
          </div>
           <div style={{marginTop:-80, marginLeft:390}}><PushPinOutlinedIcon/></div>
           <div className='child-menu'>
        <div className='child-notification'><NotificationsNoneOutlinedIcon/></div>
        <div className='child-group'> <GroupAddOutlinedIcon/></div>
        <div  className='child-color'><ColorPopper action="update" id={props.note.id} colorUpdateOne = {colorUpdateOne} /></div>
        <div className='child-image'> <DeleteIcon onClick={ () => deleteObj(props.note.id)}/></div>
        <div className='child-archive'> <ArchiveOutlinedIcon onClick={ () => updateArchive(props.note.id)} /></div>
        <div className='child-more'> <MoreVertOutlinedIcon/></div>
        
        <div className='child-button'><button onClick={UpdateNote}>Close </button></div>
        </div>
        </Box>
      </Modal>
    </div>
  )
}

export default TakeNote3