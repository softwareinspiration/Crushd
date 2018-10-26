import React from "react";
// import { Link } from "react-router-dom";

import HomeNavContainer from "./home_nav/home_nav_container";
import ResponsesIndexContainer from "./../responses/responses_index_container";
import MessagesIndexContainer from "./../messages/messages_index_container";
import VideosIndexContainer from "./../videos/videos_index_container";
import UploadVideoContainer from "./../upload_video/upload_video_container";

import "./home.css";
import Loader from "react-loader-spinner";

import { createNewVideo } from "../../util/video_api_util";

const videoType = "video/webm";

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recording: false,
      videos: [],
      navOption: true,
      mainScreen: "videosIndex",
      recorded: false,
      videos: [],
      seconds: "30",
      loading: true
    };

    this.homeNavClicked = this.homeNavClicked.bind(this);
  }

  async componentDidMount() {
    this.setState({ loading: false });
  }

  homeNavClicked() {
    this.setState({
      navOption: !this.state.navOption
    });
  }

  render() {
    const { recording, videos, recorded, loading } = this.state;

    if (this.state.loading) {
      return (
        <div className="loader-container">
          <Loader className="spinner" type="Hearts" height="250" width="250" />;
        </div>
      );
    }

    return (
      <div className="home-content-section">
        {/* Home Navigation Component Lives here */}
        <div className="home-nav-container">
          <div className="home-nav">
            <button className="messages-button" onClick={this.homeNavClicked}>
              Responses
            </button>
            <button className="matches-button" onClick={this.homeNavClicked}>
              Matches
            </button>
          </div>

          {this.state.navOption ? (
            <ResponsesIndexContainer />
          ) : (
            <MessagesIndexContainer />
          )}
        </div>
        {this.state.mainScreen === "videosIndex" ? (
          <VideosIndexContainer />
        ) : (
          <UploadVideoContainer />
        )}
      </div>
    );
  }
}

export default Home;
