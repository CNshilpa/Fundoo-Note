import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    marginTop:60,
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    marginTop:65, 
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const selectOption = (noteValue) =>
  {
    props.listenToDrawer(noteValue)
  }

  return (
    <Box sx={{ display: 'flex', }}>
      <CssBaseline />
      <Drawer variant="permanent" open={props.drawerToggle}>
        <Divider />
        <List>
          
            <ListItem  disablePadding sx={{ display: 'block' }} onClick={() => selectOption('Notes')}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  // sx={{
                  //   minWidth: 0,
                  //   mr: open ? 3 : 'auto',
                  //   justifyContent: 'center',
                  // }}
                >
                  <LightbulbIcon/>
                </ListItemIcon>
                <ListItemText primary='Notes'/>
              </ListItemButton>
            </ListItem>
            <ListItem  disablePadding sx={{ display: 'block' }} onClick={() => selectOption('Reminders')}>
              <ListItemButton
                 sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                 }}
              >
                <ListItemIcon
                  // sx={{
                  //   minWidth: 0,
                  //   mr: open ? 3 : 'auto',
                  //   justifyContent: 'center',
                  // }}
                >
                  <NotificationsNoneIcon/>
                </ListItemIcon>
                <ListItemText primary='Reminders'/>
              </ListItemButton>
            </ListItem>
            <ListItem  disablePadding sx={{ display: 'block' }} onClick={() => selectOption('Edit')}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  // sx={{
                  //   minWidth: 0,
                  //   mr: open ? 3 : 'auto',
                  //   justifyContent: 'center',
                  // }}
                >
                  <EditIcon/>
                </ListItemIcon>
                <ListItemText primary='Edit Label'/>
              </ListItemButton>
            </ListItem>
            <ListItem  disablePadding sx={{ display: 'block' }} onClick={() => selectOption('Archive')}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  // sx={{
                  //   minWidth: 0,
                  //   mr: open ? 3 : 'auto',
                  //   justifyContent: 'center',
                  // }}
                >
                  <ArchiveOutlinedIcon/>
                </ListItemIcon>
                <ListItemText primary='Archive'/>
              </ListItemButton>
            </ListItem>
            <ListItem  disablePadding sx={{ display: 'block' }} onClick={() => selectOption('Trash')}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  // sx={{
                  //   minWidth: 0,
                  //   mr: open ? 3 : 'auto',
                  //   justifyContent: 'center',
                  // }}
                >
                  <DeleteIcon/>
                </ListItemIcon>
                <ListItemText primary='Trash'/>
              </ListItemButton>
            </ListItem>
        
        </List>
      </Drawer>
    </Box>
  );
}