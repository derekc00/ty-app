import { useEffect, useState } from "react";
import youtube from "../apis/youtube";

const KEY = "AIzaSyDFFpC6Tv__b3xM5l3XSslWn7lpyxIqR6g";


const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        key: KEY,
        type: `${KEY}`,
      },
    });
    setVideos(response.data.items);
  };

  //   return {video, onTermSubmit};
  return [videos, search];
};

export default useVideos;
