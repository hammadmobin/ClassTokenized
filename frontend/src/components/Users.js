import { useParams } from "react-router-dom";
import Wallet from "./Shared/Wallet"
import Home from "./Home";
import background from "../assets/5853.jpg";

const Users = () => {
    const { username } = useParams();
    return( 
    <div>
      <Home />
    <h1>{ username } </h1>
    </div>
    );
  }
  
  export default Users;