import { useParams } from "react-router-dom";

const Users = () => {
    const { username } = useParams();
    return <h1>{ username } </h1>;
  };
  
  export default Users;