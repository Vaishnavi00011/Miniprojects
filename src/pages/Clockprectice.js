import React, { useEffect, useState } from "react";

function Clockprectice() {
  const [currDate, setCurrDate] = useState(new Date());
 
  useEffect(() => {
    
    const interval = setInterval(() => {
      setCurrDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const hours = currDate.getHours();
  const minute = currDate.getMinutes();
  const second = currDate.getSeconds()

  const hourRotation = (hours % 12) * 30 + minute / 2; // Each hour is 30 degrees, and minute adds 0.5 degree
  const minuteRotation = minute * 6 + second / 10; // Each minute is 6 degrees, and second adds 0.1 degree

  return (
    <div className="flex w-[100%] h-[100vh] items-center justify-center gap-5">
      {hours} : {minute} : {second}
      <div className="w-[200px] h-[200px] border-2 border-black rounded-full flex items-center justify-center relative">
        <div className="w-[5px] h-[5px] bg-black rounded-full"></div>

        <div
          style={{
            transform: `rotate(${hourRotation}deg)`,
            transformOrigin: `bottom`,
          }}
          className="w-[4px] h-[40px]  bg-red-600  absolute bottom-[50%] rounded-xl"
        ></div>
        <div
          style={{
            transform: `rotate(${minuteRotation}deg)`,
            transformOrigin: `bottom`,
          }}
          className="w-[3px] h-[60px] bg-blue-500 absolute bottom-[50%] rounded-xl"
        ></div>
        <div
          style={{
            transform: `rotate(${6 * second}deg)`,
            transformOrigin: `bottom`,
          }}
          className="w-[1px] h-[90px] bg-green-600 absolute bottom-[50%] rounded-2xl "
        ></div>
      </div>
    </div>
  );
}

export default Clockprectice;
