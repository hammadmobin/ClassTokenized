import Wallet from "./Shared/Wallet"
import background from "../assets/5853.jpg";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import FormDialog from '@mui/material/CssBaseline';


const Home = () => {
  return (
    <div >
   <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  style={{ background: '#E8E8E8' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
      <Box
      sx={{
        width: 30,
        height: 30,
      }}>
      <span role="img"  aria-label="dog">🖖 </span>
      </Box>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,  color: '#710117' }}>
            ClassTokenized
          </Typography>
          <Box
      sx={{
        width: 370,
        height: 30,
      }}>
        < Wallet />
        </Box>
        </Toolbar>
      </AppBar>
    </Box>
    {/* <img src={background} alt="logo"  width= "1600px" height= "800" /> */}
    </div>
  );
}

export default Home;