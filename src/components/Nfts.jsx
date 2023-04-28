import { useEffect, useState } from "react";
import axios from "axios";
import NftCard from "./NftCard";
import { MdRefresh } from "react-icons/md";

const Nfts = ({ page, totalNft, mintedNft }) => {
  const [selectedPage, setSelectedPage] = useState(1);
  const [nfts, setNfts] = useState();

  const getNfts = async (p) => {
    try {
      let nftArray = [];

      setNfts();

      for (let i = 0; i < 8; i++) {
        const tokenId = i + 1 + (p - 1) * 8;
        let response = await axios.get(
          `${process.env.REACT_APP_JSON_URL}/${tokenId}.json`
        );
        console.log(response);

        nftArray.push({ tokenId, metadata: response.data });
      }
      setNfts(nftArray);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickPage = (p) => () => {
    setSelectedPage(p);
    getNfts(p);
  };

  const pageComp = () => {
    let pageArray = [];

    for (let i = 0; i < page; i++) {
      pageArray.push(
        <button
          key={i}
          className={`ml-4 text-2xl font-bold hover:text-white ${
            i + 1 === selectedPage ? "text-white" : "text-gray-400"
          }`}
          onClick={onClickPage(i + 1)}
        >
          {i + 1} <span className="text-base">페이지</span>
        </button>
      );
    }
    return pageArray;
  };

  useEffect(() => {
    console.log(nfts);
  }, [nfts]);

  useEffect(() => {
    getNfts(1);
  }, []);

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

        <div className="max-w-screen-xl mx-auto pt-4">
          <div>{pageComp()}</div>
          <ul className="mt-8 grid grid-cols-1 xl:grid-cols-4 justify-items-center gap-2">
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
        </div>
      </div>
    </div>
  );
};

export default Nfts;
