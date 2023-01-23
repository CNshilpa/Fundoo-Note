import React from 'react'
import './TakeNote3.css'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
//import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import { grey } from '@mui/material/colors';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import { updateArchiveApi, updateDeleteApi, updateNoteApi } from '../../services/DataService';
import ColorPopper from '../colorpopper/ColorPopper';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { InputBase } from '@mui/material';
import { useState } from 'react';
import Button from '@mui/material/Button';


function TakeNote3(props) {
  const [inputValue, setInputValue] = useState({ noteId: '', title: '', description: '' })
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
  const handleOpen = (noteDetail) => {
    console.log(noteDetail)
    setOpen(true);
    setInputValue({ noteId: noteDetail.id, title: noteDetail.title, description: noteDetail.description })
  }

  const handleClose = () => setOpen(false);
  console.log(props.note)

  const colorUpdate = () => {
    props.getNote()

  }
  const colorUpdateOne = () => {
    props.getNote()

  }
  const updateArchive = (id) => {
    let input = { noteIdList: [id], isArchived: true }
    updateArchiveApi(input).then(res => {
      console.log(res)
    })
      .catch(error => {
        console.log(error)
      })

  }
  const deleteObj = (id) => {
    let input = { noteIdList: [id], isDeleted: true }
    updateDeleteApi(input).then(res => {
      console.log(res)
    })
      .catch(error => {
        console.log(error)
      })

  }
  const takeTitle = (e) => {
    setInputValue(prevState => ({ ...prevState, title: e.target.value }))
  }

  const takeDescription = (e) => {
    setInputValue(prevState => ({ ...prevState, description: e.target.value }))

  }
  const UpdateNote = () => {
    setOpen(false)
    updateNoteApi(inputValue)
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })

  }
  return (
    <paper className='noteThree-Main' style={{ backgroundColor: props.note.color }} >
      <Box className='noteThree-subMain'>
        <Box className='noteThree-title' onClick={() => handleOpen(props.note)}>
          <p>{props.note.title}</p>
          </Box>
          <Box className='noteThree-description'>
          <p>{props.note.description}</p>
        </Box>
        <Box className='noteThree-pin'>
          <PushPinOutlinedIcon sx={{ fontSize: 25, color: grey[900] }} />
        </Box>
      </Box>
      <Box className='noteThree-icons'>
        <NotificationsNoneOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} />
        <GroupAddOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} />
        {/* <ColorLensOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} /> */}
        <ColorPopper action="update" id={props.note.id} colorUpdate={colorUpdate} />

        {/* <ImageOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} /> */}
        <DeleteIcon sx={{ fontSize: 20, color: grey[900] }} onClick={() => deleteObj(props.note.id)} />
        <ArchiveOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} onClick={() => updateArchive(props.note.id)} />
        <MoreVertOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} />

      </Box>


      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style} style={{ backgroundColor: props.note.color }}>
          <Box className='Childnoteone' >
            <Box className='Childnotetwo' >
              <Box className='Childnotethree' >
                <InputBase onChange={takeTitle} defaultValue={inputValue.title} />
                <InputBase onChange={takeDescription} defaultValue={inputValue.description} />
              </Box>

              <Box className='Childnotefour'>
                <PushPinOutlinedIcon sx={{ fontSize: 25, color: grey[900] }} />
              </Box>
            </Box>


            <Box className='Childicon'>
              <NotificationsNoneOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} />
              <GroupAddOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} />
              <ColorPopper action="update" id={props.note.id} colorUpdateOne={colorUpdateOne} />
              <DeleteIcon sx={{ fontSize: 20, color: grey[900] }} />
              <ArchiveOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} />
              <MoreVertOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} />
              <UndoOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} />
              <RedoOutlinedIcon sx={{ fontSize: 20 }} />
              <Box className='close'>
                <Button variant="text" sx={{ color: grey[900] }} onClick={UpdateNote}>Close</Button>
              </Box>
            </Box>
          </Box>
        </Box >
      </Modal >
    </paper >
  )
}

export default TakeNote3