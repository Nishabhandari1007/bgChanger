import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("olive"); // background for reference, not changing

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white px-4 py-3 rounded-3xl">

          {/* Red Neon Gradient */}
          <button onClick={()=> setColor("red")} className='px-5 py-2 rounded-3xl text-white 
            bg-gradient-to-r from-red-400 via-red-500 to-red-600 
            hover:from-red-500 hover:via-red-600 hover:to-red-700 
            shadow-lg shadow-red-500/50 hover:shadow-red-700/80 
            hover:scale-105 transform transition duration-300 cursor-pointer'>
            Red
          </button>

          {/* Yellow Gradient with Text Black */}
          <button onClick={()=> setColor("yellow")} className='px-5 py-2 rounded-3xl text-black 
            bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 
            hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 
            shadow-lg shadow-yellow-300/50 hover:shadow-yellow-500/80 
            hover:scale-105 transform transition duration-300 cursor-pointer'>
            Yellow
          </button>

          {/* Green Animated Gradient */}
          <button onClick={()=> setColor("green")}className='px-5 py-2 rounded-3xl text-white 
            bg-gradient-to-r from-green-400 via-green-500 to-green-600 
            bg-[length:200%_200%] bg-left-top hover:bg-right-bottom 
            shadow-lg shadow-green-500/50 hover:shadow-green-700/80 
            hover:scale-105 transform transition-all duration-500 cursor-pointer'>
            Green
          </button>

          {/* Orange Gradient */}
          <button onClick={()=> setColor("orange")} className='px-5 py-2 rounded-3xl text-white 
            bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 
            hover:from-orange-500 hover:via-orange-600 hover:to-orange-700 
            shadow-lg shadow-orange-500/50 hover:shadow-orange-700/80 
            hover:scale-105 transform transition duration-300 cursor-pointer'>
            Orange
          </button>

          {/* Purple Gradient */}
          <button onClick={()=> setColor("purple")}className='px-5 py-2 rounded-3xl text-white 
            bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 
            hover:from-purple-500 hover:via-purple-600 hover:to-purple-700 
            shadow-lg shadow-purple-500/50 hover:shadow-purple-700/80 
            hover:scale-105 transform transition duration-300 cursor-pointer'>
            Purple
          </button>

          {/* Black / Gray Gradient */}
          <button onClick={()=> setColor("black")}className='px-5 py-2 rounded-3xl text-white 
            bg-gradient-to-r from-gray-700 via-gray-800 to-black 
            hover:from-gray-800 hover:via-gray-900 hover:to-black 
            shadow-lg shadow-gray-700/50 hover:shadow-gray-900/80 
            hover:scale-105 transform transition duration-300 cursor-pointer'>
            Black
          </button>

          {/* Blue Gradient */}
          <button onClick={()=> setColor("blue")} className='px-5 py-2 rounded-3xl text-white 
            bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 
            hover:from-blue-500 hover:via-blue-600 hover:to-blue-700 
            shadow-lg shadow-blue-500/50 hover:shadow-blue-700/80 
            hover:scale-105 transform transition duration-300 cursor-pointer'>
            Blue
          </button>

        </div>
      </div>
    </div>
  );
}

export default App;
