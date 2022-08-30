import { useParams } from "react-router-dom";
import CourseTabPanel from "./Shared/CourseTabPanel";
import Home from "./Home";

const Courseid = () => {
    const { id } = useParams();
    return( 
      <div>
  <Home />   
  <div style={{  display: "flex" ,justifyContent:'space-between' ,paddingLeft:20 }}>    
    <h1>{ id } </h1>
    </div>
    <CourseTabPanel /> 
    </div>
    );
  };
  
  export default Courseid;