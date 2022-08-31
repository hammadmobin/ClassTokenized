import { useParams } from "react-router-dom";
import Wallet from "./Shared/Wallet"
import Home from "./Home";
import background from "../assets/5853.jpg";
import TabPanel from "./Shared/TabPanel";
import Button from '@mui/material/Button';
import { color } from "@mui/system";
import WrappedDetails from './createCourse'
import navbar from "./Shared/navbar";

const Users = () => {
    const { username } = useParams();
    return( 
    <div>
      <Home />
      <div style={{  display: "flex" ,justifyContent:'space-between' ,paddingLeft:20 }}>
    <h1 >Hey, { username } </h1>
    <WrappedDetails />

    </div>
    <TabPanel />
    </div>
    );
  }
  
  export default Users;