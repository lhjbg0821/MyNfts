import Intro from "../components/Intro";
import Nfts from "../components/Nfts";

const Main = ({ account }) => {
  return (
    <div>
      <Intro account={account} />
      <Nfts />
    </div>
  );
};

export default Main;
