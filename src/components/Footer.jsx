import { BsGithub, BsInstagram } from "react-icons/bs";
import { SiVelog } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="bg-gray-950 text-gray-50 px-4 py-6 font-bold text-xl">
      <div>OllOK</div>
      <div>이현진</div>
      <div className="mt-8">
        <button className="bg-yellow-500 rounded-full mr-4">
          <BsInstagram className="w-8 h-8" />
          <a href="https://github.com/lhjbg0821"></a>
        </button>
        <button className="bg-yellow-500 rounded-full mr-4">
          <BsGithub className="w-8 h-8" />
          <a href="https://github.com/lhjbg0821"></a>
        </button>
        <button className="bg-yellow-500 rounded-full mr-4">
          <SiVelog className="w-8 h-8" />
          <a href="https://velog.io/@lhjbg0821"></a>
        </button>
        <button className="bg-yellow-500 rounded-full ">
          <HiOutlineMail className="w-8 h-8" />
          <a href="https://velog.io/@lhjbg0821"></a>
        </button>
      </div>
      <div>Designed By. 현진</div>
    </div>
  );
};

export default Footer;
