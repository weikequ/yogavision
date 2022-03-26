# **YogaVision**

### Have you ever wanted to perfect that tree pose, but you felt that yoga instructors are too expensive!

### Do you want to make perfecting your yoga poses fun? Well, we got the solution for you! 

### *drum roll.....* introducing the revolutionary YogaVision, a real-time yoga pose analyzer!

### YogaVision compares your poses with our "world-renowned expert," giving you a score out of 100. Is your tree pose genuinely that good? Well, come find out!

![Tree Pose](src/media/tree-pose.svg)
![Warrior Pose](src/media/warrior-pose.svg)

# **Techincal Specifications**

## Languages, Libraries, and API's

### This project was built using React.js, JavaScript, MaterialUI, React Webcam API, and Google's MediaPipe Pose API.

## Google's MediaPipe Pose
### An open-source Machine Learning API allows you to do real-time analysis by detecting different parts of your body. 

## The math behind the magic
### Computer vision returns a list of points in 3d space for each joint in the human body. For each relevant body segment, such as shoulder to elbow or hip to knee, an angle is calculated based on the two points from the segment and another extrapolated point that gives a segment parallel to the ground. Angle data has been collected from our expert yogis about ideal yoga pose posture. For each body segment, the ideal angle is compared to the user's angle to return a score out of 100. The difference in angles is plugged into a quadratic function that gives a score of 100 at a 0-degree difference and 0 at a 180-degree difference. The quadratic function ensures angle difference values like 45 degrees still give a reasonably low score than a simpler linear function.

<br></br>
<br></br>
![logo](/src/media/lotus-pose.svg)
