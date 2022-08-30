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


export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" style=
    {{
              width: "200px",
              height: "30px",
              top:20,
              right:70,
              
    }}  onClick={handleClickOpen}>
        Create Course
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Course</DialogTitle>
        <DialogContent>
          <DialogContentText>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Course Name"
            type="text"
            fullWidth
            variant="standard"
          />
                    <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Course ID"
            type="text"
            fullWidth
            variant="standard"
          />
                    <TextField
            autoFocus
            margin="dense"
            id="name"
            label="ETH"
            type="number"
            fullWidth
            variant="standard"
          />

        <TextareaAutosize
        aria-label="minimum height"
        minRows={3}
        label="ETH"
        placeholder="Descriptions"
        style={{ top:50, width: 550 }}
        />

        <Button variant="contained" component="label">
         File Upload
        <input hidden accept="image/*" multiple type="file" />
        </Button>
        <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        </IconButton>



        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
