import React from "react";
import IconButton from "@mui/material/IconButton";

const PoseButton = ({ poseName, image, switchGoodPose, data }) => {
  return (
    <div>
      <IconButton onClick={() => switchGoodPose(data)}>
        <img className="ml-5" src={image}></img>
        <div className="text-center">{poseName}</div>
      </IconButton>
    </div>
  );
};

export default PoseButton;
