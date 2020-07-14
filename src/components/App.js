import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideo from "../hooks/useVideos";
import useVideos from "../hooks/useVideos";


const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const [videos, search] = useVideos("buildings");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search}></SearchBar>
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              // onVideoSelect={(video) => setSelectedVideo(video)} //preference to make callback and prop similar
              onVideoSelect={setSelectedVideo}
              videos={videos}
            ></VideoList>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
