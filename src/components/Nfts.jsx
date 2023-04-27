import { useEffect, useState } from "react";
import axios from "axios";
import NftCard from "./NftCard";
import { MdRefresh } from "react-icons/md";

const Nfts = ({ page, totalNft, mintedNft }) => {
  const [nfts, setNfts] = useState();
  const [selectedPage, setSelectedPage] = useState(1);

  const getNfts = async (p) => {
    try {
      let nftArray = [];
      for (let i = 0; i < 10; i++) {
        const tokenId = i + 1 + (p - 1) * 10;

        let response = await axios.get(
          `${process.env.REACT_APP_JSON_URL}/${tokenId}.json`
        );

        console.log(tokenId);

        nftArray.push({ tokenId, metadata: response.data });
        console.log(nftArray);
        setNfts(nftArray);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onClickPage = (p) => () => {
    selectedPage(p);
    getNfts(p);
  };

  const pageComp = () => {
    try {
      let pageArray = [];

      for (let i = 0; i < page; i++) {
        pageArray.push(
          <button key={i} className={`ml-4`} onClick={onClickPage(i + 1)}>
            {i + 1} <span className="text-base">페이지</span>
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
      <div className=" max-w-screen-xl mx-auto pt-8 text-gray-600">
        <div className="flex font-bold text-2xl mb-8 ">
          <button className="mr-8">아이템</button>
          <button>활동내역</button>
        </div>
        <div className="flex items-center text-lg">
          <button className="bg-gray-500 w-8 h-8 rounded-xl mx-2 flex justify-center items-center">
            <MdRefresh className="text-gray-50" />
          </button>

          <div className="text-xl">총 {totalNft}개 아이템</div>
        </div>
        <ul className="mt-8">
          {nfts ? (
            nfts.map((v, i) => {
              return (
                <NftCard
                  key={i}
                  tokenId={v.tokenId}
                  metadata={v.metadata}
                  mintedNft={mintedNft}
                />
              );
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
