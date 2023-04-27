import { useParams } from "react-router-dom";

const Detail = () => {
  const { tokenId } = useParams();
  return <div>Detail</div>;
};

export default Detail;
