import { useParams } from "react-router-dom";

const Nft = () => {
    const { nftid } = useParams();
    return <h1>{ nftid } </h1>;
  };
  
  export default Nft;