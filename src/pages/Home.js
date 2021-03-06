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
      <div>
        <div className="img">
          <img
            className="background"
            src="./assets/background.png"
            alt=""
          ></img>
        </div>
        <h3>ALL VIDEO</h3>
      </div>
      <div className="container">
        {items.map((video) => (
          <ul>
            <li>
              <div className="card" key={video.id}>
                {video.name}{" "}
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Home;
