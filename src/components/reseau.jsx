import Logo from "./logo";
import w from '../assets/w.webp'
import m from '../assets/m.png'

export default function Reseau() 
{
    return(
        <div className="flex mt-11 justify-evenly items-center w-3/4 max-xs:w-full">
            <Logo url={w} />
            <Logo url={m} />

            <a
                href="/cv.pdf"
                download
                className="inline-block px-6 py-3 max-sm:p-3 rounded-full text-[#0d1337] font-semibold bg-cyan-400 hover:bg-cyan-300 transition duration-300 shadow-lg hover:shadow-xl"
                >
                Télécharger CV
            </a>

        </div>
    )
}