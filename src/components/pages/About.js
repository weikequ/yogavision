import React from "react";
import RouterButton from "../other/RouterButton";
import logoSVG from '../../media/logo.svg'
import bgwavesSVG from '../../media/bgwaves.svg'
import './About.css'


const About = () => {
  return (
    <div className='aboutContainer'>
      <div className='split left'>
        <div className='title-text'>Take charge of your well being.</div>
        <div className='copy-text'>Connect with your body on another level with YogaVison. The app that helps you perfect your yoga poses. Just choose a pose, try your best to imitate it, and our computer vision algorithm will give you a score to indicate how well you did! Based on your score, just continue iterating your pose and you will become a yoga master in no time!</div>
        <div className='enter-button'>
          <RouterButton
            link="Main"
            variant="contained"
            text="Let's get started!"
          ></RouterButton>
        </div>
      </div>
      <div className='split right'>
        <img className='centered' src={logoSVG}></img>
      </div>
      <div className="bg-waves">
        <img className='bg-waves' src={bgwavesSVG}></img>
      </div>
      <div className='rad-grad-red'></div>
      <div className='rad-grad-blue'></div>
    </div>
  );
};

export default About;
