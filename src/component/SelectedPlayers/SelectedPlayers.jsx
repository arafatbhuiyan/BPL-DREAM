import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({parsesPlayer, removePlay}) => {
    console.log(parsesPlayer);
    
    return (
        <div>
            {
                parsesPlayer.map( player => <SelectedCard removePlay={removePlay} player={player}></SelectedCard>)
            }
            
        </div>
    );
};

export default SelectedPlayers;