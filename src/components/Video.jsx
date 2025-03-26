import React from 'react'
import { FaCircleXmark } from "react-icons/fa6";


const Video = ({ setShowVideo }) => {
  
  return (
    <div style={{position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      padding: '20px',
      borderRadius: '10px',
      zIndex: 10}}>
      <button onClick={() => setShowVideo(false)} style={{
        position: 'absolute',
        top: '-50px',
        right: '-60px',
       background: 'none',
        color: 'red',
        border: 'none',
        cursor: 'pointer',
        fontSize: '50px'

      }} ><FaCircleXmark />
</button>
       <video width={500} controls>
          <source src="/video/move-video.mp4" type='video/mp4' />
      </video>
</div>
     
  )
}

export default Video
