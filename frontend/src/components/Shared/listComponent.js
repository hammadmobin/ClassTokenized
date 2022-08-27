import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import FileIcon from '@mui/icons-material/ArrowDropDown'
import { saveAs } from "file-saver";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import UpdateLinks from './UpdateLinks';


export default function ListComponent() {
  const [open, setOpen] = React.useState(true);
  const [open1, setOpen1] = React.useState(true);


  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick1 = () => {
    setOpen1(!open1);
  };
  
  const saveFile = () => {
    saveAs(
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      "example.pdf"
    );
  };

  return (
    <div>
    <div style={{  display: "flex" ,justifyContent:'space-between' }} >
    <List
      sx={{ width: '100%', maxWidth: 560, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >

      <ListItemButton onClick={handleClick1}>
        <ListItemIcon>
          <FileIcon />
        </ListItemIcon>
        <ListItemText primary="Week 1" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText onClick={saveFile} primary="Starred" />
          </ListItemButton>
        </List>
    </Collapse>

    <ListItemButton onClick={handleClick}>
        <ListItemIcon>
        <FileIcon />
        </ListItemIcon>
        <ListItemText primary="Week 2" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="File" />
          </ListItemButton>
        </List>
    </Collapse>

    <ListItemButton onClick={handleClick}>
        <ListItemIcon>
        <FileIcon />
        </ListItemIcon>
        <ListItemText primary="Week 3" />
         {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton  sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
    </Collapse>
    </List>
    
    <Button style=
    {{
              width: "200px",
              height: "30px",
              top:20,
              right:70,
              
    }} 
    variant="outlined" component="label">
         Choose File
        <input hidden accept="image/*" multiple type="file" />
        </Button>
        <IconButton color="primary" aria-label="upload picture" component="HelloWorld" >
        <input hidden accept="image/*" type="file" />
        </IconButton>
        <UpdateLinks  />
     <UpdateLinks /> 
    </div>
  
     </div>
  );
}
