import React from "react";
import PoseButton from "./PoseButton";
import treePose from "../../media/tree-pose.svg";
import warriorPose from "../../media/warrior-pose.svg";
import goodposeData from "../../data/goodPoses.json";

const PoseSelector = ({ goodPose, score, switchGoodPose }) => {
  const tree = goodposeData[0].data;
  const warrior = goodposeData[1].data;

  return (
    <div >
      <h1 style={{ padding: 20 }}>Your Score:</h1>
      <h3 className="text-center">{score.toFixed()}</h3>
      <h1 style={{ padding: 20 }}>Select Your Pose:</h1>
      {/* <h4>{goodPose}</h4> */}
      <div style={{ padding: 10 }} className="">
        <PoseButton
          style={{ padding: 80 }}
          switchGoodPose={switchGoodPose}
          data={tree}
          poseName="Tree Pose"
          image={treePose}
        />
        <PoseButton
          style={{ padding: 80 }}
          switchGoodPose={switchGoodPose}
          data={warrior}
          poseName="Warrior Pose"
          image={warriorPose}
        />
      </div>
    </div>
  );
};

export default PoseSelector;
