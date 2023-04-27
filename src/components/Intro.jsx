const Intro = ({ account }) => {
  return (
    <div className="bg-gradient-to-t from-main to-gray-950">
      <div className="flex items-center py-6 px-6">
        <div className="w-48 h-48 rounded-full">
          <img
            className="rounded-full"
            src={`${process.env.PUBLIC_URL}/images/profile.png`}
          />
        </div>
        <div className="pl-8">
          <div className="text-4xl font-bold">OllOK</div>
          <div>{account}</div>
          <div>desc 내가 이현진이다.</div>
        </div>
      </div>
      <div className="flex px-12 py-4 text-center text-xl">
        <div className="ml-4">
          <div className="font-bold">--</div>
          <div className="text-gray-600">아이템</div>
        </div>
        <div className="ml-4">
          <div className="font-bold">--</div>
          <div className="text-gray-600">아이템</div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
