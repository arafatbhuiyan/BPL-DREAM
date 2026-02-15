import React from "react";
import { use } from "react";

import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayers = ({ playersPromes,setAvailableBalance,availableBalance }) => {
  const playersData = use(playersPromes);
  console.log(playersData);

  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 gap-4 md:grid-cols-3 mt-6">
      {
      playersData.map((player) => (<PlayerCard player={player} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance}></PlayerCard>)
      )
      }
    </div>
  );
};

export default AvailablePlayers;
