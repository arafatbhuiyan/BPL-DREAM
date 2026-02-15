import React from "react";
import { use } from "react";
import { BsFillFlagFill } from "react-icons/bs";

const AvailablePlayers = ({ playersPromes }) => {
  const playersData = use(playersPromes);
  console.log(playersData);

  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 gap-4 md:grid-cols-3 mt-6">
      {
      playersData.map((player) => (
        <div className="card bg-base-100 shadow-sm p-5">
          <figure>
            <img
            className=" w-full h-[300px] object-cover"
              src={player.player_image}
              alt="Shoes"
            />
          </figure>
          <div className=" mt-4">
            <div className="flex">
              <img
                className=""
                src="https://i.ibb.co/cSx9rpGs/Group.png"
                alt=""
              />
              <h2 className=" text-lg font-bold ml-3">{player.player_name}</h2>
            </div>

            <div className=" flex justify-between text-gray-600 mt-4 border-b-1 border-gray-300 pb-4">
              <div className=" flex items-center">
                <BsFillFlagFill className=" h-5 w-5 " />
                <h1 className=" text-lg ml-1"> {player.player_country}</h1>
              </div>
              <button className=" btn">{ player.player_role}</button>
            </div>

            <div className=" flex justify-between mt-4">
              <span className=" font-bold">Rating</span>
              <span>{player.rating}</span>
            </div>

            <div className=" flex justify-between mt-2">
              <span className=" font-bold">{player.batting_style}</span>
              <span>{player.bolling_style}</span>
            </div>

            <div className=" flex items-center justify-between mt-3">
              <span className=" font-bold">Price: {player.price}</span>
              <button className="text-sm border-1 border-gray-300 px-4 py-1 rounded hover:bg-gray-300">
                Choose Player
              </button>
            </div>
          </div>
        </div>
      ))
      }
    </div>
  );
};

export default AvailablePlayers;
