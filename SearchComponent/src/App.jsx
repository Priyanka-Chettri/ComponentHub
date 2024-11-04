import { useState } from "react";
import dropdowm from "./assets/dropdown.png";
import updown from "./assets/updown.png";
import tri from "./assets/tri.png";

function App() {
  const plans = ["Starter", "Basic", "Standard", "Premium", "Pro", " Advanced"];
  const [inputData, setInputData] = useState("");
  const [planData, setPlanData] = useState(plans);

  const data = planData.map((plan, idx) => (
    <li className="mt-3 text-gray-400 hover:text-black">{plan}</li>
  ));
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prev) => !prev);
  };

  function handleChange(val) {
    const data = plans.filter((data) => data.startsWith(val));
    setPlanData(data);
  }

  return (
    <>
      <div className="bg-white w-screen h-screen flex justify-center items-center ">
        <div className="bg-gray-200 w-[500px] h-[500px] rounded-2xl flex flex-col gap-6">
          <div className="bg-white h-12 w-[280px] rounded-xl relative ml-[100px] mt-[140px] flex items-center">
            <input
              type="text"
              placeholder="Choose your plan"
              className="ml-5 h-8 p-2 focus:outline-none"
              onChange={(e) => {
                setInputData(e.target.value);
                handleChange(e.target.value);

                console.log(e.target.value);
              }}
            ></input>
            <img
              src={dropdowm}
              className={`h-4 w-4 absolute z-10 top-4 left-[250px] ${
                clicked === true ? "rotate-180" : "rotate-0"
              }`}
              onClick={handleClick}
            ></img>
          </div>
          {clicked && (
            <div
              className="relative ml-[100px] animate-bounce"
              style={{
                animationDuration: "1.5s",
                animationIterationCount: "1.5",
              }}
            >
              <div
                className={`bg-white h-[180px] w-[280px] rounded-xl overflow-scroll custom-scrollbar `}
              >
                <ul className="pl-8">{data}</ul>
              </div>
              <img
                src={tri}
                className="h-5 w-6 absolute -top-4 ml-[243px] overflow-visible"
              ></img>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
