export const Dashboard = () => {
  return (
    <div className="text-white mt-10">
      <div className="flex">
        <div className="w-[100px] text-center border-b-4 border-b-[#ff5a43] text-[#ff5a43] pb-5">
          PRICE
        </div>
        <div className="w-[100px] text-center border-b-4 border-b-[#171717] pb-5">
          FUNDING
        </div>
        <div className="flex grow  border-b-4 border-b-[#171717] pb-5" />
      </div>
      <div className="flex">
        <TradingView />
        <Purchase />
      </div>
    </div>
  );
};

const TradingView = () => {
  return (
    <div className="h-[700px] w-2/3 mt-5 bg-[#161514] items-center flex justify-center">
      Trading View
    </div>
  );
};

const Purchase = () => {
  return (
    <div className="h-[700px] w-1/3 mt-5 bg-[#161514] ml-3 p-5">
      <div className="flex justify-between">
        <div className="w-1/2 flex justify-center border-b-4 border-b-[#ff5a43] text-[#ff5a43] pb-5">
          LONG
        </div>
        <div className="w-1/2 flex justify-center border-b-4 border-b-[#171717] pb-5">
          SHORT
        </div>
      </div>
      <div className="flex mt-7">
        <div className="flex flex-col w-1/2 mt-3 justify-center">
          <label>Order Type</label>
          <select className="rounded-sm p-2 bg-[#1a1a1a] text-white">
            <option>MARKET</option>
          </select>
        </div>
        <div className="flex flex-col w-1/2 mt-3 ml-2">
          <label>Open Price</label>
          <div className="flex items-center align-middle h-full">
            30,021.29 USDC
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-5">
        <label>Size</label>
        <div className="flex mt-2">
          <input className="p-2 grow bg-[#1a1a1a] rounded-sm" value="0." />
          <label className="flex justify-center items-center bg-[#1a1a1a] p-2">
            USDC
          </label>
        </div>
        <label className="text-[#898989]">Up to 1,458.173</label>
      </div>
      <div className="mt-5">
        <div className="flex justify-between">
          <label>Leverage</label>
          <label>0,00 X</label>
        </div>
        <input
          type="range"
          min="2"
          max="120"
          value="2"
          className="w-full mt-4 mb-4"
        />
        <div className="flex justify-between text-xs">
          <span>2x</span>
          <span>5x</span>
          <span>10x</span>
          <span>25x</span>
          <span>50x</span>
          <span>100x</span>
          <span>200x</span>
        </div>
      </div>
      <div className="flex justify-between mt-5">
        <span>Liquidation Price</span>
        <span>300,212 USDC</span>
      </div>
      <div className="flex justify-between mt-5">
        <span>Slippage</span>
        <span>1.20 USDC (0.3%)</span>
      </div>
      <div className="flex justify-between mt-5">
        <span>Liquidation Price</span>
        <span>2.00 USDC (0.05%)</span>
      </div>
      <div className="flex justify-between mt-5">
        <span>Advanced</span>
        <span></span>
      </div>
      <button className="w-full bg-[#4bc2a2] text-black rounded-md h-[50px] mt-10">
        BUY / LONG
      </button>
    </div>
  );
};
