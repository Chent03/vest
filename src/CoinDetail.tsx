import React from "react";
import { COIN_DETAILS, TDETAIL } from "./constants";

export const CoinDetail = () => {
  return (
    <div className="flex justify-between mt-10 border-b-4 border-b-[#171717]">
      {COIN_DETAILS.map((detail) => {
        return detail.type === "logo" ? (
          <Logo detail={detail} key={detail.value} />
        ) : (
          <Fields detail={detail} key={detail.value} />
        );
      })}
    </div>
  );
};

type TProps = {
  detail: TDETAIL;
};
const Logo: React.FC<TProps> = ({ detail }) => {
  return (
    <div className="flex items-center mb-5">
      <div className="w-5 h-5 bg-orange-400 rounded-lg text-center flex items-center justify-center">
        B
      </div>
      <div className="text-white ml-2">{detail.value}</div>
    </div>
  );
};

const Fields: React.FC<TProps> = ({ detail }) => {
  return (
    <div className="text-white mb-5">
      <div>{detail.label}</div>
      <div className="text-[#4bc2a2]">{detail.value}</div>
    </div>
  );
};
