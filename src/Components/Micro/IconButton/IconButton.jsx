import React from "react";

const IconButton = ({ icon, ...props }) => {
  return (
    <button
      {...props}
      className="flex-none flex  items-center align-top justify-center w-10 h-10 rounded-full text-secondary border border-secondary"
    >
      {icon}
    </button>
  );
};

export default IconButton;
