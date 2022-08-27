import { useParams } from "react-router-dom";

const Courseid = () => {
    const { id } = useParams();
    return <h1>{ id } </h1>;
  };
  
  export default Courseid;