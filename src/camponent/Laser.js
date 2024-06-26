import React, { useState } from "react";

function Laser() {
  // -----usecase-----/

  const [accordian, setAccordian] = useState(0);
  return (
    <div>
      <div className="flex h-[115vh] w-[100%] gap-10  items-center ">
        <div className="h-[100vh] w-[52%]   flex flex-col gap-6 mt-[45px]  px-20">
          <h1 className="text-[40px] font-bold w-[500px] cursor-text">
            EXPLORE OUR NEW TRAINING OPTIONS
          </h1>
          <label className="text-[18px] w-[450px] cursor-text">
            Personalized learning designed to take your skills to the next
            level.
          </label>
          <div className="flex border-b-[1.5px] h-[4vh] pt-1 bg-[] w-[28%] border-black  items-center gap-2 ">
            <label className="text-[15px] italic cursor-pointer">
              View all courses
            </label>
            <i
              class="fa fa-long-arrow-right text-[13px]"
              aria-hidden="true"
            ></i>
          </div>
          <div className=" w-[100%]  flex flex-col mt-28">
            <div
              style={{ height: accordian == 1 ? "50vh" : "10vh" }}
              className="w-[100%] transition-all overflow-hidden duration-500 bg-[#ffffff5f] border-t-[1px]  border-black border-b-[1px] flex flex-col items-center justify-between cursor-pointer"
            >
              <div className="w-[100%] flex justify-between items-center relative py-2">
                <label className="text-[20px] font-bold cursor-pointer">
                  1-1 Classes
                </label>
                <label
                  onClick={() => {
                    if (accordian == 1) {
                      setAccordian(0);
                    } else {
                      setAccordian(1);
                    }
                  }}
                  className="text-[35px] cursor-pointer"
                >
                  <div className="relative  h-8 w-8">
                    <div className="x h-[2px] w-4 bg-black absolute left-[25%] top-[50%]" ></div>
                    <div style={{transform:accordian==1 && "rotate(90deg)"}} className="y h-4 w-[2px] bg-black absolute left-[45%] top-[25%] transition-all"></div>
                  </div>
                </label>
              </div>
              {/* {accordian == 1 && ( */}
                <div className="flex flex-col text-[14px] gap-1">
                  <div className="flex flex-col font-semibold p-6">
                    <label>. $800</label>
                    <label>. We provide 3 models for hands-on practice</label>
                    <label>. Enrollment options:</label>
                  </div>
                  <div className="flex flex-col ml-6">
                    <div className="flex flex-col ">
                      <div className="flex items-center gap-2 ">
                        <div className="h-2 w-2 rounded-full border border-black"></div>
                        <label>
                         <span className=" font-semibold">Monday - Friday:</span>  9am - 2pm, 2pm - 7pm, and 5pm - 8pm
                          (5pm - 8pm to be completed over 2 days)
                        </label>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full border border-black"></div>
                        <label>
                         <span className=" font-semibold">Saturday + Sunday:</span>  9am - 2pm and 2pm - 7pm
                        </label>
                      </div>
                    </div>

                    
                  </div>
                  <p className="text-[10px] ml-6">
                      Embark on a personalized aesthetics journey with our
                      exclusive 1-1 classes. Experience hands-on learning
                      customized to your schedule and skill level. Delve into
                      essential topics such as the consultation process,
                      treatment setup, and client paperwork with dedicated
                      online/in-person theory sessions before completing
                      hands-on training. Our flexible booking options ensure
                      convenience, allowing you to choose your preferred time
                      slot for optimal learning and growth.
                    </p>
                </div>
              {/* )} */}
            </div>

            <div className="h-[10vh] w-[100%] bg-[#ffffff5f] border-t-[1px]  border-black border-b-[1px] flex items-center justify-between cursor-pointer">
              <label className="text-[20px] font-bold cursor-pointer">
                Group Classes
              </label>
              <label className="text-[35px] cursor-pointer">+</label>
            </div>

            <div className="h-[10vh] w-[100%] bg-[#ffffff5f] border-t-[0px]  border-black border-b-[1.5px] flex items-center justify-between cursor-pointer">
              <label className="text-[20px] font-bold cursor-pointer">
                Online Training
              </label>
              <label className="text-[35px] cursor-pointer">+</label>
            </div>
          </div>
        </div>
        {/* ----Image (1/2)----- */}
        
        <div className="w-[48%] h-[100vh] bg-[#80808068] ">
          <img
          style={{height:accordian==1?"140vh":"100vh" }} 
            className="w-[100%]  object-cover transition-all"
            src="https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/9be4b6c6-f156-4338-802f-73beb7583403/DSC05668.jpg?format=1000w"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Laser;
