import React from 'react'

const PoseSelector = ({ poseState }) => {
  return (
    <div>
      {poseState.map(p => 
      <h5>
        {/* {p.x} */}
      </h5>
        
      )}
    </div>
  )
}

export default PoseSelector
