import Metier from "./metier";
import Nom from "./nom";
import Profil from "./profil";
import Reseau from "./reseau";
import Salut from "./salut";
import photo from "../assets/p.jpg"

export default function Accueil() 
{
    return(
       <div className="
                    relative w-[100%] h-[80%] mt-[100px] flex flex-col items-center
                    md:h-[88%] md:flex-row md:justify-evenly 
       ">
            <div
                className="
                 w-[96%] h-full flex flex-col border-blue-600 justify-center pt-[210px] items-center rounded-[30px] anim-gauche bg-white/10 backdrop-blur-sm shadow-xl z-10 text-white 
                 md:static md:w-[55%] md:h-[70%] md:items-center md:pt-0 md:pb-2
                 lg:flex lg:justify-center lg:w-[50%] lg:pt-4 lg:pb-4 lg:h-[70%]
            " 
            >
                <Nom />
                <Metier />
                <Profil />
                <Reseau />
            </div>

            {/* droite */}
            <div className="w-[100%] absolute flex justify-center  z-20
                md:static md:w-[40%] anim-droite
            ">
                {/* lueur */}
                <div
                className="
                    w-[210px] h-[210px]
                    md:w-[270px] md:h-[270px]
                    lg:w-[320px] lg:h-[320px]
                    xl:w-[410px] xl:h-[410px]
                    -z-10 
                    rounded-full flex justify-center items-center
                    hover:scale-105 transition duration-300
                "
                // lg:w-[460px] lg:h-[460px]
                //     xl:w-[520px] xl:h-[520px]
                //     2xl:w-[580px] 2xl:h-[580px]
                style={{
                    boxShadow: "0 0 100px rgba(0,255,255,1)",
                    borderWidth: 1,
                    backgroundImage: `
                    linear-gradient(to bottom, rgba(255,0,255,1), transparent),
                    linear-gradient(to top, rgba(255,0,255,1), transparent),
                    linear-gradient(to left, rgba(0,255,255,1), transparent),
                    linear-gradient(to right, rgba(0,255,255,1), transparent)
                    `,
                    backgroundBlendMode: "screen",
                }}
                >
                <div
                    className="
                    bg-[#081B29]
                    w-[190px] h-[190px]
                    md:w-[250px] md:h-[250px]
                    lg:w-[300px] lg:h-[300px]
                    xl:w-[380px] xl:h-[380px]
                    rounded-full bg-cover bg-center
                    "
                    // lg:w-[440px] lg:h-[440px]
                    // xl:w-[500px] xl:h-[500px]
                    // 2xl:w-[560px] 2xl:h-[560px]
                    style={{
                    backgroundImage: `url(${photo})`
                    }}
                />
                </div>

            </div>
        </div>
    )
}

// div className="w-[100%] h-[80%] mt-[100px] flex justify-evenly max-lg:flex-col max-lg:items-center border-blue-600">
//             <div
//                 className="w-full max-w-[700px] h-[80%] mt-[50px] pl-14 ml-4 anim-gauche flex flex-col justify-center 
//                         bg-white/10 backdrop-blur-sm text-white
//                         transition shadow-xl z-10
//                         max-sm:rounded-[20px] max-sm:pl-4 rounded-[100px] max-lg:w-[90%]"
//             >
//                 <Nom />
//                 <Metier />
//                 <Profil />
//                 <Reseau />
//             </div>

//             {/* droite */}
//             <div className="w-[50%]  max-lgg:mt-5 flex justify-center items-center anim-droite">
//                 {/* lueur */}
//                 <div
//                 className="
//                     w-[280px] h-[280px]
//                     sm:w-[340px] sm:h-[340px]
//                     md:w-[400px] md:h-[400px]
//                     lg:w-[460px] lg:h-[460px]
//                     xl:w-[520px] xl:h-[520px]
//                     2xl:w-[580px] 2xl:h-[580px]
//                     -z-10
//                     rounded-full flex justify-center items-center
//                     hover:scale-105 transition duration-300
//                 "
//                 style={{
//                     boxShadow: "0 0 100px rgba(0,255,255,1)",
//                     borderWidth: 1,
//                     backgroundImage: `
//                     linear-gradient(to bottom, rgba(255,0,255,1), transparent),
//                     linear-gradient(to top, rgba(255,0,255,1), transparent),
//                     linear-gradient(to left, rgba(0,255,255,1), transparent),
//                     linear-gradient(to right, rgba(0,255,255,1), transparent)
//                     `,
//                     backgroundBlendMode: "screen",
//                 }}
//                 >
//                 <div
//                     className="
//                     bg-[#081B29]
//                     w-[260px] h-[260px]
//                     sm:w-[320px] sm:h-[320px]
//                     md:w-[380px] md:h-[380px]
//                     lg:w-[440px] lg:h-[440px]
//                     xl:w-[500px] xl:h-[500px]
//                     2xl:w-[560px] 2xl:h-[560px]
//                     rounded-full bg-cover bg-center
//                     "
//                     style={{
//                     backgroundImage: `url(${photo})`
//                     }}
//                 />
//                 </div>

//             </div>
//         </div>
 