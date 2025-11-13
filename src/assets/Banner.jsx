import React from 'react';

const Banner = ({ inProgress = 0, resolved = 0 }) => {
  return (
    <div className="flex flex-col md:flex-row gap-10 w-full justify-center items-center mt-5 mb-5">
     <div
        className="relative rounded-lg shadow-md  w-130 h-50 flex flex-col items-center justify-center 
        bg-gradient-to-br from-purple-500 to-violet-700 overflow-hidden"
         >
       <h2 className="text-white text-lg font-medium z-10">In-Progress</h2>
        <p className="text-white text-4xl font-bold z-10">{inProgress}</p>
      </div>
      <div className="rounded-lg shadow-md flex flex-col items-center justify-center w-130 h-50 bg-gradient-to-br from-green-400 to-emerald-600">
        <h2 className="text-white text-lg font-medium">Resolved</h2>
        <p className="text-white text-4xl font-bold">{resolved}</p>
      </div>

    </div>
  );
};

export default Banner;
