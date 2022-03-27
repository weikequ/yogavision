import { Pose } from "@mediapipe/pose";
import React, { useRef, useEffect } from "react";
import * as poseAll from "@mediapipe/pose";
import * as cam from "@mediapipe/camera_utils";
import Webcam from "react-webcam";
import Button from "@mui/material/Button";
import RouterButton from "./RouterButton";

const VideoFeed = ({ setPoseState }) => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const connect = window.drawConnectors;
  const land = window.drawLandmarks;
  var camera = null;

  const WIDTH = "78%";
  const HEIGHT = "100%";

  const frameStyle = {
    position: "absolute",
    marginLeft: "auto",
    // marginRight: "auto",
    left: 0,
    right: 0,
    textAlign: "center",
    zindex: 9,
    width: WIDTH,
    height: HEIGHT,
    transform: "scale(-1, 1)",
  };

  // EFFECTS: render the result of prediction
  function onResults(results) {
    const videoWidth = webcamRef.current.video.videoWidth;
    const videoHeight = webcamRef.current.video.videoHeight;

    // Set canvas width
    canvasRef.current.width = videoWidth;
    canvasRef.current.height = videoHeight;

    const canvasElement = canvasRef.current;
    const canvasCtx = canvasElement.getContext("2d");
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    canvasCtx.drawImage(
      results.image,
      0,
      0,
      canvasElement.width,
      canvasElement.height
    );

    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);

    // Only overwrite existing pixels.
    canvasCtx.globalCompositeOperation = "source-in";
    canvasCtx.fillStyle = "#00FF00";
    canvasCtx.fillRect(0, 0, canvasElement.width, canvasElement.height);

    // Only overwrite missing pixels.
    canvasCtx.globalCompositeOperation = "destination-atop";
    canvasCtx.drawImage(
      results.image,
      0,
      0,
      canvasElement.width,
      canvasElement.height
    );

    canvasCtx.globalCompositeOperation = "source-over";
    connect(canvasCtx, results.poseLandmarks, poseAll.POSE_CONNECTIONS, {
      color: "#00FF00",
      lineWidth: 4,
    });
    land(canvasCtx, results.poseLandmarks, { color: "#FF0000", lineWidth: 2 });
    canvasCtx.restore();

    // console.log(results.poseWorldLandmarks);
    setPoseState(results.poseWorldLandmarks);
  }

  useEffect(() => {
    const pose = new Pose({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`;
      },
    });

    pose.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });
    pose.onResults(onResults);

    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null
    ) {
      camera = new cam.Camera(webcamRef.current.video, {
        onFrame: async () => {
          await pose.send({ image: webcamRef.current.video });
        },
        width: WIDTH,
        height: HEIGHT,
      });
      camera.start();
    }
  }, []);

  return (
    <center>
      <div className="">
        <Webcam ref={webcamRef} style={frameStyle} />{" "}
        <canvas
          ref={canvasRef}
          className="output_canvas"
          style={frameStyle}
        ></canvas>
      </div>
    </center>
  );
};

export default VideoFeed;
