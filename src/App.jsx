import React, { Suspense, useState } from "react";
import Navbar from "./component/Navbar/Navbar";
import AvailablePlayers from "./component/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./component/SelectedPlayers/SelectedPlayers";

const fatchPlayers = async() =>{
  const res = await fetch("/players.json")
  return res.json()
}

const App = () => {
  const [toogle, setToogle] = useState (true)

  const playersPromes = fatchPlayers()
  return (
    <div>
      <Navbar></Navbar>
      <div className=" flex justify-between items-center max-w-[1200px] mx-auto mt-4">
        <h1 className=" text-2xl font-bold">Available Players</h1>
        <div className={`text-lg font-bold `}>
          <button
          onClick={()=> setToogle(true)}
          className={` border px-5 py-2 rounded-l-xl text-gray-500 border-r-0 ${toogle===true ? "bg-yellow-400" : " transform"}`}>Available</button>
          <button
          onClick={()=> setToogle(false)}
          className={` border px-5 py-2 rounded-r-xl text-gray-500 border-l-0 ${toogle===false ? "bg-yellow-400" : " transform"}`}>Selected (0)</button>
        </div>

      </div>


      {
        toogle === true ?<Suspense 
      fallback={
        <div className=" flex items-center justify-center min-h-screen">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
        
        }>
       <AvailablePlayers playersPromes={playersPromes}></AvailablePlayers> 
      </Suspense> : <SelectedPlayers></SelectedPlayers>
      }
      
      
      
    </div>
    
    
  );
};

export default App;
