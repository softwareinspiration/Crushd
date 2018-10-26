import React from "react";
import "./animate.css";

const VideosIndexItem = ({ firebaseURL }) => {
  return (
    <div className="videos-index-view">
      <h1>This is the videos index section</h1>
      <video
        id="movie"
        src={firebaseURL}
        height=""
        width="400px"
        autoPlay
        controls
        muted
        loop
        play="true"
      >
        {" "}
      </video>
      <div className="video-view-btns">
        <div className="btn-outer-one">
          <div className="btn-inner-one">
            <i className="fas fa-times" />
          </div>
        </div>
        <div className="btn-outer-two">
          <div className="btn-inner-two">
            <img src={Heart} alt="like" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideosIndexItem;