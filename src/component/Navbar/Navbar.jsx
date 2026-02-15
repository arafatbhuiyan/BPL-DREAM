import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar max-w-[1200px] mx-auto">
        <div className="flex-1">
          <img src="https://i.ibb.co/kg7wXzK5/logo.png" alt="" />
        </div>
        <div className="flex items-center">
          <span className="mr-1">600000000000</span>
          <span className="mr-2"> coin </span>
          <img
            className=" h-7 w-7"
            src="https://i.ibb.co/3qpQBvc/stacks-of-dollar-coins-illustrations-gold-dollar-coin-vector.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
