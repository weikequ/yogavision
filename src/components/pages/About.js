import React from "react";
import Button from "../other/Button";

const About = () => {
  return (
    <div>
      <h1>Yoga Vision</h1>
      <p>
        Welcome to Yoga Visio - The app that helps you perfect your yoga poses.
        Just choose a pose, try your best to imitate it, and our computer vision
        algorithm will give you a score to indicate how well you did! Based on
        your score, just continue iterating your pose and you will become a yoga
        master in no time!
      </p>
      <p>
        <a>Credits</a>
      </p>
      <Button>Let's get started</Button>
    </div>
  );
};

export default About;
