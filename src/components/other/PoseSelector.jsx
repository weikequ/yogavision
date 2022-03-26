import React from "react";
import PoseButton from "./PoseButton";
import treePose from "../../media/tree-pose.svg";
import warriorPose from "../../media/warrior-pose.svg";

const PoseSelector = ({ poseState }) => {
  return (
    <div>
      <h1 style={{ padding: 20 }}>Select Your Pose:</h1>

      <div style={{ padding: 80 }} className="">
        <PoseButton poseName="Tree Pose" image={treePose}></PoseButton>
        <PoseButton poseName="Warrior Pose" image={warriorPose}></PoseButton>
      </div>
    </div>
  );
};

export default PoseSelector;

// {poseState.map(p =>
//   <h5>
//     {/* {p.x} */}
//   </h5>

//   )}
