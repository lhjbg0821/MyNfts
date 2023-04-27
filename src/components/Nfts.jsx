import { useEffect, useState } from "react";
import axios from "axios";
import NftCard from "./NftCard";

const Nfts = ({ page }) => {
  const [nfts, setNfts] = useState();

  const getNfts = async (p) => {
    try {
      for (let i = 0; i < 10; i++) {
        const tokenId = i + 1 + (p - 1) * 10;

        let response = await axios.get(
          `${process.env.REACT_APP_JSON_URL}/${tokenId}.json`
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  const pageComp = () => {
    try {
      let pageArray = [];

      for (let i = 0; i < page; i++) {
        pageArray.push(
          <button key={i} className={`ml-4`}>
            페이지
          </button>
        );
      }
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
        <NftCard />
      </div>
    </div>
  );
};

export default Nfts;
