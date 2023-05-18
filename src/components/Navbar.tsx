import React from "react";

const Navbar = () => {
  return (
    <div className="px-10 py-6 bg-white w-full h-max flex justify-end">
      <div className="flex">
        <div className="bg-purple-400 h-10 w-10 rounded-full"></div>
        <div className="ml-4">
          <p className="font-bold">Padil Rahman</p>
          <small>Admin</small>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
