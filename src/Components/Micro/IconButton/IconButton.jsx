import React from "react";

const IconButton = ({ icon }) => {
  return (
    <button className="rounded-full m-1 p-2 border border-solid border-primary">
      {icon}
    </button>
  );
};

export default IconButton;
