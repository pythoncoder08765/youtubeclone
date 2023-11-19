import { useEffect, useState } from "react";
import HeaderComponent from "./HeaderComponent";
import "./VideoPage.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function SuggestedVideo(props) {
  const title = props.title;
  const thumbnail = props.thumbnail;
  const likes = props.likes;
  const videoId = props.videoId;
  const description = props.description;

  return (
    <>
      <div className="suggested-video">
        <div className="suggestion-image">
          <img src={thumbnail} width={"230px"} />
        </div>
        <div className="suggestion-content">
          <div class="video-info">
            <p class="video-sug-title">{title}</p>
            <p class="margin-0 smaller-fontsize">T-Series</p>
            <p class="margin-0 smaller-fontsize">230M views . 4 years ago</p>
          </div>
        </div>
      </div>
    </>
  );
}

const VideoPage = () => {
  const [videos, setVideos] = useState([]);
  const params = useParams();
  const id = params.id;
  const fetchData = async () => {
    const data = await axios.get("http://localhost:3000/video");
    console.log(data.data);
    setVideos(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="wrapper-video">
      <HeaderComponent />
      <div className="main-video">
        <div className="videoWrapper">
          <iframe
            src={
              "https://www.youtube.com/embed/" + id + "?rel=0&mute=1&autoplay=1"
            }
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="iframe"
          ></iframe>
          <div className="title-video"> This is the title fo the page</div>
          <div className="channelWrapper">
            <div className="channel-video">
              <img
                src={
                  "https://yt3.ggpht.com/dxED1O-r5cRS73JBlUk4VS3pZHDfiHcuRjRbFMcf6KgYhxP4NUlD7x0h4TR1XTXkl-JGjTPTYQ=s68-c-k-c0x00ffffff-no-rj"
                }
                className="channelImage"
              />
              <div className="channelInfo">
                <div>MrWhosTheBoss</div>
                <div>2.3M Subscribers</div>
              </div>
              <button className="channelButton">Subscribe</button>
            </div>
            <div className="likesWrappper">
              <button className="channelButtonLite">Like</button>
              <button className="channelButtonLite">Dislike</button>
              <button className="channelButtonLite">Share</button>
            </div>
          </div>
          <div className="description">This is description</div>
        </div>
        <div className="suggestions">
          {videos.map((video) => {
            <SuggestedVideo
              title={video.title}
              thumbnail={video.thumbnail}
              likes={video.likes}
              videoId={video.videoId}
              description={video.description}
            />;
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
