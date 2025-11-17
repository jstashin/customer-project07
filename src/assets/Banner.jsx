import React from 'react';

const Banner = ({ inProgress, resolved}) => {
  return (
    <div className="flex flex-col md:flex-row gap-10 w-full justify-center items-center mt-5 mb-5">
  <div
  className="relative rounded-xl shadow-lg w-130 h-50 flex flex-col items-center justify-center overflow-hidden"
  style={{
    backgroundImage: "linear-gradient(135deg, #7117cb, #a450e5)",
  }}
>
  
  <div
    style={{
      position: 'absolute',
      top: 0, left: 0, bottom: 0,
      width: '50%',
      backgroundImage: "url('/vector1.png')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "contain",
    }}
  />
  
  <div
    style={{
      position: 'absolute',
      top: 0, right: 0, bottom: 0,
      width: '50%',
      backgroundImage: "url('/vector1.png')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "contain",
      transform: "scaleX(-1)",
    }}
  />
  <span className="text-white text-lg mb-2 z-10">In-Progress</span>
  <span className="text-white text-5xl font-semibold z-10">{inProgress}</span>
</div>

     <div
  className="relative rounded-lg shadow-md flex flex-col items-center justify-center w-130 h-50 overflow-hidden"
  style={{
    backgroundImage: "linear-gradient(135deg, #34d399, #059669)",
  }}
>
  
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      width: '50%',
      backgroundImage: "url('/vector1.png')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "contain",
      opacity: 0.7, 
    }}
  />
  
  <div
    style={{
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      width: '50%',
      backgroundImage: "url('/vector1.png')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "contain",
      transform: "scaleX(-1)",
      opacity: 0.7,
    }}
  />
  <h2 className="text-white text-lg font-medium z-10">Resolved</h2>
  <p className="text-white text-4xl font-bold z-10">{resolved}</p>
</div>


    </div>
  );
};

export default Banner;
