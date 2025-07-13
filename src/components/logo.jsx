export default function Logo({url}) 
{
    return(
        <div
        className="w-[70px] h-[70px] max-sm:w-[40px] max-sm:h-[40px] rounded-full bg-center bg-cover bg-white transition duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(0,255,255,0.8)]"
        style={{
            boxShadow: "0 0 40px rgba(0,255,255,1)",
            backgroundImage: `url(${url})`,
        }}
        ></div>

    )
}