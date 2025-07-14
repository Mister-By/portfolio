import { useEffect, useRef, useState } from "react";
import Diplome from "./diplome";

export default function Parcours() {
  const lineRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimate(true);
      },
      { threshold: 0.3 }
    );

    if (lineRef.current) observer.observe(lineRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-[98%] flex justify-center pt-7 pb-14 h-[98%]">
      <div className="flex flex-col items-center h-full relative py-1">
        {/* Flèche vers le haut */}
        <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[15px] 
                        border-l-transparent border-r-transparent border-b-white" />

        {/* Si animate est true, affiche la ligne + diplômes */}
        {animate && (
          <>
            {/* Ligne verticale blanche avec animation */}
            <div
              className="w-[4px] h-[85%] bg-white animate-grow-line"
              ref={lineRef}
            />

            {/* Diplôme gauche */}
            <div className="absolute top-[15%] left-[-120px] md:left-[-200px] w-[127px]  opacity-0 animate-dip ">
              <Diplome
                titre="2ème année d'ingénierie informatique"
                annee="2025"
                gauche={true}
              />
            </div>

            {/* Diplôme droite */}
            <div className="absolute top-[50%] left-[30px] w-[127px] opacity-0 animate-dip">
              <Diplome titre="Bac C" annee="2023" />
            </div>
          </>
        )}

        {/* Si animate est false, juste un div vide pour garder le ref */}
        {!animate && (
          <div
            className="w-[4px] h-[80%] bg-white opacity-0"
            ref={lineRef}
          />
        )}
      </div>
    </div>
  );
}

/**----------------------------------- */
// import { useEffect, useRef, useState } from "react";

// export default function Parcours() {
//   const lineRef = useRef(null);
//   const [animate, setAnimate] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setAnimate(true);
//       },
//       { threshold: 0.3 }
//     );

//     if (lineRef.current) observer.observe(lineRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="w-full flex justify-center py-10">
//       <div className="flex flex-col items-center">
//         {/* Flèche vers le haut */}
//         <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[15px] 
//                         border-l-transparent border-r-transparent border-b-white" />

//         {/* Ligne animée */}
//         <div
//           ref={lineRef}
//           className={`w-[4px] bg-white ${
//             animate ? "animate-grow-line" : "h-0"
//           } transition-all duration-1000`}
//         />
//       </div>
//     </div>
//   );
// }

