import React from 'react'
import './TakeNote1.css'
import Checkbox from '@mui/material/Checkbox';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';


function TakeNote1(props) {
  const submit = () =>
  {
    props.listenToTakeNoteOne()
  }
  return (
    <div className='takeNoteOne-main'>
       <div className='takeNoteOne-mainTwo'>
    <input type='text' placeholder='Take a note...' className='takeNoteOne' onClick={submit}/>
   <div style={{justifyContent:'space-evenly',width:'50px',height:'100px'}}>
    <div className='takeNoteOne-checkBox'><Checkbox  disabled checked /></div>
    <div className='takeNoteOne-brush-icon'>
     <BrushOutlinedIcon/>
    </div>
    <div className='takeNoteOne-image-icon'>
    <ImageOutlinedIcon/>
    </div>
    </div>
    </div>
    </div>
  )
}

export default TakeNote1