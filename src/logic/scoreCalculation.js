const { StrictMode } = require("react")

//const SCORE_QUADRATIC_SCALE_FACTOR = 0.006
//const QUADRATIC_B = (-100-180^2*SCORE_QUADRATIC_SCALE_FACTOR)/180

const QUADRATIC_B = -1.63555555556
const QUADRATIC_C = 0.006

//TODO: could be an issue that right and left switch sides when a person turns around
const IS_RIGHTS_OF_DATA = [
  null, //0. Nose
  false, //1. Left eye inner
  false, //2. Left eye
  false, //3. Left eye outer
  true, //4. Right eye inner
  true, //5. Right eye
  true, //6. Right eye outer
  false, //7. Left ear
  true, //8. Right ear
  false, //9. Mouth left
  true, //10. Mouth right
  false, //11. Left shoulder
  true, //12. Right shoulder
  false, //13. Left elbow
  true, //14. Right elbow
  false, //15. Left wrist
  true, //16. Right wrist
  false, //17. Left pinky #1 knuckle
  true, //18. Right pinky #1 knuckle
  false, //19. Left index #1 knuckle
  true, //20. Right index #1 knuckle
  false, //21. Left thumb #2 knuckle
  true, //22. Right thumb #2 knuckle
  false, //23. Left hip
  true, //24. Right hip
  false, //25. Left knee
  true, //26. Right knee
  false, //27. Left ankle
  true, //28. Right ankle
  false, //29. Left heel
  true, //30. Right heel
  false, //31. Left foot index
  true, //32. Right foot index
]

const CHECKED_ANGlES = [
  [19,15], //Left index to knuckle
  [20,16], //Right index to knuckle
  [15,13], //Left wrist to elbow
  [16,14], //Right wrist to elbow
  [13,11], //Left elbow to shoulder
  [14,12], //Right elbow to shoulder
  [23,11], //Left hip to shoulder
  [24,12], //Right hip to shoulder
  [23,25], //Left hip to knee
  [24,26], //Right hip to knee
  [25,27], //Left knee to ankle
  [26,28] //Right knee to ankle
]

/**
 * 
 * @param {Number[]} a [x-coordinate, y-coordinate]
 * @param {Number[]} b [x-coordinate, y-coordinate]
 * @param {Number[]} c [x-coordinate, y-coordinate]
 * @returns Number from 0 to 180
 */
function findAngleFrom3Points(a, b, c) {
  const radians = Math.atan2(c[1]-b[1], c[0]-b[0]) - Math.atan2(a[1]-b[1],a[0]-b[0]);
  const degrees = Math.abs(radians * (180/Math.PI));
  if (degrees > 180) {
    return 360 - degrees;
  }
  return degrees;
}

/**
 * 
 * @param {Number[]} a [x-coordinate, y-coordinate]
 * @param {Number[]} b [x-coordinate, y-coordinate]
 * @param {boolean} isRight boolean representing whether points are on right side of body
 * @returns Number from 0 to 180
 */
function findAngleWithHorizantleFrom2Points(a, b, isRight) {
  let c = 0;
  if (isRight) {
    c = [b[0], b[1] + 1.0];
  } else {
    c = [b[0], b[1] - 1.0];
  }
  return findAngleFrom3Points(a, b, c);
}

function findScoreOutOf100FromAngleDiff(angleDiff) {
  const x = angleDiff;
  const score = 100 - 1.6355555*(x) + 0.006*(Math.pow(x,2));
  if (score < 0){
    return 0;
  }
  return score;

}

export const findScores = (userPoseData, goodPoseData) => {
  if (userPoseData !== undefined || userPoseData !== null) {
    return CHECKED_ANGlES.map(pointIndexes => {
      const userPoint1 = get2DPointFromData(userPoseData, pointIndexes[0]);
      const userPoint2 = get2DPointFromData(userPoseData, pointIndexes[1]);

      const goodPoint1 = get2DPointFromData(goodPoseData, pointIndexes[0]);
      const goodPoint2 = get2DPointFromData(goodPoseData, pointIndexes[1]);

      const userAngle = findAngleWithHorizantleFrom2Points(userPoint1, userPoint2, IS_RIGHTS_OF_DATA[pointIndexes[0]]);
      const goodAngle = findAngleWithHorizantleFrom2Points(goodPoint1, goodPoint2, IS_RIGHTS_OF_DATA[pointIndexes[0]]);
      return findScoreOutOf100FromAngleDiff(Math.abs(userAngle-goodAngle));
    })
  } else {
    console.log("userPoseData should have been not undefined or null")
    return [];
  }
}

export const findAverageScore = (userPoseData, goodPoseData) => {
  const scores = findScores(userPoseData, goodPoseData);
  return scores.reduce((x,y) => x + y, 0) / scores.length;
}

function get2DPointFromData(data, index) {
  return [data[index].x, data[index].y]
}