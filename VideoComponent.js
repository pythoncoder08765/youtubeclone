import { Link } from "react-router-dom";
const VideoComponent = (props) => {
  const title = props.title;
  const thumbnail = props.thumbnail;
  const likes = props.likes;
  const videoId = props.videoId;
  const description = props.description;

  return (
    <div className="video">
      <div className="thumbnail">
        <Link to={"/video/" + videoId}>
          <img alt="thumbnail" src={thumbnail} className="thumbnailImage" />
        </Link>
      </div>
      <div className="titlewrapper">
        <div className="channelphoto">
          <img
            alt="channelImage"
            src={
              "https://yt3.ggpht.com/dxED1O-r5cRS73JBlUk4VS3pZHDfiHcuRjRbFMcf6KgYhxP4NUlD7x0h4TR1XTXkl-JGjTPTYQ=s68-c-k-c0x00ffffff-no-rj"
            }
            className="channelImage"
          />
        </div>
        <div className="title">
          {title}
          <div className="channel">MrWhosTheBoss</div>
          <div className="views">1.7M Views . 18 Hours Ago</div>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
