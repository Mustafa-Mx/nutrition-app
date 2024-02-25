import React from "react";

const DarkBg = ({ children, background }) => {
  return (
    <div
      className={`${
        !background ? "bg-slate-900" : ""
      } fixed top-0 left-0 w-screen h-screen overflow-y-auto`}
      style={{ backgroundImage: `linear-gradient(300deg,#0101014d,#00000024),url('${background}')` }}
    >
      {children}
    </div>
  );
};

export default DarkBg;
