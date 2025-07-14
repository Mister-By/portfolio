export default function Diplome({ titre, annee, description, gauche }) {
  return (
    <div className="bg-white text-[#081B29] shadow-md p-4 rounded-xl 
                    w-[94%]   md:w-[180px] 
                    relative text-start">
      {/* Flèche vers la timeline */}
      {gauche ? (
        <div className="absolute top-4 -right-2 w-0 h-0 
                        border-t-8 border-b-8 border-l-8 
                        border-t-transparent border-b-transparent border-l-white" />
      ) : (
        <div className="absolute top-4 -left-2 w-0 h-0 
                        border-t-8 border-b-8 border-r-8 
                        border-t-transparent border-b-transparent border-r-white" />
      )}

      <h3 className="text-base sm:text-lg font-semibold">{titre}</h3>
      <p className="text-sm mt-1 text-center sm:text-xs font-medium text-gray-600">({annee})</p>
      {description && (
        <p className="mt-2 text-sm sm:text-xs text-gray-700">{description}</p>
      )}
    </div>
  );
}

