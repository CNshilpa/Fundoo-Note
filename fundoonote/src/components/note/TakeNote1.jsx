import React from 'react'
import './TakeNote1.css'
import Checkbox from '@mui/material/Checkbox';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import { Paper } from '@mui/material';
import { Box } from '@mui/system';
import InputBase from '@mui/material/InputBase';
import { grey } from '@mui/material/colors';


function TakeNote1(props) {
  const submit = () =>
  {
    props.listenToTakeNoteOne()
  }
  return (
    <Paper  className='takeNoteOne-main' elevation={4}  onClick={submit}>
    <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Take a note..."
    />
    <Box className='takeNoteOne-icons'>
        <Checkbox sx={{ color: grey[600], fontSize: 25 }} />
        < BrushOutlinedIcon sx={{ color: grey[600], fontSize: 25 }} />
        <ImageOutlinedIcon sx={{ color: grey[600], fontSize: 25 }} />

    </Box>
</Paper>

);
}

export default TakeNote1