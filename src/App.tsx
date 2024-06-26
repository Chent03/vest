import React from "react";
import "./App.css";
import { CoinDetail } from "./CoinDetail";
import { Dashboard } from "./Dashboard";

function App() {
  return (
    <div className="bg-[#0f0e0c] min-h-full p-10 w-full">
      <div className="flex">
        <input className="w-full rounded-md p-2 bg-[#1a1a1a]" />
        <select className="bg-[#0f0e0c] text-white">
          <option>OXFC...E63D1</option>
        </select>
      </div>
      <CoinDetail />
      <Dashboard />
    </div>
  );
}

export default App;
