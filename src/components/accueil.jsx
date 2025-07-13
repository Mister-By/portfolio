import Metier from "./metier";
import Nom from "./nom";
import Profil from "./profil";
import Reseau from "./reseau";
import Salut from "./salut";
import photo from "../assets/p.jpg"

export default function Accueil() 
{
    return(
       <div className="h-[80%] mt-[100px] flex justify-evenly max-lg:flex-col max-lg:items-center">
            <div
                className="w-full max-w-[700px] h-[80%] mt-[50px] pl-14 ml-4 anim-gauche flex flex-col justify-center 
                        bg-white/10 backdrop-blur-sm text-white
                        transition shadow-xl z-10
                        max-sm:rounded-[20px] max-sm:pl-4 rounded-[100px] max-lg:w-[90%]"
            >
                <Nom />
                <Metier />
                <Profil />
                <Reseau />
            </div>

            {/* droite */}
            <div className="w-[50%]  max-lgg:mt-5 flex justify-center items-center anim-droite">
                {/* lueur */}
                <div
                className="
                    w-[280px] h-[280px]
                    sm:w-[340px] sm:h-[340px]
                    md:w-[400px] md:h-[400px]
                    lg:w-[460px] lg:h-[460px]
                    xl:w-[520px] xl:h-[520px]
                    2xl:w-[580px] 2xl:h-[580px]
                    -z-10
                    rounded-full flex justify-center items-center
                    hover:scale-105 transition duration-300
                "
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
                    w-[260px] h-[260px]
                    sm:w-[320px] sm:h-[320px]
                    md:w-[380px] md:h-[380px]
                    lg:w-[440px] lg:h-[440px]
                    xl:w-[500px] xl:h-[500px]
                    2xl:w-[560px] 2xl:h-[560px]
                    rounded-full bg-cover bg-center
                    "
                    style={{
                    backgroundImage: `url(${photo})`
                    }}
                />
                </div>

            </div>
        </div>
    )
}