import React, { useState, useEffect } from "react";
import RouterButton from "../other/RouterButton";
import VideoFeed from "../other/VideoFeed";
import PoseSelector from "../other/PoseSelector";
import { findAverageScore, findScores } from "../../logic/scoreCalculation";
import goodposeData from "../../data/goodPoses.json";
import bgSVG from "../../media/background.svg";

const Main = () => {
  const tree = goodposeData[0].data;
  const warrior = goodposeData[1].data;

  const [poseState, setPoseState] = useState(null);
  const [goodPose, setGoodPose] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    poseState !== null &&
      goodPose !== null &&
      setScore(findAverageScore(poseState, goodPose));
  }, [poseState]);

  const switchGoodPose = (pose) => {
    setGoodPose(pose);
  };

  return (
    <div style={{ backgroundImage: `url(${bgSVG})` }}>
      <RouterButton link="/" text="About" variant="contained" />
      <div style={{ display: "flex", height: 2000 }}>
        <PoseSelector
          goodPose={goodPose}
          score={score}
          switchGoodPose={switchGoodPose}
        />
        <VideoFeed setPoseState={setPoseState} />
      </div>
    </div>
  );
};

export default Main;
