import { useState } from "react";
import bulb from "./assets/bulb.png";
import tri from "./assets/tri.png";

function App() {
  const [hovered, setHovered] = useState(false);
  const handlesetHovered = () => {
    setHovered(true);
  };

  const handledownHovered = () => {
    setHovered(false);
  };
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="bg-[#d3d3d2] h-[500px] w-[800px] rounded-xl flex items-center justify-center relative ">
          <div className="bg-white p-3 rounded-xl">
            <img
              src={bulb}
              className="h-4 w-4"
              onMouseOver={handlesetHovered}
              onMouseOut={handledownHovered}
            ></img>
          </div>
          {hovered && (
            <div>
              <div className="bg-white p-5 rounded-3xl absolute top-[90px] left-[366px]">
                <p className="font-bold"> Tool Tip</p>
                <p className="text-[11px] min-w-[50px] max-w-[200px]">
                  Did you know? Hovering over elements can reveal more
                  details—explore and discover hidden features!
                </p>
              </div>
              <img
                src={tri}
                className="h-7 w-7 rotate-180 absolute top-[190px] left-[382px]"
              ></img>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
