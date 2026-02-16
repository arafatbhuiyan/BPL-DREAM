import React from 'react';
import { MdDelete } from 'react-icons/md';

const SelectedCard = ({player}) => {
 
    return (
        <div className='max-w-[1200px] mx-auto'>
            <div className='flex justify-between items-center border-2 border-gray-300 rounded mt-4'>
                <div className='flex items-center'>
                    <img
                    className='h-20 w-20 p-3 object-cover rounded-2xl '
                    src={player.player_image} alt="photo" />
                    <div>
                        <h4 className=' text-xl font-bold'>{player.player_name}</h4>
                        <p>{player.player_role}</p>
                    </div>
                </div>
                <div><MdDelete className='h-8 w-8 text-red-400 mr-6'/></div>
            </div>
        </div>
    );
};

export default SelectedCard;