import React from 'react';

const Button = ({ toogle, setToogle }) => {
    console.log(toogle);
    
  return (
    <div className='max-w-[1200px] mx-auto mt-9 mb-9'>
      <div className='rounded-xl border p-2 w-41'>
        <button
          onClick={()=> setToogle(true)}
          className={`border rounded-xl p-2 font-bold cursor-pointer ${toogle===true ? "transform" : " bg-yellow-400"}`}
        >
          Add More Player
        </button>
      </div>
    </div>
  );
};

export default Button;
