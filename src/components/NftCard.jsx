import { Link } from "react-router-dom";

const NftCard = ({ tokenId, metadata, mintedNft }) => {
  return (
    <div className=" w-76 relative rounded-b-xl  text-gray-50 mx-8 mt-4">
      {parseInt(mintedNft) < tokenId && (
        <div className="absolute w-full h-full bg-gray-500 bg-opacity-50 rounded-xl flex justify-center items-center text-4xl font-bold">
          Not Minted.
        </div>
      )}
      <div className="rounded-t-xl">
        <img
          className="rounded-t-xl"
          src={metadata.image}
          alt={metadata.name}
        />
      </div>
      <div className="bg-gray-800 text-2xl rounded-b-xl pl-4 pt-2">
        <div className="text-gray-400">ollok</div>
        <div className="flex">
          <div>BLS</div>
          <div className="ml-2"># {tokenId}</div>
        </div>
        <div className="flex justify-end mx-4 py-2">
          <Link to={`${tokenId}`} />
          <button
            disabled={parseInt(mintedNft) < tokenId}
            className="bg-main text-gray-950 rounded-full px-4 py-2 mb-2 hover:bg-gray-700 hover:text-gray-50"
          >
            Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
