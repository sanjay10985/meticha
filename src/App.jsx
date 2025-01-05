import React from "react";
import Gravity, { MatterBody } from "./components/gravity";
import CountdownTimer from "./components/countdown-timer";
import { generateRandomElement, getRandomNumber } from "./utils";
import BackgroundText from "./components/background-text";

const App = () => {
  return (
    <div className="bg-blue-700 w-full h-screen">
      <BackgroundText />
      <Gravity>
        <MatterBody x="50%" y="10%">
          <CountdownTimer />
        </MatterBody>
        {Array.from({ length: getRandomNumber() }).map((_, index) => (
          <MatterBody key={index}>{generateRandomElement()}</MatterBody>
        ))}
      </Gravity>
    </div>
  );
};

export default App;
