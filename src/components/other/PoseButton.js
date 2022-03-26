import React from "react";
import IconButton from "@mui/material/IconButton";

const PoseButton = ({ poseName, image }) => {
  return (
    <div className="mt-5">
      <IconButton>
        <img src={image}></img>
      </IconButton>
      <div className="text-center">{poseName}</div>
    </div>
  );
};

export default PoseButton;
