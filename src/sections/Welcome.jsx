import React from "react";

export default function Welcome() {
  return (
    <div className="w-full mt-5 mb-20 sm:w-full" id="about">
      <div className="w-full relative sm:w-full sm:h-96 h-[500px] flex items-center justify-center">
        <img
          src="https://i.ibb.co/m5xcTp2/6b13980a-e304-417d-bf8a-24f326d8e2ba.jpg"
          className="object-cover h-full w-full sm:w-full"
        />

        {/* <div className="absolute top-0 left-0 text-white text-9xl font-bold p-4 sm:text-[60px] text--center">
                    Carpentry By Hasan
                    <div className='text-[70px] mt-10 sm:text-[40px]'>
                        Crafting Your Vision, One Piece at a Time
                    </div>
                </div> */}

        <div className="absolute top-0 bottom-0 left-0 right-0 w-full flex justify-center items-center bg-gray-800 bg-opacity-60">
          <div className="flex flex-col gap-10 sm:p-2">
            <div>
              <div className="text-[70px] text-white font-semibold sm:text-[60px]">
                Carpentry By Hasan
              </div>
              <div className="text-white text-[30px] font-semibold sm:text-[20px]">
                Design - Quality - Experience
              </div>
            </div>

            <div className="bg-orange-400 p-4 rounded-sm w-[170px] text-center cursor-pointer hover:bg-orange-300 transition-all text-white">
              <a href="#contact">Contact Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
