import React from "react";
import PoseButton from "./PoseButton";
import treePose from "../../media/tree-pose.svg";
import warriorPose from "../../media/warrior-pose.svg";

const PoseSelector = ({ poseState }) => {
  return (
    <div>
      <PoseButton></PoseButton>
      <PoseButton poseName="Warrior Pose" image={warriorPose}></PoseButton>
    </div>
  );
};

export default PoseSelector;

// {poseState.map(p =>
//   <h5>
//     {/* {p.x} */}
//   </h5>

//   )}
