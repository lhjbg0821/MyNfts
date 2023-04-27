import { Link } from "react-router-dom";

const NftCard = () => {
  return (
    <div className="w-96 rounded-b-xl text-gray-50 mx-8 mt-4">
      <div className=" rounded-t-xl">
        <img
          className="rounded-t-xl"
          src={`${process.env.PUBLIC_URL}/images/profile.png`}
        />
      </div>
      <div className="bg-gray-800 text-2xl rounded-b-xl pl-4 pt-2">
        <div className="text-gray-400">ollok</div>
        <div>타이틀</div>
        <div className="flex justify-end mx-4 py-2">
          {/* 디테일로 가는 링크 */}
          <button className="bg-main text-gray-950 rounded-full px-4 py-2">
            Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
