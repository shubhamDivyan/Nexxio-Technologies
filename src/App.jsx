
import { pokemons } from "./data/pokemon";
import { usePokemon } from "./hook/usePokemon";

function App() {
    const {
    currentIndex,
    currentPokemon,
    next,
    prev,
    selectPokemon,
    isFirst,
    isLast,
  } = usePokemon(pokemons);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">

    
      <div className="w-[400px] h-screen bg-[#b9cdcc] flex flex-col items-center p-[5px] rounded-[10px]">

        
        <select
          value={currentIndex}
          onChange={(e) => selectPokemon(Number(e.target.value))}
          className="w-full p-2 rounded-[10px] m-[10px] bg-amber-50"
        >
          {pokemons.map((p, index) => (
            <option key={p.name} value={index}>
              {p.name}
            </option>
          ))}
        </select>

        <div className="w-[200px] h-[200px] rounded-full overflow-hidden flex justify-center items-center bg-white mb-4">
          <img
            src={currentPokemon.image}
            alt={currentPokemon.name}
            className="w-full h-full object-cover"
          />
        </div>

       
        <h2 className="text-center font-bold text-xl mb-2">
          {currentPokemon.name.toUpperCase()}
        </h2>

       
        <p className="text-center px-4 mb-auto">
          {currentPokemon.description}
        </p>

        
        <div className="flex justify-around w-full mt-4">
          <button
            onClick={prev}
            disabled={isFirst}
            className="px-4 py-2 bg-[#514b6e] text-white rounded disabled:opacity-50"
          >
            Prev
          </button>

          <button
            onClick={next}
            disabled={isLast}
            className="px-4 py-2 bg-[#514b6e] text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;