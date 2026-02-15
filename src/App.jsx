import React, { Suspense } from "react";
import Navbar from "./component/Navbar/Navbar";
import AvailablePlayers from "./component/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./component/SelectedPlayers/SelectedPlayers";

const fatchPlayers = async() =>{
  const res = await fetch("/players.json")
  return res.json()
}

const App = () => {
  const playersPromes = fatchPlayers()
  return (
    <div>
      <Navbar></Navbar>
      <Suspense 
      fallback={
        <div className=" flex items-center justify-center min-h-screen">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
        
        }>
       <AvailablePlayers playersPromes={playersPromes}></AvailablePlayers> 
      </Suspense>
      
      {/* <SelectedPlayers></SelectedPlayers> */}
    </div>
    
    
  );
};

export default App;
