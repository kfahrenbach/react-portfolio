import React from 'react';
import profilePicture from '../../../static/assets/images/Badlands2.jpg'

export default function() {
  return (
    <div className="content-page-wrapper">
      <div 
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
        Kaitlyn's Bio:
        Current student at Bottega University
        Current Amazon Technical Academy Intern at Amazon  
      </div>
    </div>
  )
}