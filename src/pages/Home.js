import { useQuery } from "@apollo/client";
import React from "react";

import allVideos from "../queries/allVideos";

function Home() {
  const { data, loading } = useQuery(allVideos);

  const items = data?.allVideos?.items;

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      {items.map((video) => (
        <div key={video.id}> {video.name} </div>
      ))}
    </div>
  );
}

export default Home;
