import { GiChessKing } from "react-icons/gi";
import { BsWallet2 } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Header = ({ account, setAccount }) => {
  const onClickAccount = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header className="flex justify-between items-center px-4 py-2 bg-gray-950 text-gray-50">
      {/* 로고 */}

      <div className="flex ml-2 text-main ">
        <Link to="/">
          <div className="flex ml-2 text-main ">
            <div>
              <GiChessKing size={30} />
            </div>
            <div className="ml-4 text-4xl text-main">OllOK BCS</div>
          </div>
        </Link>

        <div className="flex items-center mx-4">
          <div className="text-white">
            <AiOutlineSearch />
          </div>
          <input className="rounded-full"></input>
        </div>
      </div>

      {/* 지갑버튼 */}

      {account ? (
        <div className="bg-gray-600 flex rounded-full p-2 hover:bg-gray-400">
          <div className="bg-main w-6 h-6 rounded-full flex justify-center items-center">
            <BsWallet2 />
          </div>
          <div className="ml-2">
            {account.substring(0, 4)}...{account.substring(account.length - 4)}
          </div>
        </div>
      ) : (
        <button
          onClick={onClickAccount}
          className="bg-gray-600 flex rounded-full p-2 "
        >
          <div className="bg-main w-6 h-6 rounded-full flex justify-center items-center mr-2">
            <BsWallet2 />
          </div>
          <div>Connect</div>
        </button>
      )}
    </header>
  );
};

export default Header;
