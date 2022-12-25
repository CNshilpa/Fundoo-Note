import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import { updateColorApi } from '../../services/DataService';
import { grey } from '@mui/material/colors';

export default function ColorPopper(props) {
    const colors = ["#2ECC71", "#AF7AC5", "#F1948A", "#A3E4D7", "#F5B7B1", "#F5B041", "#DC7633", "#F1C40F", "#AAB7B8", "#F1948A", "#2ECC71", "#F5B041"]
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const selectColor = (colortype) =>
  {
    
    if(props.action === "create")
    {
        props.listenToColor(colortype)
     
    }
    else if(props.action === "update")
    {
        let inputColor = {noteIdList : [props.id],color : colortype}
      updateColorApi(inputColor)
      .then((response) =>{console.log(response) })
      .catch((error) => {console.log(error)})
        props.colorUpdate()
    }

  }
  return (
    <div>
      <ColorLensOutlinedIcon sx={{ fontSize: 20, color: grey[900]}} onClick={handleClick}/>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper', flexDirection:'row',display:'flex' }}>
        {
            colors.map(color => (
                <div style={{height : 25, width : 25,borderRadius : 50,backgroundColor : color,marginLeft :5}} onClick={() =>selectColor(color)}></div>
            ))
          }
        </Box>
      </Popper>
    </div>
  );
}