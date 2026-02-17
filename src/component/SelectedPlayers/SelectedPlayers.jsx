import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';
import Button from '../Button/Button';

const SelectedPlayers = ({parsesPlayer, removePlay, toogle, setToogle }) => {
    console.log(parsesPlayer);
    
    return (
        <div>
            {
                parsesPlayer.map( player => <SelectedCard toogle={toogle} setToogle={setToogle} removePlay={removePlay} player={player}></SelectedCard>)
            }

            <Button toogle={toogle} setToogle={setToogle}></Button>
            
        </div>
    );
};

export default SelectedPlayers;