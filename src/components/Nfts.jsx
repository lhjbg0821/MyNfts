import { useEffect, useState } from "react";
import axios from "axios";
import NftCard from "./NftCard";

const Nfts = () => {
  const [nfts, setNfts] = useState();

  const getNfts = async () => {
    try {
      const response = await axios.get(`${process.env.PUBLIC_URL}`);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(nfts);
  }, [nfts]);

  return (
    <div className="bg-gradient-to-b from-main to-gray-950">
      <div className=" max-w-screen-xl mx-auto  text-gray-600">
        <div className="flex font-bold text-2xl">
          <button className="mr-8">아이템</button>
          <button>활동내역</button>
        </div>
        <ul className="mt-8">
          {nfts ? (
            nfts.map((v, i) => {
              return <NftCard />;
            })
          ) : (
            <div>Loading...</div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Nfts;
