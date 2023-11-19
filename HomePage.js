import { useEffect, useState } from "react";
import HeaderComponent from "./HeaderComponent";
import "./HomePage.css";
import VideoComponent from "./VideoComponent";
import axios from "axios";
const HomePage = () => {
  const [videos, setVideos] = useState([]);

  const fetchData = async () => {
    const data = await axios.get("http://localhost:3000/video");
    setVideos(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="wrapper">
      <HeaderComponent />
      <div className="main">
        <div className="sidebar">
          <div className="sidebarItem">Home</div>
          <div className="sidebarItem">Channels</div>
          <div className="sidebarItem">Videos</div>
          <div className="sidebarItem">Liked Videos</div>
        </div>
        <div className="videos">
          {videos.map((video) => {
            return (
              <VideoComponent
                title={video.title}
                thumbnail={video.thumbnail}
                likes={video.likes}
                videoId={video.videoId}
                description={video.description}
              />
            );
          })}
          <VideoComponent />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
