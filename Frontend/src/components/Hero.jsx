// import React from "react";
// import background from "../assets/assets.js";
// // import background from "../assets/background.png"; // Use actual image file

// const Hero = () => {
//   return (
//     <div className="bg-black grid min-h-screen">
//       <div className=" text-yellow-400  flex justify-center items-start">
//         <div className="relative">
//           {/* <img src={background} className="mt-8 opacity-2" /> */}
//           <div className="">
//             <h1 className="text-6xl absolute top-16 text-center font-mono">
//               Your Shield Against Scam Calls!
//             </h1>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Hero;

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min"; // Vanta effect

const Hero = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current, // Apply Vanta to this div
          THREE, // Required for Vanta.js
          color: 0xffcc00, // Yellow color matching your theme
          backgroundColor: 0x23153c, // Black background
          points: 10.0, // Adjust points for network density
          maxDistance: 20.0,
          spacing: 14.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy(); // Cleanup on unmount
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="grid min-h-screen">
      
    </div>
  );
};

export default Hero;
