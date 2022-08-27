import { useParams } from "react-router-dom";
import Wallet from "./Shared/Wallet"
import Home from "./Home";
import background from "../assets/5853.jpg";
import TabPanel from "./Shared/TabPanel";
import Button from '@mui/material/Button';
import { color } from "@mui/system";

const Users = () => {
    const { username } = useParams();
    return( 
    <div>
      <Home />
      <div style={{  display: "flex" ,justifyContent:'space-between' ,paddingLeft:20 }}>
    <h1 >Hey, { username } </h1>
    <Button variant="contained" style={{
              width: "200px",
              height: "30px",
              top:20,
              right:20
    }}>Create Course</Button>
    </div>
    <TabPanel />
    </div>
    );
  }
  
  export default Users;