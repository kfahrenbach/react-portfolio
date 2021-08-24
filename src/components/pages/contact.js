import React from 'react';
import contactPagePicture from '../../../static/assets/images/login.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function() {
  return (
    <div className="content-page-wrapper">
      <div 
        className="left-column"
        style={{
          background: "url(" + contactPagePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
          <div className="contact-bullet-points">
            <div className="bullet-point-group">
              <div className="icon">
                {/* <FontAwesomeIcon icon="phone" /> */} Phone:
              </div>              
              <div className="text">
                570-317-1687
              </div>
            </div>

            <div className="bullet-point-group">
              <div className="icon">
                {/* <FontAwesomeIcon icon="envelope" /> */} Email:
              </div>              
              <div className="text">
                fahrenbachkh@gmail.com
              </div>
            </div>
            
            <div className="bullet-point-group">
              <div className="icon">
                {/* <FontAwesomeIcon icon="map-marked-alt" /> */} Location:
              </div>              
              <div className="text">
                Nescopeck, PA
              </div>
            </div>
            
          </div>
      </div>
    </div>
  )
}