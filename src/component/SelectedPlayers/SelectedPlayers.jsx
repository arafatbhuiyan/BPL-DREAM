import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({parsesPlayer}) => {
    console.log(parsesPlayer);
    
    return (
        <div>
            {
                parsesPlayer.map( player => <SelectedCard player={player}></SelectedCard>)
            }
            
        </div>
    );
};

export default SelectedPlayers;