import React, { useState, useEffect } from "react";
import RouterButton from "../other/RouterButton";
import VideoFeed from "../other/VideoFeed";
import PoseSelector from "../other/PoseSelector";
import {findScores} from "../../logic/scoreCalculation";
import goodposeData from "../../data/goodPoses.json"


const Main = () => {
  const [poseState, setPoseState] = useState([]);
  const [goodPose, setGoodPose] = useState(goodposeData[0].data)

  useEffect(() => {
    console.log(findScores(poseState, goodPose))
  }, [poseState])
  

  return (
    <div>
      <RouterButton link="/" text="About" variant="contained" />
      <PoseSelector poseState={poseState}/>
      <VideoFeed setPoseState={setPoseState} />
    </div>
  );
};

export default Main;
