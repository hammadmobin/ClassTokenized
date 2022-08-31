//import * as React from 'react';
import { Component, useParams } from "react";
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
import axios from 'axios';


class FormDialog extends Component {
  state = {
    open: false, title: '', name: '', description:'', fees: 0, courseID:''
  }
  
  handleClickOpen = () => {
    this.setState({open : true})
  };

  handleClose = () => {
    this.setState({open : false})
   // setOpen(false);
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  titleChange = event => {
    this.setState({ title: event.target.value });
  }
  descriptionChange = event => {
    this.setState({ description: event.target.value });
  }
  feesChange = event => {
    this.setState({ fees: event.target.value });
  }
  courseIDChange = event => {
    this.setState({ courseID: event.target.value });
  }




  handleSubmit = event => {
    event.preventDefault();

    axios.post(`http://localhost:3000/courses`, { title: this.state.title, description: this.state.description, fees: this.state.fees, courseID: this.state.courseID  })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      this.setState({open : false})
  }

  render() {
  
  return (
    
    <div>
      <Button variant="contained" style=
    {{
              width: "200px",
              height: "30px",
              top:20,
              right:70,
              
    }}  onClick={this.handleClickOpen}>
        Create Course
      </Button>
      
      <Dialog  open={this.state.open} onClose={this.handleClose}>
        <DialogTitle>Create Course</DialogTitle>
        <DialogContent>
          <DialogContentText>
          </DialogContentText>
          
          <TextField
            autoFocus
            margin="dense"
            name="title"
            label="Course Title"
            type="text"
            fullWidth
            variant="standard"
            onChange={this.titleChange}
          />
                    <TextField
            autoFocus
            margin="dense"
            name="title"
            label="Course ID"
            type="text"
            fullWidth
            variant="standard"
            onChange={this.courseIDChange}
          />
                    <TextField
            autoFocus
            margin="dense"
            name="title"
            label="ETH"
            type="number"
            fullWidth
            variant="standard"
            onChange={this.feesChange}
          />

        <TextareaAutosize
        aria-label="minimum height"
        name="title"
        minRows={3}
        label="ETH"
        placeholder="Descriptions"
        onChange={this.descriptionChange}
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
          <Button onClick={this.handleClose}>Cancel</Button>
          <Button onClick={this.handleSubmit}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
}


const WrappedDetails = () => {
  // const params = useParams();
  return <FormDialog />//params={params} />;
};


export default WrappedDetails;