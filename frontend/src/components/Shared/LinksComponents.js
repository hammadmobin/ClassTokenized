import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';


export default function LinksComponents() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{  display: "flex" ,justifyContent:'space-evenly' }} >
           <Button variant="contained" style=
    {{
              width: "200px",
              height: "30px",
              top:20,
              right:70,
              
    }}  onClick={handleClickOpen}>
        ZOOM LINK
      </Button>


    <div  style=
    {{
              width: "400px",
              height: "30px",
              top:20,
    }}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="text"
            fullWidth
            variant="standard"
          />

        <TextareaAutosize
        aria-label="minimum height"
        minRows={3}
        label="ETH"
        placeholder="FAQ"
        style={{ width: 550, height:100 }}
        />
            <Button variant="contained"   onClick={handleClickOpen}>
        Submit
      </Button>
    </div>
    </div>
  );
}
