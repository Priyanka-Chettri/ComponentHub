import dot from "./assets/dot.png";
import down from "./assets/down.png";
import down2 from "./assets/down2.png";
import down3 from "./assets/down3.png";
import dot2 from "./assets/dot2.png";
import dot3 from "./assets/dot3.png";

import { useState } from "react";

function App() {
  const [enter, setEnter] = useState(false);
  const [click, setClick] = useState(false);
  const [curr, setCurr] = useState({
    status: "Active",
    img1: dot,
    img2: down,
    bg: "#ecf6ee",
    text: "#53c079",
  });

  const status = [
    {
      status: "Active",
      img1: dot,
      img2: down,
      bg: "#ecf6ee",
      text: "#53c079",
    },
    {
      status: "Pending",
      img1: dot3,
      img2: down2,
      bg: "#fcfbef",
      text: "#eabd77",
    },
    {
      status: "Cancel",
      img1: dot2,
      img2: down3,
      bg: "#F3F4F6",
      text: "#4B5563",
    },
  ];

  const handleEnter = () => {
    setEnter(true);
  };

  const handleLeave = () => {
    setEnter(false);
  };

  const handleClick = () => {
    setClick(true);
  };

  const handleChangeValue = (val) => {
    setCurr(val);
    setClick(false);
    setEnter(false);
  };

  const list = status.map((val, index) => {
    return (
      <button
        key={index}
        style={{ color: val.text }}
        className={`px-6 py-2 w-full bg-white flex rounded-sm items-center gap-2 border-b ${
          index === status.length - 1
            ? "border-b-transparent"
            : "border-b-gray-200"
        } hover:bg-gray-100`}
        onMouseEnter={handleEnter}
        onMouseOut={handleLeave}
        onClick={() => {
          handleChangeValue(val);
        }}
      >
        <img src={val.img1} className="h-5 w-5"></img>
        {val.status}
      </button>
    );
  });

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="bg-blue-100 h-[500px] w-[500px] rounded-2xl flex justify-center items-center overflow-clip ">
          <button
            style={{ backgroundColor: curr.bg, color: curr.text }}
            className=" px-6 py-2 rounded-full flex  items-center gap-2 relative hover:border border-gray-300"
            onMouseEnter={handleEnter}
            onMouseOut={handleLeave}
            onClick={handleClick}
          >
            <img src={curr.img1} className="h-5 w-5"></img>
            {curr.status}
            {enter && <img src={curr.img2} className="h-5 w-5"></img>}
          </button>
          {click && (
            <div className="absolute z-10 w-[190px] top-[380px] left-[630px] bg-white rounded-2xl  border-gray-300 overflow-hidden p-2">
              <ul className="w-full">{list}</ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
