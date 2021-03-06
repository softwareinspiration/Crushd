import React from "react";
import ResponsesIndexContainer from "./../responses/responses_index_container";
import MessagesIndexContainer from "./../messages/messages_index_container";
import VideosIndexContainer from "./../videos/videos_index_container";
import UploadVideoContainer from "./../upload_video/upload_video_container";
import HomeNavContainer from "./home_nav/home_nav_container";
import "./home.css";

import Loader from "react-loader-spinner";

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
      seconds: "30",
      loading: true
    };
  }

  async componentDidMount() {
    this.setState({ loading: false });
    await this.sleep(1000);
    this.setState({ loading: false });
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  componentWillReceiveProps(nextProps) {
    const {ui} = this.props
    if (nextProps.ui !== ui) {
      this.setState({ navOption: nextProps.ui });
    }
  }

  render() {
    const {
      navOption,
      mainScreen,
      loading
    } = this.state;
  
    if (loading) {
      return (
        <div className="loader-container">
          <Loader className="spinner" type="Hearts" height="200" width="200" />
        </div>
      );
    }

    return (
    <div className="home-content-section">
      <div className="home-content-section">
       {<HomeNavContainer />}
        <div>
          {navOption ? <ResponsesIndexContainer /> : <MessagesIndexContainer />}
        </div>
        
          {mainScreen === "videosIndex" ? <VideosIndexContainer /> : <UploadVideoContainer />}
        
      </div>
        <p className="asdf">THDKFHASKLFJDLSFJLSADFJDLSAFJL</p>
        <button className="help" onClick={() => this.props.openModal({modal: "faq"})}>
          <p>HELP</p>
          <i className="fas fa-question" />
        </button>
    </div>

    )
  }
}

export default Home;
