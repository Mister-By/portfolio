import "./index.css";
import Header from "./components/header.jsx";
import Accueil from "./components/accueil.jsx";
import Parcours from "./components/parcours.jsx";

function App() {

  return (
   <div> 
      <section className="w-full sect1-taille max-lgg:h-[160vh] bg-[#081B29] pt-1">
          <Header/>
          <Accueil/>
      </section>
      <section className="w-full h-[80vh] max-xl:h-[70vh] bg-[#173d59] pt-1" >
          <h1 id="p" className="text-6xl text-center text-white scroll-mt-[75px]">
            Parcours
          </h1>
          <Parcours/>
      </section>
      <section className="h-[100vh]  bg-[#081B29] pt-1">
          <h1 className="text-6xl text-center text-white">Expérience</h1>
          
      </section>
   </div>
  )
}

export default App
