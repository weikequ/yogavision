import React from "react";
import IconButton from "@mui/material/IconButton";

const PoseButton = ({ poseName, image }) => {
  return (
    <div>
      <IconButton>
        <img src={image}></img>
      </IconButton>
      <div>{poseName}</div>
    </div>
  );
};

export default PoseButton;
